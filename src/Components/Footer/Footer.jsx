// Library Imports:
import "./footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

// Component Imports:

// Image Imports:

const Footer = () => {
  return (
    <div className="flexbox-footer-container">
      <div className="flexbox-footer-item-container">
        <div className="flexbox-footer-item flexbox-footer-item-1">
          <h4 id="footer-business-name">
            Mobility Motors Maxus Sverige
          </h4>
          <span id="footer-business-tel">
            Telefon: <a href="tel: +46769999999">0769999999</a>
          </span>
          <span id="footer-business-email">
            E-post: <a href="mailto: info@rsasverige.se">info@rsasverige.se</a>
          </span>
        </div>
        <div className="flexbox-footer-item flexbox-footer-item-2">
          <h4 id="footer-social-heading">
            Följ oss på sociala medier
          </h4>
          <div className="flexbox-footer-social-icon-container">
            <a id="youtube-social" href="https://www.youtube.com/c/mobilitymotorssweden">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a id="facebook-social" href="https://www.facebook.com/mobilitymotorssweden/">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a id="instagram-social" href="https://www.instagram.com/mobilitymotorssweden">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <ul>
            <li id="li-1">
              <a id="footer-kontakt" href="/kontakt">
                Kontakta Oss
              </a>
            </li>
            <li id="li-2">
              <a id="footer-policy" href="https://www.mbil.se/om-oss/integritetspolicy">
                Integritetspolicy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
