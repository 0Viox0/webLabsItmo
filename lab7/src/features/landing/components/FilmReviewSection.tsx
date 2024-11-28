import BlueGradientText from "../../../components/text/BlueGradientText";
import TitanicFilmCard from "./other/TitanicFilmCard";

const FilmReviewSection = () => {
    const quote = `It's a beautif1ul love story that left me in tears. The
                   whole story was incredible and very dramatic. James Cameron
                   is a great director. He told the story of the ...`;

    return (
        <div className="mb-[80px]">
            <BlueGradientText
                text="Film reviews"
                className="text-center lg:text-[4.3rem] md:text-[3.4rem] text-[2.5rem]"
            />
            <div
                className="flex md:flex-row md:justify-between md:items-center 
                           flex-col items-center justify-start
                           md:w-[90%] w-full md:mt-[150px] mt-[50px]
                           md:space-y-0 space-y-[90px]"
            >
                <div className="w-1/2 flex justify-center items-center">
                    <TitanicFilmCard />
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <blockquote
                        className="xl:text-[2rem] text-[1.7rem] text-white max-w-[897px]
                                           md:text-left text-center"
                    >
                        {quote}
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default FilmReviewSection;
