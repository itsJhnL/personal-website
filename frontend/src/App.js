import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Works from "./Pages/Works";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";
import Home from "./components/HomePage";
import NavBar from "./components/NavBar";
import Maintenance from "./maintenance";
import NotFound from "./components/NotFound";

function App() {
  const location = useLocation();
  const isMaintenanceRoute =
    location.pathname === "/maintenance" || location.pathname === "/Admin";

  useEffect(() => {
    const seoByPath = {
      "/": {
        title: "John Leo Bruno | Software Developer",
        description:
          "Software Developer building responsive web applications and clean user experiences.",
      },
      "/About": {
        title: "About | John Leo Bruno",
        description:
          "Learn about John Leo Bruno, his background, tech stack, and core web development skills.",
      },
      "/Works": {
        title: "Projects | John Leo Bruno",
        description:
          "Explore portfolio projects by John Leo Bruno, including responsive web applications and system builds.",
      },
      "/Experience": {
        title: "Experience | John Leo Bruno",
        description:
          "View professional experience, internships, certifications, and development journey.",
      },
      "/Contact": {
        title: "Contact | John Leo Bruno",
        description:
          "Get in touch with John Leo Bruno for freelance, part-time, or full-time software development opportunities.",
      },
      "/Services": {
        title: "Services | John Leo Bruno",
        description:
          "Discover software development and design services delivered by John Leo Bruno.",
      },
      "/maintenance": {
        title: "Maintenance | John Leo Bruno",
        description: "Portfolio is temporarily under maintenance.",
      },
      "/Admin": {
        title: "Admin | John Leo Bruno",
        description: "Admin dashboard for contact message management.",
      },
    };

    const fallback = {
      title: "John Leo Bruno | Software Developer",
      description:
        "Software Developer building responsive web applications and clean user experiences.",
    };

    const current = seoByPath[location.pathname] || fallback;
    document.title = current.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute("content", current.description);
    }
  }, [location.pathname]);

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
          <Route exact path="/Admin" element={<Admin />}></Route>
          <Route exact path="/maintenance" element={<Maintenance />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
