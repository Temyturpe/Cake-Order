import React from 'react'

const Subscribe = () => {
    return (
        <div className="main relative w-full mt-12 bg-multi h-[350px] sm:h-[400px]">
            <div className='px-5 md:px-[120px] mx-auto absolute flex justify-center items-center top-0 left-0 bg-white/90 text-myblack w-full h-full'>
                <div className="content">
                    <div className="title text-3xl sm:text-5xl md:text-[65px] text-center uppercase font-play">stay in the know</div>
                    <p className='text-sm md:text-xl text-center font-open'>Subscribe to be the first to know of new products and discounts!</p>
                    <form action="" className='w-full flex justify-center font-open items-center mt-6'>
                        <div className="mainform">
                            <div className='border-[#585757] border-[1.5px] outline-1 w-[300px] sm:w-[500px] p-[6px] mb-3' >
                                <input type="email" placeholder='Ex. thecakeeater@gmail.com' className='w-full outline-none' />
                            </div>
                            <div className="btn w-full"><button className='bg-mid text-white p-[6px] w-[300px] sm:w-[500px] flex justify-center items-center'>submit</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Subscribe