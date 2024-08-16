// The root node is a html element where you want to display your result
// It is like a container for content managed by react
// It does not have to be a div
// It does not have to have the id='root'

// html example
/*
<body>
  <header id="sandy"></header>
</body> 
*/

// If you want to render something in there, you do the following
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>)

// This will render Hello into the webpage