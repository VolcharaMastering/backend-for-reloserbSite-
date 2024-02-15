import { useResize } from "../../utils/hooks/useResize";
import BlackBlockWithText from "../../components/BlackBlockWithText/BlackBlockWithText";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import galleryArray from "../../utils/folderApi/getVisarunPhotos";
import "./VisaRun.scss";
import photoLink from "../../assets/visaRun/passport.jpg";
import { titles } from "../../content/titles.json";
import {
  about,
  offers,
  whyWe,
  photoDescription,
} from "../../content/pagesContent/visarunPageContent.json";
import PhotoBlock from "../../components/PhotoBlock/PhotoBlock";
import EmptyDoubleBlock from "../../components/EmptyDoubleBlock/EmptyDoubleBlock";
import generateRandomKey from "../../utils/keyGenerator";
import InfoCard from "../../components/UI/InfoCard/InfoCard";
import SwipeButton from "../../components/UI/SwipeButton/SwipeButton";
import MapBlock from "../../components/UI/MapBlock/MapBlock";
import { useState } from "react";

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

  const cardsComponent = () => {
    return (
      <div className="grid-block">
        <h2 className="subtitle">{whyWe.title}</h2>
        <div className={`block-cards__grid ${screenSize.trakResolutionValue}`}>
          {whyWe.description.map((item) => (
            <InfoCard key={getRandomKey()} title="" description={item} />
          ))}
          {whyWe.description.length % 2 && (
            <InfoCard key={getRandomKey()} title="" description="" />
          )}
        </div>
      </div>
    );
  };
  const mapsComponent = () => {
    return (
      <>
        <h2 className={`subtitle ${screenSize.trakResolutionValue}`}>{whyWe.adress}</h2>
        <div className="visarun-map__maps">
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
      </>
    );
  };
  return (
    <section className="visarun">
      <h1 className="title visarun__title">{titles.visarunTitle}</h1>
      <BlackBlockWithText
        title={about.title}
        description=""
        text={about.description}
        size={screenSize.trakResolutionValue}
      />
      <BlockWithPhotoAndDesc
        photoLink={photoLink}
        size={screenSize.trakResolutionValue}
        caption=""
        newsTitle={offers.title}
        newsText={offers.description}
        position={false}
      />
      <PhotoBlock
        images={galleryArray}
        description={photoDescription}
        size={screenSize.trakResolutionValue}
        blockTitle=""
      />
      <EmptyDoubleBlock
        firstComponent={cardsComponent}
        secondComponent={mapsComponent}
        firstBlockSize="half"
        secondBlockSize="half"
        size={screenSize.trakResolutionValue}
      />
    </section>
  );
}

export default VisaRun;
