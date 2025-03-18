import React, { useState } from "react";
// import Footer from "../components/Footer";
import "../App.css";
import userData from "../constants/data";
import Contact from "./Contact";
// import loading from "../components/Loading";
// import { NavLink } from "react-router-dom";

export default function About() {
  const [clicked, setClicked] = useState();

  //Scroll up fucntion and Syntax
  const scrollUp = () => {
    window.scrollTo({
      top: 0, // Specified position
      behavior: "auto", // auto scroll to top page, no animation.
    });
    setClicked(true);
  };

  return (
    <div className="bg-[#f1f1f1]">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center py-24">
          {/* Display Image Mobile mode */}
          <div className="rounded-full border-8 overflow-hidden mx-auto pb-8 MobileS:block MobileS:h-60 MobileS:w-60 Tablet:hidden">
            <img
              src={userData.about.imageURL}
              alt=""
              className="object-cover"
            />
          </div>
          <header className="text-6xl font-bold max-w-6xl mx-auto">
            <p className="text-[#a3262e]">John Leo Bruno</p>
          </header>
          <h1 className="font-bold text-lg text-gray-700">
            Software Developer
          </h1>
          <p className="border-t-4 border-[#a3262e] mx-auto w-20"></p>
        </div>

        <div className="grid grid-cols-2 MobileS:gap-0 Laptop:gap-8 max-w-6xl mx-auto pb-5 p-4 MobileS:grid-cols-1 Tablet:grid-cols-2">
          {/* Introduction */}
          {userData.about.introduce.map((abt) => (
            <div key={abt.id} className="MobileS:mx-5 Laptop:mx-0">
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
              {/* CV download button */}
              <div className="flex gap-2 pb-5">
                {/* Navlink to Contact ME */}
                {/* <NavLink
                  to="/Contact"
                  onClick={scrollUp}
                  className="rounded-lg text-base font-medium bg-[#a3262e] border border-[#a3262e] text-white p-2"
                >
                  {clicked ? "Scrolling..." : "Contact me"}
                </NavLink> */}
                <a
                  href={userData.hero.resume}
                  target="blank"
                  rel="noopenner"
                  className="flex items-center justify-between gap-2 rounded-lg text-base font-medium border border-[#a3262e] text-[#a3262e] p-2 px-6 hover:bg-[#a3262e]/20"
                  download={"John Leo Bruno"}
                >
                  Download CV {userData.hero.icon}
                </a>
              </div>
            </div>
          ))}

          {/* My Display Image */}
          <div className="MobileS:mx-5 Laptop:mx-0">
            <div className="flex items-center justify-center">
              <div className="border-2 overflow-hidden">
                <img
                  src={userData.about.imageURL}
                  alt="My Display Image"
                  className="h-96 p-2 hover:scale-110 duration-300 ease-in-out MobileS:hidden Tablet:block"
                />
              </div>
            </div>
          </div>

          {/* Technology Stacks */}
          <div className="MobileS:mx-5 Laptop:mx-0 pb-5">
            <sup className="overflow-hidden whitespace-nowrap underline underline-offset-4 decoration-[#a3262e] pt-3">
              Technology Stacks
            </sup>
            <div className="grid gap-5 MobileS:grid-cols-3 Laptop:grid-cols-4 text-lg">
              {userData.about.techstacks.map((tech) => (
                <div key={tech.id}>
                  <TechStacks icon={tech.icon} desc={tech.desc} />
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 MobileS:mx-5 Laptop:mx-0">
            {/* Main Skills */}
            <div>
              <sup className="underline underline-offset-4 decoration-[#a3262e]">
                Main Skills
              </sup>
              {userData.about.mainSkills.map((skill) => (
                <div key={skill.id}>
                  <MainSkills
                    title={skill.title}
                    desc={skill.desc}
                    icon={skill.icon}
                  />
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="pt-5">
              <sup className="underline underline-offset-4 decoration-[#a3262e]">
                Education
              </sup>
              {userData.about.education.map((edu) => (
                <div key={edu.id}>
                  <Education
                    title={edu.title}
                    major={edu.major}
                    desc={edu.desc}
                    icon={edu.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* hidden */}
      {/* <Footer /> */}
    </div>
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
        <h1 className="MobileS:text-2xl Tablet:text-3xl pb-3">
          Hi! I'm <span className="font-bold text-[#a3262e]">{name}</span>
          {/* hand wave */}
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
      <p className="pb-5 text-justify text-gray-700 text-lg">
        An aspiring{" "}
        <span className="font-bold underline underline-offset-4 decoration-[#a3262e]">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {career}
          </a>
        </span>{" "}
        {desc1}
      </p>
      <p className="mb-5 text-justify text-gray-700 text-lg">
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
    <>
      <div className="relative h-full text-[#a8a6a6] hover:text-[#a3262e] ease-out duration-500 hover:scale-105 hover:shadow-2xl ease-out flex flex-col items-center justify-center p-5 bg-white rounded-md">
        <span className="abosolute">{icon}</span>
        <small>{desc}</small>
      </div>
    </>
  );
};

const MainSkills = ({ title, desc, icon }) => {
  return (
    <>
      <div className="ease-out duration-500 hover:scale-105 hover:shadow-2xl bg-white p-5 mb-2 rounded-md text-lg">
        <div className="flex items-center justify-between font-semibold">
          <h1 className="text-[#a3262e]">{title}</h1>
          <div className="text-gray-600">{icon}</div>
        </div>
        <small className="text-gray-700">{desc}</small>
      </div>
    </>
  );
};

const Education = ({ title, major, desc, icon }) => {
  return (
    <>
      <div className="ease-out duration-500 hover:scale-105 hover:shadow-2xl bg-white p-5 rounded-md text-lg">
        <div className="flex items-center justify-between font-semibold">
          <h1 className="text-[#a3262e]">{title}</h1>
          <div className="text-gray-600">{icon}</div>
        </div>
        <sup>{major}</sup>
        <div>
          <small className="text-gray-700">{desc}</small>
        </div>
      </div>
    </>
  );
};
