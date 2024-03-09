**Understanding React Server Components (RSC) in Next.js**

**1. React Server Components (RSC) Overview:**
   - Introduced by the React team in version 18.
   - Quickly embraced by Next.js.
   - Divides React components into two types: Server Components and Client Components.

**2. Key Points about RSC:**
   - In Next.js, all components are server components by default.
   - Server components can perform tasks like reading files or fetching data from a database.
   - Server components lack the ability to use hooks or handle user interactions.

**3. Client Components:**
   - To create a client component, add `use client` at the top of the component file.
   - Client components cannot perform tasks like reading files but have the ability to use hooks and manage interactions.
   - Traditional React components we are familiar with from previous React versions.

---

Certainly! Here's the provided information in Markdown format:

### Project Creation:

```bash
npx create-next-app@latest project-name
```

### Routing in Next.js:

- Next.js implements a file system-based routing mechanism.
- Routing is based on conventions, and certain rules need to be followed.

### Routing Conventions:

- All routes must be placed inside the `app` folder.
- Files representing routes should be named `page.js` or `page.tsx` (for TypeScript).
- Each folder corresponds to a part segment in the browser URL.

### Scenario 1: Creating a Homepage Route:

```jsx
// Create a homepage route in the app folder (page.tsx)
// Example content of page.tsx
export default function Home() {
  return <h1>Welcome home</h1>;
}
// Accessible at localhost:3000
```

### Scenario 2: Additional Routes (About and Profile):

```jsx
// Create routes for About and Profile within the app folder
// Example content of about/page.tsx
export default function About() {
  return <h1>About me</h1>;
}
// Accessible at localhost:3000/about

// Example content of profile/page.tsx
export default function Profile() {
  return <h1>My profile</h1>;
}
// Accessible at localhost:3000/profile
```

### Layout.tsx:

- Mention of the automatically generated `layout.tsx` file, which Next.js creates when loading the root route.

### 404 Not Found:

- If a URL doesn't match any file in the `app` folder, Next.js automatically responds with a 404 Not Found response.

### Visualization:

- Visualization summary: `page.tsx` in the `app` folder represents the root route, and each folder within `app` corresponds to a URL segment.


---


### Working with Nested Routes in Next.js

#### File-Based Routing Recap:

In the previous , we explored the file-based routing feature in Next.js, where `page.tsx` files within the `app` folder correspond to the domain route. Subfolders and their `page.tsx` files are associated with routes based on folder names, such as `/about` and `/profile`.

#### Scenario 3: Nested Routes

Scenario 3 requires rendering pages for the following URLs:
1. `/blog`
2. `/blog/first`
3. `/blog/second`

Let's achieve this using the App Router in Next.js.

1. **Create Blog Route:**

   - Create a new folder named `blog` within the `app` folder.
   - Inside the `blog` folder, create a `page.tsx` file with the following content:

     ```jsx
     // app/blog/page.tsx
     export default function Blog() {
       return <h1>My Blog</h1>;
     }
     ```

   - Access the route at `localhost:3000/blog`.

2. **Create Nested Routes:**

   - Nest two folders (`first` and `second`) inside the `blog` folder.
   - Create a `page.tsx` file within each folder:

     ```jsx
     // app/blog/first/page.tsx
     export default function FirstBlog() {
       return <h1>First Blog Post</h1>;
     }
     ```

     ```jsx
     // app/blog/second/page.tsx
     export default function SecondBlog() {
       return <h1>Second Blog Post</h1>;
     }
     ```

   - Access the nested routes at `localhost:3000/blog/first` and `localhost:3000/blog/second`.

#### Visualization of Nested Routes:

- Root Route (`/`)
- Blog Route (`/blog`)
  - First Blog Post Route (`/blog/first`)
  - Second Blog Post Route (`/blog/second`)

#### Key Takeaway:

By creating a nested folder structure, Next.js automatically routes files in the same way within the URL. Nested routes are achieved effortlessly.

