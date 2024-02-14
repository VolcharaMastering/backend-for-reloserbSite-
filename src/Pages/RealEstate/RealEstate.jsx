import "./RealEstate.scss";
import { titles } from "../../content/titles.json";
import Layout from "../../components/Layout/Layout";
import BlackBlockWithText from "../../components/BlackBlockWithText/BlackBlockWithText";
import { title, description } from "../../content/metaInfo.json";
import { about, offers, whyWe } from "../../content/pagesContent/realEstatePageContent.json";
import { useResize } from "../../utils/hooks/useResize";
import BlockWithBlackBackground from "../../components/BlockWithBlackBackground/BlockWithBlackBackground";
import EmptyDoubleBlock from "../../components/EmptyDoubleBlock/EmptyDoubleBlock";
import generateRandomKey from "../../utils/keyGenerator";
import InfoCard from "../../components/UI/InfoCard/InfoCard";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import videoLink from "../../assets/videos/estate-video.mp4";

function RealEstate() {
  const screenSize = useResize();

  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  // const videoLink ="https://relocationsrb.com/public_html/video/estate-video.mp4";
  const cardsComponent = () => {
    return (
      <div className="restate__grid-block">
        <h2 className="subtitle">{offers.title}</h2>
        <div className={`restate__grid ${screenSize.trakResolutionValue}`}>
          {whyWe.description.map((item) => (
            <InfoCard key={getRandomKey()} title="" description={item} />
          ))}
          {offers.description.length % 2 && (
            <InfoCard key={getRandomKey()} title="" description="" />
          )}
        </div>
      </div>
    );
  };
  const videoComponent = () => {
    const props = {
      size: screenSize.trakResolutionValue,
      videoLink: videoLink,
      videoTitle: "",
    };
    return <BackgroundVideo {...props} />;
  };
  return (
    <Layout title={title.realEstate} description={description.realEstate}>
      <section>
        <h1 className="title">{titles.realEstateTItle}</h1>
        <BlackBlockWithText
          title={about.title}
          description=""
          text={about.description}
          size={screenSize.trakResolutionValue}
        />
        <BlockWithBlackBackground
          title={offers.title}
          blocks={offers.description}
          description=""
          linkTo=""
          size={screenSize.trakResolutionValue}
        />
        <EmptyDoubleBlock
          firstComponent={videoComponent}
          secondComponent={cardsComponent}
          firstBlockSize="half"
          secondBlockSize="half"
          size={screenSize.trakResolutionValue}
        />
      </section>
    </Layout>
  );
}

export default RealEstate;
