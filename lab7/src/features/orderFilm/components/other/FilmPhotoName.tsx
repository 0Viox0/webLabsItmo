import { useEffect, useState } from "react";
import { ShortFilmCard } from "../../types/general";
import LoadingIcon from "../../../../components/other/LoadingIcon";

const FilmPhotoName = () => {
    const [film, setFilm] = useState<ShortFilmCard>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchFilm = async () => {
            setIsLoading(true);

            const params = new URLSearchParams(location.search);

            const id = parseInt(params.get("id") || "1") - 1;

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/photos?_start=${id}&_limit=1`,
            );

            const currentFilm = await response.json();

            setFilm({
                image: currentFilm[0].url,
                name: currentFilm[0].title,
            });
            setIsLoading(false);
        };

        fetchFilm();
    }, []);

    return (
        <div className="mb-[40px]">
            {isLoading || !film ? (
                <LoadingIcon />
            ) : (
                <figure className="flex flex-col items-center">
                    <img
                        src={film.image}
                        alt=""
                        className="rounded-[46px] w-[300px] h-[300px]"
                    />
                    <figcaption
                        className="text-[#d1d1d1] text-[2.5rem]
                                   text-nowrap max-w-[10ch] text-ellipsis overflow-hidden"
                    >
                        {film.name}
                    </figcaption>
                </figure>
            )}
        </div>
    );
};

export default FilmPhotoName;
