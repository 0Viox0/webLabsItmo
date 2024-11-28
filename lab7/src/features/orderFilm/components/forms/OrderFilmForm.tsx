import { ChangeEvent, useState } from "react";
import GeneralGrayButton from "../../../../components/buttons/GeneralGrayButton";

const OrderFilmForm = () => {
    const [text, setText] = useState("");

    const onTextChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
        setText(ev.target.value);
    };

    const onSubmitHandler = () => {};

    return (
        <div className="mb-[40px]">
            <h1
                className="md:text-[3rem] text-[2rem] text-[#d1d1d1] 
                           font-semibold xl:text-left text-center"
            >
                Order the film
            </h1>
            <div className="md:ml-[20px] mt-[20px] flex flex-col xl:items-start items-center">
                <div className="md:text-[1.6rem] text-[1.3rem] text-[#d1d1d1]">
                    Price: $3
                </div>
                <div className="md:text-[1.6rem] text-[1.3rem] text-[#d1d1d1] mt-[30px]">
                    Message to us (if any)
                </div>
                <div className="flex flex-col justify-between w-full">
                    <textarea
                        className="2xl:w-[1000px] w-full h-[300px] rounded-[33px] 
                                   bg-[#d9d9d9] bg-opacity-[0.6] mt-[20px]
                                   p-[20px] text-white md:text-[1.3rem] text-[1.1rem] 
                                   placeholder:text-gray-300 resize-none"
                        placeholder="write your message here"
                        value={text}
                        onChange={onTextChange}
                    ></textarea>
                    <div
                        className="flex md:flex-row flex-col space-y-[40px] 
                                    justify-between items-center mt-[61px]"
                    >
                        <GeneralGrayButton
                            text="Order"
                            onClickHandler={onSubmitHandler}
                            className="text-[1.3rem] py-[3px] px-[50px]"
                        />
                        <div className="text-[#d1d1d1] text-[1.4rem] text-center">
                            order details will come to your email
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderFilmForm;
