// if The re is a constructor() function in your component, this function will be called when the component
// gets initiated
// The constructor functions is where you initiate the component's properties
// In react, component properties should be kept in an object calles state
// The state is an object that holds the component's properties

// The constructor function is also wher  you honor the inheritance of the parent component, by including the
// super() statement, which executes the parent component's constructor function,
// Example

class Car extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"}
    }
    render() {
        return <h2>I am a {this.state.color} Car!</h2>
    }
}