import React from "react";
import Nav from "./MemeGenerator/Nav";
import Form from "./MemeGenerator/Form";
import Meme from "./MemeGenerator/Meme";
import memeData from "../data/memeData";

const memes = memeData.data.memes

export default function MemeGenerator() {
    return (
        <div className='w-136 mx-auto bg-white'>
            <Nav/>
            <Form countOfMemes={memes.length} />
            <Meme/>
        </div>
    )
}
