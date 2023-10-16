import React from "react";
import userData from "../constants/data";

function Footer() {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-auto border-solid border-t-2 border-[#a3262e] py-10 MobileS:flex-col Tablet:flex-row Tablet:px-5 Laptop:px-0">
      <div className="flex flex-row font-medium MobileS:text-center">
        <p>
          Made by <span className="font-bold text-[#a3262e]">JanggoDev</span>
          {" | "}
          {""} &copy; 2023. All Rights Reserved
        </p>
      </div>
      <div className="text-2xl MobileS:pt-5 Tablet:pt-0">
        {/* Socials */}
        <ul className="flex flex-row items-center space-x-6 text-[#a3262e]">
          <a href={userData.navBarLinks.linkedin} target="blank">
            {userData.navBarLinks.linkedin_icon}
          </a>

          <a href={userData.navBarLinks.github} target="blank">
            {userData.navBarLinks.github_icon}
          </a>

          <a href={userData.navBarLinks.behance} target="blank">
            {userData.navBarLinks.behance_icon}
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
