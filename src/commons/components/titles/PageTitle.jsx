import "./_titles.scss";

const PageTitle = ({ title, ...rest }) => (
  <span className="page-title" {...rest}>
    {title}
  </span>
);
export default PageTitle;
