import { useContext, useEffect, useState } from "react";

import NavBar from "../components/NavBar";
import VideoContext from "../VideoContext";
import VideoDetail from "../components/VideoDetail";
import api from "../utils/api";
import { useLocation } from "react-router-dom";

const Video = () => {
  const [video, setVideo] = useState("");
  const location = useLocation();
  const videoId = location.pathname.substring(3);
  useEffect(() => {
    const getResult = async () => {
      const result = await api.videoDetail(videoId);
      setVideo(result[0]);
    };
    getResult();
  }, [videoId]);

  const { videos } = useContext(VideoContext);
  const videoMinimal =
    videos && videos.filter((video) => video.id.videoId === videoId)[0];

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      {video || videoMinimal ? (
        <VideoDetail videoMinimal={videoMinimal} video={video} />
      ) : (
        <div className="flex h-full justify-center items-center">
          <div className="h-20 w-20 animate-spin rounded-full border-8 border-slate-700 border-r-slate-300 border-b-slate-300"></div>
        </div>
      )}
    </div>
  );
};

export default Video;
