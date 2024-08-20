// In react, you can conditionally render components
// using the ternary operator or if/else statements

// if statements
// using if statements

function MissedGoal() {
    return <h1>MISSED!</h1>
}

function MadeGoal() {
    return <h1>Goal!</h1>
}

function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />)