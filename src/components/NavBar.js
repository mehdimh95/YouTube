import { VscBell, VscDeviceCameraVideo } from "react-icons/vsc";

import SearchBar from "./SearchBar";
import youtubeLogo from "../assets/youtube-logo.png";

const NavBar = () => {
  return (
    <div className=" flex justify-between p-2 lg:px-10 gap-x-4">
      <div className="w-12 lg:w-24 shrink-0 flex items-center">
        <img className="w-full" src={youtubeLogo} alt="YouTubeLogo" />
      </div>

      <div className="shrink lg:w-2/3">
        <SearchBar />
      </div>

      <div className="hidden lg:flex justify-between items-center gap-x-6">
        <VscDeviceCameraVideo className="text-2xl" />
        <VscBell className="text-2xl" />
      </div>
    </div>
  );
};

export default NavBar;
