import React, { useRef } from "react";
import { motion } from "framer-motion";
import "../App.css";
import { createFadeInUp, pageTransition, useParallaxValue } from "../utils/motion";
import { useSiteData } from "../utils/siteContentStore";
import { useTheme } from "../utils/theme";

export default function About() {
  const userData = useSiteData();
  const intro = userData.about.introduce[0];
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const parallaxY = useParallaxValue(sectionRef, 80);

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
        className="relative mx-auto max-w-6xl px-5 py-20"
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
              isDark ? "text-white" : "text-[#1f2937]"
            }`}
          >
            About Me
          </h2>
          <p className={`mx-auto mt-2 text-sm ${isDark ? "text-slate-300" : "text-[#7b8794]"}`}>
            My introduction
          </p>
        </motion.div>

        <motion.div
          variants={createFadeInUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto mt-14 max-w-4xl"
        >
          <div className="text-left">
            <p
              className={`text-lg leading-8 tracking-[0.01em] ${
                isDark ? "text-slate-300" : "text-[#4b5563]"
              }`}
            >
              Experienced in building{" "}
              <span className={`font-semibold ${isDark ? "text-white" : "text-[#1f2937]"}`}>web apps</span> and{" "}
              <span className={`font-semibold ${isDark ? "text-white" : "text-[#1f2937]"}`}>
                responsive websites
              </span>{" "}
              {intro.desc1}
            </p>
            <p
              className={`mt-4 text-lg leading-8 tracking-[0.01em] ${
                isDark ? "text-slate-300" : "text-[#4b5563]"
              }`}
            >
              {intro.desc2}{" "}
              <a
                href={intro.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold underline underline-offset-4 ${
                  isDark ? "text-cyan-300" : "text-[#2f6b6b]"
                }`}
              >
                TikTok
              </a>{" "}
              and{" "}
              <a
                href={intro.medium}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold underline underline-offset-4 ${
                  isDark ? "text-cyan-300" : "text-[#2f6b6b]"
                }`}
              >
                Medium
              </a>
              .
            </p>

            {/* <div className="mt-8">
              <a
                href={userData.hero.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1f2937] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#111827]"
                download={"John Leo Bruno"}
              >
                Download CV {userData.hero.icon}
              </a>
            </div> */}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
