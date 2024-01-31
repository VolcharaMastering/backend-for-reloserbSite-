import { NavLink } from "react-router-dom";
import "./Logo.scss";

export default function Logo({ src }) {
  return (
    <NavLink to="/" className="logo">
      <img className="logo__image" src={src} alt="Main logo" />
    </NavLink>
  );
}
