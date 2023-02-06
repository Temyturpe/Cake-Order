import React from 'react'
import './insta.css'
import "swiper/css/bundle";
import Instagram from './Instascroll';

const Insta = () => {
    return (
        <div className='mt-20 px-5 md:px-[120px] mx-auto'>
            <div className="title uppercase text-3xl sm:text-5xl md:text-[60px] font-play font-semibold text-dark text-center">tee's bakery on insta</div>
            <Instagram />
            <div className="btn flex justify-center items-center w-full mt-12">
                <button className="bg-mid capitalize font-open text-white shadow-md py-3 px-14 text-sm">
                    follow us
                </button></div>
        </div>
    )
}

export default Insta