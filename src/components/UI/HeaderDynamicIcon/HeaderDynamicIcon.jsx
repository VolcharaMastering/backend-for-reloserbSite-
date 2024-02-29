import { NavLink } from "react-router-dom";
import "./HeaderDynamicIcon.scss";
import { menu } from "../../../content/labelsRu.json";

function HeaderDynamicIcon({ icons, location, size }) {
  return (
    <NavLink
      to={icons.linkTo}
      className="dynamic"
      style={{ backgroundImage: `url(${icons.srcIcon})` }}
    >
      <span className={`dynamic__text ${location.pathname === icons.linkTo && "link_active"}`}>
        {menu[icons.linkTo.substring(1)]}
      </span>
      <div className="dynamic__part" style={{ backgroundImage: `url(${icons.srcIcon2})` }} />
    </NavLink>
  );
}
export default HeaderDynamicIcon;
