import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import useLocationHook from "../../utils/hooks/useLocationHook";
import { useResize } from "../../utils/hooks/useResize";
import "./TheHeader.scss";
import Logo from "../UI/Logo/Logo";
import logo from "../../assets/logo.svg";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import SwipeMenu from "../SwipeMenu/SwipeMenu";
import TextLink from "../UI/TextLink/TextLink";

function TheHeader() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const screenSize = useResize();

  return (
    <header className="header">
      <Logo src={logo} />
      {!(
        screenSize.trakResolutionValue === "tablet" || screenSize.trakResolutionValue === "mobile"
      ) ? (
        <section className="header__main">
          <HeaderMenu size={screenSize.trakResolutionValue} />
          <TextLink location={location} linkTo="/contacts" size={screenSize.trakResolutionValue} />
        </section>
      ) : (
        <section className={`header__name ${screenSize.trakResolutionValue}`}>
          <Hamburger
            toggled={isOpen}
            label="Show menu"
            toggle={setIsOpen}
            size={30}
            direction="right"
            color="#979797"
          />
        </section>
      )}
      {isOpen && <SwipeMenu setIsOpen={setIsOpen} screenSize={screenSize.trakResolutionValue} />}
    </header>
  );
}

export default TheHeader;
