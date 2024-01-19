import { useState, useEffect } from "react";

const useLocationHook = (location) => {
  const [myLocation, setMyLocation] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/about":
        setMyLocation("О нас");
        break;

      case "/blog":
        setMyLocation("Блог");
        break;
      case "/contacts":
        setMyLocation("Контакты");
        break;
      default:
        setMyLocation("Main Page");
        break;
    }
  }, [location]);
  return myLocation;
};
export default useLocationHook;
