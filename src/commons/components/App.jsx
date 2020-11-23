import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PlanetsList from "planets/pages/planets-list/page";
import PlanetDetail from "planets/pages/planet-detail/page";
import PeopleDetail from "people/pages/people-detail/page";
import Breadcrumbs from "commons/components/breadcrumbs/Breadcrumb";
import "./_app.scss";

const App = () => {
  return (
    <div className="main-layout">
      <nav className="main-layout__nav-bar">
        <p className="container-fluid breadcrumbs">
          <Route path="/:path" component={Breadcrumbs} />
        </p>
      </nav>
      <div className="main-layout__content">
        <Switch>
          <Route exact path="/planets" component={PlanetsList} />
          <Route
            exact
            path="/planets/planet:planetId"
            component={PlanetDetail}
          />
          <Route
            exact
            path="/planets/planet:planetId/people:peopleId"
            component={PeopleDetail}
          />
          <Route exact path="/" render={() => <Redirect to="/planets" />} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
