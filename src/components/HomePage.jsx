import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import "../styles/Wave.css";
import waving from "../assets/images/wave.png";
import userData from "./data/data";

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
      <div className="bg-[#FFF] h-screen ">
        <div className="flex max-w-6xl mx-auto h-3/4 w-screen MobileS:justify-center Tablet:justify-center">
          <div className="flex flex-col MobileS:gap-2 Laptop:gap-3 items-center justify-center">
            <div className="text-lg text-center">
              <h1>
                Hey there{" "}
                <span className="wave">
                  <img
                    src={waving}
                    alt=""
                    className="overflow-clip"
                    style={{ height: "20px" }}
                  />
                </span>
                , I am
              </h1>
              <p className="font-extrabold text-[#a3262e] MobileS:text-4xl Tablet:text-6xl Laptop:text-8xl">
                John Leo Bruno
              </p>
            </div>
            <div className="text-xl">
              <p className="font-medium underline underline-offset-4 decoration-[#a3262e]">
                Software Developer
              </p>
            </div>
            {/* <div className="Tablet:max-w-lg Laptop:max-w-3xl">
              <p>
                Helping startups, small businesses, and agencies in achieving
                high quality websites and providing remarkable user experiences.
              </p>
            </div> */}
            <div className="flex gap-2">
              <NavLink
                to="/Contact"
                onClick={scrollUp}
                className="rounded-lg text-base font-medium bg-[#a3262e] border border-[#a3262e] text-white p-2"
              >
                {clicked ? "Scrolling..." : "Let's work together!"}
              </NavLink>
              <a
                href="https://drive.google.com/file/d/1DW9Gf6WIY69dQx6Awp_ugUIIvmidZYi8/view?usp=sharing"
                target="blank"
                rel="noopenner"
                className="rounded-lg text-base font-medium border border-[#a3262e] text-[#a3262e] p-2 px-6 hover:bg-rose-50"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f1]">
        <div className="flex flex-col items-center justify-center p-4 max-w-6xl mx-auto mb-5">
          <div className="text-center py-24">
            <header className="text-6xl font-bold max-w-6xl mx-auto">
              <p className=" text-gray-700">Recent Projects</p>
            </header>
            {/* <p className="border-t-4 border-[#a3262e] mx-auto w-36"></p> */}
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-6xl pb-14 MobileS:grid-cols-1 Laptop:grid-cols-2">
            {/* Rendered data */}
            {userData.recentWork.map((recent) => (
              <div key={recent.id}>
                <RecentWorks imgURL={recent.imgURL} />
              </div>
            ))}
          </div>
          <NavLink to="/Works" onClick={scrollUp}>
            <div className="border rounded-lg bg-white font-bold text-gray-700 p-3 hover:bg-rose-50">
              <span className="text-[#a3262e]">
                {clicked ? "Scrolling..." : "View All"}
              </span>
            </div>
          </NavLink>
        </div>
        <Footer />
      </div>
    </>
  );
}

//Pass data with a render prop
const RecentWorks = ({ imgURL }) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <img
        src={imgURL}
        alt=""
        className="hover:scale-105 ease-out duration-500 rounded-lg"
      />
    </div>
  );
};
