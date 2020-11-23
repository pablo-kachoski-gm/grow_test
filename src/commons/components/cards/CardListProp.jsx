import "./_card-props.scss";

const CardListProp = ({ title, children, ...rest }) => (
  <span className="card-prop-container" {...rest}>
    <span className="card-prop-title">{`${title}`}</span>
    {children}
  </span>
);
export default CardListProp;
