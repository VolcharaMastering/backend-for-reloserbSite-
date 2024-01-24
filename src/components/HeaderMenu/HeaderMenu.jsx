import { useLocation } from "react-router-dom";
import "./HeaderMenu.scss";
import TextLink from "../UI/TextLink/TextLink";

function HeaderMenu() {
  const location = useLocation();
  return (
    <nav className="header__menu">
      <ul className="header__menu-block">
        <li className="header__menu-link">
          <TextLink location={location} linkTo="/" />
        </li>
        <li className="header__menu-link">
          <TextLink location={location} linkTo="/about" />
        </li>
        <li className="header__menu-link">
          <TextLink location={location} linkTo="/blog" />
        </li>
        <li className="header__menu-link">
          <TextLink location={location} linkTo="/contacts" />
        </li>
      </ul>
    </nav>
  );
}

export default HeaderMenu;
