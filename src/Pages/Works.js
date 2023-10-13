import React from "react";
import userData from "../components/data/data";
import Footer from "../components/Footer";

function Projects() {
  return (
    <div className="bg-[#f1f1f1]">
      <div className="flex flex-col items-center justify-center mx-5">
        <div className="text-center py-24">
          <h1 className="font-bold text-lg text-[#a3262e]">MY WORKS</h1>
          <header className="text-6xl font-bold ">
            <p className=" text-gray-700">Portfolio</p>
          </header>
          <p className="border-t-4 border-[#a3262e] mx-auto w-20"></p>
        </div>
        <div className="max-w-6xl mx-auto grid MobileS:grid-cols-1 Tablet:grid-cols-2">
          {userData.works.map((item) => (
            <div key={item.id}>
              <ProjectCard
                title={item.title}
                imageURL={item.imageURL}
                desc={item.desc}
                tech={item.tech}
                link={item.link}
                code={item.code}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const ProjectCard = ({ imageURL, title, desc, tech, link, code }) => {
  return (
    <div className="p-5">
      <div className="overflow-hidden bg-gray border-2 hover:rounded-t-lg border-white hover:border-[#a3262e] ease-out duration-500 hover:scale-105 hover:shadow-2xl">
        <div className="relative">
          <img src={imageURL} alt="" className="h-auto w-full hover:rounded-t-md" />
        </div>
        <div className="m-5">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-justify">{desc}</p>
        </div>
        <div className="m-5">
          <h1 className="text-lg font-bold">Tech Used:</h1>
          <p>{tech}</p>
        </div>
        <div className="m-5 space-x-5">
          <a href={link} target="blank" rel="noopenner">
            View Demo
          </a>
          <a href={code} rel="noopenner">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
