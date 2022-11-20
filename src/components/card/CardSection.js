import React from "react";
import Card from "./Card";

export default function CardSection() {
    return (
        <div className="overflow-hidden rounded-b-xl">
            <div className="bg-white py-8 pl-8 flex w-max gap-6">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}
