import React, { useState, useEffect } from "react";

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
        <div className="w-full flex gap-12 pt-20 px-5 md:px-[120px] mx-auto">
            {/* projects nav */}
            <nav className="mb-12 flex flex-col mx-auto w-[25%]">
                <ul className="sm:text-2xl text-xl text-mygray font-font-pacifico">
                    {menuNav.map((item, index) => {
                        return (
                            <li
                                onClick={(e) => {
                                    handleClick(e, index);
                                }}
                                className={`${active === index ? "active" : ""
                                    } cursor-pointer capitalize m-4`}
                                key={index}
                            >
                                {item.name}
                            </li>
                        );
                    })}
                </ul>
            </nav>
            {/* projects */}
            <div className="grid gap-y-12 lg:grid-cols-3 w-[75%] grid-cols-1 sm:grid-cols-2 lg:gap-x-4 lg:gap-y-8 gap-x-6 ">
                {menu.map((item) => {
                    return <Singlemenu item={item} key={item.id} />;
                })}
            </div>
        </div>
    );
};

export default Menumain;
