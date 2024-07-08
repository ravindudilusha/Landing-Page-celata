import React from "react";
import { FaPlus } from "react-icons/fa";
import "../styles/Header.css";
import Logo from '../Assests/logo.png';

function Header() {
  return (
    <div className="header-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent Header">
        <div className="container-fluid p-2 p-md-0">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="logo" className="logo-image"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto navbarstyle">
              <li className="nav-item mx-3">
                <a className="nav-link text-white" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-white" href="#">
                  About Us <FaPlus />
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-white" href="#">
                  Careers
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-white" href="#">
                  Our Platforms <FaPlus />
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-white" href="#">
                  News and Events
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="parallelogram"></div>
    </div>
  );
}

export default Header;
