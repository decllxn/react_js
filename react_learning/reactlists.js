// In react, you will render lists with some type of loop
// The javascript map() array method is generally the preferred methos

function Car(props) {
    return <li>I am a { props.brand }</li>
}

function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <div>
            <h1>Who Lives in my Garage?</h1>
            <ul>
                {cars.map((car) => <Car brand={car} />)}
            </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);