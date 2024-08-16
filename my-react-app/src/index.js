import React from 'react';
import ReactDOM from 'react-dom/client';

const x = 13;
let text = "GoodBye";

if (x < 10) {
    text = "Hello";
};

const myElement = (
    <div className="container">
        <h1>This is my what I have to say</h1>
        <p>{text}</p>
    </div>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myElement);