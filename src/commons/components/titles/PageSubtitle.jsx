import "./_titles.scss";

const PageSubtitle = ({ title, ...rest }) => (
  <span className="page-subtitle" {...rest}>
    {title}
  </span>
);
export default PageSubtitle;
