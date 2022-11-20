import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import App from './components/App';
import logo from './images/logo.svg'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 Challenge:

 Part 1: Create a page of your own using a custom Page component

 It should return an ordered list with the reasons why you're
 excited to be learning React :)

 Render your list to the page

 */

function FunFacts() {
    return (
        <React.Fragment>
            <img className='w-32 h-auto relative -left-6' src={logo} alt=""/>
            <h1 className="text-5xl text-blue-200 font-extrabold py-12">Fun facts about React</h1>
            <ul>
                <li className="py-2 font-bold text-2xl text-blue-100 ml-8">Was first release in 2013</li>
                <li className="py-2 font-bold text-2xl text-blue-100 ml-8">Was originally created by Jordan Walke</li>
                <li className="py-2 font-bold text-2xl text-blue-100 ml-8">Has well over 100k stars on GitHub</li>
                <li className="py-2 font-bold text-2xl text-blue-100 ml-8">Is mainted by Meta Platforms</li>
                <li className="py-2 font-bold text-2xl text-blue-100 ml-8">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </React.Fragment>
    )
}

root.render(<FunFacts/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
