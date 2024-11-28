import { useEffect, useState } from "react";
import { FilmInfo } from "../types/general";
import { mockReviews } from "../types/mockData";
import FilmPreview from "./sections/FilmPreview";
import Reviews from "./sections/Reviews";

const FilmAboutInfo = () => {
    const [film, setFilm] = useState<FilmInfo | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchFilm = async () => {
            setIsLoading(true);

            const params = new URLSearchParams(location.search);

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/photos?_start=${parseInt(params.get("id") || "1") - 1}&_limit=1`,
            );

            const film = await response.json();

            const fetchedFilm: FilmInfo = {
                id: film[0].id,
                img: film[0].url,
                title: film[0].title,
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, blanditiis delectus? Vero ipsum, laboriosam libero, provident saepe fuga eos ad ducimus quasi mollitia perspiciatis. Aliquam odit nobis amet adipisci iste.`,
                reviews: mockReviews,
            };

            setFilm(fetchedFilm);
            setIsLoading(false);
        };

        fetchFilm();
    }, []);

    return (
        <div className="z-0">
            <FilmPreview film={film} isLoading={isLoading} />
            <Reviews reviews={film?.reviews} />
        </div>
    );
};

export default FilmAboutInfo;
