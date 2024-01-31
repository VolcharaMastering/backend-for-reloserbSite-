/* eslint-disable react/no-array-index-key */
import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import "./Gallery.scss";
import PhotoContainer from "../UI/PhotoContainer/PhotoContainer";
import swipeSettings from "../../utils/swipeConfig";
import generateRandomKey from "../../utils/keyGenerator";

function Gallery({ galleryType, content, size }) {
  const [galleryArray, setGalleryArray] = useState(content);
  useEffect(() => {
    setGalleryArray(content);
  }, [content]);
  const index = generateRandomKey();

  return galleryType === "block" ? (
    <section className="gallery gallery_blocked">
      {content.map((image) => (
        <PhotoContainer
          key={index}
          photoLink={image.name.default}
          size={size}
          containerType="gallery"
          caption={image.caption}
        />
      ))}
    </section>
  ) : (
    <section className="gallery gallery_stringed">
      <Carousel {...swipeSettings}>
        {galleryArray.map((image) => (
          <PhotoContainer
            key={index}
            index={index}
            photoLink={image.name.default}
            size={size}
            containerType="gallery"
            caption="Some description"
          />
        ))}
      </Carousel>
    </section>
  );
}

export default Gallery;
