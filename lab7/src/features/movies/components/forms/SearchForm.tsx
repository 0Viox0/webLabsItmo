import { assets } from "../../../../constants/assets";

const SearchForm = () => {
    return (
        <div
            className="flex justify-start items-center 
                       sm:w-[330px] sm:h-[42px] w-[250px] h-[30px] 
                       bg-[#d9d9d9] rounded-full"
        >
            <img
                src={assets.icon.search}
                alt="search icon"
                className="sm:w-[30px] sm:h-[30px] w-[25px] h-[25px] ml-[10px]"
            />
            <div className="mx-[21px]">
                <input
                    type="text"
                    className="outline-none bg-transparent sm:w-[232px] w-full"
                    placeholder="search a film..."
                    maxLength={30}
                />
                <div className="w-full h-[1px] bg-black bg-opacity-[0.5]"></div>
            </div>
        </div>
    );
};

export default SearchForm;
