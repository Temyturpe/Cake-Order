import React from 'react'
import Icon from '../../assets/images/iconwhite.PNG'

const Footer = () => {
    return (
        <div className='bg-dark'>
            <div className="content px-5 md:px-[120px] mx-auto py-8 ">
                <div className="mainfoot flex flex-col sm:flex-row w-full sm:justify-between">
                    <div className="iconlink flex justify-center sm:justify-start items-center sm:items-start w-full flex-col sm:flex-row gap-12">
                        <div className="icon">
                            <img src={Icon} alt="" className='w-14 sm:w-24 ml-7 sm:ml-0' />
                            <p className='capitalize text-xl text-white font-open '>tee's bakery</p>
                        </div>
                        <div className="links w-[350px] md:w-[400px]">
                            <ul className='flex flex-wrap gap-5 sm:gap-8 md:gap-12 uppercase text-sm mt-4 text-white font-open'>
                                <li>home</li>
                                <li>about us</li>
                                <li>terms and conditions</li>
                                <li>menu</li>
                                <li>contact us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="address text-sm sm:text-base ml-2 sm:ml-0 uppercase font-open text-white mt-8 sm:mt-4 flex flex-col gap-3">
                        <p>jakande estate, oke-afa</p>
                        <p>isolo, lagos state.</p>
                        <p>09075228079</p>
                    </div>
                </div>
                <div className="copyright capitalize text-white w-full flex flex-col justify-center items-center mt-12">
                    <div className="top">built by temitope okesanya</div>
                    <div className="top">tee's bakery &#169;.all rights reserved</div>
                </div>
            </div>
        </div>
    )
}

export default Footer