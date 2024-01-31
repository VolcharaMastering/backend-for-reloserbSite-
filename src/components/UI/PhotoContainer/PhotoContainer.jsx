/* eslint-disable object-shorthand */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import "./PhotoContainer.scss";
import PopupState from "../../../stores/PopupState";
import generateRandomKey from "../../../utils/keyGenerator";

function PhotoContainer({ index, photoLink, size, containerType, caption, title }) {
  const singleIndex = generateRandomKey();
  const handleOpenPopup = () => {
    const data = {
      id: index || singleIndex,
      photoLink: photoLink,
      title: title,
      caption: caption,
      isOpened: true,
    };
    PopupState.setOpened(data);
  };

  return (
    <div>
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
          <img
            src={photoLink}
            alt={caption}
            className="photo-container__image"
            onClick={handleOpenPopup}
          />
          {containerType && <p className="photo-container__title">{title}</p>}
          {/* {caption && <figcaption className="photo-container__caption">{caption}</figcaption>} */}
        </figure>
      )}
      {/* {popups[index] && containerType != "gallery" && (
        <Popup popupType="photo" popupContent={photoLink} size={size} />
      )} */}
    </div>
  );
}

export default PhotoContainer;
