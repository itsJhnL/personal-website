import React from "react";
import { motion } from "framer-motion";
import userData from "../constants/data";
import Footer from "../components/Footer";
import { fadeInUp, pageTransition, staggerContainer } from "../utils/motion";

function Projects() {
  return (
    <motion.div
      className="bg-[#f1f1f1]"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <div className="flex flex-col items-center justify-center mx-5">
        <div className="text-center py-24">
          <h1 className="font-bold text-lg text-[#a3262e]">MY WORKS</h1>
          <header className="text-6xl font-bold ">
            <p className=" text-gray-700">PROJECTS</p>
          </header>
          <p className="border-t-4 border-[#a3262e] mx-auto w-20"></p>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-6xl mx-auto grid MobileS:grid-cols-1 Tablet:grid-cols-2"
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
    <div className="p-5">
      <div className="overflow-hidden bg-gray border-2 hover:rounded-t-lg border-white hover:border-[#a3262e] ease-out duration-500 hover:scale-105 hover:shadow-2xl">
        <div className="relative">
          <img src={imageURL} alt="" className="h-auto w-full hover:rounded-t-md" />
        </div>
        <div className="m-5">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-justify">{desc}</p>
        </div>
        <div className="m-5">
          <h1 className="text-lg font-bold">Tech Used:</h1>
          <p>{tech}</p>
        </div>
        <div className="flex m-5 space-x-5">
          <a href={link} target="_blank" rel="noreferrer" className="border-2 hover:text-white hover:border-[#a3262e] hover:bg-[#a3262e] px-4 py-2">
            View Demo
          </a>
          <a href={code} target="_blank" rel="noreferrer" className="border-2 hover:text-white hover:border-[#a3262e] hover:bg-[#a3262e] px-4 py-2">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
