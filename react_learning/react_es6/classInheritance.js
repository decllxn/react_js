// To create a class inheritance, use the extends keyword
// A class created with a class inheritance inherits all the methods from 
// another class

// Example
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    present() {
        return `This is a ${this.year} ${this.name}`;
    }
}

// Creating a child class
class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model
    }
}

const mycar = new Model("Ford", "Mustang")
mycar.show()

// The super() method refers to the parent class
// The super() method is used to call methods of a parent class
// The super() method is used to access variables and methods from a parent class
// By calling the super() method in the constructor methos, we call the parent's constructor method,
// To get acces sto the parent's properties and methods