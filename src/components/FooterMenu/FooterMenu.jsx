import "./FooterMenu.scss";
import TextLink from "../UI/TextLink/TextLink";

function FooterMenu({ size }) {
  return (
    <nav className="footer__menu">
      <ul className={`footer__menu-block ${size}`}>
        <li className="footer__menu-link">
          <TextLink location="" linkTo="/" />
        </li>
        <li className="footer__menu-link">
          <TextLink location="" linkTo="/about" />
        </li>
        <li className="footer__menu-link">
          <TextLink location="" linkTo="/contacts" />
        </li>
        <li className="footer__menu-link">
          <TextLink location="" linkTo="/consult" />
        </li>
        <li className="footer__menu-link">
          <TextLink location="" linkTo="/coworking" />
        </li>
        <li className="footer__menu-link">
          <TextLink location="" linkTo="/real-estate" />
        </li>
        <li className="footer__menu-link">
          <TextLink location="" linkTo="/cargo" />
        </li>
        <li className="footer__menu-link">
          <TextLink location="" linkTo="/visarun" />
        </li>
        <li className="footer__menu-link">
          <TextLink location="" linkTo="/lang" />
        </li>
        <li className="footer__menu-link">
          <TextLink location="" linkTo="/faq" />
        </li>
        <li className="footer__menu-link">
          <TextLink location="" linkTo="/sitemap" />
        </li>
      </ul>
    </nav>
  );
}

export default FooterMenu;
