import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "./assets/bg1.jpg";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import About from "./pages/About";
import Sidebar from "./pages/SideBar";
import GoToTop from "./components/GoToTop";
import MobileHeader from "./components/MobileHeader";

function App() {
  return (
    <div className="pageLayout">
      <MobileHeader />
      <Header />
      <Sidebar />
      <div style={{ width: "100%" }}>
        <Home />
        <About />
        <Project />
        <Education />
        <Contact />
      </div>

      <GoToTop />
    </div>
  );
}

export default App;
1;
