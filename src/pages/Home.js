import React, { useEffect } from "react";
import "../style/Home.css";
import { FiArrowDown } from "react-icons/fi";
import { Button } from "react-bootstrap";
import "animate.css";

function Home() {
  useEffect(() => {
    const text = "Hello World!,\n I am Vashung Muilung";
    let index = 0;

    const intervalId = setInterval(() => {
      document.getElementById("animated-text").textContent = text.slice(
        0,
        index
      );
      index++;

      if (index > text.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval for your desired speed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>
          {" "}
          <span id="animated-text"></span>
        </h1>

        <div className="content animate__animated animate__fadeIn">
          <p>
            I'm a passionate full-stack engineer with expertise in building web
            applications. Welcome to my portfolio!
          </p>
          <a href="#projects" className="cta-button">
            View My Projects
          </a>
        </div>
      </div>

      <div className="button-down" variant="light">
        {" "}
        <a href="#about">
          <FiArrowDown />
        </a>{" "}
      </div>
    </section>
  );
}

export default Home;
