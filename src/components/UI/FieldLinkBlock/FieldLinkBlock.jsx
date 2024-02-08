/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./FieldLinkBlock.scss";
import generateRandomKey from "../../../utils/keyGenerator";
import ContactsStore from "../../../stores/ContactsStore";
import mailIcon from "../../../assets/icons/mail.svg";
import tgIco from "../../../assets/icons/telegram.svg";
import channelIcon from "../../../assets/icons/tg-group.svg";
import webIcon from "../../../assets/icons/web-site.svg";
import phoneIcon from "../../../assets/icons/phone.svg";

const FieldLinkBlock = observer(({ size }) => {
  const [contactsArray, setcontactsArray] = useState([]);

  const setIcon = (data) => {
    console.log(data);
    switch (data) {
      case "phoneIcon":
        return phoneIcon;
      case "tgIcon":
        return tgIco;
      case "mailIcon":
        return mailIcon;
      case "channelIcon":
        return channelIcon;

      default:
        return webIcon;
    }
  };
  useEffect(() => {
    const contentWithIndex = ContactsStore.contactsToShow.map((item) => {
      const randomKey = generateRandomKey();
      const gotIcon = setIcon(item.icon);
      return { ...item, index: randomKey, icon: gotIcon };
    });
    setcontactsArray(contentWithIndex);
  }, [ContactsStore.contactsToShow]);
  useEffect(() => {
    [ContactsStore.setContacts("main")];
  }, []);
  return (
    <nav className={`field-links ${size}`}>
      {contactsArray.length &&
        contactsArray.map((item) => (
          <Link
            to={item.linkTo}
            key={item.index}
            rel="noopener noreferrer"
            className={`field-links__link ${size}`}
            target="_blank"
          >
            <img
              src={item.icon}
              className="field-links__icon"
              alt={`Icon for link to ${item.name}`}
            />
            {item.name}
          </Link>
        ))}
    </nav>
  );
});

export default FieldLinkBlock;
