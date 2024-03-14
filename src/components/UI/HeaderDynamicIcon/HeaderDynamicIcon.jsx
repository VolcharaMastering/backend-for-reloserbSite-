import { NavLink } from "react-router-dom";
import "./HeaderDynamicIcon.scss";
import { menu } from "../../../content/labelsRu.json";

function HeaderDynamicIcon({ icons, location, size }) {
  return (
    <NavLink
      to={icons.linkTo}
      className={`dynamic ${size}`}
      style={{ backgroundImage: `url(${icons.srcIcon})` }}
    >
      {/* <span className={`dynamic__text ${location.pathname === icons.linkTo && "link_active"}`}> */}
      <span className={`dynamic__text ${size}`}>{menu[icons.linkTo.substring(1)]}</span>
      <div
        className={`dynamic__part ${size}`}
        style={{ backgroundImage: `url(${icons.srcIcon2})` }}
      />
    </NavLink>
  );
}
export default HeaderDynamicIcon;
