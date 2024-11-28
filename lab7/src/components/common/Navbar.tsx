import { assets } from "../../constants/assets";
import { NavLink } from "../../types/interfaces";
import MobileBurgerMenuButton from "../buttons/MobileBurgerMenuButton";
import SiteLogo from "../other/SiteLogo";
import UserProfile from "../other/UserProfile";
import DesktopNavLinks from "../text/DesktopNavLinks";

const Navbar = () => {
    const navigationLinks: NavLink[] = [
        { name: "Home", link: "/" },
        { name: "About", link: "about" },
        { name: "Movies", link: "movies" },
        { name: "Order now", link: "order-now" },
    ];

    return (
        <nav
            className="flex justify-between items-center mt-[30px] md:mx-[55px] mx-[30px]
                       md:text-[1.625rem] text-[1.2rem] text-[#D1D1D1] z-20"
        >
            <SiteLogo />
            <DesktopNavLinks navigationLinks={navigationLinks} />
            <UserProfile pfp={assets.img.profilePicture} username="Viox" />
            <MobileBurgerMenuButton navigationLinks={navigationLinks} />
        </nav>
    );
};

export default Navbar;
