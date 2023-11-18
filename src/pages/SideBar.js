import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { VscOctoface, VscProject, VscCallIncoming } from "react-icons/vsc";
import { HiHomeModern } from "react-icons/hi2";
import { IoSchoolSharp } from "react-icons/io5";
import "../style/SideBar.css"; // Create a corresponding CSS file for styling

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { text: "Home", target: "home", icon: "" },
    { text: "About me", target: "about", icon: "VscOctoface" },
    { text: "Projects", target: "projects", icon: "VscProject" },
    { text: "Education", target: "education", icon: "IoSchoolSharp" },
    { text: "Contact", target: "contact", icon: "VscCallIncoming" },
  ];
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className={`sidebar ${isVisible ? "visible" : ""}`}>
      {/* Add links for navigation within the sidebar */}
      <a href="#home" title="Home"><HiHomeModern /></a>
      <a href="#about" title="About"><VscOctoface /></a>
      <a href="#projects" title="Project"><VscProject /></a>
      <a href="#education" title="Education"><IoSchoolSharp /></a>
      <a href="#contact" title="Contact"><VscCallIncoming /></a>

     {/*  <div className="nav-links">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            target={link.target}
            icon={link.icon}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Sidebar;
