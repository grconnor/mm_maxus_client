// Library Imports:
import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

// Component Imports:
import Main from "./Components/Main/Main";
import OmOss from "./Components/OmOss/OmOss";
import MainKontakt from "./Components/Main/MainKontakt/MainKontakt";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Aterforsaljare from "./Components/Aterforsaljare/Aterforsaljare";

// Image Imports:
import MaxusLogo from "./Images/Logos/maxus-logo.png";

const App = () => {
  return (
    <>
      <div className="flexbox-content-wrapper">
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/aterforsaljare" component={Aterforsaljare} />
          <Route exact path="/kontakt" component={MainKontakt} />
          <Route exact path="/omoss" component={OmOss} />
          {/* <Route exact path="/" component={} /> */}
        </Switch>
        <Footer />
      </div>
    </>
  )
}

export default App;
