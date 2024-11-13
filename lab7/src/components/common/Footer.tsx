import { FooterLinkSection } from "../../types/interfaces";
import SiteLogo from "../other/SiteLogo";
import FooterNavSection from "../text/FooterNavSection";

const Footer = () => {
    const footerSectionInfos: FooterLinkSection[] = [
        {
            sectionName: "Navigation",
            links: [
                {
                    name: "Home",
                    link: "/",
                },
                {
                    name: "About",
                    link: "about",
                },
            ],
        },
        {
            sectionName: "Action",
            links: [
                {
                    name: "Order now",
                    link: "order-now",
                },
            ],
        },
    ];

    return (
        <footer
            className="flex md:flex-row flex-col justify-between items-center md:px-[112px]
                       w-full md:h-[240px] h-auto md:py-auto py-[30px] bg-[#3F3F3F]
                       md:space-y-0 space-y-[40px]"
        >
            <SiteLogo className="text-[1.5rem] text-[#d1d1d1]" />
            <div
                className="flex md:flex-row md:justify-between md:items-start 
                                   flex-col justify-between items-center
                           md:space-y-0 space-y-[30px]
                           lg:w-[400px] w-[300px]"
            >
                <FooterNavSection sectionInfo={footerSectionInfos[0]} />
                <FooterNavSection sectionInfo={footerSectionInfos[1]} />
            </div>
        </footer>
    );
};

export default Footer;
