// First always remember to import
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing react is what allows us to write in jsx
// Jsx allows us to write Html element in Javascript and place then in the DOM
// without any createElement() or appendChild()

// Jsx Example 1
const myElement = <h1>I Love Jsx!</h1>

const root  = ReactDOM.createRoot(document.getElementById('root'))
root.render(myElement);


// Jsx Example 2
const myElement2 = React.createElement('h1', {}, 'I do not use JSX!');

const root2 = ReactDOM.createRoot(document.getElementById('root'));
root2.render(myElement2);