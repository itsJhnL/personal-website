import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  createFadeInUp,
  createScaleIn,
  pageTransition,
  staggerContainer,
  useParallaxValue,
} from "../utils/motion";
import { saveAdminMessage } from "../utils/adminStore";
import { useSiteData } from "../utils/siteContentStore";
import { useTheme } from "../utils/theme";

const COOLDOWN_MINUTES = 5;
const COOLDOWN_MS = COOLDOWN_MINUTES * 60 * 1000;
const COOLDOWN_KEY = "contact_email_cooldown_v1";

const getCooldownStore = () => {
  try {
    const raw = localStorage.getItem(COOLDOWN_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    return {};
  }
};

const setEmailCooldown = (email) => {
  const store = getCooldownStore();
  store[email.toLowerCase()] = Date.now();
  localStorage.setItem(COOLDOWN_KEY, JSON.stringify(store));
};

const getRemainingCooldownMinutes = (email) => {
  const store = getCooldownStore();
  const last = store[email.toLowerCase()];
  if (!last) return 0;
  const elapsed = Date.now() - Number(last);
  if (elapsed >= COOLDOWN_MS) return 0;
  return Math.ceil((COOLDOWN_MS - elapsed) / 60000);
};

export default function Contact() {
  const userData = useSiteData();
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const parallaxY = useParallaxValue(sectionRef, 84);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });
  const apiEndpoint = process.env.REACT_APP_CONTACT_ENDPOINT || "/api/contact";
  const backupEndpoint = process.env.REACT_APP_CONTACT_ENDPOINT_BACKUP || "";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", text: "" });

    const normalizedEmail = String(form.email || "").trim().toLowerCase();
    const remainingMinutes = getRemainingCooldownMinutes(normalizedEmail);
    if (remainingMinutes > 0) {
      setStatus({
        type: "error",
        text: `This email was used recently. Please try again in ${remainingMinutes} minute(s).`,
      });
      return;
    }

    setIsSending(true);

    try {
      const isLocalHost = ["localhost", "127.0.0.1"].includes(window.location.hostname);
      const hasCustomEndpoint = apiEndpoint.startsWith("http");
      const shouldUseApi =
        hasCustomEndpoint || !isLocalHost || process.env.REACT_APP_FORCE_LOCAL_API === "true";

      if (!shouldUseApi) {
        saveAdminMessage({
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio Inquiry from ${form.name || "Visitor"}`,
          message: form.message,
          status: "new",
        });
        setStatus({
          type: "success",
          text: "Saved to Admin inbox (local mode).",
        });
        setEmailCooldown(normalizedEmail);
        setForm({ name: "", email: "", subject: "", message: "" });
        return;
      }

      const payload = {
        name: form.name,
        email: form.email,
        subject: form.subject || `Portfolio Inquiry from ${form.name || "Visitor"}`,
        message: form.message,
      };

      const postToEndpoint = async (endpoint) =>
        fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

      let response = await postToEndpoint(apiEndpoint);
      if (!response.ok && backupEndpoint) {
        response = await postToEndpoint(backupEndpoint);
      }

      const contentType = response.headers.get("content-type") || "";
      let result = {};

      if (contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const text = await response.text();
        const apiMissing = text.includes("Cannot POST /api/contact");
        const error = new Error(
          apiMissing
            ? "Email API is currently unavailable."
            : "Server returned an unexpected response."
        );
        error.code = apiMissing ? "API_UNAVAILABLE" : "UNEXPECTED_RESPONSE";
        throw error;
      }

      if (!response.ok || !result.success) {
        const error = new Error(result.message || "Message failed");
        error.code = "SEND_FAILED";
        throw error;
      }

      saveAdminMessage({
        name: form.name,
        email: form.email,
        subject: form.subject || `Portfolio Inquiry from ${form.name || "Visitor"}`,
        message: form.message,
        status: "new",
      });

      setStatus({ type: "success", text: "Message sent successfully." });
      setEmailCooldown(normalizedEmail);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      const isApiUnavailable =
        error.code === "API_UNAVAILABLE" ||
        error.message === "Failed to fetch" ||
        error.name === "TypeError";

      if (isApiUnavailable) {
        saveAdminMessage({
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio Inquiry from ${form.name || "Visitor"}`,
          message: form.message,
          status: "new",
        });

        setStatus({
          type: "success",
          text: "Saved to Admin inbox. Email API is unavailable right now.",
        });
        setEmailCooldown(normalizedEmail);
        setForm({ name: "", email: "", subject: "", message: "" });
        return;
      }

      saveAdminMessage({
        name: form.name,
        email: form.email,
        subject: form.subject || `Portfolio Inquiry from ${form.name || "Visitor"}`,
        message: form.message,
        status: "failed",
      });

      setStatus({
        type: "error",
        text: error.message || "Unable to send right now. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      className={`relative overflow-hidden transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-b from-[#07111f] via-[#07111f] to-[#0b1527]"
          : "bg-gradient-to-b from-[#f7f8fb] via-[#f7f8fb] to-[#ffffff]"
      }`}
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <motion.div
        style={{ y: parallaxY }}
        className="relative mx-auto max-w-6xl px-5 pb-24 pt-24"
      >
        <motion.div
          variants={createFadeInUp(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="py-10 text-center"
        >
          <h2 className={`text-4xl font-bold Tablet:text-5xl ${isDark ? "text-white" : "text-[#1f2937]"}`}>
            Contact Me
          </h2>
          <p className={`mx-auto mt-2 text-sm ${isDark ? "text-slate-300" : "text-[#7b8794]"}`}>Let&apos;s connect</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto max-w-3xl"
        >
          <motion.div
            variants={createScaleIn(0.18)}
            className={`rounded-3xl border p-7 shadow-[0_8px_24px_rgba(12,12,12,0.06)] ${
              isDark
                ? "border-white/10 bg-[#0f1728]"
                : "border-[#dbe2ea] bg-white"
            }`}
          >
            <p className={`text-sm font-semibold tracking-[0.2em] ${isDark ? "text-cyan-300" : "text-[#2f6b6b]"}`}>
              {userData.contact.formEyebrow}
            </p>
            <h3 className={`mt-3 text-3xl font-bold ${isDark ? "text-white" : "text-[#1f1f1f]"}`}>
              {userData.contact.formTitle}
            </h3>
            <p className={`mt-4 text-base leading-relaxed ${isDark ? "text-slate-300" : "text-[#555]"}`}>
              {userData.contact.formDescription}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <motion.div variants={createFadeInUp(0.24, 18)}>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                    isDark
                      ? "border-white/10 bg-[#111c31] text-white placeholder:text-slate-400 focus:border-cyan-300"
                      : "border-[#d9e0e8] bg-[#fbfcfe] text-[#333] focus:border-[#2f6b6b]"
                  }`}
                />
              </motion.div>
              <motion.div variants={createFadeInUp(0.3, 18)}>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                    isDark
                      ? "border-white/10 bg-[#111c31] text-white placeholder:text-slate-400 focus:border-cyan-300"
                      : "border-[#d9e0e8] bg-[#fbfcfe] text-[#333] focus:border-[#2f6b6b]"
                  }`}
                />
              </motion.div>
              <motion.div variants={createFadeInUp(0.36, 18)}>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                    isDark
                      ? "border-white/10 bg-[#111c31] text-white placeholder:text-slate-400 focus:border-cyan-300"
                      : "border-[#d9e0e8] bg-[#fbfcfe] text-[#333] focus:border-[#2f6b6b]"
                  }`}
                />
              </motion.div>
              <motion.div variants={createFadeInUp(0.42, 18)}>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className={`w-full resize-none rounded-xl border px-4 py-3 outline-none transition ${
                    isDark
                      ? "border-white/10 bg-[#111c31] text-white placeholder:text-slate-400 focus:border-cyan-300"
                      : "border-[#d9e0e8] bg-[#fbfcfe] text-[#333] focus:border-[#2f6b6b]"
                  }`}
                />
              </motion.div>
              <motion.div variants={createFadeInUp(0.5, 18)}>
                <button
                  type="submit"
                  disabled={isSending}
                  className={`inline-block rounded-full border px-6 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-70 ${
                    isDark
                      ? "border-cyan-400 bg-cyan-500 hover:bg-cyan-400"
                      : "border-[#2f6b6b] bg-[#2f6b6b] hover:bg-[#255757]"
                  }`}
                >
                  {isSending ? "Sending..." : "Send a Message"}
                </button>
              </motion.div>
              {status.text && (
                <motion.p
                  variants={createFadeInUp(0.56, 14)}
                  className={`text-sm font-medium ${
                    status.type === "success"
                      ? isDark
                        ? "text-cyan-300"
                        : "text-[#2f6b6b]"
                      : "text-[#ef4444]"
                  }`}
                >
                  {status.text}
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
