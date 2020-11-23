import LoadingScreen from "commons/components/loading/LoadingScreen";
import { useEffect, useRef, useState } from "react";
import getPlanet from "planets/api/get-planet";
import TextField from "commons/components/fields/TextField";
import "./_page.scss";
import { useHistory, useParams } from "react-router-dom";
import getPeople from "people/api/get-people";
import PageTitle from "commons/components/titles/PageTitle";
import PageSubtitle from "commons/components/titles/PageSubtitle";
import ResidentCard from "planets/components/ResidentCard";

const PlanetsList = () => {
  const [loading, setLoading] = useState(true);
  const [planet, setPlanet] = useState({});
  const [hasFechError, setHasFechError] = useState(false);
  const { planetId } = useParams();
  const firstLoad = useRef(true);
  const history = useHistory();

  useEffect(() => {
    if (!firstLoad.current) return;

    const loadPlanet = async () => {
      setLoading(true);
      try {
        let result = await getPlanet({ id: planetId });
        if (result.residents?.length >= 0) {
          const fetchAll = result.residents.map((resident) =>
            getPeople({ id: resident })
          );
          const fetchedPeople = await Promise.all(fetchAll);
          result = { ...result, residents: fetchedPeople };
        }
        setPlanet(result);
      } catch (error) {
        setHasFechError(true);
      } finally {
        setLoading(false);
        firstLoad.current = false;
      }
    };
    loadPlanet();
  }, [hasFechError, setHasFechError, planetId]);

  const {
    name,
    diameter,
    climate,
    terrain,
    population,
    gravity,
    surface_water,
    rotation_period,
    orbital_period,
  } = planet;

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <div className="page">
          <PageTitle title={name} />

          {hasFechError ? (
            <div>
              There was an error getting the data. Please contact the
              administrator
            </div>
          ) : (
            <>
              <div className="planet-detail-content">
                <span className="multi-columns">
                  <TextField value={population} title={"Population"} />
                  <TextField value={diameter} title={"Diameter"} />
                  <TextField value={climate} title={"Climate"} />
                </span>
                <span className="multi-columns">
                  <TextField value={terrain} title={"Terrain"} />
                  <TextField value={gravity} title={"Gravity"} />
                  <TextField value={surface_water} title={"Surface water"} />
                </span>
                <span className="multi-columns">
                  <TextField
                    value={rotation_period}
                    title={"rotation_period"}
                  />
                  <TextField value={orbital_period} title={"orbital_period"} />
                  <span />
                </span>
              </div>
              <PageSubtitle style={{ marginTop: "2em" }} title="Residents" />
              <ul className="residents-grid-cards">
                {planet.residents?.map((resident) => (
                  <li
                    key={`${resident.id}`}
                    onClick={() => history.push(`/people/${resident.id}`)}
                  >
                    <ResidentCard {...{ resident }} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
};
export default PlanetsList;
