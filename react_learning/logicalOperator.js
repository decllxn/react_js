// Another way to conditionally render a react component is by using the && operator
function Garage(props) {
    const cars = props.cars;
    return (
        <div>
            <h1>Garage</h1>
            {cars.length > 0 &&
              <h2>
                You have {cars.length} cars in your garage.
              </h2>
            }
        </div>
    );
}

const cars = ['Ford', 'BMW', 'Audi'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={cars} />);

// if cars.length > 0 is equates to true, the expression && will render