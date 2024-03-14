import PhotoContainer from "../UI/PhotoContainer/PhotoContainer";
import TextBlock from "../TextBlock/TextBlock";
import "./BlockWithPhotoAndDesc.scss";

function BlockWithPhotoAndDesc({ photoLink, size, caption, newsTitle, newsText, position }) {
  return position ? (
    <section className={`news-container ${size}`}>
      <figure className={`news-container__photo ${size}`}>
        <PhotoContainer
          photoLink={photoLink}
          size={size}
          caption={caption}
          containerType="news"
          title={newsTitle}
        />
      </figure>
      <div className={`divide-line ${size}`} />
      <figcaption className={`news-container__caption ${size}`}>
        <TextBlock newsTitle={newsTitle} newsText={newsText} size={size} />
      </figcaption>
    </section>
  ) : (
    <section className={`news-container ${size}`}>
      <figcaption className={`news-container__caption ${size}`}>
        <TextBlock newsTitle={newsTitle} newsText={newsText} size={size} />
      </figcaption>
      <div className={`divide-line ${size}`} />
      <figure className={`news-container__photo ${size}`}>
        <PhotoContainer
          photoLink={photoLink}
          size={size}
          caption={caption}
          containerType="news"
          title={newsTitle}
        />
      </figure>
    </section>
  );
}
export default BlockWithPhotoAndDesc;
