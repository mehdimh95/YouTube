const VideoItem = ({ snippet: { title, thumbnails, channelTitle } }) => {
  return (
    <div className="flex gap-x-2">
      <img src={thumbnails.default.url} alt="video-youtube" />
      <div className="flex flex-col gap-y-3">
        <p>{title}</p>
        <strong>{channelTitle}</strong>
      </div>
    </div>
  );
};

export default VideoItem;
