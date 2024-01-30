import PhotoContainer from "../UI/PhotoContainer/PhotoContainer";
import TextBlock from "../TextBlock/TextBlock";
import "./BlockWithPhotoAndDesc.scss";

function BlockWithPhotoAndDesc({ photoLink, size, caption, newsTitle, newsText, position }) {
  return position ? (
    <section className={`news-container ${size}`}>
      <PhotoContainer
        photoLink={photoLink}
        size={size}
        caption={caption}
        containerType="news"
        title={newsTitle}
      />
      <TextBlock newsTitle={newsTitle} newsText={newsText} size={size} />
    </section>
  ) : (
    <section className={`news-container ${size}`}>
      <TextBlock newsTitle={newsTitle} newsText={newsText} size={size} />
      <PhotoContainer
        photoLink={photoLink}
        size={size}
        caption={caption}
        containerType="news"
        title={newsTitle}
      />
    </section>
  );
}
export default BlockWithPhotoAndDesc;