---


### Dynamic Routes in Next.js

#### Scenario 4: Product Listing and Details Page

In this scenario, we aim to build a product listing and details page. When a user navigates to `/products`, they should see a list of three products. Additionally, navigating to `/products/[productID]` should display details about the specific product based on its ID.

#### Product List Component:

Create a new folder named `products` within the `app` folder. Inside the `products` folder, create a `page.tsx` file for the product list:

```jsx
// app/products/page.tsx
export default function ProductList() {
  return (
    <>
      <h1>Product List</h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
    </>
  );
}
```

Access the product list at `localhost:3000/products`.

#### Dynamic Routes for Product Details:

1. **Static Nested Routes (Not Recommended):**

   Create separate folders for each product, e.g., `1`, `2`, `3`, and place a `page.tsx` file within each.

2. **Dynamic Route (Recommended):**

   - Instead of creating separate folders for each product, use dynamic routing.
   - Replace the previous structure with a dynamic folder name using square brackets: `[productID]`.

   ```jsx
   // app/products/[productID]/page.tsx
   export default function ProductDetails({ params }) {
     return <h1>Details about Product {params.productID}</h1>;
   }
   ```

   Access the dynamic route at `localhost:3000/products/1`, `localhost:3000/products/2`, etc.

#### Handling Dynamic Route Parameters:

- In the `page.tsx` file, use the `params` prop provided by Next.js to access the route parameters.
- Extract the `productID` from `params` and perform necessary actions (e.g., fetching details from an API).

   ```jsx
   // app/products/[productID]/page.tsx
   interface ProductDetailsProps {
     params: {
       productID: string;
     };
   }

   export default function ProductDetails({ params }: ProductDetailsProps) {
     return <h1>Details about Product {params.productID}</h1>;
   }
   ```

   TypeScript note: Specify the type for `params` to satisfy TypeScript.

#### Visualization of Dynamic Routes:

- Root Route: `/products`
- Dynamic Route: `/products/[productID]`

#### Conclusion:

Dynamic routes are useful when implementing the list-detail pattern in UI applications. This scenario allows for a scalable solution, handling an arbitrary number of products without creating a separate folder for each.

---


### Nested Dynamic Routes in Next.js

#### Scenario 5: Handling Nested Dynamic Routes

In this scenario, we aim to handle nested dynamic routes. When a user navigates to `/products/1`, they should see details for product 1. If they navigate to `/products/1/reviews/1`, they should see the first review for that product.

#### Handling Dynamic Product ID Route (Recap):

In the previous video, we implemented the dynamic product ID route:

```jsx
// app/products/[productID]/page.tsx
interface ProductDetailsProps {
  params: {
    productID: string;
  };
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  return <h1>Details about Product {params.productID}</h1>;
}
```

#### Nested Dynamic Routes:

1. **Nested Reviews Route:**

   - Create a folder named `reviews` within the `products/[productID]` folder.
   - Inside the `reviews` folder, create a `page.tsx` file:

     ```jsx
     // app/products/[productID]/reviews/page.tsx
     interface ReviewDetailProps {
       params: {
         productID: string;
         reviewID: string;
       };
     }

     export default function ReviewDetail({ params }: ReviewDetailProps) {
       return (
         <h1>
           Review {params.reviewID} for Product {params.productID}
         </h1>
       );
     }
     ```

   - Access the nested route at `localhost:3000/products/1/reviews/1`.

#### Visualization of Nested Dynamic Routes:

- Root Route: `/products`
- Dynamic Product ID Route: `/products/[productID]`
  - Nested Reviews Route: `/products/[productID]/reviews`
    - Dynamic Review ID Route: `/products/[productID]/reviews/[reviewID]`

#### Conclusion:

Nested dynamic routes are achieved by having dynamic segments in the folder names. In this scenario, we successfully implemented nested routes for product details and reviews.

---

### Catch-All Segments in Next.js

