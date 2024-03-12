import { useEffect } from "react";
import { useResize } from "../../utils/hooks/useResize";
import ContactsStore from "../../stores/ContactsStore";
import Layout from "../../components/Layout/Layout";
import BlackBlockWithText from "../../components/BlackBlockWithText/BlackBlockWithText";
import Gallery from "../../components/Gallery/Gallery";
import galleryArray from "../../utils/folderApi/getCargoPhotos";
import BlockWithContacts from "../../components/BlockWithContacts/BlockWithContacts";
import PhotoContainer from "../../components/UI/PhotoContainer/PhotoContainer";
import OkBlock from "../../components/OkBlock/OkBlock";
import EmptyDoubleBlock from "../../components/EmptyDoubleBlock/EmptyDoubleBlock";
import "./Cargo.scss";
import { about, offers, whyWe } from "../../content/pagesContent/cargoPageContent.json";
import { title, description } from "../../content/metaInfo.json";
import { titles } from "../../content/titles.json";
import promoImage from "../../assets/cargo/cargo1.jpg";

function Cargo() {
  useEffect(() => {
    ContactsStore.setContacts("cargo");
  }, []);
  const screenSize = useResize();

  const photoComponent = () => {
    const props = {
      photoLink: promoImage,
      containerType: "",
      title: "",
      index: "",
      size: screenSize.trakResolutionValue,
    };

    // Return the PhotoContainer component with the props
    return <PhotoContainer {...props} />;
  };

  const listComponent = () => {
    return <OkBlock data={offers} size={screenSize.trakResolutionValue} />;
  };

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
        {!(
          screenSize.trakResolutionValue === "tablet" || screenSize.trakResolutionValue === "mobile"
        ) ? (
          <Gallery
            galleryType="block"
            content={galleryArray}
            size={screenSize.trakResolutionValue}
          />
        ) : (
          <Gallery
            galleryType="stringed"
            content={galleryArray}
            size={screenSize.trakResolutionValue}
          />
        )}

        <div className="horisont-line" />
        <EmptyDoubleBlock
          firstComponent={listComponent}
          secondComponent={photoComponent}
          firstBlockSize="big"
          secondBlockSize="small"
          size={screenSize.trakResolutionValue}
        />
        <OkBlock data={whyWe} size={screenSize.trakResolutionValue} />
        <BlockWithContacts size={screenSize.trakResolutionValue} />
      </section>
    </Layout>
  );
}

export default Cargo;
