import { Link } from "react-router-dom";

const VideoItem = ({
  snippet: { title, thumbnails, channelTitle },
  id: { videoId },
}) => {
  return (
    <Link to={`/v/${videoId}`}>
    <div className="flex flex-col gap-y-4 items-start">
      <img
        className="w-full aspect-video"
        src={thumbnails.high.url}
        alt={title}
      />
      <div className="flex text-sm items-start gap-x-4">
        <img
          className="rounded-full aspect-square"
          src="https://picsum.photos/50/50"
          alt=""
        />
        <div className="block">
          <strong>{channelTitle}</strong>
          <p>{title}</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default VideoItem;
