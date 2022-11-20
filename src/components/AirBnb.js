import React from "react";
import Nav from "./card/Nav";
import Hero from "./card/Hero";
import CardSection from "./card/CardSection";

export default function AirBnb() {
    return (
        <div className='main-container my-24 rounded'>
            <Nav/>
            <Hero/>
            <CardSection/>
        </div>
    )
}

