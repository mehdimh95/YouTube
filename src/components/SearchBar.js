
import { VscSearch } from 'react-icons/vsc';
const SearchBar = () => {
    return (
        <div className="flex justify-center items-center">

            <input type="text" placeholder="Search youtube" className="input input-bordered lg:w-1/3 rounded-none border-gray-400 focus:outline-none" />

            <button class="btn btn-ghost rounded-none border-gray-400 bg-gray-200">
                <VscSearch className='text-2xl ' style={{ transform: "rotateY(180deg)" }} />

            </button>
        </div>



    )
}

export default SearchBar;