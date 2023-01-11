import React from 'react'
import Bgicon from "../../assets/images/single.PNG";
import Baker from '../../assets/images/baker.png';

const AboutHome = () => {
  return (
    <div className='mt-36 bg-mid w-full h-[700px] sm:h-full overflow-hidden'>
      <div className="content relative px-5 md:px-[120px] h-full mx-auto">
        <div className="icon flex items-end justify-end  w-full">
          <img src={Bgicon} alt="" className='-mr-52 opacity-40 w-[300px] md:w-[380px] ' /></div>
        <div className="content-main absolute py-3 px-5 md:px-[120px] mx-auto top-0 left-0 w-full sm:flex justify-between items-center">
          <div className="left flex-1 flex justify-center items-center mb-6 sm:mb-0">
            <img src={Baker} alt="" className='sm:w-[300px] w-[250px] md:w-[400px] sm:h-full object-cover' /></div>
          <div className="right flex-1 text-white ">
            <div className="title text-4xl sm:text-[45px] md:text-[60px]  font-play font-semibold tracking-tight">About The Baker</div>
            <p className=' font-open mt-2 sm:mt-4 text-sm md:text-base'>Hi! My name is Temitope Okesanya, I’m the owner and baker of Tee's Bakery. After years of learning, traveling, tasting and experimenting, I’m excited to share with you the result of my inspirations come to life. Tee's Bakery is a modern take on classic pastry techniques combined with natural flavors that represent cake art.</p>
            <button className='flex items-center justify-center border-solid border-[1px] border-white py-2 px-10 mt-8 hover:bg-white hover:text-dark text-sm md:text-base'>learn more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHome