import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import useLocationHook from "../../utils/hooks/useLocationHook";
import { useResize } from "../../utils/hooks/useResize";
import "./TheHeader.scss";
import Logo from "../Logo/Logo";
import logo from "../../assets/logo.svg";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import SwipeMenu from "../SwipeMenu/SwipeMenu";

function TheHeader() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const screenSize = useResize();

  const tempLocation = useLocationHook(location);

  return (
    <header className="header">
      <section className="header__main">
        <Logo src={logo} />
        {!(
          screenSize.trakResolutionValue === "tablet" || screenSize.trakResolutionValue === "mobile"
        ) && <HeaderMenu size={screenSize.trakResolutionValue} />}

        <h1 className="header__page-name">{tempLocation}</h1>
        {(screenSize.trakResolutionValue === "tablet" ||
          screenSize.trakResolutionValue === "mobile") && (
          <Hamburger
            toggled={isOpen}
            label="Show menu"
            toggle={setIsOpen}
            size={30}
            direction="right"
            color="#979797"
          />
        )}
        {isOpen && <SwipeMenu setIsOpen={setIsOpen} screenSize={screenSize.trakResolutionValue} />}
      </section>
    </header>
  );
}

export default TheHeader;
