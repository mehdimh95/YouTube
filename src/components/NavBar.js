import { VscBell, VscDeviceCameraVideo } from "react-icons/vsc";

import SearchBar from "./SearchBar";
import youtubeLogo from "../assets/youtube-logo.png";

const NavBar = () => {
  return (
    <div className="flex justify-between py-2 px-10 ">
      <img className="w-24" src={youtubeLogo} alt="YouTubeLogo" />

      <SearchBar />

      <div className="flex justify-between items-center  gap-x-6">
        <VscDeviceCameraVideo className="text-2xl" />
        <VscBell className="text-2xl" />
      </div>
    </div>
  );
};

export default NavBar;
