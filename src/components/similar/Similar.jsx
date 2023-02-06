import React from 'react'
import { menuData } from "../menu/menudata";
import Singlemenu from '../menu/Singlemenu';

const Similar = () => {
    return (
        <div>  <Singlemenu
            menuData={menuData.filter(
                (menuData) => menuData.category === ""
            )}
        /></div>
    )
}

export default Similar