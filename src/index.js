import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 Challenge:

 Part 2:
 - Add a `header` element with a nested `nav` element. Inside the `nav`,
 include a `img` element with the image of the React logo inside
 (src="./react-logo.png") and make sure to set the width to something
 more manageable so it doesn't take up the whole screen
 - Add an `h1` with some text describing the page. (E.g. "Reasons
 I'm excited to learn React"). Place it above the ordered list.
 - Add a `footer` after the list that says:
 "© 20xx <last name here> development. All rights reserved."
 */

const page = (
    <React.Fragment>
        <Nav/>
        <Header/>
        <Main/>
        <Footer/>

    </React.Fragment>
)

root.render(page);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
