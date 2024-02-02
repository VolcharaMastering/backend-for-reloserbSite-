import ContactsStore from "../../../stores/ContactsStore";
import "./Button.scss";

function Button({ name, action, color, size, type }) {
  const handleClick = () => {
    if (type === "contact") {
      ContactsStore.setContacts(action);
    } else {
      console.log(action);
    }
  };
  return (
    <div>
      <button className={`button ${color} ${size}`} onClick={handleClick} type="button">
        {name}
      </button>
    </div>
  );
}

export default Button;
