import React from "react";
import Footer from "../components/Footer";
import "../App.css";

function About() {
  return (
    <div className="bg-[#f1f1f1]">
      <div className="flex flex-col items-center justify-center">
        <div className="about max-w-6xl mx-auto text-9xl font-bold">
          <h1>About</h1>
        </div>
        <div className="grid grid-cols-2 gap-3 max-w-6xl mx-auto px-4 pt-36">
          <div className="mb-5">
            <sup>Introduce</sup>
            <h1 className="flex text-3xl mb-3">
              Hi! I'm&nbsp;<span className="font-semibold">John Leo Bruno</span>
            </h1>
            <p className="mb-5 text-justify text-gray-700">
              An aspiring <span>Web Developer</span> based in philippines. Since
              the beginning of my journey as a front end eng'r, I've done so
              many work I created successful responsive website that are fast,
              easy to use, and built with best practices. I'm quietly confident,
              naturally curious, and perpetually working on improving my chops
              one problem at a time.
            </p>
            <div>
              <sup>Main Skills</sup>
              <div className="bg-stone-100 p-5 mb-2">
                <div className="flex items-center justify-between font-semibold">
                  <h1>Web development</h1>
                  <div className="text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 640 512"
                      fill="#4B5563"
                    >
                      <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                    </svg>
                  </div>
                </div>

                <small className="text-gray-700">
                  Build websites and web apps using javascript and it's
                  frameworks.
                </small>
              </div>
              <div className="bg-stone-100 p-5 mb-5">
                <div className="flex items-center justify-between font-semibold">
                  <h1>Web and User Interface Design</h1>
                  <div className="SVG">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                      fill="#4B5563"
                    >
                      <path d="M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z" />
                    </svg>
                  </div>
                </div>

                <small className="text-gray-700">
                  Websites, User Experience, Visual Design
                </small>
              </div>
              <sup>Educations</sup>
              <div className="bg-stone-100 p-5">
                <div className="flex items-center justify-between font-semibold">
                  <h1>BS in Information Technology</h1>
                  <div className="SVG">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 640 512"
                      fill="#4B5563"
                    >
                      <path d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM256 416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H256V416zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z" />
                    </svg>
                  </div>
                </div>
                <sup>Major in Web Systems Technology</sup>
                <div>
                  <small className="text-gray-700">
                    Nueva Ecija University of Science and Technology -
                    Cabanatuan City Nueva Ecija
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            {/* Tech Stacks */}
            <sup>Technology Stack</sup>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
