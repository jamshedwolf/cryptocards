import React from 'react'
import News1 from "../../assets/news1.svg"
import News2 from "../../assets/news2.svg"
import News3 from "../../assets/news3.svg"

function News() {
    return (

        <div className="bg-[#f9f9f9] py-10">
            <div className='max-w-[1400px] flex items-center justify-center py-10 mx-auto'>


                <div className="flex flex-[.8] flex-col gap-5 items-center justify-center">
                    <p className="lg:text-5xl text-4xl text-center font-bold">Our News</p>
                    <div className="text-center text-[#7A7A7A]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean<br />
                        commodo ligula eget dolor. Aenean massa.</div>



                    <div className="grid lg:grid-cols-3 gap-4 grid-cols-1">
                        <div className="flex flex-col gap-2 ">
                            <img src={News1} alt="" className="flex-[.6]" />
                            <div className="flex-[.4]">
                                <div className="font-semibold text-2xl ">
                                    These are the 4 best cards for<br />fueling up right now
                                </div>
                                <p className="text-[#7A7A7A]">Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque
                                    penatibus...</p>


                            </div>

                        </div>
                        <div className="flex flex-col gap-2 ">
                            <img src={News2} alt="" className="flex-[.6]" />
                            <div className="flex-[.4]">
                                <div className="font-semibold text-2xl ">
                                Buy now, pay later firm Klarna<br />launches physical card in the UK
                                </div>
                                <p className="text-[#7A7A7A]">Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque
                                    penatibus...</p>


                            </div>

                        </div>
                        <div className="flex flex-col gap-2 ">
                            <img src={News3} alt="" className="flex-[.6]" />
                            <div className="flex-[.4]">
                                <div className="font-semibold text-2xl ">
                                Here’s when buy now pay later<br />fcan come back to bite you
                                </div>
                                <p className="text-[#7A7A7A]">Lorem ipsum dolor sit amet, consectetuer
                                    adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque
                                    penatibus...</p>


                            </div>

                        </div>



                    </div>


                </div>

            </div>

        </div>
    )
}

export default News