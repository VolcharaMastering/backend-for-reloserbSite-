import DropDownListTitle from "../UI/DropDownListTitle/DropDownListTitle";
import generateRandomKey from "../../utils/keyGenerator";
import "./DropDownContainer.scss";

function DropDownContainer({ containerData, size }) {
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  return (
    <section className={`drop-container ${size}`}>
      <h2 className={`subtitle ${size}`}>{containerData.title}</h2>
      {containerData.caption && (
        <p className={`drop-container__text ${size}`}>{containerData.caption}</p>
      )}
      {containerData.description &&
        containerData.description.map((dropBlock) => (
          <DropDownListTitle key={getRandomKey()} dropItem={dropBlock} size={size} />
        ))}
    </section>
  );
}

export default DropDownContainer;
