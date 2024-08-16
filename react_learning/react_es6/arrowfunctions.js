// Arrow functions allow us to write shorter function syntax
// They are also known as anonymous functions
// They are often used as event handlers

hello = function () {
    return "Hello World!";
}

// With arrow function

hello1 = () => {
    return "Hello World!";
}

// It even goes shorter!! If the function has only one statement, and the statement returns a value
hello2 = () => "Hello World!"

hello3 = (val) => "Hello " + val;