import React from 'react'
import Menuheader from '../components/menu/Menuheader'
import Menumain from '../components/menu/Menumain'

const Menu = () => {
    return (
        <div className='pt-20 overflow-auto'>
            <Menuheader />
            <Menumain />
        </div>
    )
}

export default Menu