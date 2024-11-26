import { useEffect, useRef, useState } from "react";
import { FilmCard } from "../types/general";
import ListingFilmCard from "./cards/ListingFilmCard";
import LoadMoreButton from "./buttons/LoadMoreButton";

const FilmListings = () => {
    const [films, setfilms] = useState<FilmCard[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentOffset, setCurrentOffset] = useState(0);
    const currentLimit = 10;

    const hasFetched = useRef(false); // Tracks whether fetch has already run

    const fetchFilms = async () => {
        setIsLoading(true);

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/photos?_start=${currentOffset}&_limit=${currentLimit}`,
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const films = await response.json();

        setfilms((prevFilms) => [
            ...prevFilms,
            ...films.map((film: any) => ({
                img: film.url,
                title: film.title,
                date: "2024/04/01, genre",
            })),
        ]);

        setCurrentOffset((prevState) => prevState + currentLimit);
        setIsLoading(false);
    };

    const handleFetchMore = () => {
        fetchFilms();
    };

    useEffect(() => {
        if (!hasFetched.current) {
            hasFetched.current = true;
            fetchFilms();
        }
    }, []);

    return (
        <div className="w-[90%] mx-auto">
            <h1 className="sm:text-[3rem] text-[2rem] font-semibold text-[#d1d1d1] ml-[40px] mb-[50px]">
                Listing
            </h1>
            {films.length !== 0 && (
                <div
                    className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 
                               justify-items-center sm:gap-y-[60px] gap-y-[30px]"
                >
                    {films.map((film) => (
                        <ListingFilmCard
                            key={film.title}
                            img={film.img}
                            title={film.title}
                            date={film.date}
                        />
                    ))}
                </div>
            )}
            <div className="w-full flex justify-center my-[80px]">
                <LoadMoreButton
                    text="Load More Films"
                    isLoading={isLoading}
                    onClickHandler={handleFetchMore}
                />
            </div>
        </div>
    );
};

export default FilmListings;
