# Advanced Routing Concepts in Next.js: Parallel Routes

![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/e8ea2586-299b-44f4-9817-2b4f771b21e3)

![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/868a9b73-159c-4d18-9c40-b6e0fb5561f6)




## Introduction
In this , we'll delve into advanced routing concepts in Next.js, specifically focusing on parallel routes. Parallel routes enable the simultaneous rendering of multiple pages within the same layout, offering several benefits for dynamic and complex user interfaces.

### Scenario
Imagine building a complex dashboard for a web application. This dashboard needs to display various views such as user analytics, revenue metrics, and notifications simultaneously.

## Traditional Approach vs. Parallel Routes
Traditionally, we would create components for each section and arrange them in a layout file (`layout.tsx`). However, parallel routes offer a more modular approach, allowing us to define multiple slots within the layout for each section of the dashboard.

## Defining Parallel Routes
Parallel routes in Next.js are defined using a feature called "slots." Slots help structure content in a modular fashion. Each slot is automatically passed as a prop to its corresponding layout component.

### Implementation
Let's create a complex dashboard with three sections: user analytics, revenue metrics, and notifications. We'll define slots for each section within the `dashboard` folder.

```tsx
// complex-dashboard/dashboard.tsx

const ComplexDashboardLayout: React.FC = ({ children, users, revenue, notifications }) => {
  return (
    <div>
      <h1>Complex Dashboard</h1>
      <div>
        {users}
      </div>
      <div>
        {revenue}
      </div>
      <div>
        {notifications}
      </div>
    </div>
  );
};
```

## Benefits of Parallel Routes
Parallel routes offer several benefits:
1. **Independent Route Handling**: Each slot can have its own loading and error states, providing granular control over different sections of the dashboard.
2. **Seamless Subnavigation**: Each slot functions as a mini-application with its own navigation and state management, enabling users to interact with each section independently.

### Independent Route Handling
Each slot of your layout, such as user analytics or revenue metrics, can have its own loading and error states. This allows for granular control over different sections of the dashboard. For example, if the user analytics data takes longer to load, you can display a loading spinner specifically for that section while other parts of the dashboard remain interactive. Similarly, if there is an error in fetching revenue metrics, you can show an error message in that specific section without affecting the rest of the dashboard.

![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/5c2a654b-835d-4b01-ac0d-a74009e5049b)

### Seamless Subnavigation
Each slot of your dashboard can essentially function as a mini-application complete with its own navigation and state management. This is useful in a complex application like our dashboard, where different sections serve distinct purposes. Users can interact with each section independently, applying filters, sorting data, or navigating through pages without affecting the state or display of other sections.

![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/3c140c6a-b93c-4a51-bbe8-4ee70180bd2c)

### Example Pages
Let's define pages for each section of the dashboard: `users.tsx`, `revenue.tsx`, and `notifications.tsx`.

```tsx
// complex-dashboard/pages/users.tsx

const UsersPage: React.FC = () => {
  return (
    <div>
      <h2>User Analytics</h2>
      {/* User analytics content */}
    </div>
  );
};

export default UsersPage;
```

```tsx
// complex-dashboard/pages/revenue.tsx

const RevenuePage: React.FC = () => {
  return (
    <div>
      <h2>Revenue Metrics</h2>
      {/* Revenue metrics content */}
    </div>
  );
};

export default RevenuePage;
```

```tsx
// complex-dashboard/pages/notifications.tsx

const NotificationsPage: React.FC = () => {
  return (
    <div>
      <h2>Notifications</h2>
      {/* Notifications content */}
    </div>
  );
};

export default NotificationsPage;
```

### Card Component
We'll also create a reusable `Card` component to wrap the content of each section.

```tsx
// components/card.tsx

const Card: React.FC = ({ children }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      {children}
    </div>
  );
};

export default Card;
```

### Usage of Card Component
We'll use the `Card` component in each section page to wrap the content.

```tsx
// Usage of card component in each slot page
// complex-dashboard/pages/users.tsx, complex-dashboard/pages/revenue.tsx, complex-dashboard/pages/notifications.tsx

<Card>
  {/* Content of the respective section */}
</Card>
```



### Note: Ensure that the file structure and imports are set up correctly as per the Next.js conventions.



---

# Handling Unmatched Routes in Next.js Parallel Routes

## Introduction
In this , we'll explore how to handle unmatched routes in Next.js parallel routes. Unmatched routes occur when the content within a slot does not match the current URL. We'll discuss the implications of unmatched routes and how to prevent 404 errors by defining default views for unmatched slots.