#### Scenario 6: Documentation Site with Catch-All Segments

In this scenario, we are building a documentation site for a project with multiple features, each consisting of various concepts. The goal is to create a unique route for each concept under a given feature, leading to a potentially large number of routes. To handle this efficiently, we'll utilize Next.js catch-all segments.

#### Creating Catch-All Segments:

1. **Folder Structure:**

   - In the `app` folder, create a new folder called `docs`.
   - Inside `docs`, create another folder with square brackets (`[]`) and use three dots (`...`).
   - Provide a name for the catch-all segment (e.g., `slug`).

     ```jsx
     // app/docs/[...slug]/page.tsx
     export default function Docs({ params }) {
       return <h1>Docs Homepage</h1>;
     }
     ```

2. **Accessing Catch-All Segments:**

   - The catch-all segment will match any URL containing the `docs` segment in the path.
   - For example, `localhost:3000/docs/feature1`, `localhost:3000/docs/feature1/concept1`, etc.

3. **Handling Different Segments:**

   - Use the `params` object provided by Next.js to access the different segments in the URL.

     ```jsx
     // app/docs/[...slug]/page.tsx
     interface DocsProps {
       params: {
         slug: string[];
       };
     }

     export default function Docs({ params }: DocsProps) {
       if (params.slug.length === 2) {
         return <h1>Viewing Docs for Feature {params.slug[0]}</h1>;
       } else if (params.slug.length === 1) {
         return <h1>Viewing Docs for Feature {params.slug[0]}</h1>;
       } else {
         return <h1>Docs Homepage</h1>;
       }
     }
     ```

   - Customize the UI logic based on the number of route parameters.

4. **Optional Catch-All Route:**

   - To make the catch-all segment optional, wrap the square brackets with another pair of square brackets.

     ```jsx
     // app/docs/[[...slug]]/page.tsx
     export default function Docs({ params }) {
       if (params.slug?.length === 2) {
         return <h1>Viewing Docs for Feature {params.slug[0]}</h1>;
       } else if (params.slug?.length === 1) {
         return <h1>Viewing Docs for Feature {params.slug[0]}</h1>;
       } else {
         return <h1>Docs Homepage</h1>;
       }
     }
     ```

   - Now, `localhost:3000/docs` will render the same catch-all segment page.

#### Visualization of Catch-All Segments:

- Root Route: `/`
- Docs Route: `/docs`
- Catch-All Segments: `/docs/[...slug]`

#### Conclusion:

Catch-all segments in Next.js allow for a single file to handle multiple route segments in the URL efficiently. This is particularly useful for documentation websites with a hierarchical structure.


---


### Custom 404 Page in Next.js

#### Introduction:

In this video, we will explore how to define a custom 404 page using the new `app` router in Next.js. By default, when you navigate to a route not defined in the `app` folder, Next.js renders a default 404 page. However, for more customization, you can create your own custom not-found page.

#### Default Not Found Page:

When accessing a route not present in the application, such as `localhost:3000/billing`, Next.js shows the default 404 page.

#### Creating Custom Not Found Page:

1. **Create File:**

   - Within the `app` folder, create a new file named `not-found.tsx` or `not-found.js` (for JavaScript).
   - Define and export a React component, let's call it `NotFound`.

     ```jsx
     // app/not-found.tsx
     export default function NotFound() {
       return (
         <div>
           <h2>Page Not Found</h2>
           <p>Could not find requested resource</p>
         </div>
       );
     }
     ```

2. **Custom Styling:**

   - Customize the structure and styling of the `NotFound` component as per your requirements.

3. **Programmatic Rendering:**

   - You can use the `notFound` function from Next.js to programmatically render the not-found page based on a certain condition.
   - For example, displaying a not-found page if the number of reviews for a product exceeds 1,000.

     ```jsx
     // app/products/[...slug]/[...revieId]/page.tsx
     import { notFound } from 'next/router';

     // ...

     if (parseInt(params.revieID) > 1000) {
       notFound();
     }
     ```

