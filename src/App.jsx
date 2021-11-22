// Library Imports:
import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

// Component Imports:
import Main from "./Components/Main/Main";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

// Image Imports:
import MaxusLogo from "./Images/Logos/maxus-logo.png";

const App = () => {
  return (
    <>
      <div className="flexbox-content-wrapper">
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/kontakt" component={Kontakt} /> */}
          {/* <Route exact path="/" component={} /> */}

          
          {/* <Route exact path="/" component={Main} /> */}
        </Switch>
        <Footer />
      </div>
    </>
  )
}

export default App;
