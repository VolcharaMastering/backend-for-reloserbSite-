import { NavLink, useLocation } from "react-router-dom";
import "./HeaderMenu.scss";
import { menu } from "../../content/labelsRu.json";

function HeaderMenu() {
  const location = useLocation();
  return (
    <nav className="header__menu">
      <ul className="header__menu-block">
        <li className="header__menu-link">
          <div className="header__link-back" />
          <NavLink
            to="/"
            className={`header__link ${location.pathname === "/" && "header__link_active"}`}
          >
            {menu.main}
          </NavLink>
        </li>
        <li className="header__menu-link">
          <div className="header__link-back" />
          <NavLink
            to="/about"
            className={`header__link ${location.pathname === "/about" && "header__link_active"}`}
          >
            {menu.about}
          </NavLink>
        </li>
        <li className="header__menu-link">
          <div className="header__link-back" />
          <NavLink
            to="/blog"
            className={`header__link ${location.pathname === "/blog" && "header__link_active"}`}
          >
            {menu.blog}
          </NavLink>
        </li>
        <li className="header__menu-link">
          <div className="header__link-back" />
          <NavLink
            to="/contacts"
            className={`header__link ${location.pathname === "/contacts" && "header__link_active"}`}
          >
            {menu.contacts}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderMenu;
