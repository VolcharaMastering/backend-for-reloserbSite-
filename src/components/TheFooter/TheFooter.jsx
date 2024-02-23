import { useResize } from "../../utils/hooks/useResize";
import FooterMenu from "../FooterMenu/FooterMenu";
import "./TheFooter.scss";
import Logo from "../UI/Logo/Logo";
import logo from "../../assets/logos/color-logo.svg";

function TheFooter() {
  const screenSize = useResize();
  return (
    <footer className="footer">
      <FooterMenu size={screenSize.trakResolutionValue} />
      <div className={`footer__designed ${screenSize.trakResolutionValue}`}>
        <p className="footer__label">Designed and developed by:&nbsp;&copy;&nbsp;</p>
        <Logo src={logo} />
      </div>
      <p className="footer__company">&copy;Instant.DeVeLoP</p>
      <p className="footer__label">{new Date().getFullYear()}</p>
    </footer>
  );
}

export default TheFooter;
