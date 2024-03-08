import { useLocation } from "react-router-dom";
import "./HeaderMenu.scss";
import TextLink from "../UI/TextLink/TextLink";
import { menuIconsArray, menuArray } from "../../utils/imoptHeaderImages";
import generateRandomKey from "../../utils/keyGenerator";

function HeaderMenu({ size, mobile }) {
  const location = useLocation();
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  return (
    <nav className={`header__menu ${size}`}>
      <ul className={`header__menu-block ${size}`}>
        {size === "tablet" || size === "mobile"
          ? mobile &&
            menuArray.map((icon) => (
              <li key={getRandomKey()} className={`header__menu-link ${size}`}>
                <TextLink
                  icon={icon.srcIcon}
                  color="dark"
                  linkTo={icon.linkTo}
                  location={location}
                  size={size}
                />
              </li>
            ))
          : menuIconsArray.map((icon) => (
              <li key={getRandomKey()} className={`header__menu-link ${size}`}>
                <TextLink
                  icon={icon.srcIcon}
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

export default HeaderMenu;
