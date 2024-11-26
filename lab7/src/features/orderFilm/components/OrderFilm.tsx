import OrderFilmForm from "./forms/OrderFilmForm";
import FilmPhotoName from "./other/FilmPhotoName";

const OrderFilm = () => {
    return (
        <div className="md:px-[80px] px-[20px] pt-[50px] flex 2xl:flex-row flex-col">
            <OrderFilmForm />
            <div className="w-full flex justify-center items-center">
                <FilmPhotoName />
            </div>
        </div>
    );
};

export default OrderFilm;
