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
          <TextLink location="" linkTo="/blog" />
        </li>
        <li className="footer__menu-link">
          <TextLink location="" linkTo="/contacts" />
        </li>
      </ul>
    </nav>
  );
}

export default FooterMenu;
