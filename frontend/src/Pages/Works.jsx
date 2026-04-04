import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, pageTransition, staggerContainer } from "../utils/motion";
import { useSiteData } from "../utils/siteContentStore";

function Projects() {
  const userData = useSiteData();

  return (
    <motion.div
      className="relative overflow-hidden bg-[#f7f8fb]"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <div className="pointer-events-none absolute -top-28 -left-24 h-80 w-80 rounded-full bg-[#2f6b6b]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-56 h-72 w-72 rounded-full bg-[#1f2937]/6 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-5">
        <div className="py-20 text-center">
          <header className="mx-auto max-w-6xl">
            <p className="text-4xl font-bold text-[#1f2937] Tablet:text-5xl">
              Works
            </p>
            <p className="mx-auto mt-2 text-sm text-[#7b8794]">
              Projects that I worked with
            </p>
          </header>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid max-w-5xl gap-6 pb-20 MobileS:grid-cols-1 Tablet:grid-cols-2"
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
    </motion.div>
  );
}

const ProjectCard = ({ imageURL, title, desc, tech, link, code }) => {
  const techItems = tech.split(",").map((item) => item.trim());

  return (
    <div className="h-full rounded-lg border border-[#dbe2ea] bg-white p-4 shadow-sm">
      <div className="overflow-hidden rounded-md border border-[#e3e8ef] bg-[#fbfcfe] p-3">
        <img
          src={imageURL}
          alt={title}
          className="aspect-[16/10] w-full object-contain"
        />
      </div>

      <div className="pt-4">
        <h1 className="text-xl font-bold leading-tight text-[#1f2937]">
          {title}
        </h1>
        <p className="pt-2 text-sm leading-relaxed text-[#5b6472]">
          {desc}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {techItems.map((item) => (
            <span
              key={item}
              className="rounded-md border border-[#d9d2c8] bg-white px-3 py-1 text-xs font-medium text-[#4b5563]"
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
              className="rounded-md border border-[#2f6b6b] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#2f6b6b] transition hover:bg-[#2f6b6b]/10"
            >
              Live
            </a>
          )}
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-[#1f2937] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#1f2937] transition hover:bg-[#1f2937] hover:text-white"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
