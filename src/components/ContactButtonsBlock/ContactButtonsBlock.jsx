import Button from "../UI/Button/Button";
import "./ContactButtonsBlock.scss";

function ContactButtonsBlock({ size }) {
  return (
    <div className="contact-buttons">
      <h2 className="contact-buttons__title">Выберите контакты для связи</h2>
      <Button name="Центральный оффис" action="main" color="light" size={size} type="contact" />
      <ul className={`contact-buttons__block ${size}`}>
        <li className="contact-buttons__button">
          <Button name="Коворкинг" action="coworking" color="light" size="button" type="contact" />
        </li>
        <li className="contact-buttons__button">
          <Button
            name="Недвижимость"
            action="realEstate"
            color="light"
            size="button"
            type="contact"
          />
        </li>
        <li className="contact-buttons__button">
          <Button name="Грузоперевозки" action="cargo" color="light" size="button" type="contact" />
        </li>
        <li className="contact-buttons__button">
          <Button name="Визаран" action="visarun" color="light" size="button" type="contact" />
        </li>
      </ul>
    </div>
  );
}

export default ContactButtonsBlock;
