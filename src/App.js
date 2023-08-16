import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/Home" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Projects" element={<Projects />}></Route>
        <Route exact path="/Experience" element={<Experience />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
