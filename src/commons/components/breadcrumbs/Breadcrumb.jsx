import { Link, Route } from "react-router-dom";
import "./_breadcrumb.scss";

const Breadcrumbs = ({ match }) => {
  const toURL = match.url || "";
  const breacrumClassName = match.isExact
    ? "breadcrumb"
    : "breadcrumb inactive";
  const linkName = match.url.substr(
    match.url.lastIndexOf("/") + 1,
    match.url.length
  );
  const breadCrumURL = `${match.url}/:path`;
  return (
    <>
      <Link
        style={{ textTransform: "capitalize" }}
        to={toURL}
        className={breacrumClassName}
      >
        {linkName}
      </Link>
      <Route path={breadCrumURL} component={Breadcrumbs} />
    </>
  );
};
export default Breadcrumbs;
