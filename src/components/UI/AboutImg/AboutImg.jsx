import "./AboutImg.scss";

function AboutImg({ linkToImg, imgCaption, imgInfo }) {
  return (
    <figure className="about-img">
      <img src={linkToImg} className="about-img__picture" alt={imgCaption} />
      <figcaption className="about-img__info">
        <h2 className="about-img__caption">{imgCaption}</h2>
        <p className="about-img__text">{imgInfo}</p>
      </figcaption>
    </figure>
  );
}

export default AboutImg;
