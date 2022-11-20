import React from "react";
import './styles/App.scss';
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
    return (
        <React.Fragment>
            <div className='main-container mt-24'>
                <Nav/>
                <div className="bg-white px-4 lg:px-8">
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default App;