### Scenario
Consider a complex dashboard with various sections such as user analytics, revenue metrics, and notifications. We want to implement subnavigation within the notifications section to navigate between default and archived views.

## Implementing the Scenario
Let's start by adding a link to navigate to the archived notifications view within the notifications slot.

```tsx
// complex-dashboard/pages/notifications.tsx

import Link from 'next/link';

const NotificationsPage: React.FC = () => {
  return (
    <div>
      <h2>Notifications</h2>
      <Link href="/complex-dashboard/archived">
        <a>Archived</a>
      </Link>
    </div>
  );
};

export default NotificationsPage;
```

Next, let's define the archived notifications page.

```tsx
// complex-dashboard/pages/archived.tsx

const ArchivedNotificationsPage: React.FC = () => {
  return (
    <div>
      <h2>Archived Notifications</h2>
      {/* Archived notifications content */}
    </div>
  );
};

export default ArchivedNotificationsPage;
```

## Unmatched Routes
By default, the content rendered within a slot matches the current URL. However, when navigating to a route where only one slot matches (e.g., `/complex-dashboard/archived`), the other slots become unmatched.

### Handling Unmatched Routes
- **Navigation from UI**: If navigated from the UI, the slot's previously active state is rendered.
- **Page Reload**: Next.js looks for a `default.tsx` file in the slot. Without this file, a 404 error occurs.

## Preventing 404 Errors
To prevent 404 errors for unmatched routes, we need to define default views for each slot.

```tsx
// complex-dashboard/default.tsx
// This serves as the fallback view for the `children` slot

const DefaultPage: React.FC = () => {
  return (
    <div>
      {/* Default content for children slot */}
    </div>
  );
};

export default DefaultPage;
```

Similarly, define `default.tsx` files for the `users` and `revenue` slots.

```tsx
// complex-dashboard/users/default.tsx

const DefaultUsersPage: React.FC = () => {
  return (
    <div>
      {/* Default content for users slot */}
    </div>
  );
};

export default DefaultUsersPage;
```

```tsx
// complex-dashboard/revenue/default.tsx

const DefaultRevenuePage: React.FC = () => {
  return (
    <div>
      {/* Default content for revenue slot */}
    </div>
  );
};

export default DefaultRevenuePage;
```

Now, when navigating to an unmatched route and reloading the page, the default views will be rendered instead of a 404 error.

## Summary
In parallel routing, content within a slot usually matches the current URL. However, for unmatched slots, the behavior varies based on navigation. Defining `default.tsx` files for unmatched slots prevents 404 errors and ensures a smoother user experience.

---

# Conditional Routes in Next.js Parallel Routes

In the last two videos, we learned about parallel routes, which allow us to display multiple pages simultaneously in the same layout without changing the URL. Now, let's briefly discuss conditional routes.

## Introduction to Conditional Routes
Parallel routes offer a way to implement conditional routing. For example, based on the user's authentication state, we can choose to render the dashboard for authenticated users or a login page for those who are not authenticated. This enables fully separated code on the same URL.

## Implementing Conditional Routes
Let's implement a scenario where we conditionally render a login page based on the user's authentication state.

### Creating the Login Slot
First, let's create the login slot within the complex dashboard folder.

```tsx
// complex-dashboard/login/page.tsx

import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h2>Please login to continue</h2>
      {/* Login form */}
    </div>
  );
};

export default LoginPage;
```

### Implementing Conditional Rendering
Next, in the dashboard layout, import the new slot through props and add conditional rendering based on the user's authentication state.

```tsx
// complex-dashboard/layout.tsx

import React from 'react';
import Login from './login/page';

interface LayoutProps {
  isLoggedIn: boolean;
}

const DashboardLayout: React.FC<LayoutProps> = ({ isLoggedIn }) => {
  return (
    <div>
      {/* Other slots */}
      {isLoggedIn ? (
        <>
          {/* Render dashboard content */}
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default DashboardLayout;
```

### Testing the Conditional Rendering
By default, since `isLoggedIn` is set to true, you should see the dashboard UI. If you set `isLoggedIn` to false, you'll see the login page instead.

## Conclusion
Conditional routes in Next.js parallel routes enable us to conditionally render pages based on certain conditions, keeping our code well-separated under the same URL. Additionally, these slots benefit from independent error and loading states, as well as subnavigation.

---
