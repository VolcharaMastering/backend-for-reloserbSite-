import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./NotFound.scss";
import { titles } from "../../content/titles.json";
import { title, description } from "../../content/metaInfo.json";

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    // Set the status code to 404
    document.title = "404 Page Not Found";
    window.history.replaceState(null, null, "/404");
  }, []);

  const handleReturnClick = () => {
    // Navigate back to the previous page
    navigate(-1);
  };
  return (
    <Layout title={title.notFound} description={description.notFound}>
      <div className="not-found">
        <p className="not-found__caption">Check yourself. There is no such page</p>
        <h1 className="title">{titles.notFound}</h1>
        <p className="not-found__caption" onClick={handleReturnClick}>
          Return
        </p>
        <NavLink to="/" className="not-found_button">
          Home
        </NavLink>
      </div>
    </Layout>
  );
}

export default NotFound;
