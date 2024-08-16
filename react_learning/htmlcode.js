// What is Jsx?
// Jsx allows you to write Html tags inside the Javascript code:
// Example
// First we import necessary modules
import React from 'react';
import ReactDOM from 'react-dom';


// Creating a variable that contains HTML and display it in the "root" node:
const myelement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Jane</td>
        </tr>
    </table>
);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(myelement)