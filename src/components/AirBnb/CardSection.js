import React from "react";
import Card from "./Card";
import items from '../../constants/items.js'

export default function CardSection() {
    const itemsElements = items.map(_i =>
        <Card
            key={_i.id}
            category={_i.category}
            badge={_i.badge}
            review={_i.review}
            numberOfReviews={_i.numberOfReviews}
            country={_i.country}
            price={_i.price}
            unit={_i.unit}
        />)

    return (
        <div className="overflow-x-scroll rounded-b-xl">
            <div className="bg-white py-8 pl-8 flex w-max gap-6">
                {itemsElements}
            </div>
        </div>
    )
}
