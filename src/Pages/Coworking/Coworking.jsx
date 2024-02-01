import Gallery from "../../components/Gallery/Gallery";
import galleryArray from "../../utils/folderApi/getPhotos";
import { useResize } from "../../utils/hooks/useResize";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import generateRandomKey from "../../utils/keyGenerator";
import "./Coworking.scss";
import { prices } from "../../content/prices.json";
import { promo, oppotunities } from "../../content/coworkingInfo.json";
import InfoCard from "../../components/UI/InfoCard/InfoCard";

function Coworking() {
  console.log(promo, promo.src, promo.title, promo.caption, promo.text);
  const screenSize = useResize();
  return (
    <section className="coworking">
      <Gallery
        galleryType="stringed"
        content={galleryArray}
        size={screenSize.trakResolutionValue}
      />
      {promo && <h2 className="coworking__titles">АКЦИЯ!</h2>}
      <article className={`coworking__info ${screenSize.trakResolutionValue}`}>
        <h2 className="coworking__titles">Прайс-лист</h2>
        <ul className="coworking__price">
          {prices.map((item) => (
            <>
              <li
                key={generateRandomKey}
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
      {promo.length &&
        promo.map((item, index) => (
          <BlockWithPhotoAndDesc
            key={generateRandomKey}
            size={screenSize.trakResolutionValue}
            photoLink={item.src}
            newsTitle={item.title}
            caption={item.caption}
            newsText={item.text}
            position={index % 2 === 0}
          />
        ))}
      <div className="coworking__grid-block">
        <div className="coworking__grid">
          {oppotunities.map((item) => (
            <InfoCard key={generateRandomKey} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Coworking;
