import React from "react";
import star from '../../images/star.png'

export default function Card() {
    return (
        <div className="w-44 relative">
            <img src="https://source.unsplash.com/400x400?house" alt="main-pic" className="w-full h-60 rounded-xl"/>
            <div className="rounded xs text-center uppercase bg-white text-xs absolute top-2 left-2 p-2">SOLD OUT</div>
            <div className="flex items-center pt-2 gap-1">
                <img src={star} alt="star" className="w-4 h-4 bottom-0.5 relative" />
                <span className="text-xs">5.0</span>
                <span className="text-xs font-light text-gray-500">(0)</span>
                <span className="inline-block w-1 h-1 rounded-full bg-gray-500"></span>
                <span className="text-xs font-light text-gray-500">USA</span>
            </div>
            <p className="py-2 text-xs block">Life lessons with Katie Zaferes</p>
            <p><b>From $135</b> / person</p>
        </div>
    )
}
