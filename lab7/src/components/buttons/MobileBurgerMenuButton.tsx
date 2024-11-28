import { useEffect, useRef, useState } from "react";
import { assets } from "../../constants/assets";
import { NavLink } from "../../types/interfaces";
import NavbarLink from "./NavbarLink";

const MobileBurgerMenuButton = ({
    navigationLinks,
}: {
    navigationLinks: NavLink[];
}) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const burgerMenuRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleOnClick = (ev: MouseEvent) => {
            if (
                burgerMenuRef.current &&
                !burgerMenuRef.current.contains(ev.target as Node)
            ) {
                setIsMenuOpened(false);
            }
        };

        window.addEventListener("click", handleOnClick);

        return () => {
            window.removeEventListener("click", handleOnClick);
        };
    }, []);
    return (
        <button
            className="lg:hidden block relative"
            onClick={() => setIsMenuOpened(true)}
            ref={burgerMenuRef}
        >
            <img
                src={assets.icon.burgerMenu}
                alt="burger menu"
                className="md:w-[70px] md:h-[70px] w-[40px] h-[40px]"
            />
            {isMenuOpened && (
                <div
                    className="flex flex-col justify-start items-center space-y-[10px]
                               absolute right-0 top-[50px] p-[10px]
                               border-[1px] border-[#888888] rounded-[6px]
                               bg-gray-800"
                >
                    {navigationLinks.map((linkInfo, id) => (
                        <NavbarLink
                            text={linkInfo.name}
                            link={linkInfo.link}
                            key={id}
                        />
                    ))}
                </div>
            )}
        </button>
    );
};

export default MobileBurgerMenuButton;
