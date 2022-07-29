import SearchBar from "../components/SearchBar";
import youtubeLogo from "../assets/youtube-logo.png";

const Home = () => {
  return (
    <div className="justify-center flex flex-col items-center h-screen bg-slate-200 gap-y-10">
      <img src={youtubeLogo} alt="YouTubeLogo" />
      <SearchBar />
    </div>
  );
};

export default Home;
