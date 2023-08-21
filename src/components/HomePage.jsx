import React from "react";
import Janggo from "../assets/images/Janggo.png";
import bg from "../assets/images/bg.png";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Projects from "../assets/Projects/port.png";

export default function HomePage() {
  return (
    <div>
      <div className="bg-white pt-11">
        <div className="flex flex-row items-center justify-between max-w-6xl mx-auto px-4">
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
                className="rounded-lg text-base font-medium bg-[#a3262e] border border-[#a3262e] text-white p-2"
              >
                Let's work together!
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
          <header className="relative fixed text-6xl font-bold max-w-6xl mx-auto py-24">
            <p className="underline underline-offset-4 decoration-2 decoration-[#a3262e] text-gray-700">
              Recent Projects
            </p>
          </header>
          <div className="grid grid-cols-2 gap-7 max-w-6xl pb-14">
            <div className="hover:scale-105 ease-out duration-500">
              <img src={Projects} alt="" className="rounded-lg" />
            </div>
            <div className="hover:scale-105 ease-out duration-500">
              <img src={Projects} alt="" className="rounded-lg" />
            </div>
            <div className="hover:scale-105 ease-out duration-500">
              <img src={Projects} alt="" className="rounded-lg" />
            </div>
          </div>
          <div className="border rounded-lg bg-white font-bold text-gray-700 p-5">
            <NavLink to="/Projects">
              <div className="flex space-x-2">
                <i className="border border-[#a3262e]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#a3262e"
                      d="M6 7c0 .55.45 1 1 1h7.59l-8.88 8.88a.996.996 0 1 0 1.41 1.41L16 9.41V17c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1z"
                    />
                  </svg>
                </i>{" "}
                <span className="text-[#a3262e]">View All</span>
              </div>
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
