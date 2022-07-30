import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-10 p-10 border-t-2">
      {videos.length
        ? videos.map((video) => (
            <div key={video.id.videoId}>
              <VideoItem {...video} />
            </div>
          ))
        : "Empty List"}
    </div>
  );
};

export default VideoList;
