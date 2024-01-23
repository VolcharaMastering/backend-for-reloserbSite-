import { useResize } from "../../utils/hooks/useResize";
import "./Main.scss";
import galleryContent from "../../utils/folderApi/getPhotos";
import Gallery from "../../components/Gallery/Gallery";

function Main() {
  const screenSize = useResize();
  return (
    <>
      <Gallery galleryType="block" content={galleryContent} size={screenSize.trakResolutionValue} />
    </>
  );
}

export default Main;
