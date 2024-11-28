import { assets } from "../../../constants/assets";
import FilmCard from "./cards/FilmCard";

const TrendingFilms = () => {
    return (
        <div>
            <h1
                className="text-[#d1d1d1] sm:text-[3rem] text-[2rem] text-center 
                           font-semibold sm:mt-[56px] mt-[30px]"
            >
                Trending
            </h1>
            <div
                className="flex md:flex-row flex-col justify-between
                           sm:mt-[83px] mt-[40px] w-[80%] md:space-x-[40px] 
                           md:space-y-0 space-y-[40px] mx-auto"
            >
                <FilmCard
                    image={assets.img.films.piratesOfCarribian}
                    text="Pirates of Caribbean"
                />
                <FilmCard image={assets.img.films.suits} text="Suits" />
            </div>
            <div className="w-[90%] h-[1px] mx-auto bg-white bg-opacity-[0.7] my-[40px]"></div>
        </div>
    );
};

export default TrendingFilms;
