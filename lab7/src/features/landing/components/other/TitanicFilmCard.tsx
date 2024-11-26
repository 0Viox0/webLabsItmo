import { assets } from "../../../../constants/assets";

const TitanicFilmCard = () => {
    return (
        <figure className="flex flex-col justify-start items-center flex-none">
            <img
                src={assets.img.filReviewPicutre}
                alt="titanic film image"
                className="w-[310px] h-[470px]"
            />
            <figcaption className="text-[#D1D1D1] md:text-[3.125rem] text-[2.6rem] font-semibold">
                Titanic
            </figcaption>
        </figure>
    );
};

export default TitanicFilmCard;
