import React, { useState } from "react";
import Janggo from "../assets/images/me.png";
// import bg from "../assets/images/bg.png";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Projects from "../assets/Projects/port.png";
import FreshBites from "../assets/Projects/recentFreshbites.png";
import "../styles/Wave.css";
import waving from "../assets/images/wave.png";

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
    <div>
      <div className="bg-[#FFF] h-screen ">
        <div className="flex items-center justify-between max-w-6xl mx-auto h-full w-screen MobileS:justify-center Tablet:justify-center">
          <div className="grid grid-row-2 gap-4 MobileS:max-w-lg MobileS:mx-5 Laptop:max-w-6xl Laptop:mx-5">
            <div className="rounded-full border-8 overflow-hidden mx-auto pb-8 MobileS:hidden MobileS:h-60 MobileS:w-60 Tablet:h-60 Tablet:block Laptop:hidden">
              <img src={Janggo} alt="" className="object-cover h-42" />
            </div>
            <div className="text-4xl">
              <h1>
                Hey there{" "}
                <span className="wave">
                  <img
                    src={waving}
                    alt=""
                    className="overflow-clip"
                    style={{ height: "40px" }}
                  />{" "}
                  {/* Need to fix this on mobile view, it keeps overflow navbar.*/}
                </span>
                , I'm{" "}
                <span className="font-bold text-[#a3262e]">John Leo Bruno</span>
              </h1>
            </div>
            <div className="text-xl">
              <h1>
                Aspiring{" "}
                <span className="font-bold underline underline-offset-4 decoration-[#a3262e]">
                  Web Developer
                </span>
              </h1>
            </div>
            <div className="Tablet:max-w-lg Laptop:max-w-3xl">
              <p>
                Helping startups, small businesses, and agencies in achieving
                high quality websites and providing remarkable user experiences.
              </p>
            </div>
            <div className="flex gap-5">
              <NavLink
                to="/Contact"
                onClick={scrollUp}
                className="rounded-lg text-base font-medium bg-[#a3262e] border border-[#a3262e] text-white p-2"
              >
                {clicked ? "Scrolling..." : "Let's work together!"}
              </NavLink>
              <NavLink
                to="/"
                className="rounded-lg text-base font-medium border border-[#a3262e] text-[#a3262e] p-2 hover:bg-rose-50"
              >
                View Resume
              </NavLink>
            </div>
          </div>
          <div className="relative border-8 overflow-hidden rounded-xl rounded-tr-[50px] rounded-bl-[50px] relative MobileS:hidden Tablet:hidden Laptop:block Laptop:mx-5">
            {/* <img
              className="object-contain h-100vh w-96 md:w-auto contrast-0 relative blur-xl"
              src={bg}
              alt=""
            /> */}
            <img
              className="bg-[#f1f1f1] object-cover h-80 hover:scale-110 duration-1000 ease-out"
              src={Janggo}
              alt=""
            />
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
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={FreshBites}
                alt=""
                className="hover:scale-105 ease-out duration-500 rounded-lg"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={FreshBites}
                alt=""
                className="hover:scale-105 ease-out duration-500 rounded-lg"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={FreshBites}
                alt=""
                className="hover:scale-105 ease-out duration-500 rounded-lg"
              />
            </div>
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
    </div>
  );
}
