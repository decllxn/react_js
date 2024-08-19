import React from 'react';
import ReactDOM from 'react-dom/client';

function Phone(props) {
    return (
        <>
          <h1>This is a phone</h1>
          <p>It is a {props.brand} and it is {props.color}</p>
        </>
    );
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Phone brand="Apple" color="Jet Black"/>)