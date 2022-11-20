import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import App from './components/App';
import reportWebVitals from './reportWebVitals';

const jsxDom = (
    <div className='border border-blue-600 px-32 py-12 mb-24'>
        <h1 className="text-2xl text-blue-600 text-center mb-12">I'm rendered through ReactDOM.createRoot</h1>
        <h3 className='mb-4 text-xl'>Some random list</h3>
        <ul>
            <li className='ml-8 py-1'>Item 1</li>
            <li className='ml-8 py-1'>Item 2</li>
            <li className='ml-8 py-1'>Item 3</li>
            <li className='ml-8 py-1'>Item 4</li>
        </ul>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxDom);

// const plainRoot = document.getElementById('root')
// plainRoot.append(jsxDom)
// console.log(jsxDom)


/**
 Challenge: find out what happens if we try to append JSX
 to our div#root using .append() instead of ReactDOM

 1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
 2. Select the div with the ID of "root" and use `.append()` to append
 your JSX
 3. See if you can guess what will show up in the browser before running
 the code
 4. See if you can explain what actually shows up in the browser
 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
