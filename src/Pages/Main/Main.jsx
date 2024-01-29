import { useResize } from "../../utils/hooks/useResize";
import galleryArray from "../../utils/folderApi/getPhotos";
import "./Main.scss";

import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import Gallery from "../../components/Gallery/Gallery";
import photoLink from "../../assets/coworkPictures/DSC00025.jpg";
import { main } from "../../content/mainTextBlock.json";

function Main() {
  const screenSize = useResize();
  return (
    <>
      <Gallery
        galleryType="stringed"
        content={galleryArray}
        size={screenSize.trakResolutionValue}
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
