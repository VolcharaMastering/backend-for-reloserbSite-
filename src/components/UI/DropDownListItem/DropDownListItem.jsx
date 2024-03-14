/* eslint-disable no-nested-ternary */
import { NavLink } from "react-router-dom";
import "./DropDownListItem.scss";
import generateRandomKey from "../../../utils/keyGenerator";

function DropDownListItem({ listItem, size }) {
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  return (
    <li className={`drop-list-item ${size} `}>
      {listItem.text ? (
        <p className={`drop-list-item__text ${size}`}>
          {listItem.text.split(/({.*?})/).map((item) => {
            if (item.includes("{")) {
              const linkData = JSON.parse(item);
              return (
                <NavLink
                  to={linkData.url}
                  key={getRandomKey()}
                  target="_blank"
                  className={`drop-list-item__text_linked ${size}`}
                >
                  {linkData.replaceText}
                </NavLink>
              );
            }
            return item;
          })}
        </p>
      ) : listItem.subText ? (
        <p className={`drop-list-item__sub-text ${size}`}>{listItem.subText}</p>
      ) : (
        <NavLink
          target="_blank"
          to={listItem.href.src}
          className={`drop-list-item__link drop-list-item__text ${size}`}
        >
          {listItem.href.text}
        </NavLink>
      )}
    </li>
  );
}

export default DropDownListItem;
