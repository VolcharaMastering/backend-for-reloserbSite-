import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ContactsStore from "../../stores/ContactsStore";
import "./Consult.scss";
import Layout from "../../components/Layout/Layout";
import BlockWithPhotoAndDesc from "../../components/BlockWithPhotoAndDesc/BlockWithPhotoAndDesc";
import { useResize } from "../../utils/hooks/useResize";
import generateRandomKey from "../../utils/keyGenerator";
import InfoCard from "../../components/UI/InfoCard/InfoCard";
import EmptyDoubleBlock from "../../components/EmptyDoubleBlock/EmptyDoubleBlock";
import FieldLinkBlock from "../../components/UI/FieldLinkBlock/FieldLinkBlock";
import { titles } from "../../content/titles.json";
import { title, description } from "../../content/metaInfo.json";
import { about, offers, staff, label } from "../../content/pagesContent/consultPageContent.json";
import buisnessPhoto from "../../assets/consult-temp-buisness.jpg";
import workPhoto from "../../assets/consult-temp-work.jpg";
import AboutImg from "../../components/UI/AboutImg/AboutImg";
import DropDownContainer from "../../components/DropDownContainer/DropDownContainer";

function Consult() {
  const screenSize = useResize();

  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };

  const photoComponent = () => {
    const props = {
      linkToImg: buisnessPhoto,
      imgCaption: staff.staffName,
      imgInfo: staff.staffSkills,
    };

    // Return the PhotoContainer component with the props
    return <AboutImg {...props} />;
  };
  useEffect(() => {
    ContactsStore.setContacts("consult");
  }, []);
  const contactComponent = () => {
    const props = {
      size: screenSize.trakResolutionValue,
    };
    return (
      <>
        <FieldLinkBlock {...props} />{" "}
        <NavLink to="/contacts" target="blank" className="subtitle subtitle_link">
          {label}
        </NavLink>
      </>
    );
  };
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
        <DropDownContainer containerData={offers} size={screenSize.trakResolutionValue} />
        <EmptyDoubleBlock
          firstComponent={photoComponent}
          secondComponent={contactComponent}
          firstBlockSize="small"
          secondBlockSize="big"
          size={screenSize.trakResolutionValue}
        />
        <div className="horisont-line" />
      </section>
    </Layout>
  );
}

export default Consult;
