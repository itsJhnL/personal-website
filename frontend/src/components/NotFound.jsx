import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff7f8] via-[#f8fafc] to-[#eef2ff] px-6 py-20">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#a3262e]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-[#111827]/15 blur-3xl" />

      <div className="mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center">
        <motion.section
          initial={{ opacity: 0, y: 22, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-3xl border border-white/70 bg-white/80 p-10 text-center shadow-2xl backdrop-blur-md MobileS:p-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.35 }}
            className="text-sm font-semibold tracking-[0.2em] text-[#a3262e]"
          >
            PAGE NOT FOUND
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.35 }}
            className="mt-3 text-7xl font-black text-[#111827] MobileS:text-6xl"
          >
            404
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.35 }}
            className="mx-auto mt-4 max-w-xl text-lg text-gray-600 MobileS:text-base"
          >
            The page you are looking for does not exist or may have been moved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.35 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <NavLink
              to="/"
              className="rounded-xl bg-[#a3262e] px-6 py-3 font-semibold text-white shadow-md shadow-[#a3262e]/30 transition hover:-translate-y-1"
            >
              Go Home
            </NavLink>
            <NavLink
              to="/Contact"
              className="rounded-xl border border-[#a3262e] px-6 py-3 font-semibold text-[#a3262e] transition hover:bg-[#a3262e]/10"
            >
              Contact Me
            </NavLink>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
