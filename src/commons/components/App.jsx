import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PlanetsList from "planets/pages/planets-list/page";
import PlanetDetail from "planets/pages/planet-detail/page";
import "./_app.scss";
const App = () => (
  <BrowserRouter>
    <div className="main-layout">
      <div className="main-layout__nav-bar">
        <Link to="/">Planets</Link>
        <span>/</span>
        <Link to="/planets/${planetId}">Planets OCOTE</Link>
        <span>/</span>
        <Link>Resident 1</Link>
      </div>
      <div className="main-layout__content">
        <Switch>
          <Route exact path="/" component={PlanetsList} />
          <Route exact path="/planets/:planetId" component={PlanetDetail} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
