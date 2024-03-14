import { useResize } from "../../utils/hooks/useResize";
import "./Main.scss";
import Layout from "../../components/Layout/Layout";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import BlackBlockWithText from "../../components/BlackBlockWithText/BlackBlockWithText";
import BlockWithBlackBackground from "../../components/BlockWithBlackBackground/BlockWithBlackBackground";
import { mainText, about } from "../../content/pagesContent/mainPageContent.json";
import { title, description } from "../../content/metaInfo.json";
import { titles } from "../../content/titles.json";
import videoFile from "../../assets/videos/main.mp4";

function Main() {
  const screenSize = useResize();
  return (
    <Layout title={title.main} description={description.main}>
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
