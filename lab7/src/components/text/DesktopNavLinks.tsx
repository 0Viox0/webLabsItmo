import { NavLink } from "../../types/interfaces";
import NavbarLink from "../buttons/NavbarLink";

const DesktopNavLinks = ({
    navigationLinks,
}: {
    navigationLinks: NavLink[];
}) => {
    return (
        <div
            className="justify-between items-center space-x-[50px]
                            lg:inline-flex hidden"
        >
            {navigationLinks.map((linkInfo, id) => (
                <NavbarLink
                    text={linkInfo.name}
                    link={linkInfo.link}
                    key={id}
                />
            ))}
        </div>
    );
};

export default DesktopNavLinks;
