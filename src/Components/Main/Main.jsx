// Library Imports:
import "./main.css";
import React from "react";

// Component Imports:
import MainHero from "../MainHero/MainHero";

// Image Imports:

const Main = () => {
  return (
    <div className="flexbox-main-outer-container">
      <MainHero />
      <div stype="height: 100px">This is after Main Hero</div>
    </div>
  )
}

export default Main;
