import NavContext from "commons/context/nav-context";
import { useContext } from "react";
import { Link, Route } from "react-router-dom";
import "./_breadcrumb.scss";

const BreadCrumbItem = ({ match, title }) => {
  const toURL = match.url || "";
  const breacrumClassName = match.isExact
    ? "breadcrumb"
    : "breadcrumb inactive";
  return (
    <Link
      style={{ textTransform: "capitalize" }}
      to={toURL}
      className={breacrumClassName}
    >
      {title}
    </Link>
  );
};
const Breadcrumbs = () => {
  const {
    navigationData: { selectedPlanet, selectedResident },
  } = useContext(NavContext);

  return (
    <>
      <Route
        path="/planets"
        render={(props) => <BreadCrumbItem {...props} title="All Planets" />}
      />
      <Route
        path="/planets/planet:planetId"
        render={(props) => (
          <BreadCrumbItem
            {...props}
            title={`Planet ${selectedPlanet?.name || ""}`}
          />
        )}
      />
      <Route
        path="/planets/planet:planetId/people:peopleId"
        render={(props) => (
          <BreadCrumbItem
            {...props}
            title={`Resident ${selectedResident?.name || ""}`}
          />
        )}
      />
    </>
  );
};
export default Breadcrumbs;
