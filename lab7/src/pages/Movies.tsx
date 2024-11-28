import { ChangeEvent, useState } from "react";
import {
    ChooseFilmSearchForm,
    FilmListings,
    TrendingFilms,
} from "../features/movies";

const Movies = () => {
    const [formSearchValue, setFormSearchValue] = useState("");

    const handleOnchange = (ev: ChangeEvent<HTMLInputElement>) => {
        setFormSearchValue(ev.target.value);
    };

    return (
        <>
            <ChooseFilmSearchForm
                value={formSearchValue}
                onChange={handleOnchange}
            />
            {formSearchValue === "" && <TrendingFilms />}
            <FilmListings searchValue={formSearchValue} />
        </>
    );
};

export default Movies;
