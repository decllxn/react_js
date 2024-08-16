// Expressions in JSX
// With Jsx you can write expressions inside curly braces {}
// The expression can be a React variable, or propert, or any other valid Javascript expression
// Isx will execute the expression and return the result

const myElement = <h1>React is {5 + 5} times better than JSX</h1>
// JSX will execute the expression inside the curly braces and return the result
// Inside the curly braces, the output/result will be displayed in the screen


// To write HTML on multiple lines, put the HTML in parentheses

const myList = (
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
);

// The HTML code must be wrapped in ONE top level element
// SO if you like to write two paragraphs, you must put them inside one parent element
// Otherwise it won't work

const paragraphs = (
    <div>
        <p>This is the first paragraph</p>
        <p>This is the second paragraph</p>
    </div>
);

// Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent
// unnecessarily addin extra nodes to the DOM
// Example

const paragraph2 = (
    <>
      <p>I am a paragraph</p>
      <p>I am a paragraph too.</p>
    </>
)