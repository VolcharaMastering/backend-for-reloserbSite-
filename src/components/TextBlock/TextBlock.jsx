/* eslint-disable react/no-array-index-key */
import "./TextBlock.scss";

function TextBlock({ newsTitle, newsText, size }) {
  return (
    <article className={`text-block ${size}`}>
      <h2 className="text-block__title">{newsTitle}</h2>
      {typeof newsText === "object" ? (
        newsText.map((string, index) => (
          <p key={index} className="text-block__text">
            {string}
          </p>
        ))
      ) : (
        <p className="text-block__text">{newsText}</p>
      )}
    </article>
  );
}

export default TextBlock;
