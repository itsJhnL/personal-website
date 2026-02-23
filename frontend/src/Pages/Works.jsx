import React from "react";
import { motion } from "framer-motion";
import userData from "../constants/data";
import Footer from "../components/Footer";
import { fadeInUp, pageTransition, staggerContainer } from "../utils/motion";

function Projects() {
  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-b from-[#f7f4f2] via-[#f4f2ef] to-[#ffffff]"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <div className="pointer-events-none absolute -top-28 -left-24 h-80 w-80 rounded-full bg-[#a3262e]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-56 h-72 w-72 rounded-full bg-[#141414]/10 blur-3xl" />

      <div className="relative mx-5 flex flex-col items-center justify-center">
        <div className="py-24 text-center">
          <h1 className="text-base font-semibold tracking-[0.35em] text-[#a3262e]">
            MY WORKS
          </h1>
          <header className="mt-4 text-4xl font-bold leading-tight text-[#262626] MobileM:text-5xl Tablet:text-6xl">
            <p>PROJECTS</p>
          </header>
          <p className="mx-auto mt-5 w-20 border-t-4 border-[#a3262e]"></p>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[#555]">
            Selected projects focused on practical UI design, responsive
            engineering, and maintainable front-end architecture.
          </p>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid max-w-6xl gap-8 pb-20 MobileS:grid-cols-1 Tablet:grid-cols-2"
        >
          {userData.works.map((item) => (
            <motion.div key={item.id} variants={fadeInUp}>
              <ProjectCard
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
      </div>
      <Footer />
    </motion.div>
  );
}

const ProjectCard = ({ imageURL, title, desc, tech, link, code }) => {
  return (
    <div className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#dcd7d2] bg-white/80 shadow-[0_8px_24px_rgba(12,12,12,0.08)] backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-[#a3262e]/35 hover:shadow-[0_18px_40px_rgba(12,12,12,0.16)]">
        <div className="bg-gradient-to-br from-[#f4efea] to-[#ece6e1] p-3">
          <div className="overflow-hidden rounded-2xl border border-[#d9d2cc] bg-white">
            <img
              src={imageURL}
              alt={title}
              className="aspect-[16/10] w-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h1 className="text-2xl font-bold leading-tight text-[#1f1f1f]">
            {title}
          </h1>
          <p className="mt-4 flex-1 text-base leading-relaxed text-[#555]">
            {desc}
          </p>

          <div className="mt-6 rounded-xl border border-[#ece7e3] bg-[#f7f4f2] px-4 py-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a3262e]">
              Tech Used
            </h2>
            <p className="mt-1 text-sm font-medium text-[#373737]">{tech}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#a3262e] bg-[#a3262e] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#861f26]"
              >
                View Demo
              </a>
            )}
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#242424] px-5 py-2 text-sm font-semibold text-[#242424] transition hover:bg-[#242424] hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
