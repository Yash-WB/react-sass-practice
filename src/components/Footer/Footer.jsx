import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="links">
          <a href="#" className="mainLink">
            Careers
          </a>
          <hr />
          <a href="#" className="mainLink">
            Company
          </a>
          <div className="sublinks">
            <a href="#">Careers</a>
            <a href="#">Careers</a>
            <a href="#">Careers</a>
            <a href="#">Careers</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div className="links">
        <hr />
          <a href="#" className="mainLink">
            Careers
          </a>
          <div className="sublinks">
            <a href="#">Careers</a>
            <a href="#">Careers</a>
            <a href="#">Careers</a>
            <a href="#">Careers</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div className="links">
        <hr />
          <a href="#" className="mainLink">
            Careers
          </a>
          <div className="sublinks">
            <a href="#">Careers</a>
            <a href="#">Careers</a>
            <a href="#">Careers</a>
            <a href="#">Careers</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div className="links">
        <hr />
          <a href="#" className="mainLink">
            Careers
          </a>
          <div className="sublinks">
            <a href="#">Careers</a>
            <a href="#">Careers</a>
            <a href="#">Careers</a>
            <a href="#">Careers</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div className="links">
        <hr />
          <a href="#" className="mainLink">
            Careers
          </a>
          <hr />
          <a href="#" className="mainLink">
            Careers
          </a>
          <hr />
          <a href="#" className="mainLink">
            Company
          </a>
          <hr />
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <p className="heading">
            Get monthly updates from Schneider Electric delivered right to your
            inbox.
          </p>
          <div className="contactForm">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="I am a... " />
            <button>Submit</button>
          </div>
          <p>
            I'd like to receive news and commercial info from Schneider Electric
            and its affiliates via electronic communication means such as email,
            and I agree to the collection of information on the opening and
            clicks on these emails (using invisible pixels in the images), to
            measure performance of our communications and improve them. For more
            details, please read our Privacy Policy.
          </p>
          <div className="linksOfBottom">
            <a href="#" className="mainLink">
              Careers
            </a>
            <a href="#" className="mainLink">
              Careers
            </a>
            <a href="#" className="mainLink">
              Company
            </a>
            <a href="#" className="mainLink">
              Careers
            </a>
            <a href="#" className="mainLink">
              Careers
            </a>
            <a href="#" className="mainLink">
              Company
            </a>
          </div>
        </div>
        <div className="right">
          <img
            src="https://www.se.com/ww/en/assets/v2/564/media/305813/Impact%20Co%20logo%20English%20White-01-177x54.svg"
            alt=""
          />
          <div className="social">
            <div className="icons">
              <p className="social-container">
                <a
                  href="https://www.youtube.com/c/jamesqquick"
                  className="youtube social"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a
                  href="https://www.facebook.com/learnbuildteach/"
                  className="facebook social"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a
                  href="http://www.instagram.com/larnbuildteach"
                  className="instagram social"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://wwww.twitter.com" className="twitter social">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </p>
            </div>
            <h3>©2025, Schneider Electric</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
