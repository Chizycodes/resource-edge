import React from "react";
import "../assets/styles/Footer.css";
import { Link } from "react-router-dom";
import grayLogo from "../assets/images/gray_logo.png";
import facebookIcon from "../assets/images/facebook_icon.png";
import twitterIcon from "../assets/images/twitter_icon.png";
import instagramIcon from "../assets/images/instagram_icon.png";
import linkedinIcon from "../assets/images/linkedin_icon.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="footer-left">
          <img src={grayLogo} alt="Gray Logo" />
          <p>Throw paperwork into the trash.</p>
        </div>

        <div className="footer-right">
          <div className="social-icons">
            <Link to="/">
              <img src={facebookIcon} alt="Facebook Icon" />
            </Link>
            <Link to="/">
              <img src={twitterIcon} alt="Twitter Icon" />
            </Link>
            <Link to="/">
              <img src={linkedinIcon} alt="LinkedIn Icon" />
            </Link>
            <Link to="/">
              <img src={instagramIcon} alt="Instagram Icon" />
            </Link>
          </div>
          <div>
            <p>Copyright © Genesys DevStudio . All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
