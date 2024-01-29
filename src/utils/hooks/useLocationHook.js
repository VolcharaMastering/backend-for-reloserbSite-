/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { menu } from "../../content/labelsRu.json";

const useLocationHook = (location) => {
  const [myLocation, setMyLocation] = useState("");
  const checkLink = location.pathname;

  useEffect(() => {
    setMyLocation(menu[checkLink.substring(1)]);
    if (checkLink === "/") {
      setMyLocation(menu.main);
    }
  }, [location]);
  return myLocation;
};
export default useLocationHook;
