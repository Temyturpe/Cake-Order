import React from "react";
import "./topbar.css";
import Logo from "../../assets/images/singleicon.PNG";
import { BsFillCartFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="main">
      <div className="bg-lite py-3 md:py-5 px-5 md:px-[120px] shadow-md mx-auto fixed top-0 left-0 w-full z-10 font-open">
        <div className="maincontent flex justify-between">
          <div className="left ">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className='flex items-center'
            >
              <div className="icon">
                <img src={Logo} alt="" className="w-12 h-12 object-cover" />
              </div>
              <div className="name text-lg sm:text-xl text-dark">
                Tee's Bakery
              </div>
            </Link>

          </div>
          <div className="right items-center text-dark flex">
            <div className="link mr-12 hidden md:flex">
              <ul className="flex gap-12 ">
                <li><Link
                  to="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  home
                </Link></li>
                <li><Link
                  to="/menu"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  menu
                </Link></li>
                <li>about us</li>
                <li>contact us</li>
              </ul>
            </div>
            <div className="orderbtn mr-5 text-white sm:flex hidden">
              <button className="bg-mid shadow-md py-2 px-6 text-sm">
                order online
              </button>
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

    </div>
  );
};

export default Topbar;
