import React from "react";
import Footer from "../components/Footer";
import "../App.css";

function Services() {
  return (
    <div className="bg-[#f1f1f1]">
      <div className="flex flex-col items-center justify-center pb-24">
        <div className="text-center py-24">
          <h1 className="font-bold text-lg text-[#a3262e]">WHAT I DO</h1>
          <header className="text-6xl font-bold max-w-6xl mx-auto">
            <p className=" text-gray-700">Services</p>
          </header>
          <p className="border-t-4 border-[#a3262e] mx-auto w-20"></p>
        </div>

        <div className="text-center grid grid-cols-3 gap-4 p-4 max-w-6xl mx-auto text-gray-700 MobileS:grid-cols-1 Tablet:grid-cols-2 Laptop:grid-cols-3">
          <div className="border bg-white p-5 rounded-lg space-y-5 hover:scale-105 ease-out duration-500">
            <h1 className="font-bold text-lg text-[#a3262e]">
              Web Development
            </h1>
            <p>
              Developing websites from the ground up utilizing a range of
              technologies including HTML, CSS, JavaScript, and associated
              frameworks.
            </p>
          </div>
          <div className="border bg-white p-5 rounded-lg space-y-5 hover:scale-105 ease-out duration-500">
            <h1 className="font-bold text-lg text-[#a3262e]">UI / UX Design</h1>
            <p>
              Creating websites with a focus on user experience and visual
              design.
            </p>
          </div>
          {/* <div className="border bg-white p-5 rounded-lg space-y-5 hover:scale-105 ease-out duration-500">
            <h1 className="font-bold text-lg text-[#a3262e]">Mobile Application</h1>
            <p>
              Ensuring that websites are optimized for various devices and
              screen sizes, providing a consistent user experience across
              platforms.
            </p>
          </div> */}
          {/* <div className="border bg-white p-5 rounded-lg space-y-5 hover:scale-105 ease-out duration-500">
            <h1 className="font-bold text-lg text-[#a3262e]">
              Version Control
            </h1>
            <p>
              Utilizing version control systems such as Git to monitor
              modifications, collaborate within teams, and oversee code
              repositories.
            </p>
          </div> */}
          <div className="border bg-white p-5 rounded-lg space-y-5 hover:scale-105 ease-out duration-500">
            <h1 className="font-bold text-lg text-[#a3262e]">
              Code Quality and Standards
            </h1>
            <p>
              Write clean, organized, and maintainable code following best
              practices and coding standards.
            </p>
          </div>
          <div className="border bg-white p-5 rounded-lg space-y-5 hover:scale-105 ease-out duration-500">
            <h1 className="font-bold text-lg text-[#a3262e]">
              Testing and Debugging
            </h1>
            <p>
              Debugging and troubleshooting front-end issues to ensure smooth
              functionality and a positive user experience.
            </p>
          </div>
          <div className="border bg-white p-5 rounded-lg space-y-5 hover:scale-105 ease-out duration-500">
            <h1 className="font-bold text-lg text-[#a3262e]">
              Continuous Learning
            </h1>
            <p>
              Stay updated with the latest front-end technologies, trends, and
              industry best practices to provide modern and innovative
              solutions.
            </p>
          </div>
          <div className="border bg-white p-5 rounded-lg space-y-5 hover:scale-105 ease-out duration-500">
            <h1 className="font-bold text-lg text-[#a3262e]">Collaboration</h1>
            <p>
              Collaborate with back-end developers, designers, and other team
              members to ensure seamless integration and a cohesive final
              product.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
