import React from "react";
import "../styles/Hero.css";
import globe from "../Assests/header-globe.png";

function Hero() {
  return (
    <div className="p-0 container-fluid homebackground-image">
      <div className="row hero-section">
        <div className="col-12 col-md-6">
          <p className="maintopic-text">MAIN TOPIC</p>
          <div className="line-container">
            <div className="topicblueline-container"></div>
            <div className="topicredline-container"></div>
          </div>
          <p className="maintopic-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </p>
          <div className="blueline-container"></div>
        </div>
        <div className="col-12 col-md-6">
          <img src={globe} alt="hero-image" className="hero-image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
