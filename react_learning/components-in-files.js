// React is all about re-using code, and it is recommended to split your components into seperate files
// This is a good practice, but for simplicity, we will keep everything in one file for now
// For Example, in Car.js file

function Car() {
    return <h2>Hi, I am a car!</h2>
}

export default Car;

// To be able to use it in the Car component, you have to import the file in your application
// For example, in App.js file
import React from 'react';
import Car from './Car';
