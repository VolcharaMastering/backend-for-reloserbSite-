import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useLocationHook from "../../utils/hooks/useLocationHook";
import "./TheHeader.scss";
import Logo from "../Logo/Logo";
import logo from "../../assets/logo.svg";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

function TheHeader() {
  const location = useLocation();
  const [namedLocation, setNamedLocation] = useState();

  const tempLocation = useLocationHook(location);

  useEffect(() => {
    setNamedLocation(tempLocation);
  }, [tempLocation]);
  return (
    <header className="header">
      <section className="header__main">
        <Logo src={logo} />
        <HeaderMenu />
        <h1 className="header__page-name">{namedLocation}</h1>
      </section>
    </header>
  );
}

export default TheHeader;
