import React from "react";
import { motion } from "framer-motion";
import userData from "../constants/data";
import Footer from "../components/Footer";
import { fadeInUp, pageTransition, staggerContainer } from "../utils/motion";

export default function Experience() {
  const orderedExperience = [...userData.experience].reverse();

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

      <div className="relative mx-auto max-w-6xl">
        <div className="px-5 pt-24">
          <div className="py-10 text-center">
            <h1 className="text-base font-semibold tracking-[0.35em] text-[#a3262e]">
              CAREER JOURNEY
            </h1>
            <header className="mt-4 text-4xl font-bold leading-tight text-[#262626] MobileM:text-5xl Tablet:text-6xl">
              <p>Experience</p>
            </header>
            <p className="mx-auto mt-5 w-20 border-t-4 border-[#a3262e]"></p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mx-auto max-w-4xl"
          >
            {orderedExperience.map((exp, idx) => (
              <motion.div key={exp.id} variants={fadeInUp}>
                <MyExp
                  isLast={idx === orderedExperience.length - 1}
                  year={exp.year}
                  position={exp.position}
                  title={exp.title}
                  desc={exp.desc}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mx-5 mt-20 border-t border-[#d8d2cd]"></div>

        <div className="flex flex-col px-5 pb-24 pt-12">
          <div className="py-10 text-center">
            <h2 className="text-base font-semibold tracking-[0.35em] text-[#a3262e]">
              CREDENTIALS
            </h2>
            <header className="mx-auto mt-4 max-w-6xl text-4xl font-bold leading-tight text-[#262626] MobileM:text-5xl Tablet:text-6xl">
              <p>Certifications</p>
            </header>
            <p className="mx-auto mt-5 w-20 border-t-4 border-[#a3262e]"></p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="pt-4"
          >
            <div className="mx-auto grid w-full max-w-6xl gap-7 Laptop:grid-cols-2">
              {userData.certificates.map((cert) => (
                <motion.div key={cert.id} variants={fadeInUp}>
                  <MyCerts
                    name={cert.name}
                    description={cert.description}
                    date={cert.date}
                    imageURL={cert.imageURL}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <Footer />
      </div>
    </motion.div>
  );
}

const MyExp = ({ year, position, title, desc, isLast }) => {
  return (
    <div className="relative pl-10">
      {!isLast && (
        <div className="absolute left-[11px] top-8 h-[calc(100%-8px)] w-px bg-[#c8c2bc]"></div>
      )}
      <motion.div
        className="absolute left-0 top-8 h-6 w-6 rounded-full border-4 border-[#f7f4f2] bg-[#a3262e] ring-4 ring-[#a3262e]/20"
        animate={{ scale: [1, 1.08, 1], opacity: [1, 0.85, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="mb-8 rounded-3xl border border-[#dcd7d2] bg-white/90 p-6 shadow-[0_8px_24px_rgba(12,12,12,0.08)] backdrop-blur"
        whileHover={{ y: -6, boxShadow: "0 14px 30px rgba(12,12,12,0.13)" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-block rounded-full border border-[#e4dbd5] bg-[#f7f4f2] px-4 py-1 text-sm font-semibold tracking-wide text-[#7a6c62]">
          {year}
        </div>
        <h1 className="mt-4 text-2xl font-bold leading-tight text-[#1f1f1f]">
          {position}
        </h1>
        {title && <p className="mt-1 text-lg text-[#666]">{title}</p>}
        <p className="pt-4 text-base leading-relaxed text-[#555]">{desc}</p>
      </motion.div>
    </div>
  );
};

const MyCerts = ({ name, description, date, imageURL }) => {
  return (
    <motion.div
      className="group overflow-hidden rounded-3xl border border-[#dcd7d2] bg-white/90 shadow-[0_8px_24px_rgba(12,12,12,0.08)] backdrop-blur"
      whileHover={{ y: -6, boxShadow: "0 16px 34px rgba(12,12,12,0.14)" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bg-gradient-to-br from-[#f4efea] to-[#ece6e1] p-3">
        <div className="overflow-hidden rounded-2xl border border-[#d9d2cc] bg-white">
          <motion.img
            src={imageURL}
            alt={name}
            className="aspect-[16/10] w-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.02]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="p-6">
        <h1 className="text-xl font-bold leading-tight text-[#1f1f1f]">{name}</h1>
        <p className="mt-4 text-base leading-relaxed text-[#555]">{description}</p>
        <p className="mt-5 inline-block rounded-full border border-[#e4dbd5] bg-[#f7f4f2] px-4 py-1 text-sm font-semibold text-[#7a6c62]">
          {date}
        </p>
      </div>
    </motion.div>
  );
};
