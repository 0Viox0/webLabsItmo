import { FilmCard } from "../../types/general";
import ListingFilmCard from "../cards/ListingFilmCard";

const Films = ({
    films,
    searchValue,
}: {
    films: FilmCard[];
    searchValue: string;
}) => {
    return (
        <>
            {films.length !== 0 && (
                <div
                    className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 
                               justify-items-center sm:gap-y-[60px] gap-y-[30px]"
                >
                    {films
                        .filter((film) => film.title.includes(searchValue))
                        .map((film) => (
                            <ListingFilmCard
                                id={film.id}
                                key={film.id}
                                img={film.img}
                                title={film.title}
                                date={film.date}
                            />
                        ))}
                </div>
            )}
        </>
    );
};

export default Films;
