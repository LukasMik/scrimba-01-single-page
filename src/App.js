import React from "react";
import './styles/App.scss';
import Footer from "./components/Footer";

function App() {
    return (
        <React.Fragment>
            <h1 className='text-center text-2xl text-blue-600'>You have your default environment set up! Let start new
                part of course</h1>
            <Footer/>
        </React.Fragment>
    )
}

export default App;
