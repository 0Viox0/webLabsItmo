import { useEffect, useRef, useState } from "react";
import { FilmCard } from "../types/general";

export const useFilms = () => {
    const [films, setfilms] = useState<FilmCard[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentOffset, setCurrentOffset] = useState(0);
    const currentLimit = 10;
    const hasFetched = useRef(false);

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
                id: film.id,
                img: film.url,
                title: film.title,
                date: "2024/04/01, genre",
            })),
        ]);

        setCurrentOffset((prevState) => prevState + currentLimit);
        setIsLoading(false);
    };

    const fetchMore = () => {
        fetchFilms();
    };

    useEffect(() => {
        if (!hasFetched.current) {
            hasFetched.current = true;
            fetchFilms();
        }
    }, []);

    return { films, fetchMore, isLoading };
};
