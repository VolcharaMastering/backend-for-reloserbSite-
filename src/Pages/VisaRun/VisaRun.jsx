import { useEffect, useState } from "react";
import { useResize } from "../../utils/hooks/useResize";
import Layout from "../../components/Layout/Layout";
import "./VisaRun.scss";
import generateRandomKey from "../../utils/keyGenerator";
import BlackBlockWithText from "../../components/BlackBlockWithText/BlackBlockWithText";
import galleryArray from "../../utils/folderApi/getVisarunPhotos";
import PhotoBlock from "../../components/PhotoBlock/PhotoBlock";
import EmptyDoubleBlock from "../../components/EmptyDoubleBlock/EmptyDoubleBlock";
import SwipeButton from "../../components/UI/SwipeButton/SwipeButton";
import MapBlock from "../../components/UI/MapBlock/MapBlock";
import { titles } from "../../content/titles.json";
import {
  about,
  offers,
  whyWe,
  photoDescription,
} from "../../content/pagesContent/visarunPageContent.json";
import { title, description } from "../../content/metaInfo.json";
import photoLink from "../../assets/visaRun/passport.jpg";
import BlockWithContacts from "../../components/BlockWithContacts/BlockWithContacts";
import ContactsStore from "../../stores/ContactsStore";
import OkBlock from "../../components/OkBlock/OkBlock";
import PhotoContainer from "../../components/UI/PhotoContainer/PhotoContainer";
import previewPhoto from "../../assets/socPreview/enter.jpg";

function VisaRun() {
  const screenSize = useResize();
  const gmapSpotNS =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d644.0972326419628!2d19.82616422232051!3d45.23622267710743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1180a3e0b597%3A0x26bbea280fc88615!2sLidl!5e0!3m2!1sru!2srs!4v1710349605509!5m2!1sru!2srs";
  const gmapSpotBg =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d420.7293451754106!2d20.435165844493273!3d44.81508397144842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2srs!4v1708016451847!5m2!1sru!2srs";
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  const [yandexMap, setYandexMap] = useState(true);

  const handleTolggeYandex = () => {
    setYandexMap(!yandexMap);
  };
  useEffect(() => {
    ContactsStore.setContacts("visarun");
  }, []);

  const offersComponent = () => {
    return <OkBlock data={offers} size={screenSize.trakResolutionValue} />;
  };

  const pictureComponent = () => {
    const props = {
      photoLink,
      containerType: "",
      title: "",
      index: "",
      size: screenSize.trakResolutionValue,
    };

    // Return the PhotoContainer component with the props
    return <PhotoContainer {...props} />;
  };

  const mapsBGComponent = () => {
    return (
      <div className={`visarun__maps  ${screenSize.trakResolutionValue}`}>
        {whyWe.adressBg.map((item) => (
          <h2
            key={getRandomKey()}
            className={`visarun__subtitle ${screenSize.trakResolutionValue}`}
          >
            {item}
          </h2>
        ))}
        <SwipeButton
          leftTitle="Google"
          rightTitle="Yandex"
          changeMap={handleTolggeYandex}
          mapState={yandexMap}
        />
        <MapBlock
          size={screenSize.trakResolutionValue}
          yandexMap={yandexMap}
          coordinate1={44.815205}
          coordinate2={20.43524}
          gmapsSrc={gmapSpotBg}
        />
      </div>
    );
  };

  const mapsNSComponent = () => {
    return (
      <div className={`visarun__maps  ${screenSize.trakResolutionValue}`}>
        {whyWe.adressNs.map((item) => (
          <h2
            key={getRandomKey()}
            className={`visarun__subtitle ${screenSize.trakResolutionValue}`}
          >
            {item}
          </h2>
        ))}
        <SwipeButton
          leftTitle="Google"
          rightTitle="Yandex"
          changeMap={handleTolggeYandex}
          mapState={yandexMap}
        />
        <MapBlock
          size={screenSize.trakResolutionValue}
          yandexMap={yandexMap}
          coordinate1={45.236427}
          coordinate2={19.826206}
          gmapsSrc={gmapSpotNS}
        />
      </div>
    );
  };
  return (
    <Layout
      title={title.visarun}
      description={description.visarun}
      page="visarun"
      ogImage={previewPhoto}
    >
      <section className="visarun">
        <h1 className={`title visarun__title ${screenSize.trakResolutionValue}`}>
          {titles.visarunTitle}
        </h1>
        <BlackBlockWithText
          title={about.title}
          description=""
          text={about.description}
          size={screenSize.trakResolutionValue}
        />
        <EmptyDoubleBlock
          firstComponent={pictureComponent}
          secondComponent={offersComponent}
          firstBlockSize="half"
          secondBlockSize="half"
          size={screenSize.trakResolutionValue}
        />
        <PhotoBlock
          images={galleryArray}
          description={photoDescription}
          size={screenSize.trakResolutionValue}
          blockTitle=""
        />
        <OkBlock data={whyWe} size={screenSize.trakResolutionValue} />
        <div className={`horisont-line ${screenSize.trakResolutionValue}`} />
        <EmptyDoubleBlock
          firstComponent={mapsBGComponent}
          secondComponent={mapsNSComponent}
          firstBlockSize="half"
          secondBlockSize="half"
          size={screenSize.trakResolutionValue}
        />
      </section>
      <BlockWithContacts size={screenSize.trakResolutionValue} />
    </Layout>
  );
}

export default VisaRun;
