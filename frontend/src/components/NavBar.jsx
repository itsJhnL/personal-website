import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Nav.css";

const navItems = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Main() {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((prev) => !prev);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const NavLinks = ({ mobile = false }) => (
    <div
      className={
        mobile
          ? "flex flex-col items-center gap-7"
          : "flex items-center gap-7"
      }
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className="text-base font-medium text-gray-700 duration-300 hover:text-[#2f6b6b]"
          onClick={() => {
            scrollToSection(item.id);
            if (mobile) {
              setOpenNav(false);
            }
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );

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
      <div className="sticky top-0 z-50 border-b border-white/40 bg-[#fff]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl flex-row items-center justify-between px-5 py-4">
          <div className="text-3xl font-black text-[#2f6b6b]">
            <NavLink to="/">
              <button
                type="button"
                onClick={() => scrollToSection("top")}
              >
                {"</>"}
              </button>
            </NavLink>
          </div>
          <div className="MobileS:hidden Laptop:block">
            <NavLinks />
          </div>
          <div className="flex Laptop:hidden">
            <button
              type="button"
              className="text-[#2f6b6b]"
              onClick={toggleNav}
            >
              {openNav ? <Close /> : <Menu />}
            </button>
          </div>
        </nav>
      </div>
      <AnimatePresence>
        {openNav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 z-[300] flex h-[100vh] w-full flex-col items-center justify-center bg-[#f7f8fb]/95 backdrop-blur-md Laptop:hidden"
          >
            <button
              type="button"
              className="absolute right-5 top-10 flex font-bold text-[#2f6b6b]"
              onClick={toggleNav}
            >
              Close
              <Close />
            </button>
            <NavLinks mobile />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
