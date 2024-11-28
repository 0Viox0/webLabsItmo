const LoadMoreButton = ({
    text,
    isLoading,
    onClickHandler,
}: {
    text: string;
    isLoading: boolean;
    onClickHandler: () => void;
}) => {
    return isLoading ? (
        <div className="loadingThingy"></div>
    ) : (
        <button
            className="px-[20px] py-[4px] border-white border-[2px] rounded-full inline
                       text-[2rem] text-white font-semibold hover:bg-gray-400 bg-opacity-[10%]
                       transition-all duration-[0.2s] ease-in-out"
            onClick={onClickHandler}
        >
            {text}
        </button>
    );
};

export default LoadMoreButton;
