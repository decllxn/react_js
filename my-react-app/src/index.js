import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Toyota',
            model: 'Camry',
            year: 2020,
            color: 'red'
        }
    };
    render () {
        return (
            <div>
                <h1>My car is a {this.state.year} {this.state.color}</h1>
            </div>
        );
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Car />);