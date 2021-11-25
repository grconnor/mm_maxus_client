// Library Imports:
import "./mainelbilar.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Component Imports:

// Image Imports:
import EuniqMPVSmall from "../../../Images/Elbilar/Euniq-mpv-small.png";
import eDeliver3Small from "../../../Images/Elbilar/eDeliver3-small.png";
import eDeliver9Small from "../../../Images/Elbilar/eDeliver9-small.png";
import eDeliver9ChassisSmall from "../../../Images/Elbilar/eDeliver9-chassis-small.png";
import Euniq6Small from "../../../Images/Elbilar/Euniq6-small.png";

import EuniqMPVBig from "../../../Images/Elbilar/Euniq-mpv-big.png";
import eDeliver3Big from "../../../Images/Elbilar/eDeliver3-big.png";
import eDeliver9Big from "../../../Images/Elbilar/eDeliver9-big.png";
import eDeliver9ChassisBig from "../../../Images/Elbilar/eDeliver9-chassis-big.png";
import Euniq6Big from "../../../Images/Elbilar/Euniq6-big.png";

class MainElbilar extends Component {
  state = {
    step: 1,
  };

  onClick = (value) => (e) => {
    const { step } = this.state;
    this.setState({
      step: value,
    });
    // if (value == "1") {
    //   document.getElementById("item-1").style.opacity = "1";
    // } else if (value == "2") {
    //   document.getElementById("item-2").style.opacity = "1";
    // } else if (value == "3") {
    //   document.getElementById("item-3").style.opacity = "1";
    // } else if (value == "4") {
    //   document.getElementById("item-4").style.opacity = "1";
    // } else if (value == "5") {
    //   document.getElementById("item-5").style.opacity = "1";
    // } else {
    //   console.log("None selected")
    // }
  };

