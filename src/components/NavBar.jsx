import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

function Main() {
  const [openNav, setOpenNav] = useState();

  const showNav = () => {
    setOpenNav(!openNav);
  };

  const [clicked, setScroll] = useState();

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    setScroll(true);
  };

  const NavLinks = () => {
    return (
      <>
        <NavLink
          to="/About"
          style={({ isActive }) => ({
            color: isActive ? "#a3262e" : "",
            fontSize: isActive ? "18px" : "",
            fontWeight: isActive ? "bold" : "",
          })}
          className="text-base text-gray-600 font-normal"
          onClick={scrollUp}
        >
          {clicked ? "About" : "About"}
        </NavLink>
        <NavLink
          to="/Services"
          style={({ isActive }) => ({
            color: isActive ? "#a3262e" : "",
            fontSize: isActive ? "18px" : "",
            fontWeight: isActive ? "bold" : "",
          })}
          className="text-base text-gray-600 font-normal"
          onClick={scrollUp}
        >
          {clicked ? "Services" : "Services"}
        </NavLink>
        <NavLink
          to="/Works"
          style={({ isActive }) => ({
            color: isActive ? "#a3262e" : "",
            fontSize: isActive ? "18px" : "",
            fontWeight: isActive ? "bold" : "",
          })}
          className="text-base text-gray-600 font-normal"
          onClick={scrollUp}
        >
          {clicked ? "Works" : "Works"}
        </NavLink>
        <NavLink
          to="/Contact"
          style={({ isActive }) => ({
            color: isActive ? "#a3262e" : "",
            fontSize: isActive ? "18px" : "",
            fontWeight: isActive ? "bold" : "",
          })}
          className="text-base text-gray-600 font-normal"
          onClick={scrollUp}
        >
          {clicked ? "Contact" : "Contact"}
        </NavLink>
      </>
    );
  };

  const Menu = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M3 6h18M3 12h18M3 18h18"
        />
      </svg>
    );
  };

  const Close = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
          <path
            fill="currentColor"
            d="m12 14.121l5.303 5.304a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.303a1.5 1.5 0 1 0 2.122 2.122L12 14.12Z"
          />
        </g>
      </svg>
    );
  };

  return (
    <>
      <nav className="bg-white z-50 relative MobileS:sticky Laptop:relative top-0 flex flex-row items-center justify-between max-w-6xl mx-auto px-4 py-8">
        <div className="text-xl font-black text-[#a3262e]">
          <NavLink to="/">
            {"<"}
            <button className="text-flicker-in-glow " onClick={scrollUp}>
              {clicked ? "JanggoDev" : "JanggoDev"}
            </button>
            {"/>"}
          </NavLink>
        </div>
        <div className="space-x-8 MobileS:hidden Laptop:block">
          {/* Navbar */}
          <NavLinks />
        </div>
        <div className="flex Laptop:hidden">
          <button className="text-[#a3262e]" onClick={showNav}>
            {openNav ? <Close /> : <Menu />}
          </button>
        </div>
        <div className="text-2xl MobileS:hidden Tablet:hidden Laptop:block">
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

            <a href="https://www.behance.net/janggodev" target="blank">
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
      </nav>
      {openNav && (
        <>
          <div className="z-[300] bg-[#f1f1f1] fixed top-0 fixed flex flex-col items-center justify-center h-[100vh] w-full Laptop:hidden">
            <span
              className="text-[#a3262e] absolute top-10 right-5"
              onClick={showNav}
            >
              {openNav ? <Close /> : ""}
            </span>
            <button
              className="flex flex-col items-center justify-center space-y-10 text-lg"
              onClick={showNav}
            >
              {openNav ? <NavLinks /> : ""}
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Main;
