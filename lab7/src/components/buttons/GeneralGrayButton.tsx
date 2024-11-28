const GeneralGrayButton = ({
    text,
    onClickHandler,
    className,
}: {
    text: string;
    onClickHandler: () => void;
    className?: string;
}) => {
    return (
        <button
            className={`py-[3px] px-[20px] rounded-full font-semibold 
                       text-[#d1d1d1] hover:text-[#383838] active:text-[#d1d1d1]
                       bg-gray-600  hover:bg-gray-400 active:bg-gray-600
                       transition-all duration-[0.1s] ease-in-out ${className}`}
            onClick={onClickHandler}
        >
            {text}
        </button>
    );
};

export default GeneralGrayButton;
