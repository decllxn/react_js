// es6 Introduced classes
// A class is a type of function initiated by the keyword class
// Properties of a class are initiated by the constructor function

// Example
class Car {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }
    // Functions inside a class are called methods
    // Exmaple
    present() {
        return 'I have a ' + this.model
    }
}

// You can create instances of classes(objects) using the car class
// Example
const mycar = new Car("Ford");
mycar.present 
// Output: I have a Ford
