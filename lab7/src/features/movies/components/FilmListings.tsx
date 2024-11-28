import LoadMoreButton from "./buttons/LoadMoreButton";
import Films from "./other/Films";
import { useFilms } from "../hooks/useFilms";

const FilmListings = ({ searchValue }: { searchValue: string }) => {
    const { films, isLoading, fetchMore } = useFilms();

    return (
        <div className="w-[90%] mx-auto">
            <h1 className="sm:text-[3rem] text-[2rem] font-semibold text-[#d1d1d1] ml-[40px] mb-[50px]">
                Listing
            </h1>
            <Films films={films} searchValue={searchValue} />
            <div className="w-full flex justify-center my-[80px]">
                <LoadMoreButton
                    text="Load More Films"
                    isLoading={isLoading}
                    onClickHandler={fetchMore}
                />
            </div>
        </div>
    );
};

export default FilmListings;
