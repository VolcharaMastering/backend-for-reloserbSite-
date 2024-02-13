import "./PhotoBlock.scss";
import generateRandomKey from "../../utils/keyGenerator";
import AboutImg from "../UI/AboutImg/AboutImg";

function PhotoBlock({ images, title, description, size, blockTitle }) {
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  return (
    <figure className="photo-block">
      <h2 className="photo-block__title">{blockTitle}</h2>
      <nav className={`photo-block__navigation ${size}`}>
        {images.map((photo) => (
          <AboutImg key={getRandomKey} linkToImg={photo} imgCaption={title} imgInfo={description} />
        ))}
      </nav>
    </figure>
  );
}

export default PhotoBlock;
