import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import { fadeInUp, pageTransition, staggerContainer } from "../utils/motion";
import { useSiteData } from "../utils/siteContentStore";

const buildSkillGroups = (skills = []) => {
  const frontEndKeywords = [
    "html",
    "css",
    "javascript",
    "react",
    "tailwind",
    "material",
    "bootstrap",
  ];
  const backEndKeywords = ["php", "firebase", "mysql", "node", "api", "database"];

  const frontEnd = [];
  const backEnd = [];
  const otherTools = [];

  skills.forEach((item) => {
    const value = String(item.desc || "");
    const normalized = value.toLowerCase();

    if (frontEndKeywords.some((keyword) => normalized.includes(keyword))) {
      frontEnd.push(value);
      return;
    }

    if (backEndKeywords.some((keyword) => normalized.includes(keyword))) {
      backEnd.push(value);
      return;
    }

    otherTools.push(value);
  });

  return [
    {
      title: "Front End",
      description: "Building clean and responsive interfaces",
      items: frontEnd,
    },
    {
      title: "Backend",
      description: "Supporting logic, data, and integrations",
      items: backEnd,
    },
    {
      title: "Other Tools",
      description: "Design, content, and collaboration tools",
      items: otherTools,
    },
  ];
};

export default function Services() {
  const userData = useSiteData();
  const skillGroups = buildSkillGroups(userData.about.techstacks);

  return (
    <motion.div
      className="bg-[#f7f8fb]"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-14">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-[#1f2937] Tablet:text-5xl">
            Skills
          </h2>
          <p className="mx-auto mt-2 text-sm text-[#7b8794]">
            Technologies that I use
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-6 Tablet:grid-cols-2"
        >
          {skillGroups.slice(0, 2).map((group) => (
            <motion.div key={group.title} variants={fadeInUp}>
              <SkillGroup
                title={group.title}
                description={group.description}
                items={group.items}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto mt-6 max-w-2xl"
        >
          {skillGroups[2] && (
            <SkillGroup
              title={skillGroups[2].title}
              description={skillGroups[2].description}
              items={skillGroups[2].items}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

const SkillGroup = ({ title, description, items }) => {
  return (
    <div className="h-full rounded-[1.5rem] border border-[#dbe2ea] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
      <div className="border-b border-[#e6ebf1] pb-5 text-center">
        <h3 className="text-xl font-bold text-[#1f2937]">{title}</h3>
        <p className="mt-2 text-sm text-[#7b8794]">{description}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#d8e7e5] bg-[#f3f8f8] px-4 py-2 text-sm font-medium text-[#355e5e]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
