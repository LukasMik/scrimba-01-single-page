import React from "react";
import '../../styles/Nav.scss'
import logo from '../../images/logo.png'

export default function Nav() {
    return (
        <div className='h-16 flex items-center shadow-b bg-white px-4 xl:px-8 z-10 relative rounded-t-xl'>
            <img src={logo} alt="logo" className='w-24'/>
        </div>
    )
}
