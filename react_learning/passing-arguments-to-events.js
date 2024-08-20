// To pass an argument to an event handler, use an arrow functions
// and pass the argument as the first parameter.
// Send "GOal!" as a parameter to the shoot function, using arrow function

function Football() {
    const shoot = (a) => {
        alert(a);
    }

    return (
        <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);