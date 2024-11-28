import { Review } from "../../types/general";

const SingleReview = ({ review }: { review: Review }) => {
    return (
        <div className="text-[#d1d1d1]">
            <div className="flex justify-start items-center">
                <img
                    src={review.img}
                    alt="profile image"
                    className="md:w-[60px] md:h-[60px] w-[45px] h-[45px] rounded-full object-cover"
                />
                <div className="ml-[10px]">
                    <div className="md:text-[1.3rem] text-[1rem]">
                        {review.name}
                    </div>
                    <div className="md:text-[0.8rem] text-[0.7rem] leading-[0.8rem]">
                        {review.date}
                    </div>
                </div>
            </div>
            <p className="md:text-[1.2rem] text-[1rem] ml-[10px] max-w-[70ch] mt-[10px]">
                {review.reviewText}
            </p>
        </div>
    );
};

export default SingleReview;
