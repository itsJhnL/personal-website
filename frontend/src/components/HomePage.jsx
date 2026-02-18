import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer";
import "../styles/Wave.css";
import userData from "../constants/data";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import { fadeInUp, pageTransition, staggerContainer } from "../utils/motion";

export default function HomePage() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff7f8] via-[#f8f8f8] to-[#f1f1f1] min-h-screen flex items-center">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#a3262e]/15 blur-3xl"></div>
        <div className="absolute top-12 right-12 h-48 w-48 rounded-full bg-[#1f2937]/10 blur-3xl"></div>
        <div className="max-w-6xl mx-auto w-full px-5 py-20 MobileS:py-14">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid gap-8 items-center Tablet:grid-cols-2"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="inline-flex items-center rounded-full border border-[#a3262e]/20 bg-white/70 px-4 py-1 text-sm text-[#a3262e]">
                Open for freelance and full-time
              </p>
              <h1 className="font-extrabold leading-tight text-[#1f2937] MobileS:text-4xl Tablet:text-6xl Laptop:text-7xl">
                {userData.hero.name}
              </h1>
              <div className="text-xl font-semibold text-[#a3262e] min-h-[32px]">
                <TypewriterText text={userData.hero.career} />
              </div>
              <p className="max-w-xl text-gray-600 text-lg">
                I build polished and responsive web experiences with clean code,
                strong UX decisions, and smooth interactions.
              </p>
              <div className="flex flex-wrap gap-3">
                <NavLink
                  to="/Works"
                  onClick={scrollUp}
                  className="rounded-xl bg-[#a3262e] px-6 py-3 text-white font-semibold shadow-lg shadow-[#a3262e]/30 hover:-translate-y-1 duration-300"
                >
                  View Projects
                </NavLink>
                <a
                  href={userData.hero.resume}
                  target="blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-[#a3262e] px-6 py-3 font-semibold text-[#a3262e] hover:bg-[#a3262e]/10 duration-300"
                  download={"John Leo Bruno"}
                >
                  Download CV {userData.hero.icon}
                </a>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="block">
              <div className="rounded-3xl border border-white/70 bg-white/80 p-8 backdrop-blur shadow-2xl">
                <p className="text-gray-700 font-semibold pb-5">
                  Tech Focus
                </p>
                <div className="grid MobileS:grid-cols-1 Tablet:grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-[#f7f7f7] p-4 border border-[#a3262e]/20">
                    React + JavaScript
                  </div>
                  <div className="rounded-xl bg-[#f7f7f7] p-4 border border-[#a3262e]/20">
                    UI/UX Design
                  </div>
                  <div className="rounded-xl bg-[#f7f7f7] p-4 border border-[#a3262e]/20">
                    API Integration
                  </div>
                  <div className="rounded-xl bg-[#f7f7f7] p-4 border border-[#a3262e]/20">
                    Performance
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <About />
      {/* Show case projects */}
      <div className="bg-[#f1f1f1]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center justify-center p-4 max-w-6xl mx-auto"
        >
          <div className="text-center py-24">
            <header className="text-6xl font-bold max-w-6xl mx-auto">
              <p className=" text-gray-700">Recent Projects</p>
              <p className="border-t-4 border-[#a3262e] mx-auto w-52 mt-2"></p>
            </header>
          </div>
          <div className="grid grid-cols-2 gap-5 max-w-6xl pb-14 MobileS:grid-cols-1 Laptop:grid-cols-2">
            {userData.recentWork.map((recent) => (
              <motion.div key={recent.id} variants={fadeInUp}>
                <RecentWorks imgURL={recent.imgURL} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Contact />
      <Footer />
    </motion.div>
  );
}

//Pass data with a render prop
const RecentWorks = ({ imgURL }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl border-2 border-white bg-white shadow-xl"
    >
      <img
        src={imgURL}
        alt="Recent work preview"
        className="h-full w-full object-cover duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 via-transparent to-transparent opacity-0 duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-[#a3262e] opacity-0 duration-300 group-hover:opacity-100">
        View Project
      </div>
    </motion.div>
  );
};

const TypewriterText = ({ text }) => {
  return (
    <span
      className="typewriter-text"
      style={{ "--chars": text.length }}
      aria-label={text}
    >
      {text}
    </span>
  );
};
