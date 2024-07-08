import React from "react";
import "../styles/Footer.css";
import {
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaHome,
  FaBriefcase,
  FaCalendarAlt,
  FaPaperPlane,
  FaLock,
  FaFileAlt,
  FaCookieBite,
  FaComments,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="container-fluid footerbackground footer-section">
      <div className="questioncontainer container">
        <p className="question-text">Would you Like to Be a Partner?</p>
        <button className="join-now-button">
          JOIN NOW
          <FaPaperPlane className="send-icon" />
        </button>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-md-3 mt-4 mt-md-0">
            <p className="mt-3 footer-title">Explore</p>
            <div class="morse-code">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dash"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
            <div className="mt-2 contact-info">
              <div className="pt-3 contact-item">
                <div className="icon-container">
                  <FaGlobe />
                </div>
                <span className="address-text">
                  Suite 297 45353 Marquardt Ville,
                  <br /> Templeborough, 72959
                </span>
              </div>
              <div className="pt-3 contact-item">
                <div className="icon-container">
                  <FaEnvelope />
                </div>
                <span className="email-text">test@helo.tech</span>
              </div>
              <div className="pt-3 contact-item">
                <div className="icon-container">
                  <FaPhoneAlt />
                </div>
                <span className="phone-text">+1 (23) 123-7891</span>
              </div>
            </div>
            <div className="mt-4 social-media">
              <div className="social-icon-container">
                <FaFacebook className="social-icon" />
              </div>
              <div className="social-icon-container">
                <FaLinkedin className="social-icon" />
              </div>
              <div className="social-icon-container">
                <FaYoutube className="social-icon" />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 mt-4 mt-md-0">
            <p className="mt-3 footer-title">Explore</p>
            <div class="morse-code">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dash"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
            <div className="mt-2 contact-info">
              <div className="pt-3 contact-item">
                <div className="icon-container">
                  <FaGlobe />
                </div>
                <span className="address-text">
                  Suite 297 45353 Marquardt Ville,
                  <br /> Templeborough, 72959
                </span>
              </div>
              <div className="pt-3 contact-item">
                <div className="icon-container">
                  <FaEnvelope />
                </div>
                <span className="email-text">test@helo.tech</span>
              </div>
              <div className="pt-3 contact-item">
                <div className="icon-container">
                  <FaPhoneAlt />
                </div>
                <span className="phone-text">+1 (23) 123-7891</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 mt-4 mt-md-0">
            <p className="mt-3 footer-title">Quick Links</p>
            <div class="mt-2 morse-code">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dash"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
            <div className="mt-2 quick-links">
              <a href="#" className=" contact-item">
                <div className="icon-container">
                  <FaHome />
                </div>
                <span className="address-text">Home</span>
              </a>

              <a href="#" className="pt-3 contact-item">
                <div className="icon-container">
                  <FaEnvelope />
                </div>
                <span className="email-text">Contact Us</span>
              </a>

              <a href="#" className="pt-3 contact-item">
                <div className="icon-container">
                  <FaBriefcase />
                </div>
                <span className="phone-text">Careers</span>
              </a>

              <a href="#" className="pt-3 contact-item">
                <div className="icon-container">
                  <FaCalendarAlt />
                </div>
                <span className="phone-text">Events & News</span>
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3 mt-4 mt-md-0">
            <p className="mt-3 footer-title">Legal</p>
            <div class="mt-2 morse-code">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dash"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
            <div className="mt-2 quick-links">
            <a href="#" className="pt-3 contact-item">
          <div className="icon-container">
            <FaLock />
          </div>
          <span className="address-text">Privacy Policy</span>
        </a>

        {/* Terms of Use */}
        <a href="#" className="pt-3 contact-item">
          <div className="icon-container">
            <FaFileAlt />
          </div>
          <span className="email-text">Terms of Use</span>
        </a>

        {/* Cookies Settings */}
        <a href="#" className="pt-3 contact-item">
          <div className="icon-container">
            <FaCookieBite />
          </div>
          <span className="phone-text">Cookies Settings</span>
        </a>

        {/* Send Feedback */}
        <a href="#" className="pt-3 contact-item">
          <div className="icon-container">
            <FaComments />
          </div>
          <span className="phone-text">Send Feedback</span>
        </a>
            </div>
          </div>
          <div className="horizontal-dotted-line"></div>
          <p className="mt-4 copyright-text">Copyright @ 2023 Hello tech(Pvt) Ltd | All Rights Reserved</p>
        </div>
      </div>
</div>
  );
}

export default Footer;
