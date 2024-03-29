import React, { useState, useEffect } from "react";
import { BiSlider } from 'react-icons/bi'

// import data
import { menuData } from "./menudata";
import { menuNav } from "./menudata";

// import components
import Singlemenu from "./Singlemenu";

const Menumain = () => {
    const [item, setItem] = useState({ name: "all" });
    const [menu, setMenu] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        // get projects based on item
        if (item.name === "all") {
            setMenu(menuData);
        } else {
            const newMenu = menuData.filter((menu) => {
                return menu.category.toLowerCase() === item.name;
            });
            setMenu(newMenu);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };

    return (
        <div className="w-full h-[500px] md:flex  gap-12 pt-20 px-5 sm:px-32 md:px-[120px] mx-auto">
            {/* projects nav */}
            <aside className=" h-auto mx-auto w-[25%]  text-dark hidden md:block">
                <div className="title uppercase text-2xl font-play text-center">select a category</div>
                <nav className=" flex flex-col ">
                    <ul className="sm:text-xl text-base">
                        {menuNav.map((item, index) => {
                            return (
                                <li
                                    onClick={(e) => {
                                        handleClick(e, index);
                                    }}
                                    className={`${active === index ? "active underline" : ""
                                        } cursor-pointer capitalize m-4 `}
                                    key={index}
                                >
                                    {item.name}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>
            <div className="filter flex justify-center items-center md:hidden mb-6 w-full ">
                <button className="bg-mid flex justify-center items-center text-lg px-5 py-2 text-white">Filters <span className="ml-3"><BiSlider /></span></button>
            </div>

            {/* projects */}
            <div className="grid gap-y-12 lg:grid-cols-3 w-full md:w-[75%] grid-cols-2 lg:gap-x-4 lg:gap-y-8 gap-x-6 ">
                {menu.map((item) => {
                    return <Singlemenu item={item} key={item.id} />;
                })}
            </div>
        </div>
    );
};

export default Menumain;
