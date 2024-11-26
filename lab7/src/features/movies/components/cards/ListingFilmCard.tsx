const ListingFilmCard = ({
    img,
    title,
    date,
}: {
    img: string;
    title: string;
    date: string;
}) => {
    return (
        <figure>
            <img
                src={img}
                alt="film image"
                className="sm:w-[320px] sm:h-[400px] w-[266px] h-[333px] rounded-[34px] mx-auto"
            />
            <figcaption
                className="sm:text-[3rem] text-[2rem] font-semibold text-[#d1d1d1]  
                           max-w-[10ch] overflow-hidden text-nowrap text-ellipsis"
            >
                {title}
            </figcaption>
            <figcaption className="sm:text-[1.3rem] text-[1rem] text-[#d1d1d1] underline">
                {date}
            </figcaption>
        </figure>
    );
};

export default ListingFilmCard;
