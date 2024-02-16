import { useLocation } from "react-router-dom";
import "./HeaderMenu.scss";
import TextLink from "../UI/TextLink/TextLink";

function HeaderMenu({ size, mobile }) {
  const location = useLocation();
  return (
    <nav className="header__menu">
      <ul className={`header__menu-block ${size}`}>
        <li className="header__menu-link">
          <TextLink location={location} linkTo="/" size={size} />
        </li>
        <li className="header__menu-link">
          <TextLink location={location} linkTo="/consult" size={size} />
        </li>
        <li className="header__menu-link">
          <TextLink location={location} linkTo="/coworking" size={size} />
        </li>
        <li className="header__menu-link">
          <TextLink location={location} linkTo="/real-estate" size={size} />
        </li>
        <li className="header__menu-link">
          <TextLink location={location} linkTo="/cargo" size={size} />
        </li>
        <li className="header__menu-link">
          <TextLink location={location} linkTo="/visarun" size={size} />
        </li>
        {mobile && (
          <li className="header__menu-link">
            <TextLink location={location} linkTo="/contacts" size={size} />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default HeaderMenu;
