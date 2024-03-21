import "./FooterMenu.scss";
import TextLink from "../UI/TextLink/TextLink";
import { menuArray } from "../../utils/imoptHeaderImages";
import generateRandomKey from "../../utils/keyGenerator";

function FooterMenu({ size }) {
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  return (
    <nav className="footer__menu">
      <ul className={`footer__menu-block ${size}`}>
        {menuArray.map((icon) => (
          <li key={getRandomKey()} className="footer__menu-link">
            <TextLink linkTo={icon.linkTo} location="" size={size} />
          </li>
        ))}
        <li className="footer__menu-link">
          <TextLink location="" linkTo="/sitemap.html" size={size} />
        </li>
      </ul>
    </nav>
  );
}

export default FooterMenu;
