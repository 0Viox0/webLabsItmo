import { Link } from "react-router-dom";
import { assets } from "../../constants/assets";

const SiteLogo = ({ className }: { className?: string }) => {
    return (
        <Link
            className={`flex justify-start items-center space-x-[26px] ${className}`}
            to="/"
        >
            <img
                src={assets.img.logo}
                alt="site logo"
                className="md:w-[60px] md:h-[77px] w-[40px] h-[51px]"
            />
            <div>Movies</div>
        </Link>
    );
};

export default SiteLogo;
