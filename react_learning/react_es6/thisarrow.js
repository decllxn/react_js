// What about this?
// The handling of this is also different compared to regular functions
// In regular functions, the this key word, represented the object that called the functions
// Which would now be the window, or button,
// But in arrow functions, the this keyword is not bound to the object that called the function
// Instead, it is bound to the global object, which is the window in a browser
// With the arrow function, the this keyword is always represents the object that defined the arrow function

// Example
class Header {
    constructor() {
        this.color = "Red";
    }

    // Regular function:
    changeColor = function() {
        document.getElementById("demo").innerHTML += this;
    }
}

const myheader = new Header();

// The window object calls the function:
window.addEventListener("load", myheader.changeColor);
// The this keyword in the function refers to the window object
// So, the output will be: [object Window]


// A button object calls the function:
document.getElementById("myButton").addEventListener("click", myheader.changeColor);
// The this keyword in the function refers to the button object
// So, the output will be: [object HTMLButtonElement]