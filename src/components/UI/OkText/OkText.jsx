/* eslint-disable no-nested-ternary */
import { NavLink } from "react-router-dom";
import "./OkText.scss";

function OkText({ gotText, size }) {
  return (
    <div className={`ok-text ${size}`}>
      {gotText && typeof gotText === "object" && gotText.href ? (
        <NavLink to={gotText.href.src} className={`ok-text__link ok-text__text ${size}`}>
          {gotText.href.text}
        </NavLink>
      ) : gotText && typeof gotText === "object" && gotText.bold ? (
        <p className={`ok-text__bold ${size}`}>{gotText.bold}</p>
      ) : (
        <p className={`ok-text__text ${size}`}>{gotText}</p>
      )}
    </div>
  );
}
export default OkText;
