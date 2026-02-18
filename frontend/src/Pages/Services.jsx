import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import "../App.css";
import userData from "../constants/data";
import { fadeInUp, pageTransition, staggerContainer } from "../utils/motion";

export default function Services() {
  return (
    <motion.div
      className="bg-[#f1f1f1]"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <div className="flex flex-col items-center justify-center pb-24">
        <div className="text-center py-24">
          <h1 className="font-bold text-lg text-[#a3262e]">WHAT I DO</h1>
          <header className="text-6xl font-bold max-w-6xl mx-auto">
            <p className=" text-gray-700">Services</p>
          </header>
          <p className="border-t-4 border-[#a3262e] mx-auto w-20"></p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center grid grid-cols-3 gap-4 MobileS:px-10 Laptop:px-5 max-w-6xl mx-auto text-gray-700 MobileS:grid-cols-1 Tablet:grid-cols-2 Laptop:grid-cols-3"
        >
          {userData.services.map((ser) => (
            <motion.div key={ser.id} variants={fadeInUp}>
              <ServicesData
                title={ser.title}
                desc={ser.desc}
                icon={ser.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
}

const ServicesData = ({ title, desc, icon }) => {
  return (
    <>

      <div className="relative h-full border bg-white p-5 rounded-lg space-y-5 hover:scale-105 hover:shadow-2xl ease-out duration-500">
        <div className="flex items-center justify-center text-4xl text-[#a3262e]">
          {icon}
        </div>
        <h1 className="font-bold text-lg text-[#a3262e]">
          {title}
        </h1>
        <p>
          {desc}
        </p>
      </div>
    </>
  )
}
