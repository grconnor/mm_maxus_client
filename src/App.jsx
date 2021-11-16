// Library Imports:
import React from "react";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar.jsx/NavigationBar";

// Component Imports:
import Main from "./Components/Main/Main";

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
      </div>
    </>
  )
}

export default App;
