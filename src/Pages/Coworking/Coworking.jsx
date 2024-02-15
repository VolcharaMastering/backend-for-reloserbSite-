/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useRef } from "react";
import { useResize } from "../../utils/hooks/useResize";
import Gallery from "../../components/Gallery/Gallery";
import galleryArray from "../../utils/folderApi/getCoworkingPhotos";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import InfoCard from "../../components/UI/InfoCard/InfoCard";
import Layout from "../../components/Layout/Layout";
import BlackBlockWithText from "../../components/BlackBlockWithText/BlackBlockWithText";
import generateRandomKey from "../../utils/keyGenerator";
import "./Coworking.scss";
import { prices } from "../../content/prices.json";
import { promo } from "../../content/coworkingInfo.json";
import { titles } from "../../content/titles.json";
import { title, description } from "../../content/metaInfo.json";
import { about, offers, whyWe } from "../../content/pagesContent/coworkingPageContent.json";
import promoImage from "../../assets/promo.png";

function Coworking() {
  const screenSize = useResize();
  const scrollToPromo = useRef(null);
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  const handleScrollToPromo = () => {
    if (scrollToPromo.current) {
      scrollToPromo.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Layout title={title.coworking} description={description.coworking}>
      <section className="coworking">
        <h1 className="title coworking__title">{titles.coworkTitle}</h1>
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
        <article className={`coworking__info ${screenSize.trakResolutionValue}`}>
          <h2 className="coworking__titles">Прайс-лист</h2>
          <ul className="coworking__price">
            {prices.map((item) => (
              <>
                <li
                  key={getRandomKey}
                  className={`coworking__price-label ${screenSize.trakResolutionValue}`}
                >
                  {item.service}
                </li>
                <li className={`coworking__price-label ${screenSize.trakResolutionValue}`}>
                  {item.price}
                </li>
              </>
            ))}
          </ul>
        </article>

        {promo.length && (
          <div ref={scrollToPromo}>
            {promo.map((item, index) => (
              <BlockWithPhotoAndDesc
                key={getRandomKey}
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
        <div className="coworking__grid-block">
          <h2 className="subtitle">{offers.title}</h2>
          <div className={`coworking__grid ${screenSize.trakResolutionValue}`}>
            {offers.description.map((item) => (
              <InfoCard key={getRandomKey} title="" description={item} />
            ))}
          </div>
        </div>
        <div className="coworking__grid-block">
          <h2 className={`subtitle ${screenSize.trakResolutionValue}`}>{whyWe.title}</h2>
          <div className={`coworking__grid ${screenSize.trakResolutionValue}`}>
            {whyWe.description.map((item) => (
              <InfoCard
                key={getRandomKey}
                title=""
                description={item}
                size={screenSize.trakResolutionValue}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Coworking;
