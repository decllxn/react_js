// Before react 16.8, Class Components were the only way to track state and lifecycle on a react component.
// Function components were considered "state-less"
// with addition of Hooks, functions components are now almost equivalent
// to class components
// The defference are so minor that you will probably never to use a Class component in react
// Even though Function components are preferred, there are no current plans to removing Class components from reats
class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />)