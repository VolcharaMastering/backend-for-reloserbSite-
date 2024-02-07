// import { useState } from "react";
import "./Contacts.scss";
import ContactButtonsBlock from "../../components/ContactButtonsBlock/ContactButtonsBlock";
import { useResize } from "../../utils/hooks/useResize";
import BlockWithContacts from "../../components/BlockWithContacts/BlockWithContacts";

function Contacts() {
  // const [ setContact] = useState("main");
  const screenSize = useResize();

  // const handleSetContact = (gotContact) => {
  //   setContact(gotContact);
  // };

  return (
    <section className="contacts">
      <ContactButtonsBlock size={screenSize.trakResolutionValue} />
      <BlockWithContacts size={screenSize.trakResolutionValue} />
    </section>
  );
}

export default Contacts;
