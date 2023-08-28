import React from "react";
import Port from "../assets/Projects/port.png";
import freshbites from "../assets/Projects/freshbites.png";
import Footer from "../components/Footer";

function Projects() {
  return (
    <div className="bg-[#f1f1f1]">
      <div className="flex flex-col items-center justify-center">
        <div className="relative text-center fixed py-24">
          <h1 className="font-bold text-lg text-[#a3262e]">MY WORKS</h1>
          <header className="text-6xl font-bold max-w-6xl mx-auto">
            <p className=" text-gray-700">Portfolio</p>
          </header>
          <p className="border-t-4 border-[#a3262e] mx-auto w-20"></p>
        </div>
        <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto p-4 pb-24">
          {/* 1 */}
          <div className="">
            <img src={freshbites} alt="" className="rounded-lg"/>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1>Fresh Bites</h1>
            <p>Brief Information</p>
            <p>technology used</p>
            <a href="http://" target="_blank">
              View Demo
            </a>
            <p>Github</p>
          </div>
          {/* 2 */}
          <div className="flex flex-col items-center justify-center">
            <h1>Resto</h1>
            <p>Brief Information</p>
            <p>technology used</p>
            <a href="http://" target="_blank">
              View Demo
            </a>
            <p>Github</p>
          </div>
          <div className="">
            <img src={Port} alt="" className="rounded-lg"/>
          </div>
          {/* 3 */}
          <div className="">
            <img src={Port} alt="" className="rounded-lg"/>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1>Resto</h1>
            <p>Brief Information</p>
            <p>technology used</p>
            <a href="http://" target="_blank">
              View Demo
            </a>
            <p>Github</p>
          </div>
          {/* 4 */}
          <div className="flex flex-col items-center justify-center">
            <h1>Resto</h1>
            <p>Brief Information</p>
            <p>technology used</p>
            <a href="http://" target="_blank">
              View Demo
            </a>
            <p>Github</p>
          </div>
          <div className="">
            <img src={Port} alt="" className="rounded-lg"/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
