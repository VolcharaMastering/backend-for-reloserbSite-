import { useLocation } from "react-router-dom";
import "./HeaderSubMenu.scss";
import TextLink from "../UI/TextLink/TextLink";
import generateRandomKey from "../../utils/keyGenerator";
import { submenuIconsArray } from "../../utils/imoptHeaderImages";

function HeaderSubMenu({ size, mobile }) {
  const location = useLocation();
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  return (
    <nav className="header-sub__menu">
      <ul className={`header-sub__menu-block ${size}`}>
        {!(size === "tablet" || size === "mobile") &&
          submenuIconsArray.map((icon) => (
            <li key={getRandomKey()} className={`header-sub__menu-link ${size}`}>
              <TextLink
                icon={icon.srcIcon}
                color="dark"
                linkTo={icon.linkTo}
                location={location}
                size={size}
              />
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default HeaderSubMenu;
