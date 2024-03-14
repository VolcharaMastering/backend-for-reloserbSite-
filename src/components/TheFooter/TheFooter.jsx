import { useResize } from "../../utils/hooks/useResize";
import FooterMenu from "../FooterMenu/FooterMenu";
import "./TheFooter.scss";
import Logo from "../UI/Logo/Logo";
import logo from "../../assets/footer-logo.svg";

function TheFooter() {
  const screenSize = useResize();
  return (
    <footer className="footer">
      <FooterMenu size={screenSize.trakResolutionValue} />
      <div className={`footer__designed ${screenSize.trakResolutionValue}`}>
        <p className="footer__label">Designed and developed by:</p>
        <p className="footer__copy">&nbsp;&copy;&nbsp;&nbsp;&nbsp;</p>
        <div className="footer__logo">
          <Logo src={logo} />
        </div>
      </div>
      <p className="footer__company">&copy;ReloSerb.DeVeLoP</p>
      <p className="footer__label">{new Date().getFullYear()}</p>
    </footer>
  );
}

export default TheFooter;
