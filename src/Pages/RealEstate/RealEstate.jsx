import { useEffect } from "react";
import ContactsStore from "../../stores/ContactsStore";
import Layout from "../../components/Layout/Layout";
import { useResize } from "../../utils/hooks/useResize";
import BlackBlockWithText from "../../components/BlackBlockWithText/BlackBlockWithText";
import EmptyDoubleBlock from "../../components/EmptyDoubleBlock/EmptyDoubleBlock";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import BlockWithContacts from "../../components/BlockWithContacts/BlockWithContacts";
import OkBlock from "../../components/OkBlock/OkBlock";
import DropDownContainer from "../../components/DropDownContainer/DropDownContainer";
import "./RealEstate.scss";
import {
  about,
  offers,
  whyWe,
  faq,
  howBuy,
} from "../../content/pagesContent/realEstatePageContent.json";
import { title, description, keywords } from "../../content/metaInfo.json";
import { titles } from "../../content/titles.json";
import videoLink from "../../assets/videos/estate-video.mp4";
import previewPhoto from "../../assets/socPreview/re.png";

function RealEstate() {
  const screenSize = useResize();

  useEffect(() => {
    ContactsStore.setContacts("realEstate");
  }, []);
  const cardsComponent = () => {
    return <OkBlock data={whyWe} inblock size={screenSize.trakResolutionValue} />;
  };
  const videoComponent = () => {
    const props = {
      size: screenSize.trakResolutionValue,
      videoLink,
      videoTitle: "",
    };
    return <BackgroundVideo {...props} />;
  };
  return (
    <Layout
      title={title.realEstate}
      description={description.realEstate}
      keywords={keywords.realEstate}
      page="realEstate"
      ogImage={previewPhoto}
    >
      <section>
        <h1 className={`title ${screenSize.trakResolutionValue}`}>{titles.realEstateTItle}</h1>
        <BlackBlockWithText
          title={about.title}
          description=""
          text={about.description}
          size={screenSize.trakResolutionValue}
        />

        <EmptyDoubleBlock
          firstComponent={videoComponent}
          secondComponent={cardsComponent}
          firstBlockSize="half"
          secondBlockSize="half"
          size={screenSize.trakResolutionValue}
        />
        <OkBlock data={offers} size={screenSize.trakResolutionValue} />
        <BlackBlockWithText
          title={howBuy.title}
          description=""
          text={howBuy.description}
          size={screenSize.trakResolutionValue}
        />
        <DropDownContainer containerData={faq} size={screenSize.trakResolutionValue} />
        <BlockWithContacts size={screenSize.trakResolutionValue} />
      </section>
    </Layout>
  );
}

export default RealEstate;
