import { NavLink } from "react-router-dom";
import "./NotFound.scss";
import { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    // Set the status code to 404
    document.title = "404 Page Not Found";
    window.history.replaceState(null, null, "/404"); // Update the URL
  }, []);
  return (
    <div className="not-found">
      <p className="not-found__caption">Check yourself. Thehre is no such page</p>
      <h1 className="title">404</h1>
      <p className="not-found_caption">Return</p>
      <NavLink to="/" className="not-found_button">
        Home
      </NavLink>
    </div>
  );
}

export default NotFound;
