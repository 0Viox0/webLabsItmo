import LoadingIcon from "../../../../components/other/LoadingIcon";
import { Review } from "../../types/general";
import SingleReview from "./SingleReview";

const Reviews = ({ reviews }: { reviews: Review[] | undefined }) => {
    return (
        <div>
            <h1 className="md:text-[3rem] text-[2rem] text-[#d1d1d1] text-center font-semibold my-[100px]">
                Reviews
            </h1>
            <div className="flex xl:justify-start justify-center px-[40px]">
                <div className="inline-flex flex-col space-y-[40px] xl:ml-[230px] mb-[134px]">
                    {reviews ? (
                        reviews.map((review) => (
                            <SingleReview review={review} />
                        ))
                    ) : (
                        <LoadingIcon />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
