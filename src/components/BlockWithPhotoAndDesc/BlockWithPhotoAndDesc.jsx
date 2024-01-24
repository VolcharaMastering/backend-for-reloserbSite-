import PhotoContainer from "../UI/PhotoContainer/PhotoContainer";
import TextBlock from "../TextBlock/TextBlock";
import "./BlockWithPhotoAndDesc.scss";

function BlockWithPhotoAndDesc({ photoLink, size, caption, newsTitle, newsText }) {
  return (
    <section className="news-container">
      <PhotoContainer photoLink={photoLink} size={size} caption={caption} containerType="news" />
      <TextBlock newsTitle={newsTitle} newsText={newsText} size={size} />
    </section>
  );
}

export default BlockWithPhotoAndDesc;
