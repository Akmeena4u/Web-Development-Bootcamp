
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
![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/7c30b9d0-be6f-49da-8998-bb5819cd9e42)
![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/52940232-aaee-4799-903e-be221dd19b39)
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


<details>
   <summary>React Dashboard Animated Charts-  Bar charts - Box-7-8</summary>
 

# React Dashboard Animated Charts

In this tutorial, we'll be adding different types of animated charts to our React dashboard.

## Bar Chart Component

Let's start by creating a `BarChartBox` component. This component will display a bar chart using Recharts.

### BarChartBox Component

```javascript
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss";

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const BarChartBox = (props: Props) => {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{fill:"none"}}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
```

### Usage in Home Page

In the home page component, import the `BarChartBox` component and pass the required props:

```javascript
import { barChartBoxVisit, barChartBoxRevenue } from "./data";

// Inside the component render method or JSX
<BarChartBox title={barChartBoxVisit.title} chartData={barChartBoxVisit.chartData} color={barChartBoxVisit.color} dataKey={barChartBoxVisit.dataKey} />
<BarChartBox title={barChartBoxRevenue.title} chartData={barChartBoxRevenue.chartData} color={barChartBoxRevenue.color} dataKey={barChartBoxRevenue.dataKey} />
```

### CSS (barChartBox.scss)

```css
.barChartBox{
  width: 100%;
  height: 100%;

  h1{
    font-size: 20px;
    margin-bottom: 20px;
  }

  .chart{
  }
}
```

## Notes

- Ensure to import the necessary stylesheets (`barChartBox.scss`) for proper rendering.
- Adjust the chart's height and other styles based on your layout requirements.
- Customize the tooltip content and appearance using Recharts props (`Tooltip`, `Bar`, etc.).



</details>

<details>
   <summary>Bar chart -4</summary>
Certainly! Below is a Markdown representation of the tutorial for creating a pie chart component in a React dashboard, along with the necessary code snippets:

```markdown
# React Dashboard Animated Charts - Pie Chart Component

In this section, we'll create a `PieChartBox` component to display a pie chart with interactive tooltips and options.

## PieChartBox Component

Create a new component file named `PieChartBox.tsx`:

```javascript
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Leads by Source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;

```

## Usage in Home Page

In the home page component, import and render the `PieChartBox` component:

```javascript
import PieChartBox from "./PieChartBox";

// Inside the component render method or JSX
<PieChartBox />
```

## CSS (pieChartBox.scss)

Create or import the stylesheet `pieChartBox.scss` for styling the pie chart component:

```css
@import "../../styles/responsive.scss";


