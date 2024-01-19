import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useLocationHook from "../../utils/hooks/useLocationHook";
import "./TheHeader.scss";
import Logo from "../Logo/Logo";
import logo from "../../assets/logo.svg";
import { menu } from "../../content/labelsRu.json";

function TheHeader() {
  const location = useLocation();
  const [namedLocation, setNamedLocation] = useState();

  const tempLocation = useLocationHook(location);

  useEffect(() => {
    setNamedLocation(tempLocation);
  }, [tempLocation]);

  console.log(location, namedLocation);
  return (
    <header className="header">
      <section className="header__main">
        <Logo src={logo} />
        <nav className="header__menu">
          <ul className="header__menu-block">
            <li className="header__menu-link">
              <NavLink
                to="/"
                className={`header__NavLink ${location.pathname === "/" && "header__NavLink_active"}`}
              >
                {menu.main}
              </NavLink>
            </li>
            <li className="header__menu-link">
              <NavLink
                to="/about"
                className={`header__NavLink ${location.pathname === "/about" && "header__NavLink_active"}`}
              >
                {menu.about}
              </NavLink>
            </li>
            <li className="header__menu-link">
              <NavLink
                to="/blog"
                className={`header__NavLink ${location.pathname === "/blog" && "header__NavLink_active"}`}
              >
                {menu.blog}
              </NavLink>
            </li>
            <li className="header__menu-link">
              <NavLink
                to="/contacts"
                className={`header__NavLink ${location.pathname === "/contacts" && "header__NavLink_active"}`}
              >
                {menu.contacts}
              </NavLink>
            </li>
          </ul>
        </nav>
        <h1 className="header__page-name">{namedLocation}</h1>
      </section>
    </header>
  );
}

export default TheHeader;
