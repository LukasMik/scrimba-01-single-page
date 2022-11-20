import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import App from './components/App';
import logo from './images/logo.svg'
import reportWebVitals from './reportWebVitals';

/*
Challenge: Starting from scratch, build and render the
HTML for our section project. Check the Google slide for
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
