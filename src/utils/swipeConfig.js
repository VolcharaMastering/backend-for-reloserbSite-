const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const swipeSettings = {
  responsive: responsive,
  showDots: true,
  focusOnSelect: true,
  centerMode: true,
  shouldResetAutoplay: true,
  infinite: true,
  swipeable: true,
  draggable: true,
  autoPlay: true,
  autoPlaySpeed: 2000,
  keyBoardControl: true,
  customTransition: "all 1s linear",
  pauseOnHover: true,
  containerClass: "carousel-container",
  arrows: false,
  dotListClass: "gallery__dot-list",
};
export default swipeSettings;
