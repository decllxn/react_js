// Just Like HTML DOM events, react can perform actions based on user events
// React has the same events as HTML: click, change, mouse over etc
// React events are case insensitive
// React events are also camelCase
// Adding Events
// React events are written in camelCase syntax
// Example

// React
<button onClick={shoot}>Take The shot!</button>

// HTML
//<button onclick="shoot()">Take The shot!</button>

// Example
function Football() {
    const shoot = () => {
        alert("Great Shot!");
    }
    return (
        <button onClick={shoot}>Take the shot!</button>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));