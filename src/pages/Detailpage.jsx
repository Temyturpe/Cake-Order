import React from "react";
import { useParams } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { AiOutlineHeart } from "react-icons/ai"
import { menuData } from "../components/menu/menudata";
import Similar from "../components/similar/Similar";
import Singlemenu from "../components/menu/Singlemenu";

const Cakedetail = ({ item }) => {
    const { id } = useParams();
    return (
        <div className="pt-28">
            {item
                .filter((item) => item.id === id)
                .map((item, index) => (
                    <div key={index} className="detailbox px-5 md:px-[120px] mx-auto">
                        <section class="pt-12 pb-24 text-dark rounded-b-10xl overflow-hidden">
                            <div class="container px-4 mx-auto">
                                <div class="flex flex-wrap -mx-4">
                                    <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                                        <div class="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
                                            <div class="w-full sm:w-auto min-w-max px-4 text-center flex sm:flex-col items-center justify-center">
                                                <a class="inline-block sm:mb-6 mr-4 sm:mr-0 transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400" href="#">
                                                    < IoIosArrowUp />
                                                </a>
                                                <a class="h-30 block mb-4 mr-2 sm:mr-0" href="#">
                                                    <img class="h-20 w-20" src={item.image} alt="" />
                                                </a>
                                                <a class="hidden sm:block h-30 mb-4 mr-2 sm:mr-0" href="#">
                                                    <img class="h-20 w-20" src={item.image} alt="" />
                                                </a>
                                                <a class="hidden sm:block h-30 mb-4 mr-2 sm:mr-0 rounded-xl border-2 border-blueGray-500" href="#">
                                                    <img class="h-20 w-20" src={item.image} alt="" />
                                                </a>
                                                <a class="h-30 block mb-4 sm:mb-6 mr-4 sm:mr-0" href="#">
                                                    <img class="h-20 w-20" src={item.image} alt="" />
                                                </a>
                                                <a class="inline-block transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400" href="#">
                                                    <IoIosArrowDown />
                                                </a>
                                            </div>
                                            <div class="w-full sm:w-9/12 px-4">
                                                <img class="mb-5" src={item.image} alt="" />
                                                <p class="text-sm text-gray-300">Roll over image to zoom in</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-1/2 px-4 font-open">
                                        <div class="max-w-md mb-6">
                                            <span class="text-xs tracking-wider">{item.category}</span>
                                            <h2 class="mt-6 mb-4 text-3xl font-play md:text-4xl lg:text-5xl font-heading font-medium">{item.name}</h2>
                                            <p class="flex items-center mb-6">
                                                <span class="text-3xl font-medium">{item.price}</span>
                                            </p>
                                            <p class="text-lg">{item.description}</p>
                                            <p class="flex items-center mt-3">
                                                <span class="mr-2 text-base font-medium">Contains:</span>
                                                <span class="text-base font-medium">{item.conatins}</span>
                                            </p>
                                        </div>

                                        <div class="mb-10">
                                            <input class="w-40 p-2 text-center bg-white outline-none focus:ring-2 focus:ring-[#bf8b81] focus:ring-opacity-50" type="text" placeholder="1" />
                                        </div>
                                        <div class="flex flex-wrap -mx-2 mb-12">
                                            <div class="w-full md:w-2/3 px-2 mb-2 md:mb-0"><a class="block py-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-mid focus:ring-2 focus:ring-[#bf8b81] focus:ring-opacity-50 hover:bg-mid/90" href="#">Add to cart</a></div>
                                            <div class="w-full md:w-1/3 px-2">
                                                <a class="flex w-full py-2 px-2 items-center justify-center leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-white focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60" href="#">
                                                    <span class="mr-2">Wishlist</span>
                                                    <AiOutlineHeart />
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="similar">
                            <Singlemenu item={menuData.filter((item) => item.id < 5)} />
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Cakedetail;

/* <div className="details">
<div className="left">
  <img src={item.image} alt="" className="w-80 h-80" />
</div>
<div className="right">
  <div className="name">
    <div className="cat">{item.category}</div>
    <div className="cat">{item.name}</div>
  </div>
  <div className="price">
    <div className="h3">
      Price: <span>{item.realprice}</span>
    </div>
  </div>
  <div className="picksize">Pick a</div>
</div>
</div> */
