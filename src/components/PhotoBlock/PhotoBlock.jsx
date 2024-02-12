import "./PhotoBlock.scss";
import generateRandomKey from "../../utils/keyGenerator";
import AboutImg from "../UI/AboutImg/AboutImg";
import someImg from "../../assets/coworkPictures/DSC00085.jpg";
function PhotoBlock({ title, images, size }) {
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  return (
    <figure className="photo-block">
      <h2 className="photo-block__title">{title}</h2>
      <nav className={`photo-block__navigation ${size}`}>
        {/* {images.map((photo) => ( */}
        <AboutImg key={getRandomKey} linkToImg={someImg} imgCaption="someimg" imgInfo="" />
        {/* ))} */}
      </nav>
    </figure>
  );
}

export default PhotoBlock;
