import { useContext, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { VscSearch } from "react-icons/vsc";

const SearchBar = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm = location.search.substring(3);

  useEffect(() => {
    inputRef.current.value = searchTerm;
  }, [searchTerm]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${encodeURIComponent(inputRef.current.value)}`);
  };

  return (
    <form
      className="flex justify-center items-center w-full"
      onSubmit={onFormSubmit}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Search youtube"
        className="input input-bordered lg:w-1/3 rounded-none border-gray-400 focus:outline-none"
      />

      <button className="btn btn-ghost rounded-none border-gray-400 bg-gray-200">
        <VscSearch
          className="text-2xl "
          style={{ transform: "rotateY(180deg)" }}
        />
      </button>
    </form>
  );
};

export default SearchBar;
