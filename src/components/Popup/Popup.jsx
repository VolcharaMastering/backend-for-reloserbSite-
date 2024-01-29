/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable spaced-comment */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react";
import PopupState from "../../stores/PopupState";
import "./Popup.scss";

function Popup({ popupType, popupContent, size }) {
  /////close functioality///////
  const { setClosed } = PopupState;
  const handleClosePopup = () => {
    setClosed();
    console.log("Closed");
  };
  useEffect(() => {
    function onKeyDown(evt) {
      if (evt.key === "Escape") {
        handleClosePopup();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  ///////
  return (
    <div className="popup__shadow" onClick={handleClosePopup}>
      <section className="popup">
        <button
          type="button"
          className="popup__close"
          aria-label="Close popup"
          onClick={handleClosePopup}
        />
        {popupContent.title && <h2 className="popup__title">{popupContent.title}</h2>}
        {popupType === "photo" ? (
          <img
            src={popupContent.photoLink}
            alt={popupContent.description}
            className="popup__image"
          />
        ) : (
          <div className={`popup__content ${size}`}>ddd</div>
        )}
      </section>
    </div>
  );
}

export default Popup;
