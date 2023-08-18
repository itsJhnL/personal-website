import React from "react";
import Janggo from "../assets/images/Janggo.png";
import bg from "../assets/images/bg.png";
import { NavLink } from "react-router-dom";

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
                Helping start-ups, small businesses, and agencies achieve high
                quality website and exceptional user experience.
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
        <div className="flex items-center justify-center">
          <div className="grid grid-col-2 gap-4 max-w-6xl py-11">
            <h1>Recent Projects</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
