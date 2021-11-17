// Library Imports:
import "./mainaterforsaljare.css";
import React from "react";
import { Link } from "react-router-dom";

// Component Imports:

// Image Imports:

const MainAterforsaljare = () => {
  return (
    <div className="flexbox-mainaterforsaljare-container">
      <h2 id="mainaterforsaljare-heading">
        VÅRA ÅTERFÖRSÄLJARE
      </h2>
      <p id="mainaterforsaljare-paragraph">
        Önskar du komma i kontakt med en av våra återförsäljare? Vi har återförsäljare över hela landet. <br /> Klicka här för att hitta din närmaste återförsäljare.
      </p>
      <button type="button" id="mainaterforsaljare-button">
        <Link to="/aterforsaljare">ÖVERSIKT ÅTERFÖRSÄLJARE</Link>
      </button>
    </div>
  )
}

export default MainAterforsaljare;
