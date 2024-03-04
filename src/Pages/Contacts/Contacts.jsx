// import { useState } from "react";
import "./Contacts.scss";
import ContactButtonsBlock from "../../components/ContactButtonsBlock/ContactButtonsBlock";
import { useResize } from "../../utils/hooks/useResize";
import BlockWithContacts from "../../components/BlockWithContacts/BlockWithContacts";
import Layout from "../../components/Layout/Layout";
import { title, description } from "../../content/metaInfo.json";
import VideoMapBlock from "../../components/VideoMapBlock/VideoMapBlock";

function Contacts() {
  const screenSize = useResize();

  return (
    <Layout title={title.contacts} description={description.contacts}>
      <section className="contacts">
        <ContactButtonsBlock size={screenSize.trakResolutionValue} />
        <BlockWithContacts size={screenSize.trakResolutionValue} />
        <VideoMapBlock size={screenSize.trakResolutionValue} />
      </section>
    </Layout>
  );
}

export default Contacts;
