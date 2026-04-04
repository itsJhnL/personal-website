import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "../styles/Wave.css";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Works from "../Pages/Works";
import Contact from "../Pages/Contact";
import Footer from "./Footer";
import { fadeInUp, pageTransition, staggerContainer } from "../utils/motion";
import { useSiteData } from "../utils/siteContentStore";

export default function HomePage() {
  const userData = useSiteData();

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      id="top"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#f7f8fb]">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 MobileS:py-14">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center justify-center text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="flex max-w-4xl flex-col items-center space-y-6"
            >
              <p className="inline-flex items-center rounded-full border border-[#1f2937]/10 bg-white px-4 py-1.5 text-sm font-medium text-[#1f2937]">
                {userData.hero.availability}
              </p>
              <div className="space-y-4">
                <h1 className="font-semibold leading-none text-[#1f2937] MobileS:text-4xl Tablet:text-6xl Laptop:text-[4.8rem]">
                  {userData.hero.headlinePrefix.replace(/\.$/, "")}
                  <span className="text-[#2f6b6b]">.</span>{" "}
                  {userData.hero.introText} {userData.hero.name}
                  <span className="text-[#2f6b6b]">.</span>
                </h1>
                <div className="text-lg font-medium tracking-[0.08em] text-[#4b5563] uppercase">
                  {userData.hero.career}
                </div>
              </div>
              {/* <p className="max-w-3xl text-xl font-semibold leading-relaxed text-[#3f3f46] MobileS:text-lg Tablet:text-3xl">
                I build polished and responsive web experiences with clean
                code, strong UX decisions, and smooth interactions.
              </p> */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
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
                  className="inline-flex items-center gap-2 bg-[#2f6b6b] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#255757]"
                >
                  {userData.hero.ctaLabel} <FaArrowRight size={13} />
                </NavLink>
              </div>
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
