import React from "react";
import Footer from "../components/Footer";
import Cert1 from "../assets/Certificates/cert (1).jpg";
import Cert2 from "../assets/Certificates/cert (2).jpg";
import Cert3 from "../assets/Certificates/cert (3).jpg";
import Cert4 from "../assets/Certificates/cert (4).jpg";
import Cert5 from "../assets/Certificates/cert (5).jpg";
import Cert6 from "../assets/Certificates/cert (6).jpg";
import Cert7 from "../assets/Certificates/cert (7).jpg";
import Cert8 from "../assets/Certificates/cert (8).jpg";
import Cert9 from "../assets/Certificates/cert (9).jpg";
import Cert10 from "../assets/Certificates/cert (10).jpg";
import Cert11 from "../assets/Certificates/cert (11).jpg";
import Cert12 from "../assets/Certificates/cert (12).jpg";

function Experience() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
        <div className="text-center py-24">
          <header className="text-6xl font-bold">
            <p className=" text-gray-700">Experience</p>
          </header>
          <p className="border-t-4 border-[#a3262e] mx-auto w-20"></p>
        </div>

        <div className="relative flex flex-col space-y-24 ">
          <div className="relative border border-gray-100 ease-out duration-500 hover:scale-105 rounded-lg max-w-2xl shadow-2xl p-5">
            <div className="absolute text-4xl text-[#a3262e]/20 font-bold -mt-10 right-0 top-0">
              2023
            </div>
            <h1 className="text-2xl font-bold">Graduation</h1>
            <p className="text-xl text-gray-500">
              Nueva Ecija University of Science and Technology
            </p>
            <p className="pt-5 text-justify text-lg">
              Bachelor's degree in Information Technology.
            </p>
          </div>
          {/* Intership */}
          <div className="relative border border-gray-100 ease-out duration-500 hover:scale-105 rounded-lg max-w-2xl shadow-2xl p-5">
            <div className="absolute text-4xl text-[#a3262e]/20 font-bold -mt-10 right-0 top-0">
              2023
            </div>
            <h1 className="text-2xl font-bold">Internship</h1>
            <p className="text-xl text-gray-500">iSynergies Inc</p>
            <p className="pt-5 text-justify text-lg">
              I was responsible for performing a wide range of software
              development tasks. This included actively engaging in both
              front-end and back-end development, allowing me to gain a
              comprehensive understanding of the full software development
              stack. I collaborated closely with senior software developers,
              contributing to the team's success by leveraging their expertise
              and mentorship to enhance my own skills and deliver high-quality
              software solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="border mt-24"></div>
      <div className="flex flex-col space-y-10 pb-24 m-5">
        <div className="text-center py-10">
          <header className="text-6xl font-bold max-w-6xl mx-auto">
            <p className=" text-gray-700">Certifications</p>
          </header>
          <p className="border-t-4 border-[#a3262e] mx-auto w-20"></p>
        </div>

        {/* Certificates */}
        <div className="flex items-center justify-between">
          <div className="">
            <h1>IRCITE</h1>
            <p>Desc</p>
            <p>Date</p>
          </div>
          <img src={Cert6} alt="" className="h-96 rounded-xl" />
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <h1>Cert Name</h1>
            <p>Desc</p>
            <p>Date</p>
          </div>
          <img src={Cert8} alt="" className="h-96 rounded-xl	" />
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <h1>Cert Name</h1>
            <p>Desc</p>
            <p>Date</p>
          </div>
          <img src={Cert1} alt="" className="h-96 rounded-xl	" />
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <h1>Cert Name</h1>
            <p>Desc</p>
            <p>Date</p>
          </div>
          <img src={Cert4} alt="" className="h-96 rounded-xl	" />
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <h1>Cert Name</h1>
            <p>Desc</p>
            <p>Date</p>
          </div>
          <img src={Cert5} alt="" className="h-96 rounded-xl	" />
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <h1>Cert Name</h1>
            <p>Desc</p>
            <p>Date</p>
          </div>
          <img src={Cert3} alt="" className="h-96 rounded-xl	" />
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <h1>Cert Name</h1>
            <p>Desc</p>
            <p>Date</p>
          </div>
          <img src={Cert7} alt="" className="h-96 rounded-xl	" />
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <h1>Cert Name</h1>
            <p>Desc</p>
            <p>Date</p>
          </div>
          <img src={Cert2} alt="" className="h-96 rounded-xl	" />
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <h1>Cert Name</h1>
            <p>Desc</p>
            <p>Date</p>
          </div>
          <img src={Cert9} alt="" className="h-96 rounded-xl	" />
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <h1>Cert Name</h1>
            <p>Desc</p>
            <p>Date</p>
          </div>
          <img src={Cert10} alt="" className="h-96 rounded-xl	" />
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <h1>Cert Name</h1>
            <p>Desc</p>
            <p>Date</p>
          </div>
          <img src={Cert11} alt="" className="h-96 rounded-xl	" />
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <h1>Cert Name</h1>
            <p>Desc</p>
            <p>Date</p>
          </div>
          <img src={Cert12} alt="" className="h-96 rounded-xl	" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
