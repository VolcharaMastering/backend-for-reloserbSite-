import { useResize } from "../../utils/hooks/useResize";
import Layout from "../../components/Layout/Layout";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import "./AboutUs.scss";
import { about } from "../../content/pagesContent/aboutPageContent.json";
import { title, description } from "../../content/metaInfo.json";
import teamPhoto from "../../assets/about/team.jpg";

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
    <Layout title={title.about} description={description.about}>
      <section className="about">
        <h1 className={`title ${screenSize.trakResolutionValue}`}>О нас</h1>
        <BlockWithPhotoAndDesc
          photoLink={teamPhoto}
          size={screenSize.trakResolutionValue}
          caption=""
          newsTitle={about.title}
          newsText={about.description}
          position
        />
      </section>
    </Layout>
  );
}

export default AboutUs;
