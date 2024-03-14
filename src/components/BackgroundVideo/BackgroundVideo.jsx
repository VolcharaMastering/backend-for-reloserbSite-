/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import "./BackgroundVideo.scss";
import { isSafari } from "../../utils/detectSafari";
import photoLink from "../../assets/coworkPictures/DSC00025.jpg";

/**
 * Renders a background video component with different behavior based on browser.
 *
 * For Safari, renders a video with controls enabled.
 * For other browsers, renders a muted, autoplaying looped video.
 *
 * Accepts videoTitle, size, and videoLink props to customize the component.
 */
function BackgroundVideo({ videoTitle, size, videoLink }) {
  const [safariUser, setSafariUser] = useState(false);

  useEffect(() => {
    setSafariUser(isSafari());
  }, []);
  return !safariUser ? (
    <div className={`background-video__shadow ${size}`}>
      <video
        autoPlay
        muted
        disablePictureInPicture
        loop
        poster={photoLink}
        playsInline
        className="background-video"
      >
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {videoTitle && <h1 className={`background-video__title ${size}`}>{videoTitle}</h1>}
    </div>
  ) : (
    <div className={`background-video__safari ${size}`}>
      <video
        autoPlay
        muted
        disablePictureInPicture
        loop
        playsInline
        controls
        poster={photoLink}
        className="background-video"
      >
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {videoTitle && <h1 className={`background-video__title ${size}`}>{videoTitle}</h1>}
    </div>
  );
}

export default BackgroundVideo;
