import { useEffect } from "react";
import { useResize } from "../../utils/hooks/useResize";
import ContactsStore from "../../stores/ContactsStore";
import Layout from "../../components/Layout/Layout";
import "./Cargo.scss";
import BlackBlockWithText from "../../components/BlackBlockWithText/BlackBlockWithText";
import Gallery from "../../components/Gallery/Gallery";
import galleryArray from "../../utils/folderApi/getCargoPhotos";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import BlockWithContacts from "../../components/BlockWithContacts/BlockWithContacts";
import promoImage from "../../assets/cargo/cargo1.jpg";
import { about, offers } from "../../content/pagesContent/cargoPageContent.json";
import { title, description } from "../../content/metaInfo.json";
import { titles } from "../../content/titles.json";

function Cargo() {
  useEffect(() => {
    ContactsStore.setContacts("cargo");
  }, []);
  const screenSize = useResize();
  return (
    <Layout title={title.cargo} description={description.cargo}>
      <section className="cargo">
        <h1 className={`title ${screenSize.trakResolutionValue}`}>{titles.cargoTitle}</h1>
        <BlackBlockWithText
          title={about.title}
          description=""
          text={about.description}
          size={screenSize.trakResolutionValue}
        />
        <Gallery galleryType="block" content={galleryArray} size={screenSize.trakResolutionValue} />
        <BlockWithPhotoAndDesc
          photoLink={promoImage}
          size={screenSize.trakResolutionValue}
          caption=""
          newsTitle={offers.title}
          newsText={offers.description}
        />

        <BlockWithContacts size={screenSize.trakResolutionValue} />
      </section>
    </Layout>
  );
}

export default Cargo;
