import React, { useState } from "react";
import Janggo from "../assets/images/Janggo.png";
import bg from "../assets/images/bg.png";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Projects from "../assets/Projects/port.png";
import FreshBites from "../assets/Projects/freshbites.png";

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
      <div className="bg-white h-screen">
        <div className="flex flex-row items-center justify-between max-w-6xl mx-auto px-4 h-full w-screen">
          <div className="grid grid-row-2 gap-4 max-w-6xl">
            <div className="text-4xl">
              <h1>
                Hey there, I'm{" "}
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
            <div className="max-w-xl">
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
          <div className="flex px-10 rounded-2xl max-w-xl relative">
            <img
              className="object-contain h-100vh w-96 md:w-auto contrast-0 relative blur-xl"
              src={bg}
              alt=""
            />
            <img
              className="object-contain h-100vh max-w-md absolute mx-16"
              src={Janggo}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f1]">
        <div className="flex flex-col items-center justify-center p-4 max-w-6xl mx-auto mb-5">
          <div className="relative text-center fixed py-24">
            <header className="text-6xl font-bold max-w-6xl mx-auto">
              <p className=" text-gray-700">Recent Projects</p>
            </header>
            {/* <p className="border-t-4 border-[#a3262e] mx-auto w-36"></p> */}
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-6xl pb-14">
            <div className="hover:scale-105 ease-out duration-500">
              <img src={FreshBites} alt="" className="rounded-lg" />
            </div>
            <div className="hover:scale-105 ease-out duration-500">
              <img src={Projects} alt="" className="rounded-lg" />
            </div>
            <div className="hover:scale-105 ease-out duration-500">
              <img src={Projects} alt="" className="rounded-lg" />
            </div>
          </div>
          <NavLink to="/Works" onClick={scrollUp}>
            <div className="relative border rounded-lg bg-white font-bold text-gray-700 p-3 hover:bg-rose-50">
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
