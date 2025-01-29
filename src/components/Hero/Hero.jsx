import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="main">
        <h2>Innovate with Schneider Electric</h2>
        <div className="paragraphs">
          <p>
            Our <strong>purpose is to create Impact</strong> by empowering all{" "}
            <strong>to make the most of&nbsp;</strong>
            <strong>our energy and resources</strong>, bridging progress and
            sustainability for all.
          </p>
          <p>
            At Schneider, we call this <strong>Life Is On</strong>.
          </p>
        </div>
        <div className="buttons">
          <button className="button1">
            Our Purpose{" "}
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
            >
              <path
                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                fill="#ffffff"
              />
            </svg>
          </button>
          <button className="button2">Investor Relations
          <svg
              width="15px"
              height="15px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
            >
              <path
                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                fill="#ffffff"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
