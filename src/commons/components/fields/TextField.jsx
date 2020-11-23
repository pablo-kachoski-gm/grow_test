import "./_field-title.scss";

const TextField = ({ title, value, ...rest }) => (
  <span className="field-container" {...rest}>
    <span className="field-title">{`${title}`}</span>
    {value}
  </span>
);
export default TextField;
