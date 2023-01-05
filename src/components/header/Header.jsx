import React from "react";
import Bgicon from "../../assets/images/single.PNG";
import Head from "../../assets/images/headerimg.png";

const Header = () => {
  return (
    <div className="">
      <div className="relative w-full pt-14">
        <div className="iconbg">
          <img
            src={Bgicon}
            alt=""
            className="w-[450px] h-[400px] opacity-10 -ml-32 -mb-20"
          />
        </div>
        <div className="contentbox absolute h-full w-full top-0 left-0 pt-14 text-[#725654] flex justify-center items-center gap-7">
          <div className="left flex-1">
            <div className="largetext text-[65px] font-play uppercase tracking-normal leading-tight">
              <div className="top">handmade</div>
              <div className="middle">baked goods</div>
              <div className="bottom">and pastries</div>
            </div>
            <div className="btn w-full">
              <button className="flex  items-center justify-center border-solid border-[2px] border-[#725654] py-2 px-10 mt-5 ">
                order online
              </button>
            </div>
          </div>
          <div className="right flex-1">
            <img src={Head} alt="" className="h-[70vh]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
