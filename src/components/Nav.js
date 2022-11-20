import React from "react";
import '../styles/Nav.scss'
import logo from '../images/logo.png'

function Nav() {
    return (
        <div className='h-16 flex items-center shadow-b bg-white px-4 xl:px-8'>
            <img src={logo} alt="logo" className='w-24'/>
        </div>
    )
}

export default Nav;
