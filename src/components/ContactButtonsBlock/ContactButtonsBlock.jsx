import Button from "../UI/Button/Button";
import "./ContactButtonsBlock.scss";
import { buttons } from "../../content/contacts.json";
import generateRandomKey from "../../utils/keyGenerator";
import { titles } from "../../content/titles.json";

function ContactButtonsBlock({ size }) {
  const getRandomKey = () => {
    const index = generateRandomKey();
    console.log("INDEX", index);
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
      </ul>
    </div>
  );
}

export default ContactButtonsBlock;
