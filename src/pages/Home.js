import SearchBar from "../components/SearchBar";
import youtubeLogo from "../assets/youtube-logo.png";

const Home = () => {
  return (
    <div className="justify-center flex flex-col items-center h-screen bg-slate-200 gap-y-10">
      <img src={youtubeLogo} alt="YouTubeLogo" />
      <div className="w-4/5 lg:w-1/3">
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
