import { FooterLinkSection } from "../../types/interfaces";
import NavbarLink from "../buttons/NavbarLink";

const FooterNavSection = ({
    sectionInfo,
}: {
    sectionInfo: FooterLinkSection;
}) => {
    return (
        <div
            className="text-[#D1D1D1] text-[1.25rem]
                        flex flex-col justify-start items-center"
        >
            <h1 className="md:mb-[20px] mb-[4px] font-semibold">
                {sectionInfo.sectionName}
            </h1>
            <div className="flex flex-col justify-start items-center space-y-[11px]">
                {sectionInfo.links.map((link, id) => (
                    <NavbarLink text={link.name} link={link.link} key={id} />
                ))}
            </div>
        </div>
    );
};

export default FooterNavSection;
