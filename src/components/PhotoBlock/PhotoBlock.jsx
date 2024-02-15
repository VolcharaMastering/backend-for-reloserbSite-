import "./PhotoBlock.scss";
import generateRandomKey from "../../utils/keyGenerator";
import AboutImg from "../UI/AboutImg/AboutImg";

function PhotoBlock({ images, description, size, blockTitle }) {
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  // console.log(images, description);
  return (
    <figure className="photo-block">
      {blockTitle && <h2 className="subtitle photo-block__title">{blockTitle}</h2>}
      <nav className={`photo-block__navigation ${size}`}>
        {images.length &&
          images.map((photo, index) => (
            <AboutImg
              key={getRandomKey}
              linkToImg={typeof photo === "object" ? photo.name.default : photo}
              imgCaption={description[index].title}
              imgInfo={description[index].description}
            />
          ))}
      </nav>
    </figure>
  );
}

export default PhotoBlock;
