import {
    ChooseFilmSearchForm,
    FilmListings,
    TrendingFilms,
} from "../features/movies";

const Movies = () => {
    return (
        <>
            <ChooseFilmSearchForm />
            <TrendingFilms />
            <FilmListings />
        </>
    );
};

export default Movies;
