

## Material UI for React - Course Introduction


**What is Material UI?**

Material UI is a UI component library that provides pre-built components to quickly build user interfaces following Google's Material Design specification. Similar to Angular Material and Bootstrap for other frameworks, Material UI offers a collection of components specifically designed for React applications.

**Prerequisites**

* Basic understanding of HTML, CSS, and JavaScript
* Knowledge of React fundamentals, including JSX

**Course Outline**

1. Installation of Material UI in a React application
2. Typography components
3. Exploration of various component categories:
    * Inputs/Form controls
    * Layout components
    * Navigation components
    * Data display and feedback components
4. Introduction to experimental components (not part of core library)
5. Customization in Material UI

**Learning Objectives**

* Understand the functionality of individual Material UI components
* Gain the knowledge to build React applications using Material UI components



<details>
<summary> Installation & code setup </summary>

## Material UI for React - Code Setup


**Choosing TypeScript**

The course will use TypeScript instead of JavaScript. TypeScript provides type safety and can improve code maintainability. If you're unfamiliar with TypeScript, it's still recommended to follow along for the learning experience.

**Creating a React App with TypeScript**

1. Open your terminal.
2. Run the following command to create a new React app configured for TypeScript:

```bash
npx create-react-app react-mui-demo --template typescript
```

**Starting the Development Server**

1. Navigate to the project directory:

```bash
cd react-mui-demo
```

2. Start the development server:

```bash
yarn start  # or npm start
```

This will launch the React application in your browser at `http://localhost:3000`.

**Installing Material UI**

1. Visit the Material UI website ([https://mui.com/material-ui/](https://mui.com/material-ui/)) and navigate to the installation instructions.
2. Copy the yarn command for installation.
3. In your terminal (within the project directory), run the copied yarn command:

```bash
yarn add @mui/material @emotion/react @emotion/styled
```

* `@mui/material`: Provides the core Material UI components.
* `@emotion/react` and `@emotion/styled`: Styling libraries used by Material UI v5.

**Project Structure Updates**

1. In `src/App.tsx`, remove the default header content and unnecessary imports.
2. Create a new folder named `components` inside the `src` directory. This folder will store custom components you create throughout the course.


</details>


<details>
<summary>MUI-Typography</summary>

## Material UI for React - Typography


**Typography Concepts**

Typography deals with the visual appearance of text content on a website. Inconsistent styles and font sizes can create a cluttered UI. Material UI provides typography levels to ensure consistent formatting. Each level has a predefined font size, weight, and line height.

**Material Typography Component**

The `Typography` component offers various typography levels. We'll explore 10 important ones:

* **Headings (h1-h6):** Used for headings of different sizes.
* **Subtitles (subtitle1, subtitle2):** Variations of h6 with different font sizes and weights.
* **Body Text (body1, body2):** Used for paragraphs of text. body1 is the default variant for the `Typography` component.

**Using the Typography Component**

1. Create a new React component file (e.g., `mui-typography.tsx`).
2. Import the `Typography` component from `@mui/material`.
3. Create instances of the `Typography` component with different variants and content.
4. Include the `Typography` component(s) in your `App.tsx` component to render them in the browser.

**Properties of the Typography Component**

* `variant`: Specifies the typography level (h1-h6, subtitle1, subtitle2, body1, body2).
* `component`: Sets the underlying HTML element (defaults to the provided variant).
* `gutterBottom`: Adds bottom margin to the text (defaults to `false`).

**Example - Displaying Typography Levels**

The code demonstrates usage of various typography levels and properties.



```tsx
// mui-typography.tsx
import Typography from '@mui/material/Typography';

const TypographyComponent = () => {
  return (
    <div>
      {/* Headings */}
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      {/* Subtitles */}
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      {/* Body Text */}
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Typography variant="body2">
        This is body text with a smaller font size.
      </Typography>

      {/* Using component prop and gutterBottom */}
      <Typography variant="h4" component="h1" gutterBottom>
        h4 heading with h1 element and bottom margin
      </Typography>
    </div>
  );
};

export default TypographyComponent;
```

This code creates various `Typography` components with different variants, content, and properties. You can include this component in your `App.tsx` to render the typography elements in your React application.


**Additional Notes**

* Inspecting the rendered elements reveals the corresponding HTML tags (h1-h6, p).
* Material UI uses semantic elements by default.
* Default font sizes and weights can be customized through theming (covered later in the course).
* Refer to the Material UI documentation's "Default Theme" section for a breakdown of default styles.
* The `gutterBottom` prop adds consistent bottom margin based on the variant size.


</details>
