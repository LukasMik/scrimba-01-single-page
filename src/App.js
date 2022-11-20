import React from "react";
import './styles/App.scss';
import Footer from "./components/Footer";
import AirBnb from "./components/AirBnb";


export default function App() {
    return (
        <React.Fragment>
            <AirBnb/>
            <Footer/>
        </React.Fragment>
    )
}
