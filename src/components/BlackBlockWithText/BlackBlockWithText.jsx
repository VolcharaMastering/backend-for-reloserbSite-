import generateRandomKey from "../../utils/keyGenerator";
import "./BlackBlockWithText.scss";

function BlackBlockWithText({ title, description, text, size }) {
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  return (
    <article className="black-text-block">
      <h2 className={`subtitle_white black-text-block__title ${size}`}>{title}</h2>
      <p className="black-text-block__description">{description}</p>
      {text.map((item) => (
        <p key={getRandomKey} className={`black-text-block__text ${size}`}>
          {item}
        </p>
      ))}
    </article>
  );
}

export default BlackBlockWithText;
