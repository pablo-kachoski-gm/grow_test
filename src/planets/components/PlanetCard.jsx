import TextField from "commons/components/fields/TextField";
import CardListProp from "commons/components/cards/CardListProp";
import CardListItemProp from "commons/components/cards/CardListItemProp";
import "./_planet-card.scss";

const PlanetCard = ({ planet }) => {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    terrain,
    surface_water,
    population,
  } = planet;

  return (
    <div className="planet-card">
      <span className="planet-card__title">{name}</span>
      <span className="two_columns">
        <TextField value={population} title={"Population"} />
        <TextField value={diameter} title={"Diameter"} />
      </span>
      <TextField value={climate} title={"Climate"} />
      <TextField value={terrain} title={"Terrain"} />

      <CardListProp style={{ marginTop: "auto" }} title="Attributes">
        <ul>
          <li>
            <CardListItemProp value={surface_water} title={"Surface water"} />
          </li>
          <li>
            <CardListItemProp
              value={rotation_period}
              title={"Rotation period"}
            />
          </li>
          <li>
            <CardListItemProp value={orbital_period} title={"Orbital period"} />
          </li>
        </ul>
      </CardListProp>
    </div>
  );
};
export default PlanetCard;
