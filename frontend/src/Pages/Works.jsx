import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  createFadeInUp,
  createScaleIn,
  pageTransition,
  staggerContainer,
  useParallaxValue,
} from "../utils/motion";
import { useSiteData } from "../utils/siteContentStore";
import { useTheme } from "../utils/theme";

function Projects() {
  const userData = useSiteData();
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const parallaxY = useParallaxValue(sectionRef, 88);

  return (
    <motion.div
      ref={sectionRef}
      className={`relative overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#07111f]" : "bg-[#f7f8fb]"
      }`}
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <motion.div
        style={{ y: parallaxY }}
        className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-5"
      >
        <motion.div
          variants={createFadeInUp(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="py-20 text-center"
        >
          <header className="mx-auto max-w-6xl">
            <p className={`text-4xl font-bold Tablet:text-5xl ${isDark ? "text-white" : "text-[#1f2937]"}`}>
              Works
            </p>
            <p className={`mx-auto mt-2 text-sm ${isDark ? "text-slate-300" : "text-[#7b8794]"}`}>
              Projects that I worked with
            </p>
          </header>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid max-w-5xl gap-6 pb-20 MobileS:grid-cols-1 Tablet:grid-cols-2"
        >
          {userData.works.map((item, index) => (
            <motion.div key={item.id} variants={createScaleIn(0.12 + index * 0.06)}>
              <ProjectCard
                isDark={isDark}
                title={item.title}
                imageURL={item.imageURL}
                desc={item.desc}
                tech={item.tech}
                link={item.link}
                code={item.code}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const ProjectCard = ({ imageURL, title, desc, tech, link, code, isDark }) => {
  const techItems = tech.split(",").map((item) => item.trim());

  return (
    <div
      className={`h-full rounded-2xl border p-4 shadow-sm transition-colors duration-500 ${
        isDark
          ? "border-white/10 bg-[#0f1728]"
          : "border-[#dbe2ea] bg-white"
      }`}
    >
      <div
        className={`overflow-hidden rounded-xl border p-3 ${
          isDark
            ? "border-white/10 bg-[#111c31]"
            : "border-[#e3e8ef] bg-[#fbfcfe]"
        }`}
      >
        <img
          src={imageURL}
          alt={title}
          className="aspect-[16/10] w-full object-contain"
        />
      </div>

      <div className="pt-4">
        <h1 className={`text-xl font-bold leading-tight ${isDark ? "text-white" : "text-[#1f2937]"}`}>
          {title}
        </h1>
        <p className={`pt-2 text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-[#5b6472]"}`}>
          {desc}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {techItems.map((item) => (
            <span
              key={item}
              className={`rounded-md border px-3 py-1 text-xs font-medium ${
                isDark
                  ? "border-white/10 bg-white/5 text-slate-200"
                  : "border-[#d9d2c8] bg-white text-[#4b5563]"
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={`rounded-md border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                isDark
                  ? "border-cyan-300 text-cyan-300 hover:bg-cyan-300/10"
                  : "border-[#2f6b6b] text-[#2f6b6b] hover:bg-[#2f6b6b]/10"
              }`}
            >
              Live
            </a>
          )}
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className={`rounded-md border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
              isDark
                ? "border-white/20 text-white hover:bg-white hover:text-[#07111f]"
                : "border-[#1f2937] text-[#1f2937] hover:bg-[#1f2937] hover:text-white"
            }`}
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
