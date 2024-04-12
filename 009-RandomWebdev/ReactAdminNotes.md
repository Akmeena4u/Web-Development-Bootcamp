
## React Admin Dashboard Project Overview

### Introduction

Here, we will be designing a beautiful and interactive admin dashboard using React and CSS. The dashboard will include several components such as reusable boxes containing different charts, a list page with a sortable and searchable table, pagination, and a modal for adding new items. The design is responsive and utilizes CSS grid for layout flexibility.

### Project Highlights

- **Reusable Components**: We will create reusable box components for displaying various charts and information.
- **Interactive Charts**: Charts will be interactive, allowing users to hover over data points for detailed information.
- **Sortable and Searchable Table**: The list page will feature a table component that supports sorting, searching, and row selection.
- **Responsive Design**: The dashboard will adapt to different screen sizes using CSS grid for responsive layout.
- **Deployment**: We will deploy our completed project using Hostinger, taking advantage of their hosting services which include a free domain and SSL certificate.

### React Installation

1. **Setting Up Project**:
   - Create a new react vite project directory  using yarn and navigate into it.
   - Install project dependencies using npm or yarn:
     ```bash
     yarn
     ```

2. **Running the Application**:
   - Start the development server:
     ```bash
     yarn start
     ```
   - Open your browser and navigate to the provided URL (usually `http://localhost:3000`) to view the running application.

---

<details>
  <summary>Pages and Layout</summary>

  ## Pages and Layout Setup

In this section, we'll set up the pages and layout structure for our React admin dashboard project. We'll create page components and establish navigation between these pages.

### 1. Creating Pages Folder

First, let's create a `pages` folder in our project to organize our page components.

```bash
mkdir src/pages
```

### 2. Creating Home Page Component

Inside the `pages` folder, create the `Home` page component.

#### Home.js

```jsx
// src/pages/Home.js
import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Admin Dashboard</h1>
      {/* Add other components and charts here */}
    </div>
  );
};

export default Home;
```

#### Home.scss

Create the SCSS file for styling the `Home` page.

```scss
/* src/pages/Home.scss */
.home-container {
  background-color: #f0f0f0;
  padding: 20px;
}
```

### 3. Creating Additional Pages

Create more page components similarly for `Users` and `Products`.

#### Users.js

```jsx
// src/pages/Users.js
import React from 'react';

const Users = () => {
  return (
    <div>
      <h1>Users Page</h1>
      {/* Add user list and functionalities here */}
    </div>
  );
};

export default Users;
```

#### Products.js

```jsx
// src/pages/Products.js
import React from 'react';

const Products = () => {
  return (
    <div>
      <h1>Products Page</h1>
      {/* Add product list and functionalities here */}
    </div>
  );
};

export default Products;
```

### 4. Setting Up Navigation

We'll use React Router to handle navigation between different pages.

</details>
---
<details>
  <summary>React router for Navigation</summary>

 We'll define the layout component (`Layout`) and then set up the routing using `react-router-dom` with custom route configurations.

### Step 1: Define Layout Component

In the `App.js` file, Create a `Layout` component that represents the overall structure of your application, including the navbar, menu, content area, and footer.

### Step 2: Set Up Routing with React Router Dom

In the `App.js` file, configure the routing using `react-router-dom`. Define routes for different paths and render components within the `Layout` component.

```javascript
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Product from "./pages/product/Product";


function App() {

const Layout = ({ children }) => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">{children}</div>
      </div>
      <Footer />
    </div>
  );
};


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

```

### Explanation:


- **Import Statements**:
  - Imports necessary components from `react-router-dom` and custom components like `Navbar`, `Footer`, `Menu`, `Layout`, and various page components (`Home`, `Users`, `Products`, `Login`, `User`, `Product`).

- **Define Layout Component**:
  - Creates a functional `Layout` component that acts as a wrapper for the main application structure.
  - Includes common elements (`Navbar`, `Menu`, `Footer`) and a dynamic `contentContainer` for rendering children.

- **Router Configuration**:
  - Uses `Routes` and `Route` components to set up routing for different paths.
  - Assigns specific components (`Home`, `Users`, `Products`, `Login`, `User`, `Product`) to corresponding paths within the `Layout` component.

- **Router Provider**:
  - Sets up routing using `BrowserRouter` (`Router` from `react-router-dom`) as the root component to enable client-side routing.
  - Configured routes are rendered within the `Router` component.

This structure provides a clear separation of concerns, allowing for efficient routing and component rendering based on URL paths. Adjustments can be made to individual components and routes as needed for the application's requirements.

</details>


---

<details>
  <summary>Global Scss and variables </summary>
Here are the notes explaining the setup of global styles, CSS variables, and container styling:

### Global Styles and CSS Variables

- **Importing Global CSS**:
  - Inside the `Styles` folder, there's a `global.scss` file that serves as the main CSS file for the application.
  - Import this global stylesheet into the `App.js` file to apply styles throughout the app.
  
```scss
import styles from "./styles/global.scss";
```

- **Using CSS Variables**:
  - Create a separate file named `variables.scss` to define custom CSS variables like `main-background`, `main-text-color`, etc.
  - These variables can be used to maintain consistent styling across the application.
  
```scss
// variables.scss

$main-background: #f5f5f5;
$main-text-color: #ffffff;
```

- **Applying Variables**:
  - Import the `variables.scss` file to use the defined CSS variables within other stylesheets.
  - Apply these variables to set background colors, text colors, and other styling properties.

