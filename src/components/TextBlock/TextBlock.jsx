/* eslint-disable react/no-array-index-key */
import generateRandomKey from "../../utils/keyGenerator";
import "./TextBlock.scss";

function TextBlock({ newsTitle, newsText, size }) {
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  return (
    <article className={`text-block ${size}`}>
      <h2 className={`subtitle ${size}`}>{newsTitle}</h2>
      {typeof newsText === "object" ? (
        newsText.map((string) =>
          typeof string === "object" ? (
            <p key={getRandomKey()} className="text-block__text_bold">
              {string.bold}
            </p>
          ) : (
            <p key={getRandomKey()} className="text-block__text">
              {string}
            </p>
          )
        )
      ) : (
        <p className="text-block__text">{newsText}</p>
      )}
    </article>
  );
}

export default TextBlock;
