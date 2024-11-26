import { useNavigate } from "react-router-dom";
import { FilmInfo } from "../../types/general";
import GeneralGrayButton from "../../../../components/buttons/GeneralGrayButton";

const AboutFilmSection = ({ film }: { film: FilmInfo }) => {
    const navigate = useNavigate();

    const handleOnOrderOrPreview = () => {
        const query = new URLSearchParams(location.search);

        navigate(`/order-now?id=${query.get("id") || "1"}`);
    };

    return (
        <div className="flex xl:flex-row flex-col-reverse justify-between w-[80%] mx-auto">
            <div className="w-full flex xl:justify-start justify-center">
                <img
                    src={film.img}
                    alt=""
                    className="w-[400px] h-[400px] xl:ml-[50px] xl:mt-0 mt-[80px]"
                />
            </div>
            <div className="xl:w-[50%] w-full relative">
                <div className="w-full flex justify-center">
                    <h1
                        className="text-[#d1d1d1] md:text-[3rem] text-[2rem] font-semibold max-w-[20ch]
                                       overflow-hidden text-ellipsis text-nowrap"
                    >
                        {film.title}
                    </h1>
                </div>
                <div className="flex justify-center">
                    <p
                        className="text-[#d1d1d1] md:text-[1.3rem] text-[1rem] mt-[60px] max-w-[80ch] 
                                  xl:text-left text-center"
                    >
                        {film.description}
                    </p>
                </div>
                <div
                    className="2xl:w-[60%] w-[70%] justify-between 
                                absolute bottom-0 left-[50%] -translate-x-[50%] xl:flex hidden"
                >
                    <GeneralGrayButton
                        text="Get now"
                        onClickHandler={handleOnOrderOrPreview}
                        className="text-[1.3rem]"
                    />
                    <GeneralGrayButton
                        text="Leave review"
                        onClickHandler={handleOnOrderOrPreview}
                        className="text-[1.3rem]"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutFilmSection;
