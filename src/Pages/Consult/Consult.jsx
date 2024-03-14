import { useEffect } from "react";
import ContactsStore from "../../stores/ContactsStore";
import "./Consult.scss";
import Layout from "../../components/Layout/Layout";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import { useResize } from "../../utils/hooks/useResize";
import DropDownContainer from "../../components/DropDownContainer/DropDownContainer";
import BlockWithContacts from "../../components/BlockWithContacts/BlockWithContacts";
import { titles } from "../../content/titles.json";
import { title, description } from "../../content/metaInfo.json";
import { about, offers, staff, label } from "../../content/pagesContent/consultPageContent.json";
import workPhoto from "../../assets/consult-temp-work.jpg";
import previewPhoto from "../../assets/socPreview/enter.jpg";

function Consult() {
  const screenSize = useResize();

  useEffect(() => {
    ContactsStore.setContacts("consult");
  }, []);

  return (
    <Layout
      title={title.consult}
      description={description.consult}
      page="consult"
      ogImage={previewPhoto}
    >
      <section className="consult">
        <h1 className={`title ${screenSize.trakResolutionValue}`}>{titles.consultTitle}</h1>
        <BlockWithPhotoAndDesc
          photoLink={workPhoto}
          size={screenSize.trakResolutionValue}
          caption=""
          newsTitle={about.title}
          newsText={about.description}
        />
        <div className="horisont-line" />
        <DropDownContainer containerData={offers} size={screenSize.trakResolutionValue} />
        <BlockWithContacts size={screenSize.trakResolutionValue} />
      </section>
    </Layout>
  );
}

export default Consult;
