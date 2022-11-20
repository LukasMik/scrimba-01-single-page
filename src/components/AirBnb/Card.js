import React from "react";
import star from '../../images/star.png'

export default function Card({category, price, badge, unit, country, numberOfReviews, review}) {
    const mainPic = `https://source.unsplash.com/400x400?${category}`

    return (
        <div className="w-44 relative">
            <img src={mainPic} alt="main-pic" className="w-full h-60 rounded-xl object-cover"/>
            <div className="rounded xs text-center uppercase bg-white text-xs absolute top-2 left-2 p-2">{badge}</div>
            <div className="flex items-center pt-2 gap-1">
                <img src={star} alt="star" className="w-4 h-4 bottom-0.5 relative" />
                <span className="text-xs">{review}</span>
                <span className="text-xs font-light text-gray-500">({numberOfReviews})</span>
                <span className="inline-block w-1 h-1 rounded-full bg-gray-500"></span>
                <span className="text-xs font-light text-gray-500">{country}</span>
            </div>
            <p className="py-2 text-xs block">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
            <p><b>From ${price}</b> / {unit}</p>
        </div>
    )
}
