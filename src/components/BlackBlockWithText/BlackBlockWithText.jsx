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
            {item}
          </p>
        ))}
      {linkTo && <Button name={linkTo} action={linkAction} color="dark" size={size} type="focus" />}
    </article>
  );
}

export default BlackBlockWithText;
