import React from "react";
import Cake from "../../assets/images/cakecat.jpg";
import Bread from "../../assets/images/breadcat.jpg";
import Dessert from "../../assets/images/dessertcat.jpg";
import Small from "../../assets/images/smallchopscat.jpg";

const Categories = () => {
  return (
    <div className="pt-20 sm:pt-8 md:pt-40 block sm:flex justify-between gap-6 ">
      <div className="cat-1 flex-1 cursor-pointer">
        <div className="name text-2xl mt-14 sm:mt-0 md:text-[26px] font-semibold text-dark mb-4">
          Cakes
        </div>
        <div className="group relative">
          <img
            src={Cake}
            alt=""
            className="cat-img w-full h-[300px] sm:h-[450px] font-open object-cover shadow-md"
          />
          <div className="btn absolute w-full top-0 left-0 flex justify-center items-center h-0 bg-white/30 bottom-0 group-hover:h-full opacity-0 group-hover:opacity-100 duration-100">
            <button className="px-10 py-2 text-lg text-white bg-mid">
              view products
            </button>
          </div>
        </div>
      </div>
      <div className="cat-2 flex-1 mt-14 cursor-pointer">
        <div className="name text-2xl md:text-[26px] font-semibold text-dark mb-4">
          Breads
        </div>
        <div className="group relative">
          <img
            src={Bread}
            alt=""
            className="cat-img w-full h-[300px] sm:h-[450px] object-cover shadow-md"
          />
          <div className="btn absolute w-full top-0 left-0 flex justify-center items-center h-0 bg-white/30 bottom-0 group-hover:h-full opacity-0 group-hover:opacity-100 duration-100">
            <button className="px-10 py-2 text-lg text-white bg-mid">
              view products
            </button>
          </div>
        </div>
      </div>
      <div className="cat-3 flex-1 mt-14 sm:mt-0 cursor-pointer">
        <div className="name text-2xl md:text-[26px] font-semibold text-dark mb-4">
          Desserts
        </div>
        <div className="group relative">
          <img
            src={Dessert}
            alt=""
            className="cat-img w-full h-[300px] sm:h-[450px] object-cover shadow-md"
          />
          <div className="btn absolute w-full top-0 left-0 flex justify-center items-center h-0 bg-white/30 bottom-0 group-hover:h-full opacity-0 group-hover:opacity-100 duration-100">
            <button className="px-10 py-2 text-lg text-white bg-mid">
              view products
            </button>
          </div>
        </div>
      </div>
      <div className="cat-4 flex-1 mt-14 cursor-pointer">
        <div className="name text-2xl md:text-[26px] font-semibold text-dark mb-4">
          Small Chops
        </div>
        <div className="group relative">
          <img
            src={Small}
            alt=""
            className="cat-img w-full h-[300px] sm:h-[450px] object-cover shadow-md"
          />
          <div className="btn absolute w-full top-0 left-0 flex justify-center items-center h-0 bg-white/30 bottom-0 group-hover:h-full opacity-0 group-hover:opacity-100 duration-100">
            <button className="px-10 py-2 text-lg text-white bg-mid">
              view products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
