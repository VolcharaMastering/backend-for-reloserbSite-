import Button from "../UI/Button/Button";
import "./ContactButtonsBlock.scss";
import generateRandomKey from "../../utils/keyGenerator";
import { buttons } from "../../content/pagesContent/contactsPageContent.json";
import { titles } from "../../content/titles.json";

function ContactButtonsBlock({ size }) {
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  return (
    <div className="contact-buttons">
      <h1 className={`title ${size}`}>{titles.contactTitle}</h1>
      <ul className={`contact-buttons__block ${size}`}>
        {buttons.length > 0 &&
          buttons.map((buttonData) => (
            <li key={getRandomKey()} className="contact-buttons__button">
              <Button
                name={buttonData.buttonName}
                action={buttonData.buttonAction}
                color="light"
                size={size}
                type="contact"
              />
            </li>
          ))}
        <Button
          name="form"
          action={{ isOpened: true, formType: "feddback", formContent: "" }}
          color="light"
          size={size}
          type="form"
        />
      </ul>
    </div>
  );
}

export default ContactButtonsBlock;
