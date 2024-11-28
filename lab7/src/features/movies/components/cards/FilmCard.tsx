const FilmCard = ({ image, text }: { image: string; text: string }) => {
    return (
        <figure>
            <img src={image} alt="pirates of carribiean" />
            <figcaption
                className="text-[#d1d1d1] xl:text-[2.5rem] md:text-[1.8] text-[1.4rem] 
                           text-center font-semibold"
            >
                {text}
            </figcaption>
        </figure>
    );
};

export default FilmCard;
