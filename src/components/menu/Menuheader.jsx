import React from 'react'
import Bakery from '../../assets/images/cakeshop.jpg'
import './menu.css'

const Menuheader = () => {
    return (
        <div className="headhead">
            <div className='w-full'>
                <div className="img h-[z0px] w-full relative"><img src={Bakery} alt="" className='w-full h-full object-cover' />
                    <div className="title absolute w-full h-full menubg flex justify-center items-center top-0 left-0 uppercase text-7xl font-semibold text-white">our menu</div></div>
            </div>
            <div className="menubody mt-20">helloooo</div>
        </div>
    )
}

export default Menuheader