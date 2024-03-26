import ContactsStore from "../../../stores/ContactsStore";
import FormStore from "../../../stores/FormStore";
import "./Button.scss";

function Button({ name, action, color, size, type }) {
  const handleClick = () => {
    if (type === "contact") {
      ContactsStore.setContacts(action);
    }
    if (type === "form") {
      FormStore.setOpened(action);
    }
  };
  return (
    <button className={`button ${color} ${size} ${type}`} onClick={handleClick} type="button">
      {name}
    </button>
  );
}

export default Button;
