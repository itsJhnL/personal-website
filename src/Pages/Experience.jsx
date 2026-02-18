import React from "react";
import { motion } from "framer-motion";
import userData from "../constants/data";
import Footer from "../components/Footer";
import { fadeInUp, pageTransition, staggerContainer } from "../utils/motion";

export default function Experience() {
  return (
    <motion.div
      className="bg-[#f1f1f1]"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <div className="max-w-6xl mx-auto">
        {/* Experience */}
        <div className="p-5">
          <div className="text-center py-24">
            {/* <h1 className="font-bold text-lg text-[#a3262e]">My experience</h1> */}
            <header className="text-6xl font-bold">
              <p className=" text-gray-700">Experience</p>
            </header>
            <p className="border-t-4 border-[#a3262e] mx-auto w-20"></p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col-reverse"
          >
            {userData.experience.map((exp, idx) => (
              <motion.div key={exp.id} variants={fadeInUp}>
                {/* Adding divison line starts here */}
                {idx === userData.experience.length - 1 ? null : (
                  <div className="flex flex-col items-center -mt-2">
                    <div className="w-4 h-4 bg-[#a3262e] bg-[#a3262e] rounded-full relative z-10">
                      <div className="w-4 h-4 bg-[#a3262e] bg-[#a3262e] rounded-full relative z-10 animate-ping"></div>
                    </div>
                    <div className="w-1 h-24 bg-[#a3262e] bg-[#a3262e]/40 rounded-full -mt-2"></div>
                  </div>
                )}
                {/* Adding divison line ends here */}

                {/* Rendered data using props */}
                <MyExp
                  key={idx.key}
                  year={exp.year}
                  position={exp.position}
                  title={exp.title}
                  desc={exp.desc}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="border mt-24 m-5"></div>
        <div className="flex flex-col pb-24 p-5">
          <div className="text-center py-10">
            <header className=" font-bold max-w-6xl mx-auto">
              <p className=" text-gray-700 Laptop:text-6xl MobileS:text-5xl">
                Certifications
              </p>
            </header>
            <p className="border-t-4 border-[#a3262e] mx-auto w-20"></p>
          </div>

          {/* Certificates */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex items-center justify-center pt-24"
          >
            {/* <div className="items-center grid MobileS:grid-cols-1 Laptop:grid-cols-2 space-y-10 gap-8"> */}
            <div className="mx-5">
              {userData.certificates.map((cert) => (
                <motion.div key={cert.id} variants={fadeInUp}>
                  {/* Rendered data using props */}
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
//passing the data with a render props
const MyExp = ({ year, position, title, desc }) => {
  return (
    <div className="mx-5">
      <div className="relative bg-white border border-gray-100 ease-out duration-500 rounded-lg max-w-2xl mx-auto p-5">
        <div className="absolute text-4xl text-[#a3262e]/20 hover:text-[#a3262e] font-bold -mt-10 right-0 top-0">
          {year}
        </div>
        <h1 className="text-2xl font-bold">{position}</h1>
        <p className="text-xl text-gray-500">{title}</p>
        <p className="pt-5 Tablet:text-justify MobileS:text-left text-lg">{desc}</p>
      </div>
    </div>
  );
};

const MyCerts = ({ name, description, date, imageURL }) => {
  return (
    <div className="grid MobileS:grid-cols-1 Laptop:grid-cols-2 py-5">
      <div>
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-lg">{description}</p>
        <p className="text-lg">{date}</p>
      </div>
      <img src={imageURL} alt="" className="object-scale-down h-full w-full p-5 rounded-xl" />
    </div>
  );
};
