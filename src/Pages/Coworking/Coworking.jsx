import Gallery from "../../components/Gallery/Gallery";
import galleryArray from "../../utils/folderApi/getPhotos";
import { useResize } from "../../utils/hooks/useResize";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import generateRandomKey from "../../utils/keyGenerator";
import "./Coworking.scss";
import { prices } from "../../content/prices.json";
import { promo } from "../../content/coworkingInfo.json";

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
      {promo && <h2 className="coworking__promo-block">АКЦИЯ!</h2>}
      <article className="coworking__info">
        <ul className="coworking__price">
          {prices.map((item) => (
            <>
              <li key={generateRandomKey} className="coworking__price-label">
                {item.service}
              </li>
              <li className="coworking__price-label">{item.price}</li>
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
    </section>
  );
}

export default Coworking;
