// Library Imports:
import "./main.css";
import React from "react";

// Component Imports:
import MainHero from "./MainHero/MainHero";
import MainEldrivna from "./MainEldrivna/MainEldrivna";
import MainNyhetsbrev from "./MainNyhetsbrev/MainNyhetsbrev";

// Image Imports:

const Main = () => {
  return (
    <div className="flexbox-main-outer-container">
      <MainHero />
      <MainEldrivna />
      <MainNyhetsbrev />
      {/* <div stype="height: 100px">This is after Main Hero</div> */}
    </div>
  )
}

export default Main;
