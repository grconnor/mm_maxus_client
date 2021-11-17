// Library Imports:
import "./main.css";
import React from "react";

// Component Imports:
import MainHero from "./MainHero/MainHero";
import MainEldrivna from "./MainEldrivna/MainEldrivna";
import MainNyhetsbrev from "./MainNyhetsbrev/MainNyhetsbrev";
import MainE9 from "./MainE9/MainE9";

// Image Imports:

const Main = () => {
  return (
    <div className="flexbox-main-outer-container">
      <MainHero />
      <MainEldrivna />
      <MainNyhetsbrev />
      <MainE9 />
      {/* <div stype="height: 100px">This is after Main Hero</div> */}
    </div>
  )
}

export default Main;
