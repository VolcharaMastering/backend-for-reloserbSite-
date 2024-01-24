import "./TextBlock.scss";

function TextBlock({ newsTitle, newsText, size }) {
  return (
    <article className={`text-block ${size}`}>
      <h2 className="text-block__title">{newsTitle}</h2>
      <p className="text-block__text">{newsText}</p>
    </article>
  );
}

export default TextBlock;
