/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useRef } from "react";
import ContactsStore from "../../stores/ContactsStore";
import { useResize } from "../../utils/hooks/useResize";
import Gallery from "../../components/Gallery/Gallery";
import galleryArray from "../../utils/folderApi/getCoworkingPhotos";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import Layout from "../../components/Layout/Layout";
import BlackBlockWithText from "../../components/BlackBlockWithText/BlackBlockWithText";
import BlockWithContacts from "../../components/BlockWithContacts/BlockWithContacts";
import generateRandomKey from "../../utils/keyGenerator";
import PriceBlock from "../../components/PriceBlock/PriceBlock";
import OkBlock from "../../components/OkBlock/OkBlock";
import "./Coworking.scss";
import { titles } from "../../content/titles.json";
import { title, description } from "../../content/metaInfo.json";
import {
  about,
  offers,
  whyWe,
  promo,
  prices,
} from "../../content/pagesContent/coworkingPageContent.json";
import promoImage from "../../assets/coworkPictures/DSC00025.jpg";

function Coworking() {
  const screenSize = useResize();
  const scrollToPromo = useRef(null);
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };

  useEffect(() => {
    ContactsStore.setContacts("coworking");
  }, []);
  const handleScrollToPromo = () => {
    if (scrollToPromo.current) {
      scrollToPromo.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Layout title={title.coworking} description={description.coworking}>
      <section className="coworking">
        <h1 className={`title coworking__title ${screenSize.trakResolutionValue}`}>
          {titles.coworkTitle}
        </h1>
        <Gallery
          galleryType="stringed"
          content={galleryArray}
          size={screenSize.trakResolutionValue}
        />
        {promo && (
          <h2 onClick={handleScrollToPromo} className="coworking__titles">
            АКЦИЯ!
          </h2>
        )}
        <BlackBlockWithText
          title={about.title}
          description=""
          text={about.description}
          size={screenSize.trakResolutionValue}
        />
        <PriceBlock prices={prices} size={screenSize.trakResolutionValue} />
        {promo.length && (
          <div ref={scrollToPromo}>
            {promo.map((item, index) => (
              <BlockWithPhotoAndDesc
                key={getRandomKey()}
                size={screenSize.trakResolutionValue}
                photoLink={promoImage}
                newsTitle={item.title}
                caption={item.caption}
                newsText={item.text}
                position={index % 2 === 0}
              />
            ))}
          </div>
        )}
        <OkBlock data={offers} size={screenSize.trakResolutionValue} />
        <div className="horisont-line" />
        <OkBlock data={whyWe} size={screenSize.trakResolutionValue} />
        <BlockWithContacts size={screenSize.trakResolutionValue} />
      </section>
    </Layout>
  );
}

export default Coworking;
