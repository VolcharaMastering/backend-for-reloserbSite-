import generateRandomKey from "../../utils/keyGenerator";
import "./PriceBlock.scss";

function PriceBlock({ prices, size }) {
  const getRandomKey = () => {
    const index = generateRandomKey();
    return index;
  };

  return (
    <article className={`price ${size}`}>
      <h2 className={`subtitle ${size}`}>{prices.title}</h2>
      <ul className={`price__table ${size}`}>
        {prices.table.map((item) => (
          <>
            <li key={getRandomKey} className={`price__label ${size}`}>
              {item.interval}
            </li>
            <li className={`price__label ${size}`}>{item.price}</li>
          </>
        ))}
      </ul>
      {prices.pricePromo && <h3 className={`price__promo ${size}`}>{prices.pricePromo}</h3>}
    </article>
  );
}
export default PriceBlock;
