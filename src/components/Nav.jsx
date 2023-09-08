import React from "react";

export default function Nav() {
  return (
    <div className="space-x-8 MobileS:hidden Laptop:block">
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
          className="text-base text-gray-600 font-normal">
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
  );
}
