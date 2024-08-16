// Javascript modules allow tou to break up your code into seperate files.
// This makes it easier to maintain the code-base


// Export
// You can export a function or a variable of a function from any file
// There are two types of exports: Named and Default

// NAMED EXPORT:
// You can create named exports two ways. In-line individuall, or all at once in the bottone
// In-line individually

export const name = "Jesse"
export const age = 40


// All at once in the bottom
const name1 = "Declan"
const age1 = 40

export { name, age }


// DEFAULT EXPORT
// You can only have one default export per file
const message = () => {
    const name = "Jesse";
    const age = 40;
    return `My name is ${name} and I am ${age} years old`
}

export default message;

// Into other files you can import the above
// As shown below
import { name, age } from "./person";

import message from "./message.js";
