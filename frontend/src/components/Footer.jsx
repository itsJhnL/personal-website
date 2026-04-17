import React from "react";
import { motion } from "framer-motion";
import { useSiteData } from "../utils/siteContentStore";
import { useTheme } from "../utils/theme";

function Footer() {
  const userData = useSiteData();
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  return (
    <div
      className={`mx-auto mt-5 flex max-w-6xl items-center justify-between border-solid py-10 transition-colors duration-500 MobileS:flex-col Tablet:flex-row Tablet:px-5 Laptop:px-0 ${
        isDark ? "border-t border-white/10" : "border-t-2 border-[#2f6b6b]"
      }`}
    >
      <div className="flex flex-row font-medium MobileS:text-center">
        <p className={isDark ? "text-slate-300" : "text-gray-700"}>
          Made by <span className={`font-bold ${isDark ? "text-cyan-300" : "text-[#2f6b6b]"}`}>JanggoDev</span>
          {" | "}
          {""} &copy; {currentYear}. All Rights Reserved
        </p>
      </div>
      {/* Socials */}
      <div className="text-2xl MobileS:pt-5 Tablet:pt-0">
        <ul className={`flex flex-row items-center space-x-6 ${isDark ? "text-cyan-300" : "text-[#2f6b6b]"}`}>
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
