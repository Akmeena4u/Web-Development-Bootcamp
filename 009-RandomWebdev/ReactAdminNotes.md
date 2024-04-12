
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

---
<details>
   <summary>Css Grid setup </summary>


This guide demonstrates creating a grid layout using CSS Grid with the Recharts library for a dashboard-like interface.

**1. Setting Up Grid System (home.jsx):**

```jsx
import React from 'react';
import TopBox from './TopBox'; // Import your TopBox component
import './Home.scss'; // Import styles

const Home = () => {
  return (
    <div className="container">
      <div className="box box-one">Box 1</div>
      <div className="box box-two">Box 2</div>
      <div className="box box-three">Box 3</div>
      <div className="box box-four">Box 4</div>
      <div className="box box-five">Box 5</div>
      <div className="box box-six">Box 6</div>
      <div className="box box-seven">Box 7</div>
      <div className="box box-eight">Box 8</div>
      <div className="box box-nine">Box 9</div>
      <TopBox /> {/* Call your TopBox component */}
    </div>
  );
};

export default Home;
```

**2. Home.scss:**

```scss
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, minmax(180px, auto));
  gap: 20px;
  padding: 20px;
  border: 1px solid var(--main-bg-color); /* Use your variable */
  border-radius: 10px;
}

.box {
  padding: 20px;
  border-radius: 10px;
  /* Add background color or styles for boxes */
}

.box-one {
  grid-column-span: 3; /* Span across 3 columns */
  grid-row-span: 2; /* Span across 2 rows */
  background-color: lightblue; /* Example color */
}

.box-four {
  grid-column: 2; /* Start at column 2 */
}

.box-seven {
  grid-column: span 2; /* Span across 2 columns */
  grid-row: span 2; /* Span across 2 rows */
}

/* Responsive styles will be added later */
```

**3. TopBox Component (TopBox.jsx):**

```jsx
import "./topBox.scss"
import {topDealUsers} from "../../data.ts"

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox
```

**4. TopBox.scss:**

```scss
@import "../../styles/responsive.scss";

.topBox {
  h1 {
    margin-bottom: 20px;

    @include xxl{
      font-size: 24px;
    }
  }

  .list {
    .listItem {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;

      .user {
        display: flex;
        gap: 20px;

        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;

          @include xxl{
            display: none;
          }
          @include lg{
            display: block;
          }
        }

        .userTexts {
          display: flex;
          flex-direction: column;
          gap: 5px;

          .username {
            font-size: 14px;
            font-weight: 500;
          }
          .email {
            font-size: 12px;

            @include xxl{
              display: none;
            }
            @include lg{
              display: block;
            }
          }
        }
      }

      .amount {
        font-weight: 500;
      }
    }
  }
}

```

**Explanation:**

* The `Home` component creates a container with nine boxes using CSS Grid.
* `grid-template-columns` defines four columns of equal width.
* `grid-template-rows` defines rows with a minimum height of 180px and automatic adjustments.
* Individual boxes have styles applied with class names (e.g., `box-one`).
* Grid properties like `grid-column-span` and `grid-row-span` are used to control the size and position of specific boxes.
* The `TopBox` component displays a title and a list (to be populated later).

**Note:** This example focuses on the basic grid layout. Adding charts and populating the list with data will be covered in later video sections (not included here).

**Additional Notes:**

* Consider using a CSS preprocessor like SCSS for better organization and maintainability.
* Explore more advanced CSS Grid features like grid areas and gaps for complex layouts.

</details>

---
<details>
   <summary> Recharts basics</summary>
I'd be glad to help you integrate Recharts with React and CSS to create interactive charts in your application. Here's a comprehensive guide that incorporates best practices and addresses potential issues:

**1. Installation:**

- Make sure you have a React project set up. If not, you can use `create-react-app` to quickly create one:

  ```bash
  npx create-react-app my-chart-app
  ```

- Install the `recharts` library using npm or yarn:

  ```bash
  cd my-chart-app
  npm install recharts
  ```

**2. Import Necessary Components:**

- In the React component where you want to display the chart, import the chart component you'll be using from `recharts` and any other necessary CSS styles:

  ```javascript
  import React from 'react';
  import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
  import './Chart.css'; // Import your CSS file (optional)
  ```

**3. Prepare Your Data:**

- Create an array of objects representing the data you want to visualize. Each object should have keys corresponding to the chart's axes. For example, for a line chart:

  ```javascript
  const data = [
    { name: 'Jan', value: 10 },
    { name: 'Feb', value: 20 },
    { name: 'Mar', value: 30 },
    // ... more data points
  ];
  ```

**4. Create Your Chart Component:**

- Use the imported chart component and its subcomponents to define the structure of your chart:

  ```javascript
  function MyChart() {
    return (
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <Tooltip />
      </LineChart>
    );
  }
  ```

