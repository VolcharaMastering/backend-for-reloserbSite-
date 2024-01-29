import { useResize } from "../../utils/hooks/useResize";
import galleryArray from "../../utils/folderApi/getPhotos";
import "./Main.scss";

import videoFile from "../../assets/videos/video.mp4"
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import Gallery from "../../components/Gallery/Gallery";
import photoLink from "../../assets/coworkPictures/DSC00025.jpg";
import { main } from "../../content/mainTextBlock.json";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";

function Main() {
  const screenSize = useResize();
  return (
    <>
      <BackgroundVideo
        size={screenSize.trakResolutionValue}
        // videoLink="https://drive.google.com/file/d/1NuX2QWlMwbh-lUWxmNmOOQoa-PMlttfL/preview"
        videoLink={videoFile}
      />
      <BlockWithPhotoAndDesc
        photoLink={photoLink}
        size={screenSize.trakResolutionValue}
        caption={main.newsCaption}
        newsTitle={main.newsTitle}
        newsText={main.newsText}
      />
    </>
  );
}

export default Main;
