// Use the Car component inside the Garage component
class Car extends React.Component {
    render() {
        return <h2>I am a Car!</h2>
    }
}

class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who Lives in my Garage?</h1>
                <Car />
            </div>
        );
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Garage />);