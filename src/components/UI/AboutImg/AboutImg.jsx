import generateRandomKey from "../../../utils/keyGenerator";
import "./AboutImg.scss";

function AboutImg({ linkToImg, imgCaption, imgInfo }) {
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  console.log(imgInfo);
  return (
    <figure className="about-img">
      <img src={linkToImg} className="about-img__picture" alt={imgCaption} />
      <figcaption className="about-img__info">
        <h2 className="about-img__caption">{imgCaption}</h2>
        {/* <p className="about-img__text">{imgInfo}</p> */}
        {imgInfo.map((item) => (
          <p key={getRandomKey} className="about-img__text">
            {item}
          </p>
        ))}
      </figcaption>
    </figure>
  );
}

export default AboutImg;
