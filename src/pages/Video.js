import VideoContext from "../VideoContext";
import VideoDetail from "../components/VideoDetail";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

const Video = () => {
  const location = useLocation();

  const videoId = location.pathname.substring(3);
  const { videos } = useContext(VideoContext);
  const video = videos.filter((video) => video.id.videoId === videoId)[0];

  return <VideoDetail {...video} />;
};

export default Video;
