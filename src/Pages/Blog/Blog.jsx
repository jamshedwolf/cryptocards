import React from 'react'
import Nav from '../../Components/Nav'
import b1 from "../../assets/b1.svg"
import b2 from "../../assets/b2.svg"
import b3 from "../../assets/b3.svg"
import symbol from "../../assets/symbol.svg"

import clock from "../../assets/clock.svg"
import arrow from "../../assets/arrow.svg"
import { Link } from 'react-router-dom'
import Newsletter from '../../Components/Newsletter'
function Blog() {
    return (

        <div className="p bg-white w-[100%]">
            <div className="blog relative  border ">
                <div className="absolute top-0   bottom-0 w-full  bggr1    z-[-1] h-[105%] border-2 border-black"></div>
                <Nav />
                <div className=" p-20  flex flex-col gap-4  items-center justify-center">
                    <p className="lg:text-5xl text-3xl font-bold  text-center">Blog & News</p>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br />
                        luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>


                </div>



            </div>
            <div className=' py-10  max-w-[1400px] mx-auto flex   items-center  justify-center '>


                <div className="flex flex-[.8] gap-5 flex-col  md:flex-row">
                    <div className="flex-[.7]  px- 4 flex flex-col gap-5 ">
                    <Link to="/blog1">
                        <div className=" w-full  ">
                            <img src={b1} alt="" className="w-full" />


                            <div className="flex-[.4] flex flex-col gap-2  py-4">
                                <p className="text-2xl font-semibold ">These are the 4 best cards for fueling up right now</p>
                                <p className="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla...</p>
                                <p className="flex gap-2 items-center justify-start font-semibold text-[#1172a9]">Read More <img src={symbol} alt="" className="" /></p>
                            </div>
                        </div>
                        </Link>
                        <Link to="/blog1">
                        <div className=" w-full  ">
                            <img src={b2} alt="" className="w-full" />


                            <div className="flex-[.4] flex flex-col gap-2   py-4">
                                <p className="text-2xl font-semibold ">Buy now, pay later firm Klarna launches physical card in the UK</p>
                                <p className="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla...</p>
                                <p className="flex gap-2 items-center justify-start font-semibold text-[#1172a9]">Read More <img src={symbol} alt="" className="" /></p>
                            </div>
                        </div>
                        </Link>

                        <Link to="/blog1">
                        <div className=" w-full  ">
                            <img src={b3} alt="" className="w-full" />


                            <div className="flex-[.4] flex flex-col gap-2   py-4">
                                <p className="text-2xl font-semibold ">Here’s when buy now pay later can come back to bite you</p>
                                <p className="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla...</p>
                                <p className="flex gap-2 items-center justify-start font-semibold text-[#1172a9]">Read More <img src={symbol} alt="" className="" /></p>
                            </div>
                        </div>

                        </Link>
                        <div className="text-center"><button className="px-4 py-2 text-white font-semibold bg-[#1172A9] rounded-full min-w-fit">Load More</button></div>


                    </div>
                    <div className="flex-[.3]  flex-col space-y-6 border-black p-4">
                        <div className="w-full border p-8  shadow-lg rounded-lg shadow-[#1b756b5d] flex flex-col gap-4">
                            <p className="text-2xl font-semibold ">Recent Posts</p>
                            <div className="flex font-semibold flex-col gap-2">
                                <p className="">These are the 4 best cards for<br />
                                    fueling up right now</p>
                                <p className="flex items-center font-light  gap-2"> <img src={clock} alt="" />March 24, 2024</p>

                            </div>
                            <div className="flex font-semibold flex-col gap-2">
                                <p className="">Buy now, pay later firm Klarna
                                    <br />
                                    launches physical card in the UK</p>
                                <p className="flex items-center font-light  gap-2"> <img src={clock} alt="" />March 24, 2024</p>

                            </div>
                            <div className="flex font-semibold flex-col gap-2">
                                <p className="">Here’s when buy now pay later
                                    <br />
                                    can come back to bite you</p>
                                <p className="flex items-center font-light  gap-2"> <img src={clock} alt="" />March 24, 2024</p>

                            </div>


                        </div>


                        <div className="flex gap-5 blog2 text-white rounded-lg  p-8 border
                         flex-col items-center justify-center">
                            <p className="text-2xl font-semibold  text-white text-center">Subscribe Our<br />
                                Newsletter</p>
                            <p className="text-center">Lorem ipsum dolor sit amet,
                                consecte adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore
                                et dolore</p>


                            <div className="flex">
                                <input type="email" className="px-4 py-3 text-[#ababab] outline-none rounded-l-lg" placeholder='Enter your email' />


                                <button className="rounded-r-lg px-4 py-3 bg-[#1172a9]">Send</button>

                            </div>


                        </div>

                        <div className="w-full border p-8  shadow-lg rounded-lg shadow-[#1b756b5d] flex flex-col gap-4">

                            <p className="text-2xl font-semibold">Categories</p>

                            <p className="flex gap-2 items-center  ">
                                <img src={arrow} alt="" className="" />
                                <p className="">Tips</p>
                            </p>
                            <p className="flex gap-2 items-center  ">
                                <img src={arrow} alt="" className="" />
                                <p className="">News</p>
                            </p>
                            <p className="flex gap-2 items-center  ">
                                <img src={arrow} alt="" className="" />
                                <p className="">Finance</p>
                            </p>
                        </div>



                    </div>

                </div>




            </div>
        

<Newsletter/>


        </div>
    )
}

export default Blog