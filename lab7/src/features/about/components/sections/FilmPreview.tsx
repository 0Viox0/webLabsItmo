import LoadingIcon from "../../../../components/other/LoadingIcon";
import { FilmInfo } from "../../types/general";
import AboutFilmSection from "./AboutFilmSection";

const FilmPreview = ({
    film,
    isLoading,
}: {
    film: FilmInfo | null;
    isLoading: boolean;
}) => {
    return (
        <div className="mt-[90px] ">
            {!isLoading && film ? (
                <AboutFilmSection film={film} />
            ) : (
                <div className="w-full flex justify-center">
                    <LoadingIcon />
                </div>
            )}
        </div>
    );
};

export default FilmPreview;
