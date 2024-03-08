import { useState } from "react";
import { useResize } from "../../utils/hooks/useResize";
import { useLocation } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import Logo from "../UI/Logo/Logo";
import "./TheHeader.scss";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import SwipeMenu from "../SwipeMenu/SwipeMenu";
import TextLink from "../UI/TextLink/TextLink";
import logo from "../../assets/header-logo.svg";
import HeaderSubMenu from "../HeaderSubMenu/HeaderSubMenu";

function TheHeader() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const screenSize = useResize();

  return (
    <header className={`header ${screenSize.trakResolutionValue}`}>
      <section className="header__main">
        <HeaderMenu size={screenSize.trakResolutionValue} />
        <HeaderSubMenu size={screenSize.trakResolutionValue} />
        <div className="header__logo">
          <Logo src={logo} />
        </div>
      </section>
      {(screenSize.trakResolutionValue === "tablet" ||
        screenSize.trakResolutionValue === "mobile") && (
        <div className={`header__name ${screenSize.trakResolutionValue}`}>
          <Hamburger
            toggled={isOpen}
            label="Show menu"
            toggle={setIsOpen}
            size={30}
            direction="right"
            color="#000"
          />
        </div>
      )}
      {isOpen && <SwipeMenu setIsOpen={setIsOpen} screenSize={screenSize.trakResolutionValue} />}
    </header>
  );
}

export default TheHeader;
