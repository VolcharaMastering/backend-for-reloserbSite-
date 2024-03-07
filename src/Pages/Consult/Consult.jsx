import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ContactsStore from "../../stores/ContactsStore";
import "./Consult.scss";
import Layout from "../../components/Layout/Layout";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import { useResize } from "../../utils/hooks/useResize";
import generateRandomKey from "../../utils/keyGenerator";
import DropDownContainer from "../../components/DropDownContainer/DropDownContainer";
import BlockWithContacts from "../../components/BlockWithContacts/BlockWithContacts";
import FieldLinkBlock from "../../components/UI/FieldLinkBlock/FieldLinkBlock";
import AboutImg from "../../components/UI/AboutImg/AboutImg";
import { titles } from "../../content/titles.json";
import { title, description } from "../../content/metaInfo.json";
import { about, offers, staff, label } from "../../content/pagesContent/consultPageContent.json";
import buisnessPhoto from "../../assets/consult-temp-buisness.jpg";
import workPhoto from "../../assets/consult-temp-work.jpg";

function Consult() {
  const screenSize = useResize();

  useEffect(() => {
    ContactsStore.setContacts("consult");
  }, []);

  return (
    <Layout title={title.consult} description={description.consult}>
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
