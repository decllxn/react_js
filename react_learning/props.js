// Another way of handling component properties is by using props
// Props are like function argument, and you send them into the component as
// attributes
// You will learn more about props in the next chapter

class Car extends React.Component {
    render() {
        return <h2>i am a {this.props.color} Car!</h2>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red" />);

// Props in constructor
class Car1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h2>i am a {this.props.color} Car!</h2>
    }
}