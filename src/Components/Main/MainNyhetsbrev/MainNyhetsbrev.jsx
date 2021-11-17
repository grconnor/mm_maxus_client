// Library Imports:
import "./mainnyhetsbrev.css";
import React from "react";

// Component Imports:

// Image Imports:

const MainNyhetsbrev = () => {
  return (
    <div className="flexbox-mainnyhetsbrev-container">
      <h2 id="mainnyhetsbrev-heading">
        ANMÄL DIG TILL VÅRT NYHETSBREV
      </h2>
      <div className="flexbox-mainnyhetsbrev-input-container">
        <input type="text" id="nyhetsbrev-input" placeholder="Fyll i din e-postadress" />
        <button type="button" id="nyhetsbrev-button">
          Skicka
        </button>
      </div>
    </div>
  )
}

export default MainNyhetsbrev;
