import "./BackgroundVideo.scss";

function BackgroundVideo({ size, videoLink }) {
  const VIDEO_WIDTH = 1920;
  const VIDEO_HEIGHT = 1080;
  return (
    <iframe
      width={VIDEO_WIDTH}
      height={VIDEO_HEIGHT}
      src={videoLink}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  );
}

export default BackgroundVideo;
