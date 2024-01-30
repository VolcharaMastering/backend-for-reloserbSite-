import "./BlockWithBlackBackground.scss";

function BlockWithBlackBackground({ title, description, text }) {
  return (
    <article className="black-block">
      <h2 className="black-block__title">{title}</h2>
      <p className="black-block__description">{description}</p>
      <p className="black-block__text">{text}</p>
    </article>
  );
}

export default BlockWithBlackBackground;
