/* eslint-disable react/display-name */
import { observer } from "mobx-react-lite";
import "./Form.scss";
import Button from "../UI/Button/Button";
import contacts from "../../content/contacts.json";

const Form = observer(({ size }) => {
  return (
    <form className="form">
      <Button name={contacts.buttonName} action="" color="dark" size={size} type="formAction" />
    </form>
  );
});

export default Form;
