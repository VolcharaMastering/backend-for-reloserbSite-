import { useState } from "react";
import "./VideoMapBlock.scss";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import videoFile from "../../assets/videos/enter.mp4";
import MapBlock from "../UI/MapBlock/MapBlock";
import SwipeButton from "../UI/SwipeButton/SwipeButton";

function VideoMapBlock({ size }) {
  const [yandexMap, setYandexMap] = useState(true);

  const handleTolggeYandex = () => {
    setYandexMap(!yandexMap);
  };
  return (
    <div className={`video-map ${size}`}>
      <BackgroundVideo size={size} videoLink={videoFile} videoTitle="" />
      <div className="video-map__maps">
        <SwipeButton
          leftTitle="Google"
          rightTitle="Yandex"
          changeMap={handleTolggeYandex}
          mapState={yandexMap}
        />
        <MapBlock size={size} yandexMap={yandexMap} />
      </div>
    </div>
  );
}
export default VideoMapBlock;
