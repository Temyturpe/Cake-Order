import React from "react";
import { Link } from "react-router-dom";

const Singlemenu = ({ item }) => {
    return (
        <div
            key={item.id}
            className="flex flex-col h-auto w-full"
        >
            <Link to={`/details/${item.id}`}>
                <div className="product1 w-full  group relative">
                    <img
                        src={item.image}
                        alt=""
                        className="h-[250px] w-full object-cover shadow-md"
                    />
                    <div className="detail mt-6 leading-normal text-dark">
                        <div className="name font-semibold">{item.name}</div>
                        <div className="category">{item.category}</div>
                        <div className="price"> &#8358;{item.price}</div>
                    </div>
                    <div className="btn absolute w-[50%] sm:w-[45%] flex justify-center items-center top-0 right-0 p-1 capitalize bg-mid text-white opacity-0 group-hover:opacity-100 duration-100 text-xs sm:text-sm">
                        view product
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Singlemenu;
