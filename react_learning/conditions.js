// React supports if statement, BUT NOT inside jsx
// TO be able to use conditional JSX, you should put the if statements outside the JSX
// Or you should use Ternary operators instead

const x = 5;
let text = "Goodbye";

if (x < 10) {
    text = "Hello";
}

const myElement = <h1>{text}</h1>