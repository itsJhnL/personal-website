import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../components/Footer";
import {
  getAdminMessages,
  removeAdminMessage,
  updateAdminMessageStatus,
} from "../utils/adminStore";
import {
  getDefaultSiteContent,
  getSiteContent,
  resetSiteContent,
  saveSiteContent,
} from "../utils/siteContentStore";
import { fadeInUp, pageTransition } from "../utils/motion";

const ADMIN_SESSION_KEY = "portfolio_admin_session_v1";
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin";

const formatDate = (dateText) => {
  try {
    return new Date(dateText).toLocaleString();
  } catch (error) {
    return dateText;
  }
};

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem(ADMIN_SESSION_KEY) === "true"
  );
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [authError, setAuthError] = useState("");
  const [messages, setMessages] = useState(getAdminMessages());
  const [deleteTargetId, setDeleteTargetId] = useState(null);
  const [siteDraft, setSiteDraft] = useState(getSiteContent());
  const [jsonDraft, setJsonDraft] = useState(() =>
    JSON.stringify(getSiteContent(), null, 2)
  );
  const [jsonError, setJsonError] = useState("");
  const [saveMessage, setSaveMessage] = useState("");

  const stats = useMemo(() => {
    const total = messages.length;
    const fresh = messages.filter((item) => item.status === "new").length;
    const resolved = messages.filter((item) => item.status === "resolved").length;
    const failed = messages.filter((item) => item.status === "failed").length;
    return { total, fresh, resolved, failed };
  }, [messages]);

  const syncDraft = (nextDraft) => {
    setSiteDraft(nextDraft);
    setJsonDraft(JSON.stringify(nextDraft, null, 2));
    setSaveMessage("");
    setJsonError("");
  };

  const updateDraft = (section, key, value) => {
    syncDraft({
      ...siteDraft,
      [section]: {
        ...siteDraft[section],
        [key]: value,
      },
    });
  };

  const updateIntro = (key, value) => {
    const intro = siteDraft.about.introduce[0] || {};
    syncDraft({
      ...siteDraft,
      about: {
        ...siteDraft.about,
        introduce: [{ ...intro, id: intro.id || 0, [key]: value }],
      },
    });
  };

  const handleResumeFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== "string") {
        setJsonError("Unable to read the selected document.");
        return;
      }

      updateDraft("hero", "resume", reader.result);
      setSaveMessage(`Loaded resume file: ${file.name}`);
    };
    reader.onerror = () => {
      setJsonError("Unable to read the selected document.");
    };
    reader.readAsDataURL(file);
    event.target.value = "";
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (
      credentials.username !== ADMIN_USERNAME ||
      credentials.password !== ADMIN_PASSWORD
    ) {
      setAuthError("Invalid credentials.");
      return;
    }

    localStorage.setItem(ADMIN_SESSION_KEY, "true");
    setAuthenticated(true);
    setAuthError("");
  };

  const handleLogout = () => {
    localStorage.removeItem(ADMIN_SESSION_KEY);
    setAuthenticated(false);
  };

  const handleSaveContent = () => {
    saveSiteContent(siteDraft);
    setSaveMessage("Site content saved.");
  };

  const handleResetContent = () => {
    const defaults = getDefaultSiteContent();
    resetSiteContent();
    syncDraft(defaults);
    setSaveMessage("Site content reset to defaults.");
  };

  const handleApplyJson = () => {
    try {
      const parsed = JSON.parse(jsonDraft);
      syncDraft(parsed);
      setSaveMessage("JSON applied to the draft. Save to publish it.");
    } catch (error) {
      setJsonError("Invalid JSON. Please check the syntax.");
    }
  };

  const markResolved = (id) => {
    setMessages(updateAdminMessageStatus(id, "resolved"));
  };

  const markNew = (id) => {
    setMessages(updateAdminMessageStatus(id, "new"));
  };

  const confirmDeleteMessage = () => {
    if (!deleteTargetId) return;
    setMessages(removeAdminMessage(deleteTargetId));
    setDeleteTargetId(null);
  };

  const intro = siteDraft.about.introduce[0] || {};

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#f7f4f2] via-[#f4f2ef] to-[#ffffff]"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-24">
        {!authenticated ? (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-md rounded-3xl border border-[#dcd7d2] bg-white p-8 shadow-[0_10px_28px_rgba(12,12,12,0.1)]"
          >
            <h1 className="text-3xl font-bold text-[#1f1f1f]">Admin Login</h1>
            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={credentials.username}
                onChange={(event) =>
                  setCredentials((prev) => ({ ...prev, username: event.target.value }))
                }
                className="w-full rounded-xl border border-[#ddd6d0] bg-[#f8f5f2] px-4 py-3 outline-none focus:border-[#a3262e]"
              />
              <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(event) =>
                  setCredentials((prev) => ({ ...prev, password: event.target.value }))
                }
                className="w-full rounded-xl border border-[#ddd6d0] bg-[#f8f5f2] px-4 py-3 outline-none focus:border-[#a3262e]"
              />
              {authError && <p className="text-sm text-[#a3262e]">{authError}</p>}
              <button
                type="submit"
                className="w-full rounded-full border border-[#a3262e] bg-[#a3262e] py-3 font-semibold text-white transition hover:bg-[#861f26]"
              >
                Login
              </button>
            </form>
          </motion.div>
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold text-[#1f1f1f]">Admin Panel</h1>
                <p className="mt-1 text-[#666]">
                  The site content is now editable here, including full JSON access.
                </p>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-[#1f1f1f] px-5 py-2 font-semibold text-[#1f1f1f] transition hover:bg-[#1f1f1f] hover:text-white"
              >
                Logout
              </button>
            </div>

            <div className="rounded-3xl border border-[#dcd7d2] bg-white p-6 shadow-[0_10px_28px_rgba(12,12,12,0.08)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-bold text-[#1f1f1f]">Quick Content Editor</h2>
                  <p className="mt-1 text-sm text-[#666]">
                    Update the main homepage content here, or use the JSON editor below for everything.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleSaveContent}
                    className="rounded-full border border-[#2f6b6b] bg-[#2f6b6b] px-5 py-2 font-semibold text-white hover:bg-[#255757]"
                  >
                    Save Content
                  </button>
                  <button
                    type="button"
                    onClick={handleResetContent}
                    className="rounded-full border border-[#b94a48] px-5 py-2 font-semibold text-[#b94a48] hover:bg-[#fff4f3]"
                  >
                    Reset Default
                  </button>
                </div>
              </div>
              {saveMessage && <p className="mt-3 text-sm font-medium text-[#2f6b6b]">{saveMessage}</p>}

              <div className="mt-6 grid gap-4 Laptop:grid-cols-2">
                <Field
                  label="Hero Name"
                  value={siteDraft.hero.name}
                  onChange={(value) => updateDraft("hero", "name", value)}
                />
                <Field
                  label="Career Title"
                  value={siteDraft.hero.career}
                  onChange={(value) => updateDraft("hero", "career", value)}
                />
                <Field
                  label="Availability Label"
                  value={siteDraft.hero.availability}
                  onChange={(value) => updateDraft("hero", "availability", value)}
                />
                <Field
                  label="CTA Label"
                  value={siteDraft.hero.ctaLabel}
                  onChange={(value) => updateDraft("hero", "ctaLabel", value)}
                />
                <Field
                  label="Resume URL"
                  value={siteDraft.hero.resume}
                  onChange={(value) => updateDraft("hero", "resume", value)}
                />
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#4a4540]">
                    Upload Resume File
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleResumeFileChange}
                    className="w-full rounded-xl border border-[#ddd6d0] bg-[#f8f5f2] px-4 py-3 text-[#333] outline-none file:mr-4 file:rounded-full file:border-0 file:bg-[#2f6b6b] file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-[#255757]"
                  />
                  <p className="mt-2 text-xs text-[#777]">
                    Upload a PDF or Word document to use it directly as the resume link.
                  </p>
                </label>
                <Field
                  label="Contact Email"
                  value={siteDraft.contact.email}
                  onChange={(value) => updateDraft("contact", "email", value)}
                />
                <Field
                  label="LinkedIn URL"
                  value={siteDraft.navBarLinks.linkedin}
                  onChange={(value) => updateDraft("navBarLinks", "linkedin", value)}
                />
                <Field
                  label="GitHub URL"
                  value={siteDraft.navBarLinks.github}
                  onChange={(value) => updateDraft("navBarLinks", "github", value)}
                />
              </div>

              <div className="mt-4 grid gap-4 Laptop:grid-cols-2">
                <TextAreaField
                  label="About Paragraph 1"
                  value={intro.desc1 || ""}
                  rows={6}
                  onChange={(value) => updateIntro("desc1", value)}
                />
                <TextAreaField
                  label="About Paragraph 2"
                  value={intro.desc2 || ""}
                  rows={6}
                  onChange={(value) => updateIntro("desc2", value)}
                />
              </div>
            </div>

            <div className="rounded-3xl border border-[#dcd7d2] bg-white p-6 shadow-[0_10px_28px_rgba(12,12,12,0.08)]">
              <h2 className="text-2xl font-bold text-[#1f1f1f]">Full Site Content JSON</h2>
              <p className="mt-1 text-sm text-[#666]">
                Every editable field lives in this object, including projects, experience, skills, and links.
              </p>
              <textarea
                value={jsonDraft}
                onChange={(event) => {
                  setJsonDraft(event.target.value);
                  setJsonError("");
                  setSaveMessage("");
                }}
                rows="20"
                className="mt-4 w-full rounded-2xl border border-[#ddd6d0] bg-[#f8f5f2] px-4 py-3 font-mono text-sm text-[#333] outline-none focus:border-[#2f6b6b]"
              />
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleApplyJson}
                  className="rounded-full border border-[#1f1f1f] px-5 py-2 text-sm font-semibold text-[#1f1f1f] hover:bg-[#1f1f1f] hover:text-white"
                >
                  Apply JSON to Draft
                </button>
                <button
                  type="button"
                  onClick={handleSaveContent}
                  className="rounded-full border border-[#2f6b6b] bg-[#2f6b6b] px-5 py-2 text-sm font-semibold text-white hover:bg-[#255757]"
                >
                  Save Current Draft
                </button>
                {jsonError && <p className="text-sm font-medium text-[#b94a48]">{jsonError}</p>}
              </div>
            </div>

            <div className="grid gap-4 MobileS:grid-cols-2 Laptop:grid-cols-4">
              <StatCard label="Total" value={stats.total} />
              <StatCard label="New" value={stats.fresh} />
              <StatCard label="Resolved" value={stats.resolved} />
              <StatCard label="Failed" value={stats.failed} />
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#dcd7d2] bg-white shadow-[0_10px_28px_rgba(12,12,12,0.1)]">
              <div className="border-b border-[#ece7e3] px-6 py-4 font-semibold text-[#333]">
                Messages ({messages.length})
              </div>
              {messages.length === 0 ? (
                <p className="px-6 py-10 text-[#666]">No messages yet.</p>
              ) : (
                <div className="divide-y divide-[#ece7e3]">
                  {messages.map((message) => (
                    <div key={message.id} className="px-6 py-5">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h2 className="text-lg font-bold text-[#1f1f1f]">
                            {message.subject || "No subject"}
                          </h2>
                          <p className="text-sm text-[#666]">
                            {message.name} - {message.email}
                          </p>
                          <p className="mt-1 text-xs text-[#888]">
                            {formatDate(message.createdAt)}
                          </p>
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            message.status === "resolved"
                              ? "bg-green-100 text-green-700"
                              : message.status === "failed"
                              ? "bg-red-100 text-red-700"
                              : "bg-[#f7f1ec] text-[#8a6e55]"
                          }`}
                        >
                          {message.status}
                        </span>
                      </div>
                      <p className="mt-4 whitespace-pre-wrap text-[#444]">{message.message}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => markResolved(message.id)}
                          className="rounded-full border border-green-600 px-4 py-1 text-sm font-semibold text-green-700 hover:bg-green-50"
                        >
                          Mark Resolved
                        </button>
                        <button
                          type="button"
                          onClick={() => markNew(message.id)}
                          className="rounded-full border border-[#8a6e55] px-4 py-1 text-sm font-semibold text-[#8a6e55] hover:bg-[#faf5f1]"
                        >
                          Mark New
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteTargetId(message.id)}
                          className="rounded-full border border-red-600 px-4 py-1 text-sm font-semibold text-red-700 hover:bg-red-50"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <DeleteConfirmModal
        isOpen={Boolean(deleteTargetId)}
        onCancel={() => setDeleteTargetId(null)}
        onConfirm={confirmDeleteMessage}
      />
      <Footer />
    </motion.div>
  );
}

const Field = ({ label, value, onChange }) => (
  <label className="block">
    <span className="mb-2 block text-sm font-semibold text-[#4a4540]">{label}</span>
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-xl border border-[#ddd6d0] bg-[#f8f5f2] px-4 py-3 text-[#333] outline-none focus:border-[#2f6b6b]"
    />
  </label>
);

const TextAreaField = ({ label, value, onChange, rows = 5 }) => (
  <label className="block">
    <span className="mb-2 block text-sm font-semibold text-[#4a4540]">{label}</span>
    <textarea
      value={value}
      onChange={(event) => onChange(event.target.value)}
      rows={rows}
      className="w-full rounded-xl border border-[#ddd6d0] bg-[#f8f5f2] px-4 py-3 text-[#333] outline-none focus:border-[#2f6b6b]"
    />
  </label>
);

const DeleteConfirmModal = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[400] flex items-center justify-center bg-black/40 px-5"
        >
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-md rounded-3xl border border-[#dcd7d2] bg-white p-6 shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
          >
            <h3 className="text-2xl font-bold text-[#1f1f1f]">Delete message?</h3>
            <p className="mt-2 text-sm text-[#666]">
              This action is permanent and cannot be undone.
            </p>
            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onCancel}
                className="rounded-full border border-[#bfb7b0] px-4 py-2 text-sm font-semibold text-[#4a4540] hover:bg-[#f7f4f2]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onConfirm}
                className="rounded-full border border-red-700 bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const StatCard = ({ label, value }) => {
  return (
    <div className="rounded-2xl border border-[#dcd7d2] bg-white px-4 py-5 shadow-[0_8px_22px_rgba(12,12,12,0.08)]">
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#8a6e55]">{label}</p>
      <p className="mt-2 text-3xl font-bold text-[#1f1f1f]">{value}</p>
    </div>
  );
};
