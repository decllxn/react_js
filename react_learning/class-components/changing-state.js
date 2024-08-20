// To change a value in the state object, use this.setState() method
// When a value in the state object changes, the component will re-render, meaning that
// the output will change according to the new value(s)

// Example
// Add a button with an on-click event that will change the color property
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Ford',
            model: 'Mustang',
            color: 'red',
            year: 1964
        };
    }
    changeColor = () => {
        this.setState({color: 'blue'});
    }
    render() {
        <div>
            <h1>My {this.state.brand}</h1>
            <p>
                it is a {this.state.color}
                {this.state.model} from {this.state.year}.
            </p>
        </div>
    }
}