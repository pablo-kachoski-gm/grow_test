import TextField from "commons/components/fields/TextField";
import "./_resident-card.scss";

const ResidentCard = ({ resident }) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = resident;

  const fieldFontSize = "12px";
  const fieldStyle = {
    fontSize: fieldFontSize,
    flexDirection: "row",
    justifyContent: "space-between",
  };
  return (
    <div className="resident-card">
      <span className="resident-card__title">{name}</span>
      <TextField style={fieldStyle} value={height} title="Height:" />
      <TextField style={fieldStyle} value={mass} title="Mass:" />
      <TextField style={fieldStyle} value={hair_color} title="Hair color:" />
      <TextField style={fieldStyle} value={skin_color} title="Skin color:" />
      <TextField style={fieldStyle} value={eye_color} title="Eye color:" />
      <TextField style={fieldStyle} value={birth_year} title="Birth year:" />
      <TextField style={fieldStyle} value={gender} title="Gender:" />
    </div>
  );
};
export default ResidentCard;
