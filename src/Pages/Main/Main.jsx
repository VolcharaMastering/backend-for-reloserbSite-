import { useResize } from "../../utils/hooks/useResize";
import "./Main.scss";
import Layout from "../../components/Layout/Layout";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import BlackBlockWithText from "../../components/BlackBlockWithText/BlackBlockWithText";
import BlockWithBlackBackground from "../../components/BlockWithBlackBackground/BlockWithBlackBackground";
import { mainText, about, whyWe } from "../../content/pagesContent/mainPageContent.json";
import { title, description, keywords } from "../../content/metaInfo.json";
import { titles } from "../../content/titles.json";
import videoFile from "../../assets/videos/main.mp4";
import previewPhoto from "../../assets/socPreview/main.png";
import OkBlock from "../../components/OkBlock/OkBlock";

function Main() {
  const screenSize = useResize();
  return (
    <Layout
      title={title.main}
      description={description.main}
      keywords={keywords.main}
      page="main"
      ogImage={previewPhoto}
    >
      <BackgroundVideo
        size={screenSize.trakResolutionValue}
        videoLink={videoFile}
        videoTitle={titles.mainTitle}
      />
      <BlackBlockWithText
        title=""
        description=""
        text={mainText.description}
        size={screenSize.trakResolutionValue}
      />
      <OkBlock data={whyWe} size={screenSize.trakResolutionValue} />
      <BlockWithBlackBackground
        title={about.aboutTitle}
        blocks={about.aboutBlocks}
        description={about.aboutDescription}
        linkTo={about.aboutLink}
        size={screenSize.trakResolutionValue}
      />
    </Layout>
  );
}

export default Main;
