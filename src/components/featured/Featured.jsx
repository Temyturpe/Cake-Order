import React from "react";
import Cake from "../../assets/images/menucake1.jpg";
import Cookies from "../../assets/images/menucookies.jpg";
import Bread from "../../assets/images/menubread.jpg";
import Parfait from "../../assets/images/menuparfait.PNG";
import Chops from "../../assets/images/menuchops.jpg";

const Featured = () => {
  return (
    <div className="mt-36">
      <div className="title uppercase mb-7 md:mb-2 text-dark font-play text-4xl sm:text-5xl md:text-[65px] tracking-tight">
        featured products
      </div>
      <div className="productbox grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-center gap-5">
        <div className="product1 w-full  group relative">
          <img
            src={Cake}
            alt=""
            className="h-[250px] w-full object-cover shadow-md"
          />
          <div className="detail mt-6 leading-normal text-dark">
            <div className="name font-semibold">Milk chocolate cake</div>
            <div className="category">Cakes</div>
            <div className="price"> &#8358;20,000</div>
          </div>
          <div className="btn absolute w-[45%] flex justify-center items-center top-0 right-0 p-1 capitalize bg-mid text-white opacity-0 group-hover:opacity-100 duration-100 text-sm">
            view product
          </div>
        </div>
        <div className="product2 w-full  group relative">
          <img
            src={Bread}
            alt=""
            className="h-[250px] w-full object-cover shadow-md"
          />
          <div className="detail mt-6 leading-normal text-dark">
            <div className="name font-semibold">Banana Bread</div>
            <div className="category">Breads</div>
            <div className="price"> &#8358;3,500</div>
          </div>
          <div className="btn absolute w-[45%] flex justify-center items-center top-0 right-0 p-1 capitalize bg-mid text-white opacity-0 group-hover:opacity-100 duration-100 text-sm">
            view product
          </div>
        </div>
        <div className="product3 w-full  group relative">
          <img
            src={Chops}
            alt=""
            className="h-[250px] w-full object-cover shadow-md"
          />
          <div className="detail mt-6 leading-normal text-dark">
            <div className="name font-semibold">Hot Spicy Samosa</div>
            <div className="category">Small chops</div>
            <div className="price"> &#8358;1,500</div>
          </div>
          <div className="btn absolute w-[45%] flex justify-center items-center top-0 right-0 p-1 capitalize bg-mid text-white opacity-0 group-hover:opacity-100 duration-100 text-sm">
            view product
          </div>
        </div>
        <div className="product4 w-full  group relative">
          <img
            src={Parfait}
            alt=""
            className="h-[250px] w-full object-cover shadow-md"
          />
          <div className="detail mt-6 leading-normal text-dark">
            <div className="name font-semibold">Chocolate Cake Parfait</div>
            <div className="category">Desserts</div>
            <div className="price"> &#8358;2,000</div>
          </div>
          <div className="btn absolute w-[45%] flex justify-center items-center top-0 right-0 p-1 capitalize bg-mid text-white opacity-0 group-hover:opacity-100 duration-100 text-sm">
            view product
          </div>
        </div>
        <div className="product5 w-full  group relative">
          <img
            src={Cookies}
            alt=""
            className="h-[250px] w-full object-cover shadow-md"
          />
          <div className="detail mt-6 leading-normal text-dark">
            <div className="name font-semibold">Chocolate Chips Cookies</div>
            <div className="category">Cookies</div>
            <div className="price"> &#8358;1,200</div>
          </div>
          <div className="btn absolute w-[45%] flex justify-center items-center top-0 right-0 p-1 capitalize bg-mid text-white opacity-0 group-hover:opacity-100 duration-100 text-sm">
            view product
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
