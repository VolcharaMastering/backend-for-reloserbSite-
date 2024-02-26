import generateRandomKey from "../../utils/keyGenerator";
import OkText from "../UI/OkText/OkText";
import "./OkBlock.scss";

function OkBlock({ data, size }) {
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };
  return (
    <ul className={`ok-block ${size}`}>
      <h2 className={`title ${size}`}>{`${data.title}`}</h2>
      {data.description &&
        data.description.map((item) => (
          <li key={getRandomKey()} className={`ok-block__item ${size}`}>
            <OkText gotText={item} size={size} />
          </li>
        ))}
    </ul>
  );
}
export default OkBlock;
