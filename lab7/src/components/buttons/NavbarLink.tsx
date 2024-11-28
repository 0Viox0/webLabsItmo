import { NavLink } from "react-router-dom";

const NavbarLink = ({ text, link }: { text: string; link: string }) => {
    return (
        <NavLink
            to={link}
            className={({ isActive }) =>
                isActive
                    ? `underline border-[#dddddd] rounded-[10px] bg-gray-200 bg-opacity-25
                       px-[15px] py-[2px] text-nowrap`
                    : "hover:underline text-nowrap"
            }
        >
            {text}
        </NavLink>
    );
};

export default NavbarLink;
