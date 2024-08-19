import React from 'react';
import ReactDOM from 'react-dom';

// Components are like functions that return HTML elements
// Components are independent and reusable bits of code
// They serve the same purpose the same purpose as Js functions
// Components can be nested inside each other
// Components come in two types, Class Components and Function components
// Class Components are more powerful and are used for complex applications

// Class Components
// A class componente must include "extends React.Component" statement
// A class component must include a render method
// the extends statement creates inheritance to React.COmponent
// It also gives your component access to React.Component's function
// The render method is a required method in a class component
// Example
class Car extends React.Component {
    render() {
        return (
            <div>
                <h1>My Car</h1>
                <p>This is my car</p>
            </div>
        );
    }
}