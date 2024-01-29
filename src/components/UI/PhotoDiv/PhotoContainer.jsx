import { useEffect, useState } from "react";
import "./PhotoContainer.scss";
import Popup from "../../Popup/Popup";
import PopupState from "../../../stores/popupStore";

function PhotoContainer({ photoLink, size, containerType, caption }) {
  const { opened, setOpened } = PopupState;
  const renderImageContainer = () => {
    return (
      <figure className={`photo-container ${size} ${containerType || "gallery"}`}>
        {containerType && <h2 className="photo-container__title">{containerType}</h2>}
        <img
          src={photoLink}
          alt={caption}
          className="photo-container__image"
          onClick={handleOpenPopup}
        />
        {caption && <figcaption className="photo-container__caption">{caption}</figcaption>}
      </figure>
    );
  };

  return (
    <>
      {popupState && <Popup popupType="photo" popupContent={photoLink} size={size} />}
      {containerType === "gallery" ? (
        renderImageContainer()
      ) : (
        <figure className={`photo-container__news ${size} ${containerType || "gallery"}`}>
          {renderImageContainer()}
        </figure>
      )}
    </>
  );
}

export default PhotoContainer;
