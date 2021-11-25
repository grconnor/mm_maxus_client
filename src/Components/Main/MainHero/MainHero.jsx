// Library Imports:
import "./mainhero.css";
import React from "react";

// Component Imports:

// Image Imports
import heroBanner from "../../../Images/hero-image-1680x930.jpeg";

const MainHero = () => {
  function modellerRedirect() {
    window.scrollTo(0, 2250)
  }

  function provkorningRedirect() {
    window.scrollTo(0, 3500)
  }

  return (
    <div className="flexbox-mainhero-container">
      <div className="flexbox-mainhero-text-container">
        <h1 id="mainhero-heading">
          100% Eldrivna Person och <br /> Transportbilar
        </h1>
        <div className="flexbox-mainhero-button-container">
          {/* <button type="button" id="mainhero-modeller-button">
            <a href="/modeller">Se Modellerna</a>
          </button> */}
          {/* <a id="modeller-a" href="/modeller">Se Modellerna</a> */}
          <button onClick={modellerRedirect} type="button" id="modeller-button">
            Se Modellerna
          </button>
          {/* <button type="button" id="mainhero-aterforsaljare-button">
            <a href="/aterforsaljare">Våra Återförsäljare</a>
          </button> */}
          <button
            onClick={provkorningRedirect}
            type="button"
            id="provkorning-button"
          >
            Boka Provkörning
          </button>
          {/* <a id="aterforsaljare-a" href="/aterforsaljare">Våra Återförsäljare</a> */}
        </div>
      </div>
    </div>
  );
};

export default MainHero;
