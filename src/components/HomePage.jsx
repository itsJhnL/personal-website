import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import "../styles/Wave.css";
import userData from "../constants/data";
import { lazy } from "react";
import loading from "./Loading";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

export default function HomePage() {
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
    <>
      {/* first page is hidden */}
      <div className="hidden bg-[#FFF] h-screen ">
        <div className="flex max-w-6xl mx-auto h-3/4 w-screen MobileS:justify-center Tablet:justify-center">
          <div className="flex flex-col MobileS:gap-2 Laptop:gap-3 items-start justify-center">
            <div className="text-lg text-start">
              {/* hand wave */}
              {/* <h1>
                <span className="wave">
                  <img
                    src={userData.hero.imageURL}
                    alt=""
                    className="overflow-clip"
                    style={{ height: "20px" }}
                  />
                </span>
              </h1> */}
              <p className="font-extrabold text-[#a3262e] MobileS:text-4xl Tablet:text-6xl Laptop:text-8xl">
                {userData.hero.name}
              </p>
            </div>
            <div className="flex gap-2 text-xl">
              <div className="bg-red-400 h-[1px] w-[70px] hidden md:block"></div>
              <p className="font-medium underline underline-offset-4 decoration-[#a3262e]">
                {userData.hero.career}
              </p>
            </div>
            {/* <div className="Tablet:max-w-lg Laptop:max-w-3xl">
              <p>
                Helping startups, small businesses, and agencies in achieving
                high quality websites and providing remarkable user experiences.
              </p>
            </div> */}
            {/* <div className="flex gap-2">
              <NavLink
                to="/Contact"
                onClick={scrollUp}
                className="rounded-lg text-base font-medium bg-[#a3262e] border border-[#a3262e] text-white p-2"
              >
                {clicked ? "Scrolling..." : "Contact me"}
              </NavLink>
              <a
                href={userData.hero.resume}
                target="blank"
                rel="noopenner"
                className="flex items-center justify-between gap-2 rounded-lg text-base font-medium border border-[#a3262e] text-[#a3262e] p-2 px-6 hover:bg-[#a3262e]/20"
                download={"John Leo Bruno"}
              >
                Download CV {userData.hero.icon}
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* About */}
      <About />
      {/* Show case projects */}
      <div className="bg-[#f1f1f1]">
        <div className="flex flex-col items-center justify-center p-4 max-w-6xl mx-auto">
          <div className="text-center py-24">
            <header className="text-6xl font-bold max-w-6xl mx-auto">
              <p className=" text-gray-700">Recent Projects</p>
              <p className="border-t-4 border-[#a3262e] mx-auto w-52 mt-2"></p>
            </header>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-6xl pb-14 MobileS:grid-cols-1 Laptop:grid-cols-2">
            {userData.recentWork.map((recent) => (
              <div key={recent.id}>
                <RecentWorks imgURL={recent.imgURL} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

//Pass data with a render prop
const RecentWorks = ({ imgURL }) => {
  return (
    <div className="border-2 hover:rounded-lg border-white hover:border-[#a3262e] ease-out duration-500 hover:scale-105 hover:shadow-2xl">
      <img src={imgURL} alt="" className="hover:rounded-md" />
    </div>
  );
};
