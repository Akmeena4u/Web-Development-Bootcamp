### Table of Contents

### Setting Up React App

**Why is Node.js important for setting up a React project?**  
> Node.js provides the runtime environment for executing JavaScript outside a browser and includes npm, which manages the dependencies required for a React project.*

**How do you create and start a new React project?**  
> Use `npx create-react-app myreactproject` for Create React App or `npm create vite@latest` for Vite. Start the project by navigating to the folder and running `npm run start` (Create React App) or `npm run dev` (Vite).

**What is the purpose of the `npm run build` command, and what should be done after it?**  
> `npm run build` creates an optimized, production-ready version of the React application. After building, deploy the output files to hosting platforms like GitHub Pages, Netlify, or Vercel.*

**What are the advantages of using Vite over Create React App?**  
> Vite offers faster build times, hot module replacement (HMR), and more flexible configuration, making it ideal for performance-sensitive projects. HMR is a feature in modern JavaScript development tools, like Vite and Webpack, that allows you to update modules in a running application without requiring a full page reload.

**[⬆ Back to Setting Up React App](#Setting-up-react-app)**
**[⬆ Back to Top](#table-of-contents)**

---

### React Basics 

**What is React?**
> 
> - React, also known as React.js or ReactJS, is an **open-source JavaScript library** for building user interfaces, particularly for single-page applications.
> - It focuses on creating composable and reusable UI components in a declarative way, handling the view layer for both web and mobile apps.
> - React was developed by [Jordan Walke](https://github.com/jordwalke), a software engineer at Facebook, and was first used on Facebook's News Feed in 2011, followed by Instagram in 2012.

**What is the history behind React's evolution?**
> - React's evolution began in 2010 with **XHP**, a PHP extension designed to improve syntax and create custom, reusable HTML elements while preventing cross-site scripting attacks. However, XHP's approach led to performance issues, such as the need for multiple server roundtrips and full UI re-renders for small changes.
> - To address these challenges, Jordan Walke developed an early prototype named **FaxJ**, inspired by XHP, which eventually evolved into React. The idea of JSX, a key feature of React, also originated from XHP.

**What are the major features of React?**
> 
> React's major features include:
> 
> - **JSX Syntax**: A syntax extension that allows HTML to be written within JavaScript code.
> - **Virtual DOM**: React uses a Virtual DOM to minimize the performance cost associated with manipulating the Real DOM.
> - **Server-Side Rendering (SSR)**: Enhances SEO by rendering components on the server before sending them to the client.
> - **Unidirectional Data Flow**: Ensures predictable data handling by following a one-way data binding approach.
> - **Reusable Components**: Encourages the development of modular and composable UI components, enhancing code reusability.

**How does JSX integrate with HTML in a React application, and what is the typical flow for rendering HTML using JSX in a Vite-powered React project?**
> - JSX (JavaScript XML) allows React developers to write HTML-like syntax directly within JavaScript code. This JSX is then transformed into JavaScript before being rendered to the DOM.
> - In a typical Vite-powered React project, the flow for rendering HTML using JSX is as follows:
>  
>  1. **`index.html`:**  
>     - This is the main HTML entry point for the React application. It includes a basic HTML structure and a `<div>` element with an `id="root"` which acts as a placeholder for the React application.
>     - A script tag links to the `main.jsx` file, which will initialize the React app.
>  
>     ```html
>     <div id="root"></div>
>     <script type="module" src="/src/main.jsx"></script>
>     ```
>  
>  2. **`main.jsx`:**  
>     - This file initializes React and renders the main component (`App`) into the `root` element.
>     - `ReactDOM.createRoot()` is used to define the HTML element where the React component should be displayed, and the `render()` method specifies the React component.
>  
>     ```javascript
>     ReactDOM.createRoot(document.getElementById('root')).render(
>       <React.StrictMode>
>         <App />
>       </React.StrictMode>,
>     );
>     ```
>  
>  3. **`App.jsx`:**  
>     - This file defines the main React component using JSX syntax to render HTML elements. For example, it might render a heading element `<h1>chai aur react with vite</h1>`.
>  
>     ```javascript
>     function App() {
>       return (
>         <>
>           <h1>chai aur react with vite</h1>
>         </>
>       );
>     }
>     ```
>  
>  This flow demonstrates how JSX integrates seamlessly with HTML in React, with `index.html` serving as the entry point, `main.jsx` connecting React to the HTML, and `App.jsx` defining the component structure using JSX syntax.

**[⬆ Back to React Basics](#react-basics)** **[⬆ Back to Top](#table-of-contents)**

---

### React JSX

**What is JSX in React, and why was it created?**
> JSX (JavaScript XML) is a syntax extension for JavaScript used in React that allows developers to write HTML-like code within JavaScript.
> It was created to promote organized and maintainable code by enabling the coexistence of HTML and JavaScript in a single file, thus avoiding the scattering of code in different locations.

**What are the key rules for using JSX in React?**
> - **Component Naming:** Components must start with an uppercase letter.
> - **Single Parent Element:** JSX must return only one parent element. Multiple elements should be wrapped in a container like `<div>`, `<React.Fragment>`, or `<>`.
> - **Closing Tags:** Every tag, including self-closing tags, must be properly closed.
> - **Attribute Naming:** HTML attributes in React use camelCase (e.g., `className` instead of `class`).
> - **Reserved Keywords:** Use `className` instead of `class` and `htmlFor` instead of `for` to avoid conflicts with JavaScript reserved keywords.
> - **Conditional Rendering:** Use the ternary operator for conditional rendering, as if statements are not directly supported in JSX.

**How can you apply CSS in JSX?**
>
> - **Inline CSS:** CSS styles can be directly applied using the `style` attribute as an object with camelCase property names.
>   ```jsx
>   function App() {
>     return <h1 style={{ color: "red" }}>Hello World!</h1>;
>   }
>   ```
> - **External CSS:** You can import external CSS files and use class names in JSX.
>   ```jsx
>   import './styles.css';
> 
>   function MyComponent() {
>     return <div className="my-custom-class">Styled with external CSS</div>;
>   }
>   ```

**How can you use JavaScript expressions inside JSX?**
>
> JavaScript expressions can be embedded inside JSX using curly braces `{}`. For example:
> ```jsx
> function App() {
>   const name = "Tanishka";
>   return <h1>My name is {name}</h1>;
> }
> ```

**What are React elements, and how are they related to JSX?**
> 
> React elements are the building blocks of a React application. They are lightweight representations of actual DOM elements, created using JSX. React elements describe what you want to see on the screen and are eventually rendered into the DOM by React.

**Explain the role of Babel in working with JSX.**
> Babel is a JavaScript compiler that transforms JSX into regular JavaScript, making it compatible with browsers. Since browsers do not natively understand JSX, Babel is essential for converting JSX into a format that can be interpreted and executed by the browser.


**What is the significance of wrapping multiple JSX elements in a single parent element?**
> In JSX, multiple elements must be wrapped in a single parent element because JSX expressions must have a single root node. This rule ensures that the component returns one cohesive element, which simplifies rendering logic and maintains a consistent structure in the DOM.

**[⬆ Back to React JSX](#react-jsx)** **[⬆ Back to Top](#table-of-contents)**

---

### React Components

**What is a React Component, and why are they important?**
> - A React Component is a self-contained, reusable piece of code that functions similarly to JavaScript functions but operates independently and returns HTML (or JSX).
> - Components are the building blocks of a React application, enabling the creation of complex user interfaces by combining and nesting these components. They promote code reusability, modularity, and maintainability.

**What are the two types of components in React? Provide examples for each.**
> - **Function-Based Components:**  
>   Function-based components are simpler and are defined as JavaScript functions. They can use hooks for managing state and lifecycle events.
>   ```jsx
>   function Cat() {
>     return <h1>Meow</h1>;
>   }
>   export default Cat;
>   ```
> - **Class-Based Components:**  
>   Class-based components are ES6 classes that extend from `React.Component`. They have a `render()` method that returns the JSX to be rendered.
>   ```jsx
>   class Cat extends React.Component {
>     render() {
>       return <h1>Meow</h1>;
>     }
>   }
>   export default Cat;
>   ```

**[⬆ Back to React components](#react-components)** **[⬆ Back to Top](#table-of-contents)**

----

### SPA V/S MPA


**What is the main difference between a Single-Page Application (SPA) and a Multi-Page Application (MPA)?**
> The main difference lies in how they handle page navigation and content loading:
> - **MPA (Multi-Page Application):** Each time a user navigates to a new page, the server sends a new HTML, CSS, and JS file to the client, resulting in a full page reload.
> - **SPA (Single-Page Application):** The server sends the entire application’s HTML, CSS, and JS files in one initial load. Subsequent navigation is handled on the client side, avoiding full page reloads by dynamically updating the content using JavaScript and APIs.

**What are the advantages and disadvantages of using a Single-Page Application (SPA) over a Multi-Page Application (MPA)?**
> **Advantages:**  
> - **Bandwidth Efficiency:** SPAs load the initial resources once, saving bandwidth and making them ideal for high-traffic applications.
> - **Improved User Experience:** SPAs offer faster navigation with no full page reloads, providing a seamless user experience.
> - **Speed:** SPAs can provide quicker interactions since only the necessary data is fetched and rendered on the client side.
> - **Complexity in Client-Side Interactions:** SPAs allow for more sophisticated and interactive user interfaces.
> **Disadvantages:**  
> - **Initial Load Time:** SPAs may have a longer initial load time since all the resources for the application are downloaded at once.
> - **SEO Challenges:** SPAs can face difficulties with SEO because search engines may struggle to crawl and index dynamic content that is rendered on the client side.
> - **Complexity in Development:** SPAs often involve more complex client-side development, including challenges in managing state, routing, and data flow.


**How can SEO challenges in SPAs be mitigated?**
> SEO challenges in SPAs can be mitigated through several techniques:
> - **Server-Side Rendering (SSR):** Rendering the application on the server before sending it to the client, so search engines receive a fully-rendered HTML page.
> - **Prerendering:** Generating static HTML versions of pages at build time, which search engines can crawl.
> - **Dynamic Rendering:** Serving different versions of the content to search engines and users; for example, serving a static HTML version to bots.
> - **Using Meta Tags and Structured Data:** Ensuring that important metadata and structured data are included in the initial HTML sent to the client.

**[⬆ Back to SPA V/S MPA](#spa-v/s-mpa)** **[⬆ Back to Top](#table-of-contents)**

---

### Named export v/s Default export


**What is the key difference between a default export and a named export in JavaScript?**
>
> - **Default Export:** Allows you to export a single value, which can be imported with any name. The name of the import is independent of the name of the export.
> - **Example:**
> ```javascript
> // module.mjs
> const b = 'Rahish';
> export default b;
> 
> // module2.mjs
> import XYZ from './module.mjs';
> console.log(XYZ);  // Output: 'Rahish'
> ```
> - **Named Export:** Allows you to export multiple values, and the name of the import must exactly match the name of the export. Curly brackets are used during import.
> - **Example:**
> ```javascript
> // module.mjs
> export const b = 'Rahish';
> 
> // module2.mjs
> import { x } from './module.mjs'; // Error: 'x' is not exported from './module.mjs'
> ```

**[⬆ Back to Named export V/S Default export](#named-export-v/s-default-export)** **[⬆ Back to Top](#table-of-contents)**


---

### Props 



**What are props in React, and how do they differ from state?**  
> - **Props (Properties):** Props are a mechanism in React for passing data from a parent component to a child component. They are immutable, meaning that they cannot be modified by the child component once received. Props allow components to be dynamic and reusable by enabling them to receive different data inputs.
> - **State:** Unlike props, state is used to manage data that is internal to a component and can change over time. State is mutable, and components can update their own state using `setState` (in class components) or the `useState` hook (in functional components).




**What are PropTypes in React, and why are they useful?**  
> Props are passed from a parent component to a child component by including them as attributes in the JSX of the child component.
> 
> **Example:**
> ```javascript
> // Greeting.jsx (Parent Component)
> import React from 'react';
> import Person from './Person';
> 
> function Greeting() {
>   const name = "Jesse";
> 
>   return (
>     <>
>       <h1>Hello!</h1>
>       <Person name={name} />
>     </>
>   );
> }
> 
> export default Greeting;
> 
> // Person.jsx (Child Component)
> import React from 'react';
> 
> function Person(props) {
>   return <h2>I'm {props.name}!</h2>;
> }
> 
> export default Person;
> ```
> In this example, the `name` prop is passed from the `Greeting` component (parent) to the `Person` component (child).

> **What are PropTypes in React, and why are they useful?**  
> PropTypes is a mechanism in React that allows you to define and validate the types of props that a component should receive. This ensures that the props passed to a component conform to the expected types, which helps catch bugs and makes the component more predictable and easier to maintain.
> 
> **Example:**
> ```javascript
> // Navbar.jsx
> import React from 'react';
> import PropTypes from 'prop-types';
> 
> function Navbar(props) {
>   return (
>     <div>
>       {/* Code of your Navbar */}
>     </div>
>   );
> }
> 
> Navbar.propTypes = {
>   title: PropTypes.string.isRequired,
>   aboutText: PropTypes.string
> };
> 
> export default Navbar;
> ```
> In this example, `Navbar` expects a `title` prop of type `string` and marks it as required. The `aboutText` prop is optional but must also be a `string` if provided.


**What are default prop types in React, and how do they work? Provide an example**  
> Default prop types in React allow you to define default values for props in case they are not provided by the parent component. This ensures that the component has sensible defaults and can function correctly even if some props are missing.
> 
> **Example:**
> ```javascript
> // Navbar.jsx
> import React from 'react';
> import PropTypes from 'prop-types';
> 
> function Navbar(props) {
>   return (
>     <div>
>       {/* Code of your Navbar */}
>     </div>
>   );
> }
> 
> Navbar.propTypes = {
>   title: PropTypes.string.isRequired,
>   aboutText: PropTypes.string
> };
> 
> Navbar.defaultProps = {
>   title: 'Set title here',
>   aboutText: 'About text here'
> };
> 
> export default Navbar;
> ```
> In this example, if `title` and `aboutText` are not provided, the `Navbar` component will use the default values: "Set title here" and "About text here."



**[⬆ Back to Named props](#props)** **[⬆ Back to Top](#table-of-contents)**

---

### State

**How is state initialized in a React class component?**
> State in a React class component is typically initialized in the constructor using `this.state`. The state is an object that holds dynamic data, which can change over time and cause the component to re-render when updated.
> 
> **Example:**
> ```javascript
> // Car.jsx
> import React from 'react';
> 
> class Car extends React.Component {
>   constructor(props) {
>     super(props);
>     this.state = {
>       brand: "Ford",
>       model: "Mustang",
>       color: "red",
>       year: 1964
>     };
>   }
> 
>   render() {
>     return (
>       <div>
>         <h1>My {this.state.brand}</h1>
>         <p>
>           It is a {this.state.color} {this.state.model} from {this.state.year}.
>         </p>
>       </div>
>     );
>   }
> }
> 
> export default Car;
> ```
> In this example, the state is initialized with properties like `brand`, `model`, `color`, and `year` in the `Car` class component.


**What method is used to update the state in a React class component, and why is it important?**  
> The `this.setState()` method is used to update the state in a React class component. It is important because:
> - It allows you to update the component's state in an immutable way, ensuring that a new state object is created.
> - It triggers a re-render of the component, allowing the UI to reflect the updated state.
> 
> **Example:**
> ```javascript
> // Car.jsx (continued)
> import React from 'react';
> 
> class Car extends React.Component {
>   constructor(props) {
>     super(props);
>     this.state = {
>       brand: "Ford",
>       model: "Mustang",
>       color: "red",
>       year: 1964
>     };
>   }
> 
>   changeColor = () => {
>     this.setState({ color: "blue" });
>   }
> 
>   render() {
>     return (
>       <div>
>         <h1>My {this.state.brand}</h1>
>         <p>
>           It is a {this.state.color} {this.state.model} from {this.state.year}.
>         </p>
>         <button type="button" onClick={this.changeColor}>Change color</button>
>       </div>
>     );
>   }
> }
> 
> export default Car;
> ```
> In this example, `this.setState({ color: "blue" })` updates the `color` in the state, and the component re-renders to display the new color.


**What method is used to manage the state in a React functional component, and why is it important?**  
> In functional components, state is managed using the `useState` hook. This hook returns a state variable and a function to update that variable. It allows functional components to have local state similar to class components.
> 
> **Example:**
> ```javascript
> // Car.jsx (functional component)
> import React, { useState } from 'react';
> 
> function Car() {
>   const [carState, setCarState] = useState({
>     brand: "Ford",
>     model: "Mustang",
>     color: "red",
>     year: 1964
>   });
> 
>   return (
>     <div>
>       <h1>My {carState.brand}</h1>
>       <p>
>         It is a {carState.color} {carState.model} from {carState.year}.
>       </p>
>     </div>
>   );
> }
> 
> export default Car;
> ```
> In this example, `useState` initializes the state with properties like `brand`, `model`, `color`, and `year`. The `setCarState` function is used to update the state when needed.

**What are the advantages of using `useState` in functional components over state management in class components?**
> **Answer:**  
> Advantages of using `useState` in functional components include:
> - **Simplicity:** Functional components with `useState` are generally simpler and easier to read compared to class components with state.
> - **No `this` Keyword:** `useState` eliminates the need for the `this` keyword, making code less prone to errors related to the context of `this`.
> - **Better Performance:** Functional components can be more performant because they don’t rely on the `this` keyword and class lifecycle methods.
> - **Hooks Composition:** `useState` can be easily combined with other hooks like `useEffect` to manage side effects, providing a more cohesive and modular approach to component logic.


**What method is used to update the state in a React class component, and why is it important?**  
> When updating a specific property in a state object using `useState`, you should spread the existing state to maintain the other properties, and then update only the property that needs to change.
> 
> **Example:**
> ```javascript
> // Car.jsx (updating state in functional component)
> import React, { useState } from 'react';
> 
> function Car() {
>   const [carState, setCarState] = useState({
>     brand: "Ford",
>     model: "Mustang",
>     color: "red",
>     year: 1964
>   });
> 
>   const changeColor = () => {
>     setCarState(prevState => ({
>       ...prevState,
>       color: "blue"
>     }));
>   };
> 
>   return (
>     <div>
>       <h1>My {carState.brand}</h1>
>       <p>
>         It is a {carState.color} {carState.model} from {carState.year}.
>       </p>
>       <button type="button" onClick={changeColor}>Change color</button>
>     </div>
>   );
> }
> 
> export default Car;
> ```
> In this example, `setCarState` updates only the `color` property while spreading the previous state (`...prevState`) to retain the values of `brand`, `model`, and `year`.


**[⬆ Back to State](#state)** **[⬆ Back to Top](#table-of-contents)**

---
