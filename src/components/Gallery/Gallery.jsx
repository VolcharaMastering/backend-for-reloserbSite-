/* eslint-disable react/no-array-index-key */
import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import "./Gallery.scss";
import PhotoContainer from "../UI/PhotoContainer/PhotoContainer";
import swipeSettings from "../../utils/swipeConfig";
import generateRandomKey from "../../utils/keyGenerator";

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
    <section className="gallery gallery_stringed">
      <Carousel {...swipeSettings}>
        {galleryArray &&
          galleryArray.map((image) => (
            <PhotoContainer
              key={image.index}
              index={image.index}
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
