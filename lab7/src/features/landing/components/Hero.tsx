import BlueGradientText from "../../../components/text/BlueGradientText";
import { assets } from "../../../constants/assets";

const Hero = () => {
    return (
        <div className="w-full 2xl:h-[100vh] h-[50vh] flex justify-center items-center">
            <div className="flex justify-between items-center 2xl:w-[80%] w-auto">
                <img
                    src={assets.img.heroPageMovies}
                    alt="hero page movies"
                    className="w-[474px] h-[574px] 2xl:block hidden"
                />
                <div>
                    <BlueGradientText
                        text="You movies"
                        className="2xl:text-left text-center 
                                   lg:text-[4.3rem] md:text-[3.4rem] text-[2.5rem]"
                    />
                    <BlueGradientText
                        text="in one place"
                        className="2xl:ml-[240px] ml-auto 2xl:text-left text-center 
                                   lg:text-[4.3rem] md:text-[3.4rem] text-[2.5rem]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
