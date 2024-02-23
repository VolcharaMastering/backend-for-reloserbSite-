/* eslint-disable react/no-unknown-property */
import "./BackgroundVideo.scss";
import photoLink from "../../assets/coworkPictures/DSC00025.jpg";

function BackgroundVideo({ videoTitle, size, videoLink }) {
  const browser = navigator.userAgent;
  const isSafari = /^((?!chrome|android).)*safari/i.test(browser);
  return (
    <div className={`background-video__shadow ${size}`}>
      {!isSafari ? (
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
      ) : (
        <video
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
      )}
      {videoTitle && <h1 className={`background-video__title ${size}`}>{videoTitle}</h1>}
    </div>
  );
}

export default BackgroundVideo;
