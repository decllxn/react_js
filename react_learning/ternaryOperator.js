// Another way to conditionally render elements is by using a ternary operatoe
// Example
// Syntax condition ? true : false
// Usage

function MadeGoal() {
    return <h2>Goooaaallll!!!!</h2>
}

function MissedGoal() {
    return <h2>MISSED!!!</h2>
}

function Goal(props) {
    const isGoal = props.isGoal;
    return (
        <div>
            { isGoal? <MadeGoal /> : <MissedGoal /> }
        </div>
    );
}

const root = ReactDOM.createRoot(document.getELementById('root'));
root.render(<Goal isGoal={false} />);