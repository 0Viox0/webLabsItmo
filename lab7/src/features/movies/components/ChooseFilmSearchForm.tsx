import BlueGradientText from "../../../components/text/BlueGradientText";
import SearchForm from "./forms/SearchForm";

const ChooseFilmSearchForm = () => {
    return (
        <>
            <BlueGradientText
                text="Choose film"
                className="sm:text-[3rem] text-[2rem] font-semibold text-center 
                           sm:mt-[50px] mt-[30px]"
            />
            <div className="flex justify-center sm:mt-[51px] mt-[20px]">
                <SearchForm />
            </div>
        </>
    );
};

export default ChooseFilmSearchForm;
