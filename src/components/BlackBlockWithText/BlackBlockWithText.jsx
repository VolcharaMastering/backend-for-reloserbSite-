import { NavLink } from "react-router-dom";
import generateRandomKey from "../../utils/keyGenerator";
import Button from "../UI/Button/Button";
import "./BlackBlockWithText.scss";

function BlackBlockWithText({ title, description, text, size, linkTo, linkAction }) {
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  return (
    <article className="black-text-block">
      {title && <h2 className={`subtitle_white black-text-block__title ${size}`}>{title}</h2>}
      {description && <p className="black-text-block__description">{description}</p>}
      {text &&
        text.map((item) => (
          <p key={getRandomKey()} className={`black-text-block__text ${size}`}>
            {item.split(/({.*?})/).map((thisItem) =>
              thisItem.includes("{")
                ? (() => {
                    const linkData = JSON.parse(thisItem);
                    return (
                      <NavLink
                        to={linkData.url}
                        target="_blank"
                        className="black-text-block__text linked"
                      >
                        {linkData.replaceText}
                      </NavLink>
                    );
                  })()
                : thisItem
            )}
          </p>
        ))}
      {linkTo && (
        <div className={`black-text-block__button ${size}`}>
          <Button name={linkTo} action={linkAction} color="dark" size={size} type="focus" />
        </div>
      )}
    </article>
  );
}

export default BlackBlockWithText;
