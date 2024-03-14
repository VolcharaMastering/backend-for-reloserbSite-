/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import { useResize } from "../../utils/hooks/useResize";
import { Spin as Hamburger } from "hamburger-react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import SwipeMenu from "../SwipeMenu/SwipeMenu";
import HeaderSubMenu from "../HeaderSubMenu/HeaderSubMenu";
import Logo from "../UI/Logo/Logo";
import "./TheHeader.scss";
import mobileLogo from "../../assets/mobile-logo.svg";
import logo from "../../assets/header-logo.svg";

function TheHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const screenSize = useResize();

  return (
    <header className={`header ${screenSize.trakResolutionValue}`}>
      <section className="header__main">
        <HeaderMenu size={screenSize.trakResolutionValue} />
        {!(
          screenSize.trakResolutionValue === "tablet" || screenSize.trakResolutionValue === "mobile"
        ) && (
          <>
            <HeaderSubMenu size={screenSize.trakResolutionValue} />
            <div className="header__logo">
              <Logo src={logo} />
            </div>
          </>
        )}
      </section>
      {(screenSize.trakResolutionValue === "tablet" ||
        screenSize.trakResolutionValue === "mobile") && (
        <>
          <div className="header__mobile-logo">
            <Logo src={mobileLogo} />
          </div>
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
        </>
      )}
      {isOpen && <SwipeMenu setIsOpen={setIsOpen} screenSize={screenSize.trakResolutionValue} />}
    </header>
  );
}

export default TheHeader;
