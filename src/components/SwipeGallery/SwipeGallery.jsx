import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, FreeMode } from "swiper/modules";

import generateRandomKey from "../../utils/keyGenerator";
import "./SwipeGallery.scss";
import "swiper/css";
import "swiper/css/free-mode";
import PhotoContainer from "../UI/PhotoContainer/PhotoContainer";

function SwipeGallery({ content, size }) {
  const [viewSlides, setViewSlides] = useState(6);

  useEffect(() => {
    switch (size) {
      case "mobile":
        setViewSlides(2);
        break;
      case "tablet":
        setViewSlides(3);
        break;
      case "desktopHD":
        setViewSlides(6);
        break;
      case "desktopUHD":
        setViewSlides(8);
        break;
      default:
        setViewSlides(4);
        break;
    }
  }, [size]);
  return (
    <Swiper
      slidesPerView={viewSlides}
      spaceBetween={2}
      freeMode={true}
      keyboard={{
        enabled: true,
      }}
      modules={[Keyboard, FreeMode]}
      className="mySwiper"
    >
      {content.map((image) => (
        <SwiperSlide>
          <PhotoContainer
            key={image.index}
            index={image.index}
            photoLink={image.name.default}
            size={size}
            containerType="gallery"
            caption="Some description"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default SwipeGallery;
