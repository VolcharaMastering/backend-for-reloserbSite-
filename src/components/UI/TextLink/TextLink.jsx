import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./TextLink.scss";
import { menu } from "../../../content/labelsRu.json";

function TextLink({ location, linkTo, size }) {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <>
      <ScrollToTop />
      <div className="link-background">
        <NavLink
          to={linkTo}
          className={`link ${size} ${location.pathname === linkTo && "link_active"}`}
        >
          {linkTo === "/" ? menu.main : menu[linkTo.substring(1)]}
        </NavLink>
      </div>
    </>
  );
}

export default TextLink;
