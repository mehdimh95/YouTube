import { useContext, useEffect } from "react";

import NavBar from "../components/NavBar";
import VideoContext from "../VideoContext";
import VideoList from "../components/VideoList";
import api from "../utils/api";
import { useLocation } from "react-router-dom";

const Search = () => {
  const { videos, setVideos } = useContext(VideoContext);
  const location = useLocation();
  const searchTerm = location.search.substring(3);

  useEffect(() => {
    const getResult = async () => {
      const result = await api.search(searchTerm);
      setVideos(result);
    };
    getResult();
  }, [searchTerm, setVideos]);

  return (
    <>
      <NavBar />
      <VideoList videos={videos} />
    </>
  );
};
export default Search;
