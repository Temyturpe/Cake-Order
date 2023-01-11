import React from 'react'
import Cake from "../../assets/images/menuCake2.jpg";
import Cookies from "../../assets/images/menuCookies2.jpg";
import Bread from "../../assets/images/menuBread2.jpg";
import Parfait from "../../assets/images/menuparfait.PNG";
import Chops from "../../assets/images/menuChops2.jpg";
import './insta.css'

const Insta = () => {
    return (
        <div className='mt-20 px-5 md:px-[120px] mx-auto'>
            <div className="title uppercase text-3xl sm:text-5xl md:text-[60px] font-play font-semibold text-dark text-center">tee's bakery on insta</div>
            <div className="content inline-flex h-[180px] mt-12 overflow-x-hidden">
                <img src={Cake} alt="" />
                <img src={Cookies} alt="" />
                <img src={Bread} alt="" />
                <img src={Parfait} alt="" />
                <img src={Chops} alt="" />
                <img src={Cookies} alt="" />
            </div>
            <div className="btn flex justify-center items-center w-full mt-12">
                <button className="bg-mid capitalize font-open text-white shadow-md py-3 px-14 text-sm">
                    follow us
                </button></div>
        </div>
    )
}

export default Insta