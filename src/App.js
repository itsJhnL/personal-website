import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Home from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Services" element={<Services />}></Route>
        <Route exact path="/Projects" element={<Projects />}></Route>
        <Route exact path="/Experience" element={<Experience />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
