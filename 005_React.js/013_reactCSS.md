

# Styling in React

In React, we can apply CSS styles to our components and elements in several ways. Here are the most common methods for adding styles to our React components:

## Inline CSS

We can use the `style` prop to apply inline styles directly to a React element. Styles are defined as JavaScript objects where the keys are CSS properties in camelCase, and the values are strings.

```jsx
const myStyle = {
  color: 'blue',
  fontSize: '16px',
  backgroundColor: 'red'
};

function MyComponent() {
  return <div style={myStyle}>Styled Text</div>;
}
```

## CSS Classes (External CSS)

You can apply CSS classes to React elements using the `className` prop. This is useful when you want to apply styles defined in an external CSS file.

### styles.css

```css
.custom-class {
  color: blue;
  font-size: 16px;
}
```

### App.js

```jsx
import React from 'react';
import './styles.css'; // Import the CSS file

function App() {
  return <div className="custom-class">Styled Text</div>;
}
```

## CSS Modules

CSS Modules is a technique in React that allows you to create modular, locally scoped CSS styles for your components. This avoids naming conflicts and makes your code more maintainable.

### styles.module.css

```css
.myStyle {
  color: red;
}
```

### App.js

```jsx
import React from 'react';
import styles from './styles.module.css'; // Import the CSS Module

function App() {
  return <div className={styles.myStyle}>Styled Text</div>;
}
```

## CSS Preprocessor - SASS Styling

Using SASS (Syntactically Awesome Style Sheets) for styling in React is a popular choice. Sass provides a more organized and maintainable way to write CSS.

### styles.scss

```scss
$primaryColor: #007bff;

.button {
  background-color: $primaryColor;
  color: white;
  padding: 10px 20px;
}
```

### Button.js

```jsx
import React from 'react';
import './styles.scss';

function Button() {
  return (
    <button className="button">Click Me</button>
  );
}

export default Button;
```

By using SASS, we can take advantage of features such as variables, nesting, mixins, and more to write cleaner and more maintainable CSS code.

```

