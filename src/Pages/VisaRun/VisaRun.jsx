import { useEffect, useState } from "react";
import { useResize } from "../../utils/hooks/useResize";
import Layout from "../../components/Layout/Layout";
import "./VisaRun.scss";
import generateRandomKey from "../../utils/keyGenerator";
import BlackBlockWithText from "../../components/BlackBlockWithText/BlackBlockWithText";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import galleryArray from "../../utils/folderApi/getVisarunPhotos";
import PhotoBlock from "../../components/PhotoBlock/PhotoBlock";
import EmptyDoubleBlock from "../../components/EmptyDoubleBlock/EmptyDoubleBlock";
import InfoCard from "../../components/UI/InfoCard/InfoCard";
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

function VisaRun() {
  const screenSize = useResize();
  const gmapSpot =
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
      photoLink: photoLink,
      containerType: "",
      title: "",
      index: "",
      size: screenSize.trakResolutionValue,
    };

    // Return the PhotoContainer component with the props
    return <PhotoContainer {...props} />;
  };

  const whyComponent = () => {
    return <OkBlock data={whyWe} size={screenSize.trakResolutionValue} />;
  };

  const mapsComponent = () => {
    return (
      <div className={`visarun__maps  ${screenSize.trakResolutionValue}`}>
        {whyWe.adress.map((item) => (
          <h2 className={`visarun__subtitle ${screenSize.trakResolutionValue}`}>{item}</h2>
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
          gmapsSrc={gmapSpot}
        />
      </div>
    );
  };
  return (
    <Layout title={title.visarun} description={description.visarun}>
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
        <EmptyDoubleBlock
          firstComponent={whyComponent}
          secondComponent={mapsComponent}
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
