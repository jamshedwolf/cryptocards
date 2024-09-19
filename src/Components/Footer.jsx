import React from 'react'
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className=' bgfoter  flexx items-center justify-center bg-[#1172A9]  '>
            <div className="flex text-xl gap-5 py-10  flex-col   max-w-[1400px] mx-auto ">
                <div className="flex  py-5 w-[100%] gap-5 flex-col lg:flex-row justify-between  items-center border-b border-b-[#8b9eaa] ">
                <Link to="/">  <img src={logo} alt="Logo" className="w-15" /></Link>
                    <div className="gap-20  flex-col lg:flex-row flex">
                        <div className="flex flex-col lg:flex-row font-semibold gap-5 items-center center">
                        <Link to="/">  <span className="">Home</span></Link>
                        <Link to="blog">    <span className="">Blog</span></Link>
                        <Link to="contact">    <span className="">Contact Us</span></Link>
                         
                         
                        </div>
                       
                    </div>
                    <div className="flex gap-2  text-[16px] items-center  justify-center">

                    <span className="">Privacy Policy</span>
                    <span className="">Terms Condition</span>
                    </div>





                </div>
                <div className="text-[16px] text-center lg:text-start px-5">


                All rights reserved. 2024
                </div>




            </div>





        </div>
    )
}

export default Footer