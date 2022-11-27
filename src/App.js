import React from "react";
import './styles/App.scss';
import Footer from "./Components/Footer";
import MemeGenerator from "./Components/MemeGenerator";

function App() {
    return (
        <React.Fragment>
            <MemeGenerator/>
            <Footer/>
        </React.Fragment>
    )
}

export default App;
