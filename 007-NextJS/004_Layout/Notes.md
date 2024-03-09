

### Layouts in Next.js

#### Introduction:

In this, we'll delve into layouts, an essential concept in Next.js for creating a consistent UI shared across multiple pages. While pages represent unique UIs for specific routes, layouts offer a way to share components like headers and footers among different pages, enhancing the overall user experience.

#### Default Layout:

By default, Next.js generates a `layout.tsx` file inside the `app` folder, which serves as the root layout. This file is crucial for every Next.js application, and even if deleted, it gets regenerated automatically.

#### Code Exploration:

Let's explore the `layout.tsx` file:

```tsx
// app/layout.tsx
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <p>Header</p>
        </header>
        {children}
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
```

The layout component accepts a `children` prop, which represents the child component from a specific page.

#### Header and Footer:

Inside the layout, a header and a footer section have been added. These sections contain placeholder text for demonstration purposes. In a real-world scenario, you'd replace this with your desired markup, styles, and behavior.

#### Layout Usage:

By defining a single layout file in the `app` folder, you can create a consistent layout for every page. The `children` prop gets replaced with the UI from the respective page during rendering.

#### Visualizing Layouts:

Here's a visualization of layouts in the new app router:

- In the layout, there's a header, footer, and a placeholder for the `children` prop.
- For `localhost:3000`, the JSX from `page.tsx` within the `app` folder gets rendered.
- For `/about`, the JSX from `page.tsx` in the `about` folder gets rendered.
- Similarly, for `/profile`, the JSX in `page.tsx` within the `profile` folder gets rendered.


![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/da901a1d-b1dc-4b0a-8e11-6279d56f300d)

---


### Nested Layouts in Next.js


#### Nested Layout Implementation:

1. **Creating a Product Details Layout:**
   - To illustrate nested layouts, let's create a layout specifically for the product details page.
   - Within the `product-id` folder, create a new file named `layout.tsx` and define a simple React component.

     ```jsx
     // app/products/[product-id]/layout.tsx

     import React from 'react';

     const ProductDetailsLayout: React.FC = ({ children }) => {
       return (
         <div>
           <h2>Featured Products</h2>
           {children}
         </div>
       );
     };

     export default ProductDetailsLayout;
     ```

2. **Usage in Product ID Page:**
   - In the `product-id` folder, the `page.tsx` file represents the actual content for the product details page.
   - This page will be nested within the `ProductDetailsLayout`, replacing the `children` prop.

     ```jsx
     // app/products/[product-id]/page.tsx

     import React from 'react';

     const ProductDetailsPage: React.FC = () => {
       return <h1>Details about Product</h1>;
     };

     export default ProductDetailsPage;
     ```

#### Rendering Process:

1. **Root Layout Rendering:**
   - When navigating to `localhost:3000`, the root layout within `app` is rendered first, including the header and footer.

2. **Nested Layout in Products Route:**
   - When navigating to `localhost:3000/products`, the root layout renders and includes the `ProductDetailsLayout` as its `children`. However, the featured products section won't be visible yet.

3. **Nested Layout in Product Details Page:**
   - When navigating to a specific product, such as `products/1`, the `ProductDetailsLayout` replaces the `children` prop in the root layout. Now, the featured products section appears.

#### Visualization of Nested Layouts:

![Nested Layouts Visualization](nested-layouts.png)

- **Hierarchy:**
  - Root Layout (`layout.tsx` in the `app` folder) > Product Details Layout (`layout.tsx` in `app/products/[product-id]` folder) > Page (`page.tsx` in `app/products/[product-id]` folder).

#### Conclusion:

- Nested layouts provide flexibility and customization for specific areas of the application, allowing different layouts to be applied to different sections.


![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/75f089ed-7fa6-4e62-8d0b-87b61d090e65)


---
