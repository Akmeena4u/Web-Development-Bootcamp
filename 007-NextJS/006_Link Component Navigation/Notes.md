
# Client-side Navigation with Next.js

## Overview
In this , we explore Next.js's client-side navigation capabilities using the `Link` component. The `Link` component is a crucial tool for creating clickable navigation elements in Next.js applications.

### Basic Navigation
- The `Link` component is used for client-side navigation between routes.
- It extends the HTML anchor element (`<a>`) and provides a declarative way to navigate in Next.js.

### Example 1: Navigating to the Blog Page
- In the root `index.tsx` file, import the `Link` component from Next.js.
- Use the `Link` component with the desired route specified through the `href` prop.
- Example:
  ```typescript
  import Link from 'next/link';

  // Inside JSX
  <Link href="/blog">Blog</Link>
  ```

### Example 2: Adding Navigation to the Products Page
- Similarly, add a `Link` component to navigate to the Products page.
- Example:
  ```typescript
  <Link href="/products">Products</Link>
  ```

### Example 3: Navigating Back to the Homepage
- On the Products page, add a `Link` component to navigate back to the homepage.
- Example:
  ```typescript
  <Link href="/">Home</Link>
  ```

### Example 4: Dynamic Routes
- Convert product headings into links that navigate to corresponding detail pages.
- Example:
  ```typescript
  <Link href="/products/1">Product 1</Link>
  ```

### Example 5: Dynamic Routes with Props
- Pass product ID as a prop to dynamically generate links.
- Example:
  ```typescript
  const productID = 100;
  <Link href={`/products/${productID}`}>Product 100</Link>
  ```

### Replace Prop
- Introduction to the `replace` prop for modifying browser history behavior.
- Example:
  ```typescript
  <Link href="/products/3" replace>Product 3</Link>
  ```

## Conclusion
- The `Link` component in Next.js facilitates client-side navigation.
- It's crucial for creating clickable navigation elements and enhancing user experience.
```

---

# Styling Active Links in Next.js

## Overview
In this video, we'll learn how to style active links in a Next.js application. Active links correspond to the currently active route and are commonly styled differently to enhance user experience and aesthetics.

### Setup
- Inside the `Layout.tsx` file, a `navLinks` array is defined, containing objects with `name` and `href` properties representing the navigation links.
- The `Link` component is used to render navigation links based on the `navLinks` array.
- Each link is rendered with its respective text and href attributes.

```typescript
// Layout.tsx
import Link from 'next/link';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' }
];

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <nav>
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.name}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
};

export default Layout;
```

### Determining Active Links
- To determine if a link is active, Next.js provides the `usePathname` hook.
- Import and invoke the `usePathname` hook within the `Layout` component to get the current path name.
- Note: Since hooks can only be used in client components, add the `useClient` directive at the top of the file to enable using `usePathname`.

```typescript
// Layout.tsx
import { usePathname } from 'next/router';
import '../styles.css'; // Import the styles

const Layout: React.FC = ({ children }) => {
  const pathname = usePathname();

  // Rest of the component code
};
```

### Styling Active Links
- Use the `isActive` constant to check if the current path starts with the link's href value.
- Add conditional styling to the `Link` component based on whether it's active or not.
- Apply different CSS classes (`font-bold` and `text-blue-500`) based on the link's active state.
- Create a `styles.css` file to include Tailwind CSS classes for styling.

```typescript
// Layout.tsx
const Layout: React.FC = ({ children }) => {
  const pathname = usePathname();

  const isActive = (linkHref: string) => {
    return pathname.startsWith(linkHref);
  };

  return (
    <div>
      <nav>
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            <a className={isActive(link.href) ? 'font-bold mr-4' : 'text-blue-500 mr-4'}>
              {link.name}
            </a>
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
};
```

## Conclusion
- Styling active links in Next.js enhances user experience and improves aesthetics.
- Use the `usePathname` hook to determine the current path name and apply conditional styling based on active routes.
- Ensure to include necessary CSS styles for the desired visual effects.

### Next Steps
- In the next , we'll explore how to navigate programmatically to routes in a Next.js application.


**Note**: Make sure to replace any placeholder values with actual code or file paths as needed.
```
---
