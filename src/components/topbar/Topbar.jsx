import React from "react";
import "./topbar.css";
import Logo from "../../assets/images/singleicon.PNG";
import { BsFillCartFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

const Topbar = () => {
  return (
    <div className="main fixed top-0 left-0 w-full z-10">
      <div className="bg-[#f2ede8] py-3 md:py-5 px-5 md:px-[120px] mx-auto ">
        <div className="maincontent flex justify-between">
          <div className="left flex items-center">
            <div className="icon">
              <img src={Logo} alt="" className="w-12 h-12 object-cover" />
            </div>
            <div className="name text-xl text-[#725654]">Tee's Bakery</div>
          </div>
          <div className="right items-center text-[#725654] flex">
            <div className="link mr-12 text-lg hidden md:flex">
              <ul className="flex gap-12 ">
                <li>home</li>
                <li>menu</li>
                <li>about us</li>
                <li>contact us</li>
              </ul>
            </div>
            <div className="orderbtn mr-5 text-white sm:flex hidden ">
              <button className="bg-[#bf8b81] py-2 px-6 ">order online</button>
            </div>
            <div className="cart text-xl flex reletive">
              <div className="icon">
                <BsFillCartFill />
              </div>
              <div className="number bg-red-600 text-white px-[6px] py-[.5px] rounded-full text-sm absolute ml-3 -mt-2">
                4
              </div>
            </div>
            <button className="media text-xl ml-6 flex md:hidden">
              <BiMenu />
            </button>
          </div>
        </div>
      </div>
      <div className="empty w-full p-[10px] bg-[#bf8b81]"></div>
    </div>
  );
};

export default Topbar;
