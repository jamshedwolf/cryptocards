import React from 'react'
import logo from "../assets/snd.svg";


function Newsletter() {
    return (
        <div className='bg-[#f9f9f9]'>
            <div className="max-w-[1400px] flex mx-auto items-center justify-center ">
                <div className="newsbg py-[60px]  md:m-10 flex-[.6] p-4 my-5 flex flex-col gap-4 items-center justify-between rounded-lg">
                    <p className="text-3xl font-bold text-center  ">Subscribe Newsletter</p>

                    <p className="text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo<br />
                        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.</p>

                    <div className="flex lg:w-[500px] flex-col gap-2 md:flex-row   items-center lg:bg-white  border rounded-full md:overflow-hidden">
                        <input type="email" className="px-4 py-3 w-[300px]  md:w-auto flex-[.9] text-[#ababab]  rounded-full outline-none " placeholder='Your Message' />


                        <button className="rounded-full m-2 flex-[.2] lg:w-auto w-[150px]  md:flex-[.5] text-white flex items-center  justify-center gap-2  md:px-5 py-2 bg-[#1172a9]"> <img src={logo} alt="" />  <div className="min-w-fit"> Sign Up</div></button>

                    </div>

                </div>





            </div>
        </div>
    )
}

export default Newsletter