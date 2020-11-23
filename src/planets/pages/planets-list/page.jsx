import LoadingScreen from "commons/components/loading/LoadingScreen";
import { useEffect, useRef, useState } from "react";
import getPlanets from "planets/api/get-planets";
import PlanetCard from "planets/components/PlanetCard";
import useSearch from "commons/hooks/useSearch";
import "./_page.scss";
import { useHistory } from "react-router-dom";
import PageTitle from "commons/components/titles/PageTitle";
import FetchErrorPlaceholder from "commons/components/placeholder/FetchErrorPlaceholder";

const PlanetsList = () => {
  const [loading, setLoading] = useState(false);
  const [planets, setPlanets] = useState();
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [hasFechError, setHasFechError] = useState(false);
  const history = useHistory();
  const firstLoad = useRef(true);

  const onSearch = (value) => {
    if (value) {
      const filtered = planets?.filter((planet) =>
        planet.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPlanets(filtered);
    } else {
      setFilteredPlanets(planets);
    }
  };
  const [searchValue, setSearchValue] = useSearch({ onSearch });

  useEffect(() => {
    if (!firstLoad.current) return;
    const loadPlanets = async () => {
      setLoading(true);
      try {
        const planetPage = await getPlanets({ page: 1 });
        let fetchedPlanets = planetPage.results;
        const pageQuantity = Math.trunc(planetPage.count / 10);
        if (pageQuantity >= 2) {
          const fetchAll = [];
          for (let pageNumber = 2; pageNumber <= pageQuantity; pageNumber++) {
            fetchAll.push(getPlanets({ page: pageNumber }));
          }
          const fetchedPlanetPages = await Promise.all(fetchAll);
          const allPlanets = fetchedPlanetPages
            .map((page) => page.results)
            .flat();
          fetchedPlanets.push(...allPlanets);
        }
        setPlanets(fetchedPlanets);
      } catch (error) {
        setHasFechError(true);
      } finally {
        setLoading(false);
        firstLoad.current = false;
      }
    };
    loadPlanets();
  }, [hasFechError, setHasFechError]);
  return (
    <>
      {loading && <LoadingScreen />}
      <div className="page">
        <PageTitle title="Planets" />
        <input
          className="planet-search-input"
          type="text"
          onChange={setSearchValue}
          value={searchValue}
          placeholder="Search by Name"
        />

        {hasFechError ? (
          <FetchErrorPlaceholder />
        ) : (
          <ul className="planet-grid-cards">
            {filteredPlanets?.map((planet) => {
              const { id } = planet;
              return (
                <li
                  key={`planet-${id}`}
                  onClick={() => history.push(`/planets/planet${id}`)}
                >
                  <PlanetCard {...{ planet }} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};
export default PlanetsList;
