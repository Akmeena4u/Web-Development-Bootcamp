
# Understanding JSX in React

## 1. What is JSX?

- **JSX (JavaScript XML):**
  - JSX is a syntax extension for JavaScript used in React.
  - It enables the coexistence of HTML-like code within JavaScript, converting HTML tags into React elements.

## 2. Why JSX is Created?

- **Organized Code:**
  - JSX ensures that JavaScript and HTML are not scattered in different locations, promoting organized and maintainable code.

## 3. JSX Rules:

1. **Component Naming:**
   - Components must start with an uppercase letter.

2. **Single Parent Element:**
   - JSX allows returning only one parent element from a component. Wrap multiple elements in a single container (e.g., `<div>`, `<React.fragments>`, `<></>`) and encapsulate them in parentheses.

3. **Closing Tags:**
   - Every tag, including self-closing tags, must be closed.

4. **Attribute Naming:**
   - React DOM uses camelCase for HTML attribute names (e.g., `className` instead of `class`).

5. **Reserved Keywords:**
   - Use "className" instead of "class" and "htmlFor" instead of "for" due to JavaScript reserved keywords.

6. **If Statements:**
   - React does not support if statements directly in JSX; use the ternary operator instead.

## 4. How to Use CSS in JSX:

### Inline CSS:

#### Example 1 - App.jsx:

```jsx
function App() {
  return (
    <>
      <h1 style={{ color: "Red" }}>Hello World!</h1>
      <p style={{ fontSize: "20px" }}>Tanishka here!</p>
    </>
  );
}
```

#### Example 2 - App.jsx:

```jsx
const myStyle = {
  color: 'blue',
  fontSize: '16px',
};

function MyComponent() {
  return (
    <div style={myStyle}>
      This text has inline styles.
    </div>
  );
}
```

### External CSS:

#### styles.css:

```css
.my-custom-class {
  /* Add your styles here */
}
```

#### App.jsx:

```jsx
import './styles.css';

function MyComponent() {
  return (
    <div className="my-custom-class">
      This element uses styles from an external CSS file.
    </div>
  );
}
```

## 5. How to Use JS in JSX:

```jsx
function App() {
  const name = "Tanishka";
  return (
    <>
      <h1>My name is {name}</h1>
    </>
  );
}

## 6. Use of JSX:

```jsx
function App() {
  return <h1>Hello World!</h1>;
}
```

## 7. React Elements:

- JSX is used to create React elements, which are lightweight representations of actual DOM elements.

## 8. Rendering JSX:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## 9. Babel:

- Babel is a JavaScript compiler that translates JSX into regular JavaScript, making it understandable for browsers.
