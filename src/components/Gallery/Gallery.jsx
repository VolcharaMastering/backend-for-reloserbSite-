/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from "react";
import "./Gallery.scss";
import PhotoContainer from "../UI/PhotoContainer/PhotoContainer";
import generateRandomKey from "../../utils/keyGenerator";
import SwipeGallery from "../SwipeGallery/SwipeGallery";

function Gallery({ galleryType, content, size }) {
  const [galleryArray, setGalleryArray] = useState([]);

  useEffect(() => {
    const contentWithIndex = content.map((item) => {
      const randomKey = generateRandomKey();
      return { ...item, index: randomKey };
    });
    setGalleryArray(contentWithIndex);
  }, [content]);

  return galleryType === "block" ? (
    <section className="gallery gallery_blocked">
      {galleryArray &&
        galleryArray.map((image) => (
          <PhotoContainer
            key={image.index}
            index={image.index}
            photoLink={image.name.default}
            size={size}
            containerType="gallery"
            caption={image.caption}
          />
        ))}
    </section>
  ) : (
    <section className={`gallery gallery_stringed ${size}`}>
      <SwipeGallery content={galleryArray} size={size} />
    </section>
  );
}

export default Gallery;