```scss
// Using variables in global.scss

.main-container {
  background-color: $main-background;
  color: $main-text-color;
}

.menu-container {
  width: 250px;
  padding: 20px;
  border-right: 2px solid #ddd;
  background-color: #ffffff;
}

.content-container {
  padding: 20px;
  width: 100%;
}
```

- **Flexbox Layout**:
  - Use `display: flex;` to create a horizontal layout for the `container` class, which includes `menuContainer` and `contentContainer`.
  - This allows for flexible positioning of menu and content within the main container.

```scss
.container {
  display: flex;
}

.menu-container {
  width: 250px;
  padding: 20px;
  border-right: 2px solid #ddd;
  background-color: #ffffff;
}

.content-container {
  padding: 20px;
  width: 100%;
}
```


</details>

---

<details>
  <summary>Navbar design</summary>
## React Navbar Design with SCSS (Code Included)

This guide outlines the creation of a React navbar component with SCSS styling.

**1. Navbar Component (navbar.tsx):**

```jsx
import React from 'react';
import './Navbar.scss'; // Import SCSS styles

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="logo.svg" alt="Logo" />
        <span>Your App Name</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="Search" />
        <img src="expand.svg" alt="Expand" />
        <div className="notification">
          <img src="notification.svg" alt="Notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="user.svg" alt="User" style={{ width: 26, height: 26, borderRadius: '50%', objectFit: 'cover' }} />
          <span>Username</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
```

**2. Navbar Styling (navbar.scss):**

```scss
.navbar {
  display: flex;
  align-items: center;
  padding: 10px 20px;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
}

.logo-container span {
  /* Additional styles for logo text */
}

.icons {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icons img {
  /* Specific styles for icons */
}

.notification {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  background-color: red;
  color: white;
  border-radius: 50%;
}

.notification span {
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 12px;
}

.user {
  display: flex;
  align-items: center;
  gap: 5px;
}

.user img {
  /* Specific styles for user image */
}

.user span {
  /* Specific styles for username */
}
```

**Explanation:**

* The `Navbar` component defines the structure of the navbar using a main container (`navbar`) and nested containers for logo (`logo-container`) and icons (`icons`).
* Individual icons and user information are represented by `img` and `span` elements.
* SCSS styles are applied using class names for different sections (e.g., `.navbar`, `.logo-container`).
* Flexbox properties (`display: flex`) are used to arrange elements horizontally and vertically.
* Positioning (`position: absolute`) is used to place the notification count (`span`) on top of the notification icon.

**Additional Notes:**

* Replace image sources (`logo.svg`, `search.svg`, etc.) with your actual image paths.
* Customize the styles further to match your design preferences.
* Consider adding hover effects or other interactive features to your navbar.

</details>

---

<details>
  <summary>Footer design</summary>

## Footer Design Notes

### HTML Structure:
- **Footer Structure**:
  - The footer component includes two spans: one for the application name and another for copyright text.

```jsx
import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <span>lamadmin</span>
      <span>© Lama Dev Admin Dashboard</span>
    </div>
  )
}

export default Footer
```

### CSS Styling (`footer.scss`):
- **Footer Styling**:
  - The footer container is styled using flexbox (`display: flex;`) to align items horizontally with space between.
  - Specific styles for child spans are applied using nested CSS selectors (`span:first-child` and `span:last-child`).

```scss
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;

  span {
    &:first-child {
      font-weight: bold;
    }

    &:last-child {
      font-size: 14px;
    }
  }
}
```

### Additional Notes:
- The `Footer` component renders a simple footer layout with two spans for content.
- CSS styles use nested selectors (`&:first-child`, `&:last-child`) to target specific spans within the footer.
- Flexbox properties (`align-items`, `justify-content`) are used for layout and spacing control.


</details>

---

<details>
  <summary>React menu design</summary>
### React Menu Design Overview

#### **Component Structure (`Menu.tsx`):**
The `Menu` component is a React functional component responsible for rendering a dynamic menu based on provided data (`menu` array from `data.ts`). It utilizes React Router's `Link` component for navigation.

```jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
```

#### **Styling (`Menu.scss`):**
The associated SCSS file (`Menu.scss`) defines styles for the `Menu` component and its nested elements.

```scss
@import "../../styles/variables.scss";
@import "../../styles/responsive.scss";

.menu {
  .item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;

    .title {
      font-size: 12px;
      font-weight: 200;
      color: $soft-color;
      text-transform: uppercase;

      @include lg {
        display: none;
      }
    }

    .listItem {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      border-radius: 5px;

      &:hover {
        background-color: $soft-bg;
      }

      .listItemTitle {
        @include lg {
          display: none;
        }
      }
    }
  }
}
```

#### **Data (`data.ts`):**
The `data.ts` file exports arrays containing menu items (`menu`) and additional data related to users, products, charts, and activities.

- `menu`: Array containing menu categories with associated list items (title, URL, icon).
- Additional data arrays for users, products, charts, and specific user/product details.

#### **Notes on Implementation:**
- The `Menu` component iterates over the `menu` array to render menu items dynamically.
- Each menu item displays its title followed by a list of clickable links (`listItems`) represented as `Link` components.
- SCSS styles define the layout and responsiveness of menu items and links, adapting to different screen sizes (`lg` breakpoint).

This implementation demonstrates a reusable and dynamic menu component in React, utilizing provided data to generate menu items with navigation links and associated icons. The styling ensures a responsive design suitable for various device screen sizes.
</details>
