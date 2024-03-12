import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { isSafari } from "../../utils/detectSafari";
import "./BlockWithBlackBackground.scss";
import generateRandomKey from "../../utils/keyGenerator";
import InfoCard from "../UI/InfoCard/InfoCard";

function BlockWithBlackBackground({ title, blocks, description, linkTo, size }) {
  const [safariUser, setSafariUser] = useState(false);
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };

  useEffect(() => {
    setSafariUser(isSafari());
  }, []);
  return (
    <article className="black-block">
      {title && <h2 className={`subtitle_white ${size}`}>{title}</h2>}
      <nav>
        <ul
          className={`${safariUser ? "black-block__navigation_safari" : "black-block__navigation"}  ${size}`}
        >
          {blocks.length &&
            blocks.map((singleBlock) =>
              singleBlock.blockLink ? (
                <li className={`black-block__card ${size}`} key={getRandomKey()}>
                  <NavLink to={singleBlock.blockLink} className={`black-block__info-block ${size}`}>
                    <InfoCard
                      title={singleBlock.blockTitle}
                      description={singleBlock.blockText}
                      type="black"
                    />
                  </NavLink>
                </li>
              ) : (
                <li className={`black-block__card ${size}`} key={getRandomKey()}>
                  <InfoCard
                    key={getRandomKey()}
                    title={singleBlock.blockTitle}
                    description={singleBlock.blockText}
                    type="black"
                  />
                </li>
              )
            )}
        </ul>
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
