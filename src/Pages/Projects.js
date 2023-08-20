import React from "react";
import Port from "../assets/Projects/port.png";

function Projects() {
  return (
    <div className="bg-[#f1f1f1]">
      <div className="flex flex-col items-center justify-center">
        <header className="relative fixed pt-4">
          <p className="text-6xl font-bold">Projects</p>
        </header>
        <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto py-24">
          <div className="border">
            <img src={Port} alt="" />
          </div>
          <div className="border">
            <h1>Resto</h1>
            <p>technology used</p>
          </div>
          <div className="border">
            <h1>Resto</h1>
            <p>technology used</p>
          </div>
          <div className="border">
            <img src={Port} alt="" />
          </div>
          <div className="border">
            <img src={Port} alt="" />
          </div>
          <div className="border">
            <h1>Resto</h1>
            <p>technology used</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
