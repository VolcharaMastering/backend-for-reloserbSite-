import { useState } from "react";
import "./VideoMapBlock.scss";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import videoFile from "../../assets/videos/enter.mp4";
import MapBlock from "../UI/MapBlock/MapBlock";
import SwipeButton from "../UI/SwipeButton/SwipeButton";

function VideoMapBlock({ size }) {
  const [yandexMap, setYandexMap] = useState(true);
  const gmapsSpot =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d841.4257114159742!2d20.49768969934562!3d44.81733808175099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7b5d60fc64f5%3A0x967111d197ebb8d9!2sInStantOffice%20-%20Coworking%20in%20Belgrade!5e0!3m2!1sru!2srs!4v1707409923518!5m2!1sru!2srs";
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
        <MapBlock
          size={size}
          yandexMap={yandexMap}
          coordinate1={44.817335}
          coordinate2={20.497762}
          gmapsSrc={gmapsSpot}
        />
      </div>
    </div>
  );
}
export default VideoMapBlock;
