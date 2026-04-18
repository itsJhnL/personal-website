import React, { useRef } from "react";
import { motion } from "framer-motion";
import "../App.css";
import {
  createFadeInUp,
  createScaleIn,
  pageTransition,
  staggerContainer,
  useParallaxValue,
} from "../utils/motion";
import { useSiteData } from "../utils/siteContentStore";
import { useTheme } from "../utils/theme";

const buildSkillGroups = (skills = []) => {
  const groups = {
    frontend: {
      title: "Frontend",
      description: "UI & client-side development",
      eyebrow: "Client Side",
      accent: "from-[#0f766e] via-[#14b8a6] to-[#67e8f9]",
      surface: "from-[#effcf9] via-[#ffffff] to-[#eef7ff]",
      chip: "border-[#b8ebe2] bg-white/80 text-[#155e59]",
      items: [],
    },
    backend: {
      title: "Backend",
      description: "APIs & server-side logic",
      eyebrow: "Server Side",
      accent: "from-[#1d4ed8] via-[#3b82f6] to-[#93c5fd]",
      surface: "from-[#eff6ff] via-[#ffffff] to-[#f8fbff]",
      chip: "border-[#cfe0ff] bg-white/80 text-[#1e3a8a]",
      items: [],
    },
    database: {
      title: "Databases",
      description: "Storage, queries, and data services",
      eyebrow: "Data Layer",
      accent: "from-[#b45309] via-[#f59e0b] to-[#fde68a]",
      surface: "from-[#fffbeb] via-[#ffffff] to-[#fff8e1]",
      chip: "border-[#f4ddb2] bg-white/80 text-[#92400e]",
      items: [],
    },
    tools: {
      title: "Other Tools",
      description: "Workflow and development tools",
      eyebrow: "Workflow",
      accent: "from-[#9333ea] via-[#c084fc] to-[#f0abfc]",
      surface: "from-[#faf5ff] via-[#ffffff] to-[#fff7fb]",
      chip: "border-[#ecd4ff] bg-white/80 text-[#6b21a8]",
      items: [],
    },
  };

  skills.forEach((item) => {
    const category = item.category || "tools";
    const group = groups[category] || groups.tools;
    group.items.push(item);
  });

  return Object.values(groups);
};

export default function Services() {
  const userData = useSiteData();
  const skillGroups = buildSkillGroups(userData.about.techstacks);
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const parallaxY = useParallaxValue(sectionRef, 92);

  return (
    <motion.div
      ref={sectionRef}
      className={`relative overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#07111f]" : "bg-[#f4f7fb]"
      }`}
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <motion.div
        style={{ y: parallaxY }}
        className="relative mx-auto max-w-6xl px-5 pb-24 pt-16"
      >
        <motion.div
          variants={createFadeInUp(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2
            className={`text-4xl font-bold Tablet:text-5xl ${
              isDark ? "text-white" : "text-[#111827]"
            }`}
          >
            Tech Stack
          </h2>
          <p
            className={`mx-auto mt-3 max-w-2xl text-sm leading-7 transition-colors duration-500 ${
              isDark ? "text-[#c7d2e0]" : "text-[#667085]"
            }`}
          >
            A cleaner breakdown of the technologies I use across frontend,
            backend, databases, and workflow.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-6 Tablet:grid-cols-2"
        >
          {skillGroups.map((group, index) => (
            <motion.div key={group.title} variants={createScaleIn(0.14 + index * 0.08)}>
              <SkillGroup group={group} isDark={isDark} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const SkillGroup = ({ group, isDark }) => {
  const { title, description, items, eyebrow, accent, surface, chip } =
    group;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`relative h-full overflow-hidden rounded-[2rem] border p-6 ${
        isDark
          ? "border-white/10 bg-[#0f1728] shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
          : `border-white/60 bg-gradient-to-br ${surface} shadow-[0_24px_80px_rgba(15,23,42,0.08)]`
      }`}
    >
      <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${accent}`}></div>

      <div
        className={`relative mt-5 border-b pb-5 ${
          isDark ? "border-white/10" : "border-[#edf0f3]"
        }`}
      >
        <span
          className={`text-xs font-semibold uppercase tracking-[0.28em] ${
            isDark ? "text-[#93c5fd]" : "text-[#6b7280]"
          }`}
        >
          {eyebrow}
        </span>
        <h3
          className={`mt-3 text-2xl font-bold ${
            isDark ? "text-white" : "text-[#111827]"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 text-sm leading-7 ${
            isDark ? "text-[#c7d2e0]" : "text-[#667085]"
          }`}
        >
          {description}
        </p>
      </div>

      <div className="relative mt-6 flex flex-wrap gap-3">
        {items.map((item, index) => (
          <motion.span
            key={item.id ?? item.desc}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className={`rounded-full border px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur ${
              isDark
                ? "border-white/10 bg-white/8 text-white"
                : chip
            }`}
          >
            {item.desc}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
