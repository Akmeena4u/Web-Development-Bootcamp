/*in React, we can apply CSS styles to our components and elements in several ways. Here are the most common methods for adding styles to our React components:*/

/*--------------------------------------------------------------------------inline css-------------------------------------------------------------------------------
we can use the style prop to apply inline styles directly to a React element. Styles are defined as JavaScript objects where the keys are CSS properties in camelCase and the values are strings.*/

const myStyle = {
  color: 'blue',
  fontSize: '16px',
  backgroundColor:'red'
};

function MyComponent() {
  return <div style={myStyle}>Styled Text</div>;
}


/*--------------------------------------------------------------------CSS Classes style-external css----------------------------------------------------------------------
 CSS Classes:You can apply CSS classes to React elements using the className prop. This is useful when you want to apply styles defined in an external CSS file.
 You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.
 */

/* styles.css */

.custom-class {
  color: blue;
  font-size: 16px;
}


// App.js
import React from 'react';
import './styles.css'; // Import the CSS file

function App() {
  return <div className="custom-class">Styled Text</div>;
}


/*--------------------------------------------------------------------------CSS Modules-----------------------------------------------------------------------------
"CSS Modules," is a technique in React that allows you to create modular, locally scoped CSS styles for your components. This means that the styles you define in a CSS 
Module are isolated to a specific component, avoiding naming conflicts and making your code more maintainable.
Create the CSS module with the .module.css extension, example: my-style.module.css and use that in App.jsx main file 
*/

/* styles.module.css */
.myStyle {
  color: red;
}


// App.js
import React from 'react';
import styles from './styles.module.css'; // Import the CSS Module

function App() {
  return <div className={styles.myStyle}>Styled Text</div>;
}



/*-------------------------------------------------------CSS preprocessor- saas styling------------------------------------------------------------------------------
Using SASS (Syntactically Awesome Style Sheets) for styling in React is a popular choice because it provides a more organized and maintainable way to write CSS. 
Sass is a CSS pre-processor. Sass files are executed on the server and sends CSS to the browser.

To use SASS in our React project, follow these steps:
step-1-Install SASS: First, we need to install the SASS preprocessor. we can do this by running the following command in your project directory: */

npm install node-sass

//step-2-Create SASS Files: Create .scss or .sass files to write your SASS styles
// styles.scss

$primaryColor: #007bff;

.button {
  background-color: $primaryColor;
  color: white;
  padding: 10px 20px;
}


//step-2 in App.jsx - import file
// Button.js
import React from 'react';
import './styles.scss';

function Button() {
  return (
    <button className="button">Click Me</button>
  );
}

export default Button;


//we can take advantage of SASS features such as variables, nesting, mixins, and more to write cleaner and more maintainable CSS code.

