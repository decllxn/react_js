import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"}
    }
    render() {
        return (
            <div>
                <h2>My Car</h2>
                <p>This is a {this.state.color} Car!</p>
            </div>
        );
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Car />)