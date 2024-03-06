import { useEffect } from "react";
import ContactsStore from "../../stores/ContactsStore";
import { useResize } from "../../utils/hooks/useResize";
import DropDownContainer from "../../components/DropDownContainer/DropDownContainer";
import OkBlock from "../../components/OkBlock/OkBlock";
import BlackBlockWithText from "../../components/BlackBlockWithText/BlackBlockWithText";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import "./Partner.scss";
import { headText, about, terms, whyWe } from "../../content/pagesContent/partnerPageContent.json";
import { title, description } from "../../content/metaInfo.json";
import { titles } from "../../content/titles.json";
import promoImage from "../../assets/coworkPictures/DSC00025.jpg";
import BlockWithContacts from "../../components/BlockWithContacts/BlockWithContacts";

function Partner() {
  const screenSize = useResize();

  useEffect(() => {
    ContactsStore.setContacts("partner");
  }, []);
  return (
    <section className="partner">
      <h1 className={`title ${screenSize.trakResolutionValue}`}>{titles.partner}</h1>
      <BlackBlockWithText
        title={headText.title}
        description=""
        text={headText.description}
        size={screenSize.trakResolutionValue}
      />
      <BlockWithPhotoAndDesc
        size={screenSize.trakResolutionValue}
        photoLink={promoImage}
        newsTitle={about.title}
        newsText={about.description}
      />

      <div className={`horisont-line ${screenSize.trakResolutionValue}`} />
      <DropDownContainer containerData={terms} size={screenSize.trakResolutionValue} />
      <div className="horisont-line" />
      <OkBlock data={whyWe} size={screenSize.trakResolutionValue} />
      <BlockWithContacts size={screenSize.trakResolutionValue} />
    </section>
  );
}
export default Partner;
