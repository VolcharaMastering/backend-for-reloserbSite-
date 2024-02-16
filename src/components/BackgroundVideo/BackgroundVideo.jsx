import "./BackgroundVideo.scss";
import photoLink from "../../assets/coworkPictures/DSC00025.jpg";

function BackgroundVideo({ videoTitle, size, videoLink }) {
  // const VIDEO_WIDTH = 1920;
  // const VIDEO_HEIGHT = 1080;
  return (
    <div className={`background-video__shadow ${size}`}>
      <video
        autoPlay
        muted
        disablePictureInPicture
        loop
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
