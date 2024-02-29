import { useLocation } from "react-router-dom";
import "./HeaderMenu.scss";
import TextLink from "../UI/TextLink/TextLink";
import iconsArray from "../../utils/imoptHeaderImages";
import generateRandomKey from "../../utils/keyGenerator";
import HeaderDynamicIcon from "../UI/HeaderDynamicIcon/HeaderDynamicIcon";

function HeaderMenu({ size, mobile }) {
  const location = useLocation();
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  return (
    <nav className="header__menu">
      <ul className={`header__menu-block ${size}`}>
        {/* <li className={`header__menu-link ${size}`}>
          <TextLink location={location} linkTo="/" size={size} />
        </li>
        <li className={`header__menu-link ${size}`}>
          <TextLink location={location} linkTo="/consult" size={size} />
        </li>
        <li className={`header__menu-link ${size}`}>
          <TextLink location={location} linkTo="/coworking" size={size} />
        </li>
        <li className={`header__menu-link ${size}`}>
          <TextLink location={location} linkTo="/real-estate" size={size} />
        </li>
        <li className={`header__menu-link ${size}`}>
          <TextLink location={location} linkTo="/cargo" size={size} />
        </li>
        <li className={`header__menu-link ${size}`}>
          <TextLink location={location} linkTo="/visarun" size={size} />
        </li>
        <li className={`header__menu-link ${size}`}>
          <TextLink location={location} linkTo="/lang" size={size} />
        </li>
        <li className={`header__menu-link ${size}`}>
          <TextLink location={location} linkTo="/voffice" size={size} />
        </li>
        <li className={`header__menu-link ${size}`}>
          <TextLink location={location} linkTo="/faq" size={size} />
        </li> */}
        {iconsArray.map((icon) => (
          <li key={getRandomKey} className={`header__menu-link ${size}`}>
            <HeaderDynamicIcon icons={icon} location={location} size={size} />
          </li>
        ))}
        {mobile && (
          <li className={`header__menu-link ${size}`}>
            <TextLink location={location} linkTo="/contacts" size={size} />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default HeaderMenu;
