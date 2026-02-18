import React from "react";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

function Maintenance() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff8f8] via-[#f8fafc] to-[#eef2ff] text-[#1f2937]">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#a3262e]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-[#0f172a]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#a3262e]/10 blur-3xl" />

      <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6 py-16">
        <motion.section
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full rounded-3xl border border-white/60 bg-white/80 p-8 text-center shadow-2xl backdrop-blur-md MobileS:p-6"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="mx-auto mb-4 inline-flex items-center rounded-full border border-[#a3262e]/20 bg-[#a3262e]/10 px-4 py-1 text-sm font-semibold text-[#a3262e]"
          >
            Scheduled Maintenance
          </motion.span>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#a3262e] text-white shadow-lg shadow-[#a3262e]/35"
          >
            <FaTools size={30} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="text-3xl font-extrabold tracking-tight text-[#111827] MobileS:text-2xl"
          >
            We&rsquo;re tuning things up
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 MobileS:text-base"
          >
            The portfolio is temporarily unavailable while improvements are in
            progress. Please check back soon.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="/"
              className="rounded-xl bg-[#a3262e] px-6 py-3 font-semibold text-white shadow-md shadow-[#a3262e]/30 transition hover:-translate-y-1"
            >
              Back To Home
            </a>
            <a
              href="mailto:johnleo.bruno@gmail.com"
              className="rounded-xl border border-[#a3262e] px-6 py-3 font-semibold text-[#a3262e] transition hover:bg-[#a3262e]/10"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.45 }}
            className="mt-7 text-sm text-gray-500"
          >
            Thanks for your patience.
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}

export default Maintenance;
