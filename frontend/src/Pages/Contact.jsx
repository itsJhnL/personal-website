import React, { useState } from "react";
import { motion } from "framer-motion";
import userData from "../constants/data";
import Footer from "../components/Footer";
import { fadeInUp, pageTransition, staggerContainer } from "../utils/motion";
import { saveAdminMessage } from "../utils/adminStore";

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
      className="relative overflow-hidden bg-gradient-to-b from-[#f7f4f2] via-[#f4f2ef] to-[#ffffff]"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <div className="pointer-events-none absolute -top-28 -left-24 h-80 w-80 rounded-full bg-[#a3262e]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-56 h-72 w-72 rounded-full bg-[#141414]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-24">
        <div className="py-10 text-center">
          <h1 className="text-base font-semibold tracking-[0.35em] text-[#a3262e]">
            LET'S CONNECT
          </h1>
          <header className="mt-4 text-4xl font-bold leading-tight text-[#262626] MobileM:text-5xl Tablet:text-6xl">
            <p>Contact Me</p>
          </header>
          <p className="mx-auto mt-5 w-24 border-t-4 border-[#a3262e]"></p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-7 Laptop:grid-cols-2"
        >
          <motion.div
            variants={fadeInUp}
            className="rounded-3xl border border-[#dcd7d2] bg-white/90 p-7 shadow-[0_8px_24px_rgba(12,12,12,0.08)] backdrop-blur"
          >
            <h2 className="text-3xl font-bold leading-tight text-[#1f1f1f]">
              {userData.contact.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#555]">
              {userData.contact.desc}
            </p>

            <div className="mt-7 space-y-4">
              <a
                href={userData.contact.address_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-[#ebe5df] bg-[#f8f5f2] px-4 py-3 transition hover:border-[#a3262e]/35"
              >
                <i className="text-[#a3262e]">{userData.contact.address_icon}</i>
                <span className="text-[#3e3e3e]">{userData.contact.address}</span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-[#ebe5df] bg-[#f8f5f2] px-4 py-3">
                <i className="text-[#a3262e]">{userData.contact.number_icon}</i>
                <span className="text-[#3e3e3e]">{userData.contact.number}</span>
              </div>

              <a
                href={userData.contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-[#ebe5df] bg-[#f8f5f2] px-4 py-3 transition hover:border-[#a3262e]/35"
              >
                <i className="text-[#a3262e]">{userData.contact.email_icon}</i>
                <span className="text-[#3e3e3e]">{userData.contact.email}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-3xl border border-[#dcd7d2] bg-white/90 p-7 shadow-[0_8px_24px_rgba(12,12,12,0.08)] backdrop-blur"
          >
            <p className="text-sm font-semibold tracking-[0.2em] text-[#a3262e]">
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
                className="w-full rounded-xl border border-[#ddd6d0] bg-[#f8f5f2] px-4 py-3 text-[#333] outline-none transition focus:border-[#a3262e]"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full rounded-xl border border-[#ddd6d0] bg-[#f8f5f2] px-4 py-3 text-[#333] outline-none transition focus:border-[#a3262e]"
              />
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full rounded-xl border border-[#ddd6d0] bg-[#f8f5f2] px-4 py-3 text-[#333] outline-none transition focus:border-[#a3262e]"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                required
                className="w-full resize-none rounded-xl border border-[#ddd6d0] bg-[#f8f5f2] px-4 py-3 text-[#333] outline-none transition focus:border-[#a3262e]"
              />
              <button
                type="submit"
                disabled={isSending}
                className="inline-block rounded-full border border-[#a3262e] bg-[#a3262e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#861f26] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "Sending..." : "Send a Message"}
              </button>
              {status.text && (
                <p
                  className={`text-sm font-medium ${
                    status.type === "success" ? "text-green-700" : "text-[#a3262e]"
                  }`}
                >
                  {status.text}
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
}
