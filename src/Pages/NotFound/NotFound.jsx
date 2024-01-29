import { NavLink } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__caption">Check yourself. Thehre is no such page</p>
      <h1 className="not-found__404">404</h1>
      <p className="not-found_caption">Return</p>
      <NavLink to="/" className="not-found_button">
        Home
      </NavLink>
    </div>
  );
}

export default NotFound;
