import React from "react";
import Port from "../assets/Projects/port.png";
import Footer from "../components/Footer";

function Projects() {
  return (
    <div className="bg-[#f1f1f1]">
      <div className="flex flex-col items-center justify-center">
        <header className="relative fixed text-6xl font-bold max-w-6xl mx-auto py-24">
          <p className="underline underline-offset-4 decoration-2 decoration-[#a3262e] text-gray-700">Projects</p>
        </header>
        <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto p-4 pb-24">
          {/* 1 */}
          <div className="border">
            <img src={Port} alt="" />
          </div>
          <div className="border">
            <h1>Resto</h1>
            <p>technology used</p>
          </div>
          {/* 2 */}
          <div className="border">
            <h1>Resto</h1>
            <p>technology used</p>
          </div>
          <div className="border">
            <img src={Port} alt="" />
          </div>
          {/* 3 */}
          <div className="border">
            <img src={Port} alt="" />
          </div>
          <div className="border">
            <h1>Resto</h1>
            <p>technology used</p>
          </div>
          {/* 4 */}
          <div className="border">
            <h1>Resto</h1>
            <p>technology used</p>
          </div>
          <div className="border">
            <img src={Port} alt="" />
          </div>
          {/* 5 */}
          <div className="border">
            <img src={Port} alt="" />
          </div>
          <div className="border">
            <h1>Resto</h1>
            <p>technology used</p>
          </div>
          {/* 6 */}
          <div className="border">
            <h1>Resto</h1>
            <p>technology used</p>
          </div>
          <div className="border">
            <img src={Port} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
