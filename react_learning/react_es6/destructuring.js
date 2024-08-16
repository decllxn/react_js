// Destructuring, involves extracting elements from an array, or properties from an object
// Example

const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];

// with destructuring

const [car, truck, suv] = vehicles;

// Destructuring comes in handy when a function returns an array
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [addResult, subtractResult, multiplyResult, divideResult] = calculate(4, 7);

// Destructuring objects

const vehicleOne  = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}

myVehicle(vehicleOne);

// old way
//function myVehicle(vehicle) {
//    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
  //}

// Destructuring
function myVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
  }