// Here is the same example as above, but created using a Function component instead
// A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can
// be written using much less code, and are easier to understand
// Example

function Car() {
    return <h2>Hi, I am a Car!</h2>
}

// Rendering a Component
// Now your react application has a component called Car, returns a <h2> element
// To use this component in your application, use similar syntax as normal html
// <car />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

// PROPS
// Components can be passes as props, which stands for properties
// Props are immutable, meaning they can't be changed once they are passed to a component
// Props are like function arguments, and you send them into the component as attributes
// Example

function Person(props) {
    return <h2>{props.name} is {props.age} years old</h2>
}

const root1 = ReactDOM.createRoot(document.getElementById('root'))
root1.render(<Person name="John" age="30" />)

// Components in Components
// We can refer to components indise other components 
// This is useful for creating reusable code
// Example
function Car1() {
    return <h2>Hi, I am a Car!</h2>
}

function Garage() {
    return (
        <div>
            <h1>Who Lives in my Garage?</h1>
            <Car1 />
        </div>
    )
}