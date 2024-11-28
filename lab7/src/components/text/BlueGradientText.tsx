const BlueGradientText = ({
    text,
    className,
}: {
    text: string;
    className?: string;
}) => {
    return (
        <div className={`blueTextGradient font-semibold ${className}`}>
            {text}
        </div>
    );
};

export default BlueGradientText;
