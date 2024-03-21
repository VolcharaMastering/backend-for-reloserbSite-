import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, FreeMode, Pagination, Navigation } from "swiper/modules";

import "./SwipeGallery.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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

  // const pagination = {
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-bullet-horizontal-gap": "5px",
        "--swiper-pagination-bottom": "2px",
      }}
      slidesPerView={viewSlides}
      spaceBetween={2}
      pagination={pagination}
      freeMode={true}
      grabCursor={true}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Keyboard, Pagination, FreeMode, Navigation]}
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
