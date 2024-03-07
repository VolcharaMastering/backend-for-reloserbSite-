/* eslint-disable object-shorthand */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from "react";
import "./PhotoContainer.scss";
import PopupState from "../../../stores/PopupState";
import generateRandomKey from "../../../utils/keyGenerator";

function PhotoContainer({ index, photoLink, size, containerType, caption, title }) {
  const [timer, setTimer] = useState(0);
  const singleIndex = generateRandomKey();

  const handleMouseDown = () => {
    setTimer(
      setTimeout(() => {
        return;
      }, 500)
    );
  };

  const openPopup = () => {
    const data = {
      id: index || singleIndex,
      photoLink: photoLink,
      title: title,
      caption: caption,
      isOpened: true,
    };
    PopupState.setOpened(data);
  };
  // const handleMouseUp = () => {
  //   if (timer <= 1000) {
  //     openPopup();
  //   }
  //   clearTimeout(timer);
  // };
  return containerType === "gallery" ? (
    <figure className={`photo-container ${size} ${containerType}`}>
      <img
        src={photoLink}
        alt={caption}
        className="photo-container__image_gallery"
        // onMouseDown={handleMouseDown}
        // onMouseUp={handleMouseUp}
        onClick={openPopup}
      />
    </figure>
  ) : (
    <figure className={`photo-container__news ${size} ${containerType}`}>
      <img src={photoLink} alt={caption} className="photo-container__image" onClick={openPopup} />
    </figure>
  );
}

export default PhotoContainer;
