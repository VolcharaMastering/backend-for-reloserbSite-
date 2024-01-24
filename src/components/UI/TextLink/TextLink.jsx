import { NavLink } from "react-router-dom";
import "./TextLink.scss";
import { menu } from "../../../content/labelsRu.json";

function TextLink({ location, linkTo }) {
  return (
    <div className="link-background">
      <NavLink to={linkTo} className={`link ${location.pathname === linkTo && "link_active"}`}>
        {linkTo === "/" ? menu.main : menu[linkTo.substring(1)]}
      </NavLink>
    </div>
  );
}

export default TextLink;
