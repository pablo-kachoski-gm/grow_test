import LoadingScreen from "commons/components/loading/LoadingScreen";
import { useEffect, useRef, useState } from "react";
import TextField from "commons/components/fields/TextField";
import "./_page.scss";
import { useParams } from "react-router-dom";
import getPeople from "people/api/get-people";
import PageTitle from "commons/components/titles/PageTitle";
import FetchErrorPlaceholder from "commons/components/placeholder/FetchErrorPlaceholder";

const PlanetsList = () => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState({});
  const [hasFechError, setHasFechError] = useState(false);
  const { peopleId } = useParams();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (!firstLoad.current) return;

    const loadResident = async () => {
      setLoading(true);
      try {
        let result = await getPeople({ id: peopleId });
        setPeople(result);
      } catch (error) {
        setHasFechError(true);
      } finally {
        setLoading(false);
        firstLoad.current = false;
      }
    };
    loadResident();
  }, [hasFechError, setHasFechError, peopleId]);

  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = people;
  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <div className="page">
          <PageTitle title={name} />

          {hasFechError ? (
            <FetchErrorPlaceholder />
          ) : (
            <div className="people-detail-content">
              <TextField value={height} title={"Height"} />
              <TextField value={mass} title={"Mass"} />
              <TextField value={hair_color} title={"Hair color"} />
              <TextField value={eye_color} title={"Eye color"} />
              <TextField value={birth_year} title={"Birth year"} />
              <TextField value={gender} title={"Gender"} />
              <TextField value={skin_color} title={"Eye color"} />
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default PlanetsList;
