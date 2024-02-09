import "./SwipeButton.scss";

function SwipeButton({ leftTitle, rightTitle, changeMap, mapState }) {
  const handleToggle = () => {
    changeMap();
  };

  return (
    <div className="slider">
      <input
        checked={mapState}
        onChange={changeMap}
        className="slider__checkbox"
        id={`slider__new`}
        type="checkbox"
      />
      <h2 className="slider__label">{leftTitle}</h2>
      <label
        style={{ background: mapState && "green" }}
        className="slider__label"
        htmlFor={`slider__new`}
      >
        <span className={`slider__button`} />
      </label>
      <h2 className="slider__label">{rightTitle}</h2>
    </div>
  );
}

export default SwipeButton;
