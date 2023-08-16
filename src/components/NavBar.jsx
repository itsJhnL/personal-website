import React from "react";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div className="flex items-center justify-around">
      <div>
        <NavLink to="/Home">LOGO</NavLink>
      </div>
      <div>
        <ul className="flex items-center justify-center space-x-12">
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/Experience">Experience</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex">
        {/* Socials */}
        <ul>
          <li>
            <a href="http://">
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
