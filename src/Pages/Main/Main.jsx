import { useResize } from "../../utils/hooks/useResize";
import galleryArray from "../../utils/folderApi/getPhotos";
import "./Main.scss";

import videoFile from "../../assets/videos/video.mp4";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import photoLink from "../../assets/coworkPictures/DSC00025.jpg";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import BlockWithBlackBackground from "../../components/BlockWithBlackBackground/BlockWithBlackBackground";
import { main } from "../../content/mainTextBlock.json";
import { attantion } from "../../content/blackBlockText.json";
import generateRandomKey from "../../utils/keyGenerator";

function Main() {
  const screenSize = useResize();
  return (
    <>
      <BackgroundVideo
        size={screenSize.trakResolutionValue}
        // videoLink="https://drive.google.com/file/d/1NuX2QWlMwbh-lUWxmNmOOQoa-PMlttfL/preview"
        videoLink={videoFile}
      />
      <BlockWithBlackBackground
        title={attantion.title}
        description={attantion.description}
        text={attantion.textFeed}
      />
      {main.map((item, index) => (
        <BlockWithPhotoAndDesc
          key={generateRandomKey}
          photoLink={photoLink}
          size={screenSize.trakResolutionValue}
          caption={item.newsCaption}
          newsTitle={item.newsTitle}
          newsText={item.newsText}
          position={index % 2 === 0}
        />
      ))}
    </>
  );
}

export default Main;
