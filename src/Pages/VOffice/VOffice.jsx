import { useEffect, useRef } from "react";
import { useResize } from "../../utils/hooks/useResize";
import BlockWithContacts from "../../components/BlockWithContacts/BlockWithContacts";
import ContactsStore from "../../stores/ContactsStore";
import EmptyDoubleBlock from "../../components/EmptyDoubleBlock/EmptyDoubleBlock";
import BlackBlockWithText from "../../components/BlackBlockWithText/BlackBlockWithText";
import OkBlock from "../../components/OkBlock/OkBlock";
import Layout from "../../components/Layout/Layout";
import "./VOffice.scss";
import { titles } from "../../content/titles.json";
import { about, headText, price } from "../../content/pagesContent/v-oficePageContent.json";
import { title, description } from "../../content/metaInfo.json";
import officeImage from "../../assets/v-office.png";
import PhotoContainer from "../../components/UI/PhotoContainer/PhotoContainer";
import PriceBlock from "../../components/PriceBlock/PriceBlock";
import previewPhoto from "../../assets/socPreview/enter.jpg";

function VOffice() {
  const screenSize = useResize();
  const scrollToContacts = useRef(null);

  const photoComponent = () => {
    const props = {
      photoLink: officeImage,
      containerType: "",
      title: "",
      index: "",
      size: screenSize.trakResolutionValue,
    };

    // Return the PhotoContainer component with the props
    return <PhotoContainer {...props} />;
  };
  const listComponent = () => {
    return <OkBlock data={about} size={screenSize.trakResolutionValue} />;
  };

  useEffect(() => {
    ContactsStore.setContacts("v-office");
  }, []);
  const handleScrollToContacts = () => {
    if (scrollToContacts.current) {
      scrollToContacts.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Layout
      title={title.voffice}
      description={description.voffice}
      page="voffice"
      ogImage={previewPhoto}
    >
      <section className="v-office">
        <h1 className={`title ${screenSize.trakResolutionValue}`}>{titles.voffice}</h1>
        <BlackBlockWithText
          title=""
          description=""
          text={headText.description}
          linkTo={headText.linkText}
          linkAction={handleScrollToContacts}
          size={screenSize.trakResolutionValue}
        />
        <PriceBlock prices={price} size={screenSize.trakResolutionValue} />
        <div className="horisont-line" />
        <EmptyDoubleBlock
          firstComponent={listComponent}
          secondComponent={photoComponent}
          firstBlockSize="big"
          secondBlockSize="small"
          size={screenSize.trakResolutionValue}
        />
        <div ref={scrollToContacts}>
          <BlockWithContacts size={screenSize.trakResolutionValue} />
        </div>
      </section>
    </Layout>
  );
}
export default VOffice;
