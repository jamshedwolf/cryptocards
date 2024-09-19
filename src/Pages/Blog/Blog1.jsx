import React from 'react'
import Nav from '../../Components/Nav'
import b1 from "../../assets/iron.svg"

import symbol from "../../assets/symbol.svg"

import clock from "../../assets/clock.svg"
import blog1img from "../../assets/blog1img.svg"
import arrow from "../../assets/arrow.svg"
import tick from "../../assets/tick.svg"
import fb from "../../assets/fb.svg"
import tw from "../../assets/tw.svg"
import whts from "../../assets/whts.svg"
import { Link } from 'react-router-dom'



function Blog1() {
    return (

        <div className="p bg-white w-[100%]">
            <div className="blog relative ">
                <div className="absolute top-0  bottom-0 w-full  bggr1 z-[-1] h-[105%] border-2 border-black"></div>
                <Nav />
                <div className=" p-20  flex flex-col gap-4  items-center justify-center">
                    <p className="lg:text-5xl text-3xl text-center font-bold ">Here’s why you should start<br />
                        paying off debt now</p>



                </div>



            </div>
            <div className=' py-10  max-w-[1400px] mx-auto flex   items-center  justify-center '>


                <div className="flex flex-[.8] gap-5 flex-col  md:flex-row">
                    <div className="flex-[.7] text-[#7A7A7A]  px- 4 flex flex-col gap-5 ">

                        <div className=" w-full p-6 ">
                            <img src={b1} alt="" className="w-full " />


                            <div className="flex-[.4] flex flex-col gap-2  py-4">

                                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit.</p>

                                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.</p>


                                <div className="flex gap-5 flex-col  lg:flex-row ">
                                    <img src={blog1img} alt="" className="" />


                                    <div className="flex flex-col gap-2 pt-5">
                                        <div className="flex gap-2 items-center"><img src={tick} alt="" className="" />  Quisque aliquet nibh sit amet lectus</div>
                                        <div className="flex gap-2 items-center"><img src={tick} alt="" className="" />  Quisque aliquet nibh sit amet lectus</div>
                                        <div className="flex gap-2 items-center"><img src={tick} alt="" className="" />  Quisque aliquet nibh sit amet lectus</div>
                                        <div className="flex gap-2 items-center"><img src={tick} alt="" className="" />  Quisque aliquet nibh sit amet lectus</div>
                                        <p className="">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua.</p>


                                    </div>

                                </div>

                                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.</p>



                                <div className="flex text-black items-center border-b pb-10 flex-col gap-5 md:flex-row   justify-between">
                                    <div className="flex-[.5] font-semibold">Tags : <span className="text-[#1172A9]">  Credit,News</span></div>

                                    <div className="flex gap-2  items-center justify-end  flex-[.5]">
                                        <div className="items-center font-semibold flex">Share This :</div>
                                        <div className="flex gap-2  items-center">
                                            <img src={fb} alt="" className="" />
                                            <img src={tw} alt="" className="" />
                                            <img src={whts} alt="" className="" />

                                        </div>

                                    </div>
                                    



                                </div>

                                <div className="max-w-2xl  py-4">
      <h2 className="text-2xl text-black font-bold mb-6">Leave a Comment</h2>
       <p className="text-[#7A7A7A]">Your email address will not be published. Required fields are marked *</p>


      <form className="flex flex-col space-y-4">
        <div>
          <label htmlFor="comment" className="block text-lg text-black font-medium mb-2">Comment</label>
          <textarea
            id="comment"
            className="w-full h-40 p-3 border rounded-lg focus:outline-none "
            placeholder="Write your comment here..."
            required
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-lg  text-black font-medium mb-2">Name</label>
          <input
            id="name"
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg text-black font-medium mb-2">Email</label>
          <input
            id="email"
            type="email"
            className="w-full p-3 border rounded-lg focus:outline-none "
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="website" className="block text-lg text-black font-medium mb-2">Website</label>
          <input
            id="website"
            type="url"
            className="w-full p-3 border rounded-lg focus:outline-none  "
            placeholder="Enter your website (optional)"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="save-info"
            className="w-4 h-4  border-gray-300 rounded "
          />
          <label htmlFor="save-info" className=" font-medium text-black">Save my name, email, and website in this browser for the next time I comment.</label>
        </div>
<div className="">
        <button
          type="submit"
          className="px-4 py-2 text-white font-semibold bg-[#1172A9] rounded-full min-w-fit"
        >
          Post Comment
        </button></div>
      </form>
    </div>

                            </div>
                        </div>







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
        </div>
    )
}

export default Blog1