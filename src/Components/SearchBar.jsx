import { IoMdSearch } from "react-icons/io";

const SearchBar = ({handleSearch}) => {
    return (
        <form className="flex items-center gap-[2px]" onSubmit={handleSearch}>
            <input type="text"
            placeholder="Search Products"  name="search" className="max-w-md p-[11px] border border-black rounded-l-md"/>
            <button className="btn  rounded-l-none rounded-r-md btn-outline bg-gray-200">
                <IoMdSearch size={20}/>
            </button>
        </form>
    );
};

export default SearchBar;