import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  // console.log(videos);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-10 p-10 border-t-2">
      {videos && videos.length
        ? videos.map((video) => (
            <div key={video.id.videoId}>
              <VideoItem {...video} />
            </div>
          ))
        : new Array(12).fill(null).map((_, index) => (
            <div key={index} className="flex flex-col  gap-y-4 animate-pulse">
              <div
                key={index}
                className="aspect-video bg-gray-500 animate-pulse"
              ></div>
              <div className="flex text-sm items-start gap-x-4">
                <div className="w-12 aspect-square bg-gray-500 animate-pulse rounded-full"></div>
                <div className="block">
                  <strong className="bg-gray-500 animate-pulse text-transparent">
                    {"0".repeat(Math.max(10, parseInt(Math.random() * 40)))}
                  </strong>
                  <p className="bg-gray-500 animate-pulse text-transparent">
                    {"0".repeat(Math.max(10, parseInt(Math.random() * 40)))}
                  </p>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default VideoList;
