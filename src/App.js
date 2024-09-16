import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Works from "./Pages/Works";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Home from "./components/HomePage";
import NavBar from "./components/NavBar";
import Maintenance from "./maintenance";

function App() {
  return (
    <div className="App">
      <Maintenance />
      {/* <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Services" element={<Services />}></Route>
        <Route exact path="/Works" element={<Works />}></Route>
        <Route exact path="/Experience" element={<Experience />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
