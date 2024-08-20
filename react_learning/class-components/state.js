// The state object can containe as many properties as you like

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Toyota',
            model: 'Camry',
            year: 2015,
            color: 'Blue'
        }
    };
    render () {
        return (
            <div>
                <h1>My Car</h1>s
            </div>
        );
    }
}

// Refer to the state object anywhere in the component by using the
// this.state.propertyname (syntax)
