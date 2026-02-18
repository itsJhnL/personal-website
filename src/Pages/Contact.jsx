import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import userData from "../constants/data";
import { fadeInUp, pageTransition } from "../utils/motion";

export default function Contact() {
  return (
    <motion.div
      className="bg-[#f1f1f1]"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="text-center py-24">
          {/* <h1 className="font-bold text-lg text-[#a3262e]">HIRE ME</h1> */}
          <header className="text-6xl font-bold max-w-6xl mx-auto">
            <p className=" text-gray-700">Contact Me</p>
          </header>
          <p className="border-t-4 border-[#a3262e] mx-auto w-36"></p>
        </div>
        <div className="flex max-w-6xl mx-auto pb-24">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="MobileS:text-2xl Laptop:text-4xl text-black font-bold p-5">
              <h1>{userData.contact.title}</h1>
              <p className="border-t-4 border-[#a3262e] w-24"></p>
            </div>
            <div className="text-base text-justify text-black font-normal px-5">
              <p>{userData.contact.desc}</p>
            </div>
            <div className="p-5 text-black font-medium space-y-3">
              <div className="flex">
                <i className="pr-5 text-[#a3262e]">
                  {userData.contact.address_icon}
                </i>
                <a href={userData.contact.address_link} target="_blank">
                  <p>{userData.contact.address}</p>
                </a>
              </div>
              <div className="flex">
                <i className="pr-5 text-[#a3262e]">
                  {userData.contact.number_icon}
                </i>
                <p>{userData.contact.number}</p>
              </div>
              <div className="flex">
                <i className="pr-5 text-[#a3262e]">
                  {userData.contact.email_icon}
                </i>
                <p>
                  <a
                    href={userData.contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {userData.contact.email}
                  </a>
                </p>
              </div>
              {/* Socials */}
              {/* <div className="flex space-x-5 text-[#a3262e] pt-20">
                <h1 className="text-xl font-semibold">
                  {userData.socialLinks.title}
                </h1>
                <div>
                  <a
                    href={userData.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="pr-5 text-[#a3262e] text-2xl">
                      {userData.socialLinks.fb}
                    </i>
                  </a>
                </div>
                <div>
                  <a
                    href={userData.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="pr-5 text-[#a3262e] text-2xl">
                      {userData.socialLinks.twtr}
                    </i>
                  </a>
                </div>
                <div>
                  <a
                    href={userData.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="pr-5 text-[#a3262e] text-2xl">
                      {userData.socialLinks.insta}
                    </i>
                  </a>
                </div>
              </div> */}
            </div>
          </motion.div>
          {/* <div className="flex border p-5">
            <form action="">
              <div className="space-y-5">
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-bold">
                    Name <span className="text-[#a3262e]">*</span>
                  </label>
                  <input
                    className="border p-2 focus:outline-none focus:border-[#a3262e]"
                    type="text"
                    id="name"
                    placeholder=""
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-bold">
                    Email <span className="text-[#a3262e]">*</span>
                  </label>
                  <input
                    className="border p-2 focus:outline-none focus:border-[#a3262e]"
                    type="email"
                    id="email"
                    placeholder=""
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="subject" className="font-bold">
                    Subject <span className="text-[#a3262e]">*</span>
                  </label>
                  <input
                    className="border p-2 focus:outline-none focus:border-[#a3262e]"
                    type="text"
                    id="subject"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="font-bold">
                    Message <span className="text-[#a3262e]">*</span>
                  </label>
                  <textarea
                    className=" border p-2 focus:outline-none focus:border-[#a3262e]"
                    name=""
                    id="message"
                    cols="50"
                    rows="6"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="border rounded-lg px-5 py-2 bg-[#a3262e] text-white cursor-not-allowed"
                  disabled
                  title="Not yet. Thank you."
                >
                  Send message
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
      {/* <Footer /> */}
    </motion.div>
  );
}
