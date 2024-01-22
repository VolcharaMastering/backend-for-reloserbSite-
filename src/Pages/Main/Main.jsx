import Button from "../../components/UI/Button/Button";
import somePicture from "../../assets/coworkPictures/DSC00026.jpg";
import { useResize } from "../../utils/hooks/useResize";
import "./Main.scss";
import PhotoContainer from "../../components/UI/PhotoDiv/PhotoContainer";

function Main() {
  const screenSize = useResize();
  return (
    <main>
      {/* <Button name="BUTTON" action="" color="light" size={screenSize.trakResolutionValue} /> */}
      <PhotoContainer
        photoLink={somePicture}
        size={screenSize.trakResolutionValue}
        caption="this is description of coworking this is description of coworking this is description of coworking"
        containerType="news"
      />
    </main>
  );
}

export default Main;
