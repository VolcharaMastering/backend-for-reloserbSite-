/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { observer } from "mobx-react-lite";
import "./PhotoContainer.scss";
import Popup from "../../Popup/Popup";
import PopupState from "../../../stores/popupStore";

const PhotoContainer = observer(({ index, photoLink, size, containerType, caption }) => {
  const { popups, isOpen } = PopupState;

  const handleOpenPopup = () => {
    isOpen(index);
  };
  return (
    <div>
      {popups[index] && <Popup popupType="photo" popupContent={photoLink} size={size} />}
      {containerType === "gallery" ? (
        <figure className={`photo-container ${size} ${containerType}`}>
          <img
            src={photoLink}
            alt={caption}
            className="photo-container__image"
            onClick={handleOpenPopup}
          />

          {caption && <figcaption className="photo-container__caption">{caption}</figcaption>}
        </figure>
      ) : (
        <figure className={`photo-container__news ${size} ${containerType}`}>
          {containerType && <h2 className="photo-container__title">{containerType}</h2>}
          <img
            src={photoLink}
            alt={caption}
            className="photo-container__image"
            onClick={handleOpenPopup}
          />
          {caption && <figcaption className="photo-container__caption">{caption}</figcaption>}
        </figure>
      )}
    </div>
  );
});

export default PhotoContainer;
