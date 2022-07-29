import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  return (
    <div>
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
