import React from "react";
import userData from "../components/data/data";
import Footer from "../components/Footer";

function Projects() {
  const ProjectCard = ({ imageURL, title, desc, tech, link, code }) => {
    return (
      <div className="m-3">
        <div
          // key={id}
          className="bg-gray border-4 rounded-lg border-white ease-out duration-500 hover:scale-105 hover:shadow-2xl h-auto MobileS:w-auto Tablet:w-96"
        >
          <>
            <img src={imageURL} alt="" className="h-auto w-full" />
          </>
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

  return (
    <div className="bg-[#f1f1f1]">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center py-24">
          <h1 className="font-bold text-lg text-[#a3262e]">MY WORKS</h1>
          <header className="text-6xl font-bold max-w-6xl mx-auto">
            <p className=" text-gray-700">Portfolio</p>
          </header>
          <p className="border-t-4 border-[#a3262e] mx-auto w-20"></p>
        </div>
        {userData.works.map((item) => (
          <div className="">
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
      <Footer />
    </div>
  );
}

export default Projects;
