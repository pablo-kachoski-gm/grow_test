import getPeople from "people/api/get-people";
import getPlanet from "planets/api/get-planet";
import { useEffect, useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
import buildTitle from "commons/components/breadcrumbs/utils";
import "./_breadcrumb.scss";

const BreadCrumbItem = ({ match, title }) => {
  const [data, setData] = useState({ planetName: "", peopleName: "" });
  const params = useParams();
  useEffect(() => {
    const fetchNames = async () => {
      if (!params.peopleId && !params.planetId) return;
      let data = {};
      if (params.planetId) {
        try {
          const planetId = params.planetId;
          let result = await getPlanet({ id: planetId });
          data = { ...data, planetName: result.name };
        } catch (error) {}
      }
      if (params.peopleId) {
        try {
          const peopleId = params.peopleId;
          let result = await getPeople({ id: peopleId });
          data = { ...data, peopleName: result.name };
        } catch (error) {}
      }
      setData(data);
    };
    fetchNames();
  }, [params, setData]);

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
      {buildTitle({ title, data })}
    </Link>
  );
};
const Breadcrumbs = () => {
  return (
    <>
      <Route
        path="/planets"
        render={(props) => <BreadCrumbItem {...props} title="All Planets" />}
      />
      <Route
        path="/planets/planet:planetId"
        render={(props) => <BreadCrumbItem {...props} title={`Planet`} />}
      />
      <Route
        path="/planets/planet:planetId/people:peopleId"
        render={(props) => <BreadCrumbItem {...props} title={`Resident`} />}
      />
    </>
  );
};
export default Breadcrumbs;
