import { useEffect, useState } from "react";
import FieldLinkBlock from "../UI/FieldLinkBlock/FieldLinkBlock";
import "./BlockWithContacts.scss";

function BlockWithContacts({ size }) {
  return (
    <section className={`contacts-container ${size}`}>
      <FieldLinkBlock size={size} />
    </section>
  );
}
export default BlockWithContacts;
