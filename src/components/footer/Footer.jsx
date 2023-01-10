import React from 'react'
import Icon from '../../assets/images/iconwhite.PNG'

const Footer = () => {
    return (
        <div className='bg-mid'>
            <div className="content px md:px-[120px] mx-auto py-8 ">
                <div className="mainfoot flex w-full justify-between">
                    <div className="iconlink flex gap-8">
                        <div className="icon">
                            <img src={Icon} alt="" className='w-24' />
                            <p className='capitalize text-xl text-white font-open'>tee's bakery</p>
                        </div>
                        <div className="links w-[650px]">
                            <ul className='grid grid-cols-3 uppercase text-white font-open'>
                                <li>home</li>
                                <li>about us</li>
                                <li>terms and conditions</li>
                                <li>menu</li>
                                <li>contact us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="address">address</div>
                </div>
            </div>
        </div>
    )
}

export default Footer