**Explanation:**

  - `LineChart`: The main component that defines the overall structure of the line chart.
  - `width` and `height`: Set the desired dimensions of the chart.
  - `data`: The array of objects containing the data to be visualized.
  - `XAxis`: Defines the X-axis with `dataKey` specifying the data property corresponding to the X-axis values.
  - `YAxis`: Defines the Y-axis.
  - `Line`: Defines a line series with `type` (e.g., "monotone" for a smooth line), `dataKey` for the data property corresponding to the line values, and `stroke` for the line color.
  - `Tooltip`: Adds a tooltip that appears on hover, displaying relevant information.

**5. (Optional) Style Your Chart with CSS:**

- Create a separate CSS file (`Chart.css`) to style the chart elements:

  ```css
  /* Chart.css */
  .recharts-text.recharts-base-text {
    font-family: sans-serif;
  }

  .recharts-cartesian-axis-line {
    stroke: #ddd;
  }

  .recharts-line-text {
    fill: #8884d8;
  }

  /* Add more styles as needed */
  ```

- Import this CSS file in your React component as shown in step 2.

**Complete Example:**

```javascript
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import './Chart.css';

const data = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 20 },
  { name: 'Mar', value: 30 },
  // ... more data points
];

function MyChart() {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <Tooltip />
    </LineChart>
  );
}

export default MyChart;
```

```css
/* Chart.css */
.recharts-text.recharts-base-text {
  font-family: sans-serif;
}

.recharts-cartesian-axis-line {
  stroke: #ddd;
}

.recharts-line-
```
</details>

<details>
   <summary>React Recharts For Box-2,3,4,5</summary>
## Creating Charts with Recharts in React

This guide demonstrates how to integrate Recharts with React to create interactive charts within a component named `ChartBox`.

**1. Installation:**

- Ensure you have a React project set up.
- Install `recharts` using npm or yarn:

  ```bash
  npm install recharts
  ```

**2. Import Components:**

- Import necessary components from `recharts` and your CSS file (optional):

  ```javascript
  import React from 'react';
  import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
  import './ChartBox.css'; // Import your CSS file (optional)
  ```

**3. Data Preparation:**

- Create an array of objects representing the data you want to visualize. Each object should have keys corresponding to the chart's axes:

```javascript
export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};

export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};

export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    { name: "Sun", profit: 4000 },
    { name: "Mon", profit: 3000 },
    { name: "Tue", profit: 2000 },
    { name: "Wed", profit: 2780 },
    { name: "Thu", profit: 1890 },
    { name: "Fri", profit: 2390 },
    { name: "Sat", profit: 3490 },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    { name: "Sun", visit: 4000 },
    { name: "Mon", visit: 3000 },
    { name: "Tue", visit: 2000 },
    { name: "Wed", visit: 2780 },
    { name: "Thu", visit: 1890 },
    { name: "Fri", visit: 2390 },
    { name: "Sat", visit: 3490 },
  ],
};

  

**4. ChartBox Component:**

- Create a `ChartBox` component that accepts props for data, title, icon, color, and percentage:
```typescript
import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
```


**Explanation:**

  - `ResponsiveContainer` ensures responsiveness for different screen sizes.
  - `LineChart` defines the overall structure of the line chart.
  - `XAxis` and `YAxis` define the axes.
  - `Line` defines the line series with `dataKey`, `stroke` (color), and `strokeWidth`.
  - `Tooltip` provides information on hover, styled with transparency and position.
  - Conditional styles are applied based on `percentage` value (not shown here).

**5. (Optional) CSS Styling:**

- Create a `ChartBox.css` file to style the chart elements:

```css
@import "../../styles/responsive.scss";

.chartBox {
  display: flex;
  height: 100%;

  @include sm {
    flex-direction: column;
  }

  .boxInfo {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include sm {
      gap: 20px;
    }

    .title {
      display: flex;
      align-items: center;
      gap: 10px;

      @include xxl {
        font-size: 14px;
      }
    }

    h1 {
      @include xxl {
        font-size: 20px;
      }
    }
  }

  .chartInfo {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .chart {
      width: 100%;
      height: 100%;
    }

    .texts {
      display: flex;
      flex-direction: column;
      text-align: right;

      .percentage {
        font-weight: bold;
        font-size: 20px;

        @include xxl {
          font-size: 16px;
        }
      }

      .duration {
        font-size: 14px;
      }
    }
  }
}
```

**6. Usage in Home Page:**

- In your home page component, import and use the `ChartBox` component, passing the necessary props for each chart:

  ```javascript
  import ChartBox from './ChartBox';

  function HomePage() {
    return (
      <div>
        <ChartBox data={userData} title="Total Users" icon="user.svg" color="#8884d8" percentage={25} />
        {/* Similar usage for productRevenue and conversionRate ChartBoxes */}
      </div>
    );
  }
  ```

</details>

