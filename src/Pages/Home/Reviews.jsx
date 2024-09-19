import React from 'react';
import { useState } from 'react';
import avatar1 from "../../assets/avatar1.svg"
import comma from "../../assets/comma.svg"

const testimonials = [
    {
        id: 1,
        img: avatar1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam",


        name: "Syeda Bright",
        profession: "Bussiness man"
    },
    {
        id: 1,
        img: avatar1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam",


        name: "Syeda Bright",
        profession: "Bussiness man"
    },
    {
        id: 1,
        img: avatar1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam",


        name: "Syeda Bright",
        profession: "Bussiness man"
    },
   
];

function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='p-20 newsbgr'>
            <div className="max-w-[1400px] mx-auto flex items-center justify-center">
                <div className="flex flex-col flex-[.8] lg:flex-row gap-5">

                    {/* Left section */}
                    <div className="flex-[.5] lg:p-4 flex flex-col items-start justify-center gap-5">
                        <p className="text-4xl lg:text-5xl font-bold">
                            What Users Say About<br /> Our Service
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation
                        </p>
                    </div>

                    {/* Testimonial Slider */}
                    <div className="flex-[.5]  p ">
                        <div className=" w-full flex flex-col items-center justify-center gap-5 max-w-lg mx-auto overflow-hidden">
                            <div className="flex  transition-transform border-black  md:w-full w-[300px] sm:w-[400px]  rounded-lg duration-500"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="lg:w-full w-[300px] sm:w-[400px] text-wrap    bg-white lg:rounded-lg  p-4 md:p-8 flex-shrink-0  gap-2 flex flex-col items-center">
                                        {/* Review Text */}
                                        <p className=" text-[#7A7A7A] text-lg lg:text-xl mb-4">
                                            {testimonial.text}
                                        </p>

                                        <div className="flex  items-center justify-between overflow-hidden w-full gap-2">
                                            <div className="flex  items-center  gap-2">
                                                <img src={testimonial.img} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 object-cover" />
                                                <div className="flex flex-col gap-2">
                                                    <h3 className=" text-[18px] md:text-xl font-bold">{testimonial.name}</h3>
                                                    <p className="text-gray-500">{testimonial.profession}</p>
                                                </div>
                                            </div>

                                            <div className="">
                                                <img src={comma} alt="" className="" />

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Dots Navigation (Position remains the same) */}
                            <div className="bottom-4 left-1/2 transform items-center justify-center   flex space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-black' : 'bg-[#f9f9f9]'} `}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Reviews;
