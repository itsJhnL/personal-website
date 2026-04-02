import React from "react";
import { motion } from "framer-motion";
import userData from "../constants/data";
import { fadeInUp, pageTransition, staggerContainer } from "../utils/motion";

export default function Experience() {
  const orderedExperience = [...userData.experience].reverse();

  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-b from-[#f6f1e8] via-[#f6f1e8] to-[#fffdf8]"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <div className="pointer-events-none absolute -top-28 -left-24 h-80 w-80 rounded-full bg-[#2f6b6b]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-56 h-72 w-72 rounded-full bg-[#1f2937]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="px-5 pt-24">
          <div className="py-10 text-center">
            <h1 className="text-base font-semibold tracking-[0.35em] text-[#2f6b6b]">
              CAREER JOURNEY
            </h1>
            <header className="mt-4 text-4xl font-bold leading-tight text-[#262626] MobileM:text-5xl Tablet:text-6xl">
              <p>Experience</p>
            </header>
            <p className="mx-auto mt-5 w-20 border-t-4 border-[#2f6b6b]"></p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mx-auto max-w-4xl"
          >
            {orderedExperience.map((exp, idx) => (
              <motion.div key={exp.id} variants={fadeInUp}>
                <MyExp
                  isLast={idx === orderedExperience.length - 1}
                  year={exp.year}
                  position={exp.position}
                  title={exp.title}
                  desc={exp.desc}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}

const MyExp = ({ year, position, title, desc, isLast }) => {
  return (
    <div className="relative pl-10">
      {!isLast && (
        <div className="absolute left-[11px] top-8 h-[calc(100%-8px)] w-px bg-[#c8c2bc]"></div>
      )}
      <motion.div
        className="absolute left-0 top-8 h-6 w-6 rounded-full border-4 border-[#f7f4f2] bg-[#2f6b6b] ring-4 ring-[#2f6b6b]/15"
        animate={{ scale: [1, 1.08, 1], opacity: [1, 0.85, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="mb-8 rounded-3xl border border-[#dcd7d2] bg-white/90 p-6 shadow-[0_8px_24px_rgba(12,12,12,0.08)] backdrop-blur"
        whileHover={{ y: -6, boxShadow: "0 14px 30px rgba(12,12,12,0.13)" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-block rounded-full border border-[#e4dbd5] bg-[#f7f4f2] px-4 py-1 text-sm font-semibold tracking-wide text-[#7a6c62]">
          {year}
        </div>
        <h1 className="mt-4 text-2xl font-bold leading-tight text-[#1f1f1f]">
          {position}
        </h1>
        {title && <p className="mt-1 text-lg text-[#666]">{title}</p>}
        <p className="pt-4 text-base leading-relaxed text-[#555]">{desc}</p>
      </motion.div>
    </div>
  );
};
