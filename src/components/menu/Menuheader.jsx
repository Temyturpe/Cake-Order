import React from 'react'
import Bakery from '../../assets/images/cakeshop.jpg'
import './menu.css'

const Menuheader = () => {
    return (
        <div className="headhead">
            <div className='w-full'>
                <div className="img h-[200px] w-full relative"><img src={Bakery} alt="" className='w-full h-full object-cover' />
                    <div className="title absolute w-full h-full menubg flex justify-center items-center top-0 left-0 uppercase text-7xl font-semibold text-white">our menu</div></div>
            </div>
        </div>
    )
}

export default Menuheader