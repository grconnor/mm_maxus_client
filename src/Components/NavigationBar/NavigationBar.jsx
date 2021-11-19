// Library Imports:
import "./navigationbar.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Header, Menu, Grid } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";

// Component Imports:
import Hamburger from "../Hamburger/Hamburger";

// Image Imports:
// import isuzuLogo from "../images/logos/isuzu_logo.png";
// import mobilityLogo from "../images/logos/mobility_motors_logo.png";
import maxusLogo from "../../Images/Logos/maxus-logo.png";

const NavigationBar = () => {
  const [inHover, setInHover] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const handleItemClick = ({ name }) => {
    setActiveItem(name);
  };
  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen);
  }

  const handleRedirect = () => {
    window.location.href = "/";
  };

  const handleMouseEnter = () => {
    setInHover(true);
  };

  const handleMouseLeave = () => {
    setInHover(false);
  };

  const isMobileDevice = useMediaQuery({ query: "(max-width: 1201px)" });
  const isComputerDevice = useMediaQuery({ query: "(min-width: 1202px)" });

  const list = document.getElementById("mobile-navigation-list");
  const burger1 = document.getElementById("burger1");
  const burger2 = document.getElementById("burger2");
  const burger3 = document.getElementById("burger3");

  if (list) {
    if (hamburgerOpen) {
      list.style.display = "inline";
    } else {
      list.style.display = "none";
    }
  }

  if (burger1) {
    if (hamburgerOpen) {
      burger1.style.transform = "rotate(40deg)";
    } else {
      burger1.style.transform = "rotate(0)";
    }
  }

  if (burger2) {
    if (hamburgerOpen) {
      burger2.style.transform = "translateX(100%)";
      burger2.style.opacity = 0;
    } else {
      burger2.style.transform = "translateX(0)";
      burger2.style.opacity = 1;
    }
  }

  if (burger3) {
    if (hamburgerOpen) {
      burger3.style.transform = "rotate(-40deg)";
    } else {
      burger3.style.transform = "rotate(0)";
    }
  }

  return (
      <div className="mobile-nav-outer-container">
        <ul id="mobile-navigation-list">
          <li>
            <a href="/">Startsida</a>
          </li>
          <li>
            <a href="/personbilar">Våra Personbilar</a>
          </li>
          <li>
            <a href="/eltransportbilar">Våra Eltransportbilar</a>
          </li>
          <li>
            <a href="/aterforsaljare">Våra Återförsäljare</a>
          </li>
          <hr id="navigationbar-hr-line" />
          <li>
            <a className="lower-list-item" href="/kontakt">Kontakta Oss</a>
          </li>
          <li>
            <a className="lower-list-item" href="/omoss">Om xxx</a>
          </li>
          <li>
            <a className="lower-list-item" href="/prislista">PRISLISTA</a>
          </li>
        </ul>
        <div className="topnav-mobile-hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
        <div className="flexbox-navigationbar-logo-container">
          <img src={maxusLogo} alt="maxus-logo" />
        </div>
      </div>
  );
};

export default NavigationBar;
