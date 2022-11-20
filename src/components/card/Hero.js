import React from "react";
import img from '../../images/hero.png'

export default function Hero() {
    return (
        <div className='p-4 lg:px-8 bg-white'>
            <div className="flex justify-center items-center"><img src={img} alt="" className="w-96 h-auto py-6"/></div>
            <h1>Online Experiences</h1>
            <p className='w-2/3'>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}

