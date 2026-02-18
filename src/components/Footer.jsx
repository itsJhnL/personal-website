import React from "react";
import { motion } from "framer-motion";
import userData from "../constants/data";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex items-center justify-between max-w-6xl mx-auto border-solid border-t-2 border-[#a3262e] py-10 MobileS:flex-col Tablet:flex-row Tablet:px-5 Laptop:px-0 mt-5">
      <div className="flex flex-row font-medium MobileS:text-center">
        <p className="text-gray-700">
          Made by <span className="font-bold text-[#a3262e]">JanggoDev</span>
          {" | "}
          {""} &copy; {currentYear}. All Rights Reserved
        </p>
      </div>
      {/* Socials */}
      <div className="text-2xl MobileS:pt-5 Tablet:pt-0">
        <ul className="flex flex-row items-center space-x-6 text-[#a3262e]">
          <motion.a whileHover={{ y: -3 }} href={userData.socialLinks.facebook} target="_blank" rel="noreferrer">
            {userData.socialLinks.fb}
          </motion.a>
          <motion.a whileHover={{ y: -3 }} href={userData.socialLinks.instagram} target="_blank" rel="noreferrer">
            {userData.socialLinks.insta}
          </motion.a>
          <motion.a whileHover={{ y: -3 }} href={userData.socialLinks.twitter} target="_blank" rel="noreferrer">
            {userData.socialLinks.twtr}
          </motion.a>
          <motion.a whileHover={{ y: -3 }} href={userData.navBarLinks.linkedin} target="blank" rel="noreferrer">
            {userData.navBarLinks.linkedin_icon}
          </motion.a>
          <motion.a whileHover={{ y: -3 }} href={userData.navBarLinks.github} target="blank" rel="noreferrer">
            {userData.navBarLinks.github_icon}
          </motion.a>
          <motion.a whileHover={{ y: -3 }} href={userData.navBarLinks.behance} target="blank" rel="noreferrer">
            {userData.navBarLinks.behance_icon}
          </motion.a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
