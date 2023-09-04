import React from "react";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div className="flex flex-row items-center justify-between max-w-6xl mx-auto px-4 py-14 md:pb-35">
      <div className="text-xl font-black text-[#a3262e]">
        <NavLink to="/">
          {"<"}<span className="text-flicker-in-glow ">JanggoDev</span>{"/>"}
        </NavLink>
      </div>
      <div className="space-x-8">
        {/* Navbar */}
        <NavLink
          to="/About"
          style={({ isActive }) => ({
            color: isActive ? "#a3262e" : "",
            fontSize: isActive ? "18px" : "",
            fontWeight: isActive ? "bold" : "",
          })}
          className="text-base text-gray-600 font-normal"
        >
          About
        </NavLink>
        <NavLink
          to="/Services"
          style={({ isActive }) => ({
            color: isActive ? "#a3262e" : "",
            fontSize: isActive ? "18px" : "",
            fontWeight: isActive ? "bold" : "",
          })}
          className="text-base text-gray-600 font-normal"
        >
          Services
        </NavLink>
        <NavLink
          to="/Works"
          style={({ isActive }) => ({
            color: isActive ? "#a3262e" : "",
            fontSize: isActive ? "18px" : "",
            fontWeight: isActive ? "bold" : "",
          })}
          className="text-base text-gray-600 font-normal"
        >
          Works
        </NavLink>
        {/* <NavLink
          to="/Experience"
          style={({ isActive }) => ({
            color: isActive ? "#a3262e" : "",
            fontSize: isActive ? "18px" : "",
            fontWeight: isActive ? "bold" : "",
          })}
          className="text-base text-gray-600 font-normal"
        >
          Experience
        </NavLink> */}
        <NavLink
          to="/Contact"
          style={({ isActive }) => ({
            color: isActive ? "#a3262e" : "",
            fontSize: isActive ? "18px" : "",
            fontWeight: isActive ? "bold" : "",
          })}
          className="text-base text-gray-600 font-normal"
        >
          Contact
        </NavLink>{" "}
      </div>
      <div className="text-2xl">
        {/* Socials */}
        <ul className="flex flex-row items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/johnleobruno/"
            target="blank"
            className="text-gray-600"
          >
            <i className="headerIcons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#a3262e"
                  d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"
                />
              </svg>
            </i>
          </a>

          <a href="https://github.com/itsJhnL" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#a3262e"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
              />
            </svg>
          </a>

          <a href="https://www.behance.net/iamjohnleo" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#a3262e"
                d="M7.443 5.35c.639 0 1.23.05 1.77.198c.541.099.984.297 1.377.544c.394.248.689.594.885 1.039c.197.445.296.99.296 1.583c0 .693-.148 1.286-.492 1.731c-.295.446-.787.841-1.377 1.138c.836.248 1.475.693 1.869 1.287c.393.593.639 1.335.639 2.176c0 .693-.148 1.286-.394 1.781c-.245.495-.639.94-1.082 1.237a5.08 5.08 0 0 1-1.573.692c-.59.149-1.18.248-1.77.248H1V5.35h6.443Zm-.394 5.54c.541 0 .984-.148 1.328-.395c.344-.247.492-.693.492-1.237c0-.297-.05-.593-.148-.791c-.098-.198-.246-.347-.442-.495c-.197-.099-.394-.198-.64-.247c-.246-.05-.491-.05-.787-.05H4v3.216h3.05Zm.148 5.838c.295 0 .59-.05.836-.099c.246-.05.492-.148.688-.297a1.76 1.76 0 0 0 .492-.544c.098-.247.197-.544.197-.89c0-.693-.197-1.188-.59-1.534c-.394-.297-.935-.445-1.574-.445H4v3.81h3.197Zm9.492-.05c.393.396.983.594 1.77.594c.541 0 1.033-.148 1.426-.395c.394-.297.64-.594.738-.89h2.41c-.394 1.186-.984 2.027-1.77 2.572c-.788.494-1.722.791-2.853.791a5.751 5.751 0 0 1-2.115-.396a3.928 3.928 0 0 1-1.574-1.088a3.93 3.93 0 0 1-.983-1.633c-.246-.643-.345-1.335-.345-2.127c0-.742.099-1.434.345-2.078a5.34 5.34 0 0 1 1.033-1.681a4.985 4.985 0 0 1 1.573-1.089a5.49 5.49 0 0 1 2.066-.396c.836 0 1.574.149 2.213.495c.64.346 1.131.742 1.524 1.336c.394.544.69 1.187.886 1.88c.098.692.147 1.385.098 2.176H16c0 .792.295 1.534.689 1.93Zm3.098-5.194c-.344-.346-.885-.544-1.525-.544c-.442 0-.787.1-1.082.248c-.295.148-.491.346-.688.544a1.323 1.323 0 0 0-.345.692c-.049.248-.098.446-.098.643h4.426c-.098-.742-.344-1.236-.688-1.583ZM15.459 6.29h5.508v1.336H15.46V6.29Z"
              />
            </svg>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Main;
