import "./OkText.scss";

function OkText({ gotText, size }) {
  return (
    <div className={`ok-text ${size}`}>
      <p className={`ok-text__text ${size}`}>{gotText}</p>
    </div>
  );
}
export default OkText;
