import "./BackgroundVideo.scss";
import photoLink from "../../assets/coworkPictures/DSC00025.jpg";

function BackgroundVideo({ videoTitle, size, videoLink }) {
  // const VIDEO_WIDTH = 1920;
  // const VIDEO_HEIGHT = 1080;
  return (
    // <iframe
    //   width={VIDEO_WIDTH}
    //   height={VIDEO_HEIGHT}
    //   src={videoLink}
    //   title="YouTube video player"
    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    // />
    // <iframe
    //   src={videoLink}
    //   width="1280"
    //   height="720"
    //   frameborder="0"
    //   allowfullscreen
    //   controls="0"
    // ></iframe>
    <div className="background-video__shadow">
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

      {videoTitle && <h1 className="background-video__title">{videoTitle}</h1>}
    </div>
  );
}

export default BackgroundVideo;
