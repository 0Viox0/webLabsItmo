import { assets } from "../../constants/assets";

const SiteLogo = ({ className }: { className?: string }) => {
    return (
        <div
            className={`flex justify-start items-center space-x-[26px] ${className}`}
        >
            <img
                src={assets.img.logo}
                alt="site logo"
                className="md:w-[60px] md:h-[77px] w-[40px] h-[51px]"
            />
            <div>Movies</div>
        </div>
    );
};

export default SiteLogo;