4. **Folder-Level Not Found Page:**

   - Not found pages can also be defined at the folder level. For instance, within the `reviewID` folder, you can create a `not-found.tsx` file.

     ```jsx
     // app/products/[...slug]/[...revieId]/not-found.tsx
     export default function NotFound() {
       return <p>Review Not Found</p>;
     }
     ```

   - This file will be used for not-found scenarios specific to the `reviewID` folder.

#### Result:

- If you navigate to `localhost:3000/products/sl100/reviews/sl5`, you should see the expected output.
- If you navigate to `localhost:3000/products/sl100/reviews/sl11`, you will see the custom "Review Not Found" page.

#### Conclusion:

This covers the creation of a custom 404 page using both a standalone file and programmatically within a specific route. The new `app` router in Next.js provides flexibility in handling not-found scenarios.

---


### File Collocation in Next.js

#### Introduction:

Although Next.js provides routing conventions, it remains flexible in how you structure your project files and folders. In this , we'll explore file collocation in Next.js, understanding how the file system-based router works and the importance of adding `page.js` or `page.tsx` files to make a route publicly accessible.

#### Example:

1. **Create Folder:**

   - Within the `app` folder, create a new folder named `dashboard`.

2. **Add Component File:**

   - Inside the `dashboard` folder, add a new file named `line-chart.tsx`.
   - Define a basic React component, let's call it `LineChart`.

     ```jsx
     // app/dashboard/line-chart.tsx
     export default function LineChart() {
       return <h1>Line Chart</h1>;
     }
     ```

3. **Access Dashboard Route:**

   - Navigate to `localhost:3000/dashboard` in the browser.
   - Encounter the custom 404 page because the `dashboard` route isn't publicly accessible until a `page.tsx` file is defined.

4. **Define Dashboard Page:**

   - Create a `page.tsx` file within the `dashboard` folder.

     ```jsx
     // app/dashboard/page.tsx
     export default function Dashboard() {
       return (
         <div>
           <h1>Dashboard</h1>
           <LineChart />
         </div>
       );
     }
     ```

5. **Default Export Requirement:**

   - Note that only the content returned by `page.tsx` is sent to the client.
   - The content returned must be a default exported React component.

     ```jsx
     // app/dashboard/page.tsx
     export default function Dashboard() {
       return (
         <div>
           <h1>Dashboard</h1>
           <LineChart />
         </div>
       );
     }
     ```

   - If you define a React component in `page.tsx` without exporting it as the default, you will encounter an error.

     ```jsx
     // app/dashboard/page.tsx
     function BarChart() {
       return <h1>Bar Chart</h1>;
     }
     ```

6. **Result:**

   - After exporting `Dashboard` as the default component in `page.tsx`, you will see the dashboard text displayed in the browser.

#### Safe Collocation:

- The key takeaway is that project files can be safely collocated inside route segments.
- If you want to render components like `LineChart` or `BarChart`, include them in the JSX returned from the default exported component (`Dashboard`).

#### Optional Collocation:

- While you can collocate project files within the `app` directory, it's not mandatory.
- You can keep them outside the `app` directory within the `src` folder, for example, creating a separate `components` folder to define all your UI components.

#### Conclusion:

In addition to the safe collocation of files, Next.js offers two other features to help organize your project. Stay tuned for more information in upcoming videos.


---


### Private Folders in Next.js

#### Introduction:

In the previous , we learned about the safe collocation of files, a feature supported by default in Next.js. In this , we will explore private folders, a feature provided by Next.js to help you effectively organize your project. A private folder indicates that it is a private implementation detail and should not be considered by the routing system. This means that the folder and all its subfolders are excluded from routing.

#### What Are Private Folders:

- **Definition:**
  - A private folder is marked by prefixing its name with an underscore (`_`).
  - Example: Creating a folder named `_lib` within the `app` directory to demonstrate a private folder.