  render() {
    const { step } = this.state;

    return (
      <div className="flexbox-mainelbilar-container">
        <div className="flexbox-mainelbilar-top-container">
          <h1 id="mainelbilar-heading">VÅRA ELBILAR</h1>
          <div className="flexbox-mainelbilar-selection-container">
            <div
              className="flexbox-mainelbilar-item"
              id="item-1"
              onClick={this.onClick("1")}
            >
              <img src={EuniqMPVSmall} alt="Euniq-MPV" />
              <h4 id="item-heading">Euniq MPV</h4>
            </div>
            <div
              className="flexbox-mainelbilar-item"
              id="item-2"
              onClick={this.onClick("2")}
            >
              <img src={eDeliver3Small} alt="eDeliver-3" />
              <h4 id="item-heading">e-Deliver 3</h4>
            </div>
            <div
              className="flexbox-mainelbilar-item"
              id="item-3"
              onClick={this.onClick("3")}
            >
              <img src={eDeliver9Small} alt="eDeliver-9" />
              <h4 id="item-heading">e-Deliver 9</h4>
            </div>
            <div
              className="flexbox-mainelbilar-item"
              id="item-4"
              onClick={this.onClick("4")}
            >
              <img src={eDeliver9ChassisSmall} alt="eDeliver-9-Chassis" />
              <h4 id="item-heading">e-Deliver 9 chassis</h4>
            </div>
            <div
              className="flexbox-mainelbilar-item"
              id="item-5"
              onClick={this.onClick("5")}
            >
              <img src={Euniq6Small} alt="Euniq-6" />
              <h4 id="item-heading">Euniq 6</h4>
            </div>
          </div>
        </div>
        <div className="flexbox-mainelbilar-bottom-container">
          {(() => {
            switch (step) {
              case "1":
                return (
                  <div className="flexbox-mainelbilar-euniqmpv-container">
                    <img src={EuniqMPVBig} alt="Euniq-MPV" />
                    <div className="flexbox-mainelbilar-euniqmpv-text-container">
                      <h2 id="euniq-mpv-heading">Euniq MPV</h2>
                      <ul>
                        <li>Räckvidd från 260-356 km (WLTP combined/urban)</li>
                        <li>Pris från 499.900:-</li>
                        <li>Rymlig 7-sitsig familjebil</li>
                      </ul>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href =
                            "https://maxus.se/modeller/euniq-mpv/";
                        }}
                        type="button"
                        id="mainelbilar-euniq-mpv-button"
                      >
                        LÄS MER HÄR
                      </button>
                      <button
                        type="button"
                        id="mainelbilar-euniq-mpv-provkor-button"
                      >
                        BOKA PROVKÖRNING
                      </button>
                    </div>
                  </div>
                );
              case "2":
                return (
                  <div className="flexbox-mainelbilar-edeliver3-container">
                    <img src={eDeliver3Big} alt="e-Deliver-3" />
                    <div className="flexbox-mainelbilar-edeliver3-text-container">
                      <h2 id="edeliver3-heading">e-Deliver 3</h2>
                      <ul>
                        <li>Räckvidd från 158-342 km (WLTP combined/urban)</li>
                        <li>Lastvolym från 4,8-6,3 m³</li>
                        <li>Batterigarati: 8 år/160.000 km</li>
                      </ul>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href =
                            "https://maxus.se/modeller/e-deliver-3-eltransportbil/";
                        }}
                        type="button"
                        id="mainelbilar-edeliver3-button"
                      >
                        LÄS MER HÄR
                      </button>
                      <button
                        onClick={() => {
                          window.scrollTo(0, 500);
                        }}
                        type="button"
                        id="mainelbilar-edeliver3-provkor-button"
                      >
                        BOKA PROVKÖRNING
                      </button>
                    </div>
                  </div>
                );
              case "3":
                return (
                  <div className="flexbox-mainelbilar-edeliver9-container">
                    <img src={eDeliver9Big} alt="e-Deliver-9" />
                    <div className="flexbox-mainelbilar-edeliver9-text-container">
                      <h2 id="edeliver9-heading">e-Deliver 9</h2>
                      <ul>
                        <li>Lastutrymme 9,7m³ eller 11m³</li>
                        <li>Maximal plats</li>
                        <li>Maximal komfort</li>
                        <li>Pris från 569.900:-</li>
                      </ul>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href =
                            "https://maxus.se/modeller/e-deliver9/";
                        }}
                        type="button"
                        id="mainelbilar-edeliver9-button"
                      >
                        LÄS MER HÄR
                      </button>
                      <button
                        type="button"
                        id="mainelbilar-edeliver9-provkor-button"
                      >
                        BOKA PROVKÖRNING
                      </button>
                    </div>
                  </div>
                );
              case "4":
                return (
                  <div className="flexbox-mainelbilar-edeliver9chassis-container">
                    <img src={eDeliver9ChassisBig} alt="e-Deliver-9-Chassis" />
                    <div className="flexbox-mainelbilar-edeliver9chassis-text-container">
                      <h2 id="edeliver9chassis-heading">e-Deliver 9 chassis</h2>
                      <ul>
                        <li>Mer information kommer</li>
                      </ul>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href =
                            "https://maxus.se/modeller/e-deliver-9-chassis/";
                        }}
                        type="button"
                        id="mainelbilar-edeliver9chassis-button"
                      >
                        LÄS MER HÄR
                      </button>
                      <button
                        type="button"
                        id="mainelbilar-edeliver9chassis-provkor-button"
                      >
                        BOKA PROVKÖRNING
                      </button>
                    </div>
                  </div>
                );
              case "5":
                return (
                  <div className="flexbox-mainelbilar-euniq6-container">
                    <img src={Euniq6Big} alt="Euniq-6" />
                    <div className="flexbox-mainelbilar-euniq6-text-container">
                      <h2 id="euniq6-heading">Euniq 6</h2>
                      <ul>
                        <li>Bagageutrymme på 745 liter</li>
                        <li>Max utrustad</li>
                        <li>Leveransklar från mars 2022</li>
                      </ul>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href =
                            "https://maxus.se/modeller/euniq-6/";
                        }}
                        type="button"
                        id="mainelbilar-euniq6-button"
                      >
                        LÄS MER HÄR
                      </button>
                      <button
                        type="button"
                        id="mainelbilar-euniq6-provkor-button"
                      >
                        BOKA PROVKÖRNING
                      </button>
                    </div>
                  </div>
                );
              default:
                return (
                  <div className="flexbox-mainelbilar-euniqmpv-container">
                    <img src={EuniqMPVBig} alt="Euniq-MPV" />
                    <div className="flexbox-mainelbilar-euniqmpv-text-container">
                      <h2 id="euniq-mpv-heading">Euniq MPV</h2>
                      <ul>
                        <li>Räckvidd från 260-356 km (WLTP combined/urban)</li>
                        <li>Pris från 499.900:-</li>
                        <li>Rymlig 7-sitsig familjebil</li>
                      </ul>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href =
                            "https://maxus.se/modeller/euniq-mpv/";
                        }}
                        type="button"
                        id="mainelbilar-euniq-mpv-button"
                      >
                        LÄS MER HÄR
                      </button>
                      <button
                        type="button"
                        id="mainelbilar-euniq-mpv-provkor-button"
                      >
                        BOKA PROVKÖRNING
                      </button>
                    </div>
                  </div>
                );
            }
          })()}
        </div>
      </div>
    );
  }
}

export default MainElbilar;