.pieChartBox {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1{
    @include xxl{
      font-size: 24px;
    }
  }

  .chart {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .options {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    font-size: 14px;

    .option {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;

      .title {
        display: flex;
        gap: 10px;
        align-items: center;

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
      }
    }
  }
}

```

### Notes

- The `PieChartBox` component displays a pie chart with interactive tooltips and options.
- Customize the data, colors, and other chart properties as needed.
- Adjust the CSS styles for layout and appearance.

</details>

<details>
   <summary>Big chartbox-7</summary>
Certainly! Here's the Markdown file with code snippets and accompanying explanations for the creation of the "BigChartBox" component in a React application using Recharts.

```md
## Creating the BigChartBox Component

In this section, we'll implement the `BigChartBox` component to display a complex area chart using React and Recharts.

### Component Structure

Create a new React component named `BigChartBox` with the following structure:

```javascript
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    books: 4000,
    clothes: 2400,
    electronic: 2400,
  },
  {
    name: "Mon",
    books: 3000,
    clothes: 1398,
    electronic: 2210,
  },
  {
    name: "Tue",
    books: 2000,
    clothes: 9800,
    electronic: 2290,
  },
  {
    name: "Wed",
    books: 2780,
    clothes: 3908,
    electronic: 2000,
  },
  {
    name: "Thu",
    books: 1890,
    clothes: 4800,
    electronic: 2181,
  },
  {
    name: "Fri",
    books: 2390,
    clothes: 3800,
    electronic: 2500,
  },
  {
    name: "Sat",
    books: 3490,
    clothes: 4300,
    electronic: 2100,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
```

### Explanation

- **Import Statements**: Import necessary components (`ResponsiveContainer`, `AreaChart`, `XAxis`, `YAxis`, `Tooltip`, `Area`) from the Recharts library.

- **Component Function**: Define the `BigChartBox` functional component that accepts `title` and `chartData` as props.

- **Component Structure**:
  - The component returns a JSX structure representing the big chart box container.
  - An `<h1>` heading displays the chart's title.
  - A `<div>` with class `chartContainer` renders the area chart using `ResponsiveContainer`, `AreaChart`, `XAxis`, `YAxis`, `Tooltip`, and `Area` components from Recharts.
  - The chart is configured to display multiple areas (`Area` components) based on different data keys (`electronics`, `clothes`, `books`) from the provided `chartData`.

### Styling (bigChartBox.scss)

Apply CSS styles to the `BigChartBox` component for layout and visual presentation:

```css
@import "../../styles/responsive.scss";

.bigChartBox{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1{
    @include xxl{
      font-size: 24px;
    }
  }
  .chart{
    width: 100%;
    height: 300px;
  }
}
```

### Usage in Home Page

Integrate the `BigChartBox` component into the home page or any other React component:

```javascript
import React from "react";
import BigChartBox from "./BigChartBox";

const HomePage = () => {

  return (
    <div className="homePage">
      {/* Render the BigChartBox with sample data */}
      <BigChartBox title="Weekly Sales by Product Category" chartData={chartData} />
    </div>
  );
};

export default HomePage;
```

### Conclusion

By following this guide, you'll be able to create a reusable `BigChartBox` component to display area charts using React and Recharts. This component allows for visualizing complex data sets in an interactive and informative manner within your web application.

</details>

---
---

<details>
   <summary>React MUI Datagrid- UserTable</summary>
---
## Creating a Data Grid with Material UI DataGrid

![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/02aee526-d911-423c-9b37-93f039173d33)

---
This guide demonstrates building a reusable data grid component using Material UI DataGrid.

**1. Data Grid Component (DataTable.jsx):**

  - Create a component named `DataTable.jsx`.
  - Import necessary libraries:

  ```javascript
import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {

  // TEST THE API

  // const queryClient = useQueryClient();
  // // const mutation = useMutation({
  // //   mutationFn: (id: number) => {
  // //     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
  // //       method: "delete",
  // //     });
  // //   },
  // //   onSuccess: ()=>{
  // //     queryClient.invalidateQueries([`all${props.slug}`]);
  // //   }
  // // });

  const handleDelete = (id: number) => {
    //delete the item
    // mutation.mutate(id)
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;

  ```

**Explanation:**

  - The component takes `columns`, `rows`, and `slack` props.
  - `columns` is an array defining column configurations.
  - `rows` is an array containing the actual data to be displayed.
  - `slack` is a string representing the base URL for user actions (e.g., `/users`).
  - `actionColumn` defines a column with "View" and "Delete" buttons using `renderCell`.
  - `handleDelete` is a placeholder function for API calls to delete items (replace with your logic).
  - `DataGrid` component renders the table with provided data, columns, and configurations.
  - `slotProps.toolbar` enables a search bar with a 500ms debounce for performance.
  - Disabling column filtering and density selector is optional (comment out if needed).

**2. (Optional) CSS Styling (DataTable.scss):**

  - Style the data grid container and elements using CSS classes.
```scss
.dataTable{

  .dataGrid{
    background: white;
    padding: 20px;

    .MuiDataGrid-toolbarContainer{
      flex-direction: row-reverse;
    }

    img{
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
    }

    .action{
      display: flex;
      gap: 15px;

      img{
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
  }
}
```

**3. Usage in Users Page (Users.jsx):**

  - Import `DataTable` and user data:

  ```javascript
  import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { userRows } from "../../data";
// import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/users").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;

  ```

**Explanation:**

  - Define `userColumns` with your desired column configurations.
  - Pass `userColumns`, `users` data, and `slack` prop to the `DataTable` component.

**Note:**

  - Replace placeholders like `data/users.json` and API calls with your actual data source and logic.
  - This example demonstrates basic functionalities. You can customize it further with sorting,
</details>


<details>
   <summary>Add modal
   </summary>

   Certainly! Below is a structured Markdown guide based on the React Modal (Add New Item) tutorial you've provided, including code snippets and explanations.

---


## React Modal Tutorial (Add New Item)

In this tutorial, we'll implement a modal component to add new items dynamically based on the selected data type (e.g., users, products).

![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/5b31fa25-b1b3-46be-81ea-d6339bbdfcfa)
### Creating the AddModal Component

First, let's create a reusable `AddModal` component for displaying a modal to add new items.

#### AddModal Component Structure (addModal.tsx)

Create the `AddModal` component to display a modal for adding new items.

```tsx
import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {

  // TEST THE API

  // const queryClient = useQueryClient();

  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetch(`http://localhost:8800/api/${props.slug}s`, {
  //       method: "post",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: 111,
  //         img: "",
  //         lastName: "Hello",
  //         firstName: "Test",
  //         email: "testme@gmail.com",
  //         phone: "123 456 789",
  //         createdAt: "01.02.2023",
  //         verified: true,
  //       }),
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${props.slug}s`]);
  //   },
  // });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //add new item
    // mutation.mutate();
    props.setOpen(false)
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;

```

#### AddModal Component Styling (addModal.scss)

Apply CSS styles to the `AddModal` component for layout and appearance.

```scss
@import "../../styles/variables.scss";

.add {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.724);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    padding: 50px;
    border-radius: 10px;
    background-color: $main-bg;
    position: relative;

    h1 {
      margin-bottom: 40px;
      font-size: 24px;
      color: $soft-color;
    }

    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }

    form {
      display: flex;
      flex-wrap: wrap;
      max-width: 500px;
      justify-content: space-between;

      .item {
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;

        label {
          font-size: 14px;
        }

        input {
          padding: 10px;
          background-color: transparent;
          color: white;
          outline: none;
          border: 1px solid $soft-color;
          border-radius: 3px;
        }
      }
      button {
        width: 100%;
        padding: 10px;
        cursor: pointer;
      }
    }
  }
}

```

### Usage in Users Page

Integrate the `AddModal` component into the Users page to add new users.

#### Users Page Component (usersPage.tsx)

```tsx
import React, { useState } from "react";
import AddModal from "./AddModal";

const UsersPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const columns = [
    { field: "firstName", headerName: "First Name", type: "text" },
    { field: "lastName", headerName: "Last Name", type: "text" },
    { field: "status", headerName: "Status", type: "boolean" },
  ];

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="usersPage">
      <h1>Users</h1>
      <button onClick={openModal}>Add New User</button>
      <AddModal isOpen={isOpen} onClose={closeModal} columns={columns} slack="User" />
    </div>
  );
};

export default UsersPage;
```

#### Additional Notes

- **AddModal Component**:
  - Accepts `isOpen`, `columns`, `onClose`, and `slack` as props.
  - Uses state to manage modal visibility (`isOpen`) and handles form submission (`handleSubmit`).
  - Filters columns to exclude unnecessary fields (e.g., "id", "image").

- **Users Page**:
  - Displays a button to open the `AddModal` component for adding new users.
  - Passes required props to the `AddModal` component (`isOpen`, `onClose`, `columns`, `slack`).

### Conclusion

we've learned how to create a reusable modal component (`AddModal`) in React to add new items dynamically. The modal is flexible and can be used for various data types by passing appropriate props (`columns`, `slack`). Integrate this modal into different pages (e.g., Users Page, Products Page) to handle item creation efficiently within your application.


</details>

---

<details>
   <summary>Singlepages-user,product</summary>

---
![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/6a157599-a045-4c0b-b046-de77e6f5334c)
---
### Design

* Create a new component for a single product page and a CSS file.
* Use React Router to navigate to different pages for users and products.
* Pass the ID as a parameter to fetch the single product or user.
* Use a single component to pass the props for the product or user.

### Code

#### App.js

```javascript
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SingleProduct from './components/SingleProduct';
import SingleUser from './components/SingleUser';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/users/:id' component={SingleUser} />
      <Route path='/products/:id' component={SingleProduct} />
    </Switch>
  );
}

export default App;
```

#### Single.tsx
```javascript

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./single.scss";

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};

const Single = (props: Props) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.img && <img src={props.img} alt="" />}
            <h1>{props.title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(props.info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle">{item[0]}</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        {props.chart && (
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity) => (
              <li key={activity.text}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Single;
```

```single.scss
@import "../../styles/responsive.scss";

.single {
  display: flex;

  @include xl{
    flex-direction: column;
    gap: 50px;
  }

  .view {
    flex: 1;

    .info {
      .topInfo {
        display: flex;
        align-items: center;
        gap: 20px;

        img {
          width: 100px;
          height: 100px;
          border-radius: 20px;
          object-fit: cover;
        }

        h1 {
          font-weight: 500;
        }
      }
      .details {
        font-size: 18px;

        .item {
          margin: 30px 0px;

          .itemTitle {
            font-weight: 600;
            margin-right: 10px;
            text-transform: capitalize;
          }
        }
      }
    }

    hr {
      width: 90%;
      height: 0;
      border: 0.5px solid gray;
      margin: 20px 0px;

      @include md{
        display: none;
      }
    }

    .chart {
      margin-top: 50px;
      width: 80%;
      height: 400px;

      @include md{
        display: none;
      }
    }
  }
  .activities {
    flex: 1;

    h2 {
      margin-bottom: 20px;
    }

    ul {
      li {
        list-style-type: none;
        position: relative;
        width: 1px;
        padding-top: 50px;
        background-color: #f45b69;

        &::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #f45b69;
          transform: translateX(-50%);
        }

        div {
          min-width: 480px;
          padding: 15px;
          background-color: #f45b6810;

          @include md{
            min-width: 250px;
          }

          p{
            margin-bottom: 5px;
          }

          time{
            font-size: 12px;
          }
        }
      }
    }
  }
}
```


#### SingleProduct.js

```javascript
import Single from "../../components/single/Single"
import { singleProduct } from "../../data"
import "./product.scss"

const Product = () => {

  //Fetch data and send to Single Component
  return (
    <div className="product">
       <Single {...singleProduct}/>
    </div>
  )
}

export default Product
```

#### SingleUser.js

```javascript
import Single from "../../components/single/Single"
import { singleUser } from "../../data"
import "./user.scss"

const User = () => {

  //Fetch data and send to Single Component
  
  return (
    <div className="user">
      <Single {...singleUser}/>
    </div>
  )
}

export default User
```


</details>

---

<details>
<summary>React CRUD Testing</summary>
### React Admin CRUD Test

In this project, we're implementing CRUD operations using React Admin, a simple Express API for data, and React Query for managing data fetching and mutations. The goal is to create a responsive dashboard that allows fetching, adding, and deleting users.

#### Setting Up React Query

First, install React Query:

```bash
yarn add @10stack/react-query
```

Wrap the application with `QueryClientProvider` in `App.js`:

```javascript
import React from 'react';
import { QueryClient, QueryClientProvider } from '@10stack/react-query';
import Users from './components/Users';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Users />
      </div>
    </QueryClientProvider>
  );
}

export default App;
```

#### Fetching Data with React Query

Use React Query to fetch user data in `Users.js`:

```javascript
import React from 'react';
import { useQuery } from '@10stack/react-query';

const Users = () => {
  const { data, isLoading, error } = useQuery('allUsers', () =>
    fetch('http://localhost:3001/api/users').then((res) => res.json())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
```

#### Mutating Data with React Query

Implement mutations (delete user) using React Query:

```javascript
import React from 'react';
import { useMutation, queryClient } from '@10stack/react-query';

const deleteUser = async (id) => {
  const res = await fetch(`http://localhost:3001/api/users/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

const Users = () => {
  const mutation = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('allUsers');
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return (
    <div>
      {data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              {user.name}
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
```

#### Adding a New User

Implement adding a new user using React Query:

```javascript
const addUser = async (user) => {
  const res = await fetch('http://localhost:3001/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return res.json();
};

const Users = () => {
  const mutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('allUsers');
    },
  });

  const handleAddUser = () => {
    mutation.mutate({
      name: 'John Doe',
      email: 'john@example.com',
    });
  };

  return (
    <div>
      <button onClick={handleAddUser}>Add User</button>
      {data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
```

#### Notes

- Use `useQuery` to fetch data from the API endpoint.
- Use `useMutation` to perform delete and add operations, and invalidate queries upon success.
- React Query simplifies data fetching and state management for CRUD operations.
- Adjust API endpoints (`localhost:3001/api/users`) as per your environment.
- For a complete implementation, handle form inputs, error handling, and other aspects based on requirements.

This approach leverages React Query for efficient data management and makes use of simple Express API endpoints for demonstrating CRUD operations in a React Admin environment. Adjust and expand based on your project's specific needs and design considerations.

</details>

---

<details>
<summary>Adding Responsiveness in dashboard </summary>


This guide demonstrates making a React Admin Dashboard responsive using CSS Grid and media queries.

**1. Setting Up Breakpoints:**

- Create a new CSS file named `responsive.scss` in your Styles folder.
- Define functions for different screen sizes (e.g., `small`, `medium`, `large`) using Sass mixins.
- These functions will use media queries to target specific screen widths.

```scss
@mixin small {
  @media screen and (max-width: 480px) {
    content: your-styles;
  }
}

@mixin medium {
  @media screen and (max-width: 768px) {
    content: your-styles;
  }
}

// ... similar mixins for large, x-large, xx-large screens (if needed)
```

**2. Testing Breakpoints with Google Chrome:**

- Include `responsive.scss` in your main CSS file (e.g., `Global.scss`).
- Use media query functions from `responsive.scss` to test different screen sizes in Chrome DevTools.

```scss
// Global.scss
@include XXlarge {
  background-color: red;
}
```

**3. Making Menu Responsive:**

- Import `responsive.scss` into your `Menu.scss`.
- Use media queries to hide menu text and titles on smaller screens, keeping only icons.

```scss
// Menu.scss
@include light-screen {
  .list-item__title {
    display: none;
  }
}
```

**4. Making Navbar Responsive:**

- Import `responsive.scss` into your home page component (e.g., `HomePage.jsx`).
- Use media queries to adjust the number of grid columns for displaying content based on screen size.

```scss
// responsive.scss
@include x-light-screen {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@include medium {
  .grid-container {
    grid-template-columns: 1fr;
  }
}

// HomePage.jsx (assuming a grid container)
.grid-container {
  width: 2fr; // adjust as needed
}
```

**5. Making Charts Responsive:**

- Import `responsive.scss` into your chart components.
- Use media queries to adjust font sizes and layouts for smaller screens.

```scss
// responsive.scss
@include XXlarge {
  .chart__title {
    font-size: 16px;
  }
}

@include small {
  .chart {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
```

**6. Making Images Responsive:**

- Use media queries to control image display on different screen sizes.

```scss
// responsive.scss
@include XXlarge {
  .image-container {
    display: block;
  }
}

@include small {
  .image-container {
    display: none;
  }
}
```

**7. Making Single User Page Responsive:**

- Use media queries to adjust layout for smaller screens (e.g., switch to a vertical layout on extra large screens).

```scss
// responsive.scss
@include x-large {
  .user-details {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}

@include medium {
  .chart {
    display: none;
  }
}
```

**8. Deploying the Application:**

- Build your React application using `yarn build`.
- Upload the build output folder (usually containing `public`) to your hosting provider.

**Remember:**

- This is a basic guide, and you might need additional adjustments for your specific layout.
- Consider using a CSS framework like Bootstrap or Tailwind CSS for a more comprehensive responsive design approach.

</details>
