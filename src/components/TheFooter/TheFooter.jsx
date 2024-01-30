import FooterMenu from "../FooterMenu/FooterMenu";
import "./TheFooter.scss";
import Logo from "../UI/Logo/Logo";
import { useResize } from "../../utils/hooks/useResize";

function TheFooter() {
  const screenSize = useResize();
  return (
    <footer className="footer">
      <FooterMenu size={screenSize.trakResolutionValue} />
      <div className={`footer__designed ${screenSize.trakResolutionValue}`}>
        <p className="footer__label">Designed and developed by:</p>
        <Logo />
      </div>
      <p className="footer__company">Instant.DeVeLoP</p>
      <p className="footer__label">© {new Date().getFullYear()}</p>
    </footer>
  );
}

export default TheFooter;
