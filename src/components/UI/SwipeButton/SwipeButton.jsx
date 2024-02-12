import ToggleButton from "react-toggle-button";
import "./SwipeButton.scss";

function SwipeButton({ leftTitle, rightTitle, changeMap, mapState }) {
  const handleToggle = () => {
    changeMap();
  };

  return (
    <div className="slider">
      <h2 className="slider__title">{leftTitle}</h2>
      <ToggleButton
        inactiveLabel="G"
        activeLabel="Я"
        value={mapState}
        onToggle={handleToggle}
        colors={{
          inactiveThumb: {
            base: "rgb(15, 157, 88)",
          },
          activeThumb: {
            base: "rgb(252, 63, 29)",
          },
          inactive: {
            base: "rgb(66, 133, 244)",
          },
          active: {
            base: "rgb(255, 204, 0)",
          },
        }}
      />
      <h2 className="slider__title">{rightTitle}</h2>
    </div>
  );
}

export default SwipeButton;
