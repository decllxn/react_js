// React's goal is in many ways to render HTML in a web page
// React renders Html to the web page by using a function called createRoot()
// and its method render()

// CreateRoot function()
// The create root function takes one argument, an HTML element
// The purpose of the function is to define the html element where a react component should be displayed

// The render() Method
// The render() method is then called to define the react component that should be rendered
// The render() method takes one argument, a JSX element

/*
In the public folder there is an index.html file
This file is the entry point for the application
The index.html file is the html file that will be rendered in the browser
 */
// in the index.html file
/*
<body>
  <div id="root"></div> The react components will be rendered here
</body> 
*/
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>) // The html tag is rendered inside
// div with the id="root"