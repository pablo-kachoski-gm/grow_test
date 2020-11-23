import React, { useMemo, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PlanetsList from "planets/pages/planets-list/page";
import PlanetDetail from "planets/pages/planet-detail/page";
import PeopleDetail from "people/pages/people-detail/page";
import Breadcrumbs from "commons/components/breadcrumbs/Breadcrumb";
import "./_app.scss";
import NavContext from "commons/context/nav-context";

const App = () => {
  const [navigationData, setNavigationData] = useState({
    selectedPlanet: {},
    selectedResident: {},
  });
  const providerValue = useMemo(
    () => ({
      navigationData,
      updateData: (data) => {
        setNavigationData({ ...navigationData, ...data });
      },
    }),
    [navigationData, setNavigationData]
  );
  return (
    <div className="main-layout">
      <NavContext.Provider value={providerValue}>
        <nav className="main-layout__nav-bar">
          <p className="container-fluid breadcrumbs">
            <Route path="/:path" component={Breadcrumbs} />
          </p>
        </nav>
        <div className="main-layout__content">
          <Switch>
            <Route exact path="/planets" render={() => <PlanetsList />} />
            <Route
              exact
              path="/planets/planet:planetId"
              render={() => <PlanetDetail />}
            />
            <Route
              exact
              path="/planets/planet:planetId/people:peopleId"
              render={() => <PeopleDetail />}
            />
            <Route exact path="/" render={() => <Redirect to="/planets" />} />
          </Switch>
        </div>
      </NavContext.Provider>
    </div>
  );
};

export default App;
