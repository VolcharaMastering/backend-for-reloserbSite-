import { NavLink } from "react-router-dom";
import "./BlockWithBlackBackground.scss";
import generateRandomKey from "../../utils/keyGenerator";
import InfoCard from "../UI/InfoCard/InfoCard";

function BlockWithBlackBackground({ title, blocks, description, linkTo, size }) {
  const getRandomKey = () => {
    const index = generateRandomKey();
    console.log(index);
    return index;
  };
  return (
    <article className="black-block">
      <h2 className={`subtitle_white ${size}`}>{title}</h2>
      <nav className={`black-block__navigation ${size}`}>
        {blocks.length &&
          blocks.map((singleBlock) =>
            singleBlock.blockLink ? (
              <NavLink
                to={singleBlock.blockLink}
                key={getRandomKey()}
                className={`black-block__info-block ${size}`}
              >
                <InfoCard
                  title={singleBlock.blockTitle}
                  description={singleBlock.blockText}
                  type="black"
                />
              </NavLink>
            ) : (
              <InfoCard
                key={getRandomKey()}
                title={singleBlock.blockTitle}
                description={singleBlock.blockText}
                type="black"
              />
            )
          )}
      </nav>
      {description && (
        <NavLink to={linkTo} className={`black-block__description ${size}`}>
          {description}
        </NavLink>
      )}
    </article>
  );
}

export default BlockWithBlackBackground;
