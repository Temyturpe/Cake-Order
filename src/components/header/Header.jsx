import React from "react";
import Bgicon from "../../assets/images/single.PNG";
import Head from "../../assets/images/headerimg.png";

const Header = () => {
  return (
    <div className="sm:pt-0 pt-32 md:pt-[150px]">
      <div className="relative w-full h-[70vh] sm:pt-8 md:pt-14">
        <div className="iconbg">
          <img
            src={Bgicon}
            alt=""
            className="w-[450px] h-[400px] opacity-10 -ml-32 -mb-20"
          />
        </div>
        <div className="contentbox absolute h-full w-full top-0 left-0 pt-8 md:pt-14 text-dark sm:flex justify-center items-center gap-10">
          <div className="left flex-1">
            <div className="largetext text-[45px] sm:text-[48px] md:text-[65px] font-play uppercase tracking-normal leading-tight">
              <div className="top">handmade</div>
              <div className="middle">baked goods</div>
              <div className="bottom">and pastries</div>
            </div>
            <div className="btn w-full">
              <button className="hidden sm:flex items-center justify-center border-solid border-[1px] border-[#725654] py-2 px-10 mt-5 hover:bg-dark hover:text-white">
                order online
              </button>
              <button className="flex sm:hidden w-full items-center justify-center border-solid border-[2px] border-[#725654] py-2 px-10 mt-5 hover:bg-dark hover:text-white">
                order online
              </button>
            </div>
          </div>
          <div className="right flex-1 flex w-full justify-center sm:justify-start">
            <img
              src={Head}
              alt=""
              className="w-full h-[35vh] md:h-[70vh] object-cover sm:mt-0 mt-12 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
