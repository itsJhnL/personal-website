import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Admin from "./Pages/Admin";
import Home from "./components/HomePage";
import NavBar from "./components/NavBar";
import Maintenance from "./maintenance";
import NotFound from "./components/NotFound";
import { useTheme } from "./utils/theme";

function App() {
  const location = useLocation();
  const { isDark } = useTheme();
  const isMaintenanceRoute =
    location.pathname === "/maintenance" || location.pathname === "/Admin";

  useEffect(() => {
    const seoByPath = {
      "/": {
        title: "John Leo Bruno | Software Developer",
        description:
          "Software Developer building responsive web applications and clean user experiences.",
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
    <div
      className={`App min-h-screen transition-colors duration-500 ${
        isDark ? "bg-[#07111f] text-white" : "bg-[#f7f8fb] text-[#1f2937]"
      }`}
    >
      {!isMaintenanceRoute && <NavBar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/About" element={<Navigate to="/" replace />}></Route>
          <Route exact path="/Services" element={<Navigate to="/" replace />}></Route>
          <Route exact path="/Works" element={<Navigate to="/" replace />}></Route>
          <Route exact path="/Experience" element={<Navigate to="/" replace />}></Route>
          <Route exact path="/Contact" element={<Navigate to="/" replace />}></Route>
          <Route exact path="/Admin" element={<Admin />}></Route>
          <Route exact path="/maintenance" element={<Maintenance />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
