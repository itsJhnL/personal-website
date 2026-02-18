import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Works from "./Pages/Works";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Home from "./components/HomePage";
import NavBar from "./components/NavBar";
import Maintenance from "./maintenance";
import NotFound from "./components/NotFound";

function App() {
  const location = useLocation();
  const isMaintenanceRoute = location.pathname === "/maintenance";

  return (
    <div className="App">
      {!isMaintenanceRoute && <NavBar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Services" element={<Services />}></Route>
          <Route exact path="/Works" element={<Works />}></Route>
          <Route exact path="/Experience" element={<Experience />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/maintenance" element={<Maintenance />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
