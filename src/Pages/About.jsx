import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import userData from "../constants/data";
import { fadeInUp, pageTransition, staggerContainer } from "../utils/motion";

const panelClassName =
  "rounded-2xl border border-white/70 bg-white/80 backdrop-blur p-6 shadow-xl";

export default function About() {
  return (
    <motion.div
      className="bg-[#f1f1f1] relative overflow-hidden"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <div className="absolute -left-20 top-8 h-64 w-64 rounded-full bg-[#a3262e]/10 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#111827]/10 blur-3xl"></div>
      <div className="flex flex-col items-center justify-center py-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="text-center pb-10 px-5"
        >
          <h1 className="text-4xl font-bold text-[#1f2937]">About Me</h1>
          <p className="mx-auto mt-2 h-1 w-20 rounded-full bg-[#a3262e]" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 MobileS:gap-4 Laptop:gap-8 max-w-6xl mx-auto pb-5 p-4 MobileS:grid-cols-1 Tablet:grid-cols-2"
        >
          {userData.about.introduce.map((abt) => (
            <motion.div
              key={abt.id}
              variants={fadeInUp}
              className={`MobileS:mx-0 Laptop:mx-0 ${panelClassName}`}
            >
              <Introduce
                title={abt.title}
                name={abt.name}
                link={abt.link}
                career={abt.career}
                desc1={abt.desc1}
                desc2={abt.desc2}
                tiktok={abt.tiktok}
                medium={abt.medium}
              />
              <div className="flex gap-2 pt-1">
                <a
                  href={userData.hero.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 rounded-xl text-base font-medium border border-[#a3262e] text-[#a3262e] p-2 px-6 hover:bg-[#a3262e]/10 hover:-translate-y-1 duration-300"
                  download={"John Leo Bruno"}
                >
                  Download CV {userData.hero.icon}
                </a>
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={fadeInUp}
            className={`MobileS:mx-0 Laptop:mx-0 ${panelClassName}`}
          >
            <h2 className="text-base font-semibold text-[#1f2937]">
              Technology Stacks
            </h2>
            <p className="pt-1 pb-4 text-sm text-gray-500">
              Core stack for building reliable, modern web products.
            </p>
            <div className="grid gap-2 pt-1 MobileS:grid-cols-2 Tablet:grid-cols-3 Laptop:grid-cols-4">
              {userData.about.techstacks.map((tech) => (
                <TechStacks key={tech.id} icon={tech.icon} desc={tech.desc} />
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className={`MobileS:mx-0 Laptop:mx-0 ${panelClassName}`}
          >
            <div>
              <h2 className="text-lg font-semibold text-[#1f2937]">
                Main Skills
              </h2>
              {userData.about.mainSkills.map((skill) => (
                <MainSkills
                  key={skill.id}
                  title={skill.title}
                  desc={skill.desc}
                  icon={skill.icon}
                />
              ))}
            </div>

            <div className="pt-7">
              <h2 className="text-lg font-semibold text-[#1f2937]">
                Education
              </h2>
              {userData.about.education.map((edu) => (
                <Education
                  key={edu.id}
                  title={edu.title}
                  major={edu.major}
                  desc={edu.desc}
                  icon={edu.icon}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

const Introduce = ({
  title,
  name,
  link,
  career,
  desc1,
  desc2,
  tiktok,
  medium,
}) => {
  return (
    <>
      <sup className="underline underline-offset-4 decoration-[#a3262e]">
        {title}
      </sup>
      <div className="flex gap-2">
        <h1 className="MobileS:text-2xl Tablet:text-3xl pb-2">
          Hi! I'm <span className="font-bold text-[#a3262e]">{name}</span>
        </h1>
        <h1 className="text-center">
          <span className="wave">
            <img
              src={userData.hero.imageURL}
              alt=""
              className="overflow-clip"
              style={{ height: "30px" }}
            />
          </span>
        </h1>
      </div>
      <p className="pb-4 text-justify text-gray-700 text-lg leading-relaxed">
        A{" "}
        <span className="font-bold underline underline-offset-4 decoration-[#a3262e]">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {career}
          </a>
        </span>{" "}
        {desc1}
      </p>
      <p className="mb-4 text-justify text-gray-700 text-lg leading-relaxed">
        {desc2}{" "}
        <a href={tiktok} target="_blank" rel="noopener noreferrer">
          <b className="underline underline-offset-4 decoration-[#a3262e]">
            TikTok
          </b>
        </a>{" "}
        and{" "}
        <a href={medium} target="_blank" rel="noopener noreferrer">
          <b className="underline underline-offset-4 decoration-[#a3262e]">
            Medium
          </b>
        </a>
        .
      </p>
    </>
  );
};

const TechStacks = ({ desc, icon }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="group h-full rounded-xl bg-[#f7f7f7] p-3 border border-[#a3262e]/20 hover:bg-[#fff1f2] hover:border-[#a3262e]/60 duration-300"
    >
      <div className="flex h-full min-h-[88px] flex-col items-center justify-center gap-1.5 text-center">
        <span className="text-gray-600 text-xl group-hover:text-[#a3262e] duration-300">
          {icon}
        </span>
        <small className="text-xs font-semibold text-[#374151] group-hover:text-[#a3262e] leading-tight duration-300">
          {desc}
        </small>
      </div>
    </motion.div>
  );
};

const MainSkills = ({ title, desc, icon }) => {
  return (
    <motion.div variants={fadeInUp}>
      <div className="ease-out duration-300 hover:scale-[1.01] hover:shadow-xl bg-white p-5 mt-3 rounded-md text-lg">
        <div className="flex items-center justify-between font-semibold">
          <h1 className="text-[#a3262e]">{title}</h1>
          <div className="text-gray-600">{icon}</div>
        </div>
        <small className="text-gray-700">{desc}</small>
      </div>
    </motion.div>
  );
};

const Education = ({ title, major, desc, icon }) => {
  return (
    <motion.div variants={fadeInUp}>
      <div className="ease-out duration-300 hover:scale-[1.01] hover:shadow-xl bg-white p-5 mt-3 rounded-md text-lg">
        <div className="flex items-center justify-between font-semibold">
          <h1 className="text-[#a3262e]">{title}</h1>
          <div className="text-gray-600">{icon}</div>
        </div>
        <sup>{major}</sup>
        <div>
          <small className="text-gray-700">{desc}</small>
        </div>
      </div>
    </motion.div>
  );
};
