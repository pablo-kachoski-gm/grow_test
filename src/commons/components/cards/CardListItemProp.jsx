import "./_card-props.scss";

const CardListItemProp = ({ title, value, ...rest }) => (
  <span className="card-prop-li-container" {...rest}>
    <span className="card-prop-title">{`${title}:`}</span>
    <span>{value}</span>
  </span>
);
export default CardListItemProp;
