import { useEffect, useState } from "react";
import "./PhotoContainer.scss";

function PhotoContainer({ photoLink, size, containerType, caption }) {
  return containerType === "gallery" ? (
    <figure className={`photo-container ${size} ${containerType}`}>
      <img src={photoLink} alt={caption} className="photo-container__image" />

      {caption && <figcaption className="photo-container__caption">{caption}</figcaption>}
    </figure>
  ) : (
    <figure className={`photo-container__news ${size} ${containerType}`}>
      {containerType && <h2 className="photo-container__title">{containerType}</h2>}
      <img src={photoLink} alt={caption} className="photo-container__image" />
      {caption && <figcaption className="photo-container__caption">{caption}</figcaption>}
    </figure>
  );
}

export default PhotoContainer;
