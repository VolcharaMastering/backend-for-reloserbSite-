import EmptyDoubleBlock from "../../components/EmptyDoubleBlock/EmptyDoubleBlock";
import { useResize } from "../../utils/hooks/useResize";
import "./AboutUs.scss";
import teamPhoto from "../../assets/about/team.jpg";
import { about } from "../../content/pagesContent/aboutPageContent.json";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";

function AboutUs() {
  const screenSize = useResize();
  // const photoComponent = () => {
  //   const props = {
  //     linkToImg: teamPhoto,
  //     imgCaption: staff.staffName,
  //     imgInfo: staff.staffSkills,
  //   };

  //   // Return the PhotoContainer component with the props
  //   return <AboutImg {...props} />;
  // };

  return (
    <section className="about">
      <h1 className={`title ${screenSize.trakResolutionValue}`}>О нас</h1>
      <BlockWithPhotoAndDesc
        photoLink={teamPhoto}
        size={screenSize.trakResolutionValue}
        caption=""
        newsTitle={about.title}
        newsText={about.description}
        position={true}
      />
    </section>
  );
}

export default AboutUs;
