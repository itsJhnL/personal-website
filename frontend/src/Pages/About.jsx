import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import { fadeInUp, pageTransition } from "../utils/motion";
import { useSiteData } from "../utils/siteContentStore";

export default function About() {
  const userData = useSiteData();
  const intro = userData.about.introduce[0];

  return (
    <motion.div
      className="relative overflow-hidden bg-[#f7f8fb]"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <div className="absolute -left-20 top-8 h-64 w-64 rounded-full bg-[#2f6b6b]/8 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#1f2937]/6 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl px-5 py-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-[#1f2937] Tablet:text-5xl">
            About Me
          </h2>
          <p className="mx-auto mt-2 text-sm text-[#7b8794]">My introduction</p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto mt-14 max-w-4xl"
        >
          <div className="text-left">
            <p className="text-lg leading-8 tracking-[0.01em] text-[#4b5563]">
              Experienced in building{" "}
              <span className="font-semibold text-[#1f2937]">web apps</span> and{" "}
              <span className="font-semibold text-[#1f2937]">
                responsive websites
              </span>{" "}
              {intro.desc1}
            </p>
            <p className="mt-4 text-lg leading-8 tracking-[0.01em] text-[#4b5563]">
              {intro.desc2}{" "}
              <a
                href={intro.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#2f6b6b] underline underline-offset-4"
              >
                TikTok
              </a>{" "}
              and{" "}
              <a
                href={intro.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#2f6b6b] underline underline-offset-4"
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
      </div>
    </motion.div>
  );
}
