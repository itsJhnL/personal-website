import React from "react";
import userData from "../components/data/data";
import Footer from "../components/Footer";

function Experience() {
  return (
    <div className="max-w-6xl mx-auto">
      <div>
        <div className="text-center py-24">
          {/* <h1 className="font-bold text-lg text-[#a3262e]">My experience</h1> */}
          <header className="text-6xl font-bold">
            <p className=" text-gray-700">Experience</p>
          </header>
          <p className="border-t-4 border-[#a3262e] mx-auto w-20"></p>
        </div>
        {userData.experience.map((item) => (
          <div className="relative m-5 pb-24">
            <div
              key={item.id}
              className="relative border border-gray-100 ease-out duration-500 hover:scale-105 rounded-lg shadow-2xl max-w-2xl mx-auto p-5"
            >
              <div className="absolute text-4xl text-[#a3262e]/20 font-bold -mt-10 right-0 top-0">
                {item.year}
              </div>
              <h1 className="text-2xl font-bold">{item.position}</h1>
              <p className="text-xl text-gray-500">{item.title}</p>
              <p className="pt-5 text-justify text-lg">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border mt-24 m-5"></div>
      <div className="flex flex-col pb-24 mx-5">
        <div className="text-center py-10">
          <header className=" font-bold max-w-6xl mx-auto">
            <p className=" text-gray-700 Laptop:text-6xl MobileS:text-5xl">
              Certifications
            </p>
          </header>
          <p className="border-t-4 border-[#a3262e] mx-auto w-20"></p>
        </div>

        {/* Certificates */}
        <div className="flex items-center justify-center pt-24">
          {/* <div className="items-center grid MobileS:grid-cols-1 Laptop:grid-cols-2 space-y-10 gap-8"> */}
          <div>
            {userData.certificates.map((item) => (
              <div key={item.id} className="py-5">
                <h1 className="text-xl font-bold">{item.name}</h1>
                <p className="text-lg">{item.description}</p>
                <p className="text-lg">{item.date}</p>
                <img
                  src={item.imageURL}
                  alt=""
                  className="h-auto w-full rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
