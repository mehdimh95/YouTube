import ReactPlayer from "react-player";
import moment from "moment";
const VideoDetail = ({ video, videoMinimal }) => {
  const v = video || videoMinimal;

  return (
    <div className="container mx-auto grid grid-cols-4 mt-2 ">
      <div className="flex flex-col col-span-3 items-start gap-y-4 px-4">
        <ReactPlayer
          url={[`"https://www.youtube.com/embed/${video.id || v.id.videoId}"`]}
          controls
          width=""
          height=""
          className="w-full aspect-video"
        />
        <strong>{v.snippet.title}</strong>
        <div className="flex gap-x-2 text-gray-600">
          <span>
            {v.statistics
              ? parseInt(v.statistics.viewCount).toLocaleString("en-us")
              : "-"}{" "}
            views
          </span>
          <div>{"\u2022"}</div>
          <span>
            {v.statistics
              ? parseInt(v.statistics.likeCount).toLocaleString("en-us")
              : "-"}{" "}
            likes
          </span>
          <div>{"\u2022"}</div>
          <span>
            {v.statistics
              ? parseInt(v.statistics.commentCount).toLocaleString("en-us")
              : "-"}{" "}
            comments
          </span>
          <div>{"\u2022"}</div>
          <span>{moment(v.snippet.publishedAt).format("MMM d, yyyy")}</span>
        </div>

        <hr className="self-stretch border-gray-400  mb-4" />

        <div className="flex text-sm items-center gap-x-4">
          <img
            className="rounded-full aspect-square"
            src="https://picsum.photos/50/50"
            alt=""
          />
          <div className="flex flex-col gap-y-2">
            <strong>{v.snippet.channelTitle}</strong>
            {/* <p>{v.snippet.}</p> */}
          </div>
        </div>
      </div>
      <div className="h-screen animate-pulse bg-slate-400"></div>
    </div>
  );
};

export default VideoDetail;
