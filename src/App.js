import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Video from "./pages/Video";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="v">
        <Route path=":id" element={<Video />} />
      </Route>
    </Routes>
  );
};
export default App;
