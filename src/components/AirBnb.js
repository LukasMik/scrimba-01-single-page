import React from "react";
import Nav from "./AirBnb/Nav";
import Hero from "./AirBnb/Hero";
import CardSection from "./AirBnb/CardSection";

export default function AirBnb() {
    return (
        <div className='main-container my-24 rounded'>
            <Nav/>
            <Hero/>
            <CardSection/>
        </div>
    )
}

