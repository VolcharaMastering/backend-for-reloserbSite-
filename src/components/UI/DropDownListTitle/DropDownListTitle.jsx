/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import { observer } from "mobx-react-lite";
import "./DropDownListTitle.scss";
import DropDownList from "../../../stores/DropDownList";
import DropDownListItem from "../DropDownListItem/DropDownListItem";

const DropDownListTitle = observer(({ dropItem, size }) => {
  const handleToggleList = () => {
    DropDownList.setToggled(dropItem.id);
  };
  return (
    <>
      <h2 className={`subtitle ${size}`} onClick={handleToggleList}>
        {dropItem.id.title}
      </h2>
      <ul className={`drop-down-title `}>
        {DropDownList.lists[dropItem.id] &&
          dropItem.id.data.map((item) => <DropDownListItem listItem={item} size={size} />)}
      </ul>
    </>
  );
});

export default DropDownListTitle;