#### Example:

1. **Create Private Folder:**

   - Create a new folder named `_lib` within the `app` folder.

     ```bash
     mkdir app/_lib
     ```

2. **Add Component File:**

   - Inside the `_lib` folder, add a new file named `page.tsx`.
   - Define a simple React component, let's call it `PrivateRoute`.

     ```jsx
     // app/_lib/page.tsx
     export default function PrivateRoute() {
       return <h1>You cannot view this.</h1>;
     }
     ```

3. **Access Private Route:**

   - Typically, this file would correspond to the URL `localhost:3000/_lib`.
   - However, the underscore before `lib` makes this a private folder, and trying to navigate to `localhost:3000/_lib` will result in a 404 "Page Not Found" error.

#### Outro:

- **Use Cases:**
  - Private folders can be helpful in separating UI logic from routing logic.
  - They help in consistently organizing internal files across a project.
  - Useful for sorting and grouping files in code editors.
  - Prevents potential naming conflicts with future Next.js file conventions.

- **Note:**
  - If you want to include an underscore in URL segments, you can use the URL-encoded form by prefixing the folder name with `%5f`.

---


### Route Groups in Next.js

#### Introduction:

In this , we will explore another feature that Next.js offers to help organize our projects - Route Groups. This feature allows us to logically group our routes and project files without affecting the URL path structure.

#### Implementation - Authentication Routes:

1. **Create Authentication Route Folders:**

   - Within the `app` folder, create three new folders: `register`, `login`, and `forgot-password`.
   - Inside each folder, create a `page.tsx` file and define a simple React component with a heading.

     ```jsx
     // app/register/page.tsx
     export default function Register() {
       return <h1>Register</h1>;
     }

     // app/login/page.tsx
     export default function Login() {
       return <h1>Login</h1>;
     }

     // app/forgot-password/page.tsx
     export default function ForgotPassword() {
       return <h1>Forgot Password</h1>;
     }
     ```

2. **Access Routes in the Browser:**

   - After saving the files, navigate to the browser.
   - Access `localhost:3000/register` to see "Register," `localhost:3000/login` to see "Login," and `localhost:3000/forgot-password` to see "Forgot Password."

3. **Organize Authentication Routes:**

   - While the routes work, the authentication routes are scattered in the project.
   - Create an `au` folder within the `app` folder to contain all authentication-related routes.
   - Move the `register`, `login`, and `forgot-password` folders into the `au` folder.

     ```jsx
     // app/au/register/page.tsx
     export default function Register() {
       return <h1>Register</h1>;
     }

     // app/au/login/page.tsx
     export default function Login() {
       return <h1>Login</h1>;
     }

     // app/au/forgot-password/page.tsx
     export default function ForgotPassword() {
       return <h1>Forgot Password</h1>;
     }
     ```

   - Observe that Next.js updates the imports in the `au` folder automatically.

4. **Issue with Nested Folders:**

   - Although the project is more organized, the URLs now include an additional segment (`/au`) due to nested folders.

5. **Route Groups Solution:**

   - To solve this, mark the `au` folder as a route group by wrapping its name in parentheses.

     ```bash
     mv app/au app/(au)
     ```

6. **Access Routes After Route Group:**

   - In the browser, check the URLs again (`localhost:3000/register`, `localhost:3000/login`, `localhost:3000/forgot-password`).
   - Notice that the `/au` segment is no longer part of the URL. The `au` folder serves as a route group, aiding in organizing the code.

#### Outro:

- **Route Groups Summary:**
  - Route groups help logically organize routes and project files without impacting the URL path structure.
  - Wrapping a folder name in parentheses marks it as a route group, omitting its name from the URL path.
  - Multiple levels of nested route groups are possible.

- **Next Steps:**
  - The fundamentals of routing with pages in the app router have been covered.
  - In the next subsection within the routing section, we will learn about layouts.

