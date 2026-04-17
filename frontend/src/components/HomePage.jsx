import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, useTransform, useScroll } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "../styles/Wave.css";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Works from "../Pages/Works";
import Contact from "../Pages/Contact";
import Footer from "./Footer";
import {
  createFadeInUp,
  createScaleIn,
  pageTransition,
  staggerContainer,
} from "../utils/motion";
import { useSiteData } from "../utils/siteContentStore";
import { useTheme } from "../utils/theme";

export default function HomePage() {
  const userData = useSiteData();
  const { isDark } = useTheme();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.35]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      id="top"
      className={isDark ? "bg-[#07111f]" : "bg-[#f7f8fb]"}
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <section
        ref={heroRef}
        className={`relative flex min-h-screen items-center overflow-hidden transition-colors duration-500 ${
          isDark ? "bg-[#07111f]" : "bg-[#f7f8fb]"
        }`}
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-20 MobileS:py-14">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center justify-center text-center"
          >
            <motion.div
              variants={createScaleIn(0.08)}
              className="flex max-w-4xl flex-col items-center space-y-6"
            >
              <motion.p
                variants={createFadeInUp(0.16, 18)}
                className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium ${
                isDark
                  ? "border-white/10 bg-white/10 text-slate-100"
                  : "border-[#1f2937]/10 bg-white text-[#1f2937]"
              }`}
              >
                {userData.hero.availability}
              </motion.p>
              <motion.div variants={createFadeInUp(0.24)} className="space-y-4">
                <h1 className={`font-semibold leading-none MobileS:text-4xl Tablet:text-6xl Laptop:text-[4.8rem] ${
                  isDark ? "text-white" : "text-[#1f2937]"
                }`}>
                  {userData.hero.headlinePrefix.replace(/\.$/, "")}
                  <span className={isDark ? "text-cyan-300" : "text-[#2f6b6b]"}>.</span>{" "}
                  {userData.hero.introText} {userData.hero.name}
                  <span className={isDark ? "text-cyan-300" : "text-[#2f6b6b]"}>.</span>
                </h1>
                <div className={`text-lg font-medium tracking-[0.08em] uppercase ${
                  isDark ? "text-slate-300" : "text-[#4b5563]"
                }`}>
                  {userData.hero.career}
                </div>
              </motion.div>
              {/* <p className="max-w-3xl text-xl font-semibold leading-relaxed text-[#3f3f46] MobileS:text-lg Tablet:text-3xl">
                I build polished and responsive web experiences with clean
                code, strong UX decisions, and smooth interactions.
              </p> */}
              <motion.div
                variants={createFadeInUp(0.34, 20)}
                className="flex flex-wrap items-center justify-center gap-4 pt-2"
              >
                <NavLink
                  to="/"
                  onClick={(event) => {
                    event.preventDefault();
                    const section = document.getElementById("projects");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth", block: "start" });
                    } else {
                      scrollUp();
                    }
                  }}
                  className={`inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1 ${
                    isDark ? "bg-cyan-500 hover:bg-cyan-400" : "bg-[#2f6b6b] hover:bg-[#255757]"
                  }`}
                >
                  {userData.hero.ctaLabel} <FaArrowRight size={13} />
                </NavLink>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24">
        <About />
      </section>
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>
      <section id="projects" className="scroll-mt-24">
        <Works />
      </section>
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
      <Footer />
    </motion.div>
  );
}
