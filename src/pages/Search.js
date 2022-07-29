import { useEffect, useState } from "react";

import NavBar from "../components/NavBar";
import VideoList from "../components/VideoList";
import api from "../utils/api";
import { useLocation } from "react-router-dom";

const Search = () => {
  const [videos, setVideos] = useState([]);
  const location = useLocation();
  const searchTerm = location.search.substring(3);

  useEffect(() => {
    const getResult = async () => {
      const result = await api.search(searchTerm || "cat");
      setVideos(result);
    };
    getResult();
  }, [searchTerm]);

  return (
    <>
      <NavBar />
      <VideoList videos={videos} />
    </>
  );
};
export default Search;
