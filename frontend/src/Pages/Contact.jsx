import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, pageTransition, staggerContainer } from "../utils/motion";
import { saveAdminMessage } from "../utils/adminStore";

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
      className="relative overflow-hidden bg-gradient-to-b from-[#f7f8fb] via-[#f7f8fb] to-[#ffffff]"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <div className="pointer-events-none absolute -top-28 -left-24 h-80 w-80 rounded-full bg-[#2f6b6b]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-56 h-72 w-72 rounded-full bg-[#1f2937]/6 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-24">
        <div className="py-10 text-center">
          <h2 className="text-4xl font-bold text-[#1f2937] Tablet:text-5xl">
            Contact Me
          </h2>
          <p className="mx-auto mt-2 text-sm text-[#7b8794]">Let&apos;s connect</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto max-w-3xl"
        >
          <motion.div
            variants={fadeInUp}
            className="rounded-3xl border border-[#dbe2ea] bg-white p-7 shadow-[0_8px_24px_rgba(12,12,12,0.06)]"
          >
            <p className="text-sm font-semibold tracking-[0.2em] text-[#2f6b6b]">
              QUICK MESSAGE
            </p>
            <h3 className="mt-3 text-3xl font-bold text-[#1f1f1f]">
              Send a Message
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#555]">
              Share your project idea and I will get back to you quickly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-[#d9e0e8] bg-[#fbfcfe] px-4 py-3 text-[#333] outline-none transition focus:border-[#2f6b6b]"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full rounded-xl border border-[#d9e0e8] bg-[#fbfcfe] px-4 py-3 text-[#333] outline-none transition focus:border-[#2f6b6b]"
              />
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full rounded-xl border border-[#d9e0e8] bg-[#fbfcfe] px-4 py-3 text-[#333] outline-none transition focus:border-[#2f6b6b]"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                required
                className="w-full resize-none rounded-xl border border-[#d9e0e8] bg-[#fbfcfe] px-4 py-3 text-[#333] outline-none transition focus:border-[#2f6b6b]"
              />
              <button
                type="submit"
                disabled={isSending}
                className="inline-block rounded-full border border-[#2f6b6b] bg-[#2f6b6b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#255757] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "Sending..." : "Send a Message"}
              </button>
              {status.text && (
                <p
                  className={`text-sm font-medium ${
                    status.type === "success" ? "text-[#2f6b6b]" : "text-[#2f6b6b]"
                  }`}
                >
                  {status.text}
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
