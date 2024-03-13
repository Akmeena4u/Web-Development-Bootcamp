



# Understanding Intercepting Routes in Next.js

The app router in Next.js introduces two advanced routing patterns: parallel routes and intercepting routes. In this video, we'll dive into the concept and conventions of intercepting routes.

## Introduction to Intercepting Routes
Intercepting routes allow you to intercept or stop the default routing behavior to present an alternate view or component when navigating through the UI. This can be useful for scenarios like page reloads, where you want to show a route while keeping the context of the current page.

## Practical Examples of Intercepting Routes
### Example 1: Navigation Bar Login Link
Consider a scenario with a navigation bar where clicking on a login link takes you to a full login page. With intercepting routes, you can configure the application to display a login modal instead while still updating the URL to reflect the `/login` route.

![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/dd39b3f3-1d5b-42cb-b6cf-629d132d41c6)

```tsx
// F1/F2/page.tsx
import Link from 'next/link';

const F2Page = () => {
  return (
    <>
      <h1>F2</h1>
      <Link href="/F1/F2">Go to F2</Link>
    </>
  );
};

export default F2Page;
```
In this example, we have a simple Next.js page component `F2Page` that renders an `h1` element with the text "F2" and a `Link` component from Next.js that navigates to the `/F1/F2` route. This route will be intercepted to display an alternate view instead of the regular F2 page.

### Example 2: Photo Feed Application
In a photo feed application, clicking on a photo typically navigates users to a new page dedicated to that image. With intercepting routes, clicking on a photo can open a modal within the feed displaying an enlarged photo and details, while updating the URL to reflect the selected photo.
![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/b2ecbfbd-378b-48a9-8f52-23ceadb5e53e)

```tsx
// F1/F4/page.tsx
import Link from 'next/link';

const F4Page = () => {
  return (
    <>
      <h1>F4</h1>
      <Link href="/F1/F3">Go to F3</Link>
    </>
  );
};

export default F4Page;
```
Similarly, in this example, we have a Next.js page component `F4Page` that renders an `h1` element with the text "F4" and a `Link` component that navigates to the `/F1/F3` route. This route will be intercepted to display an alternate view instead of the regular F3 page.

## Conventions for Defining Intercepting Routes
- **Same Level Matching**: Use the `(.)` notation to match segments on the same level. For example, `(./F2)` matches the `F2` segment on the same level.
- **One Level Above Matching**: Prefix the folder name with two dots within parentheses to match segments one level above. For example, `(../F3)` matches the `F3` segment one level above.
- **Two Levels Above Matching**: Use two dots within parentheses twice to match segments two levels above.
- **Root Directory Matching**: Use three dots within parentheses to match segments from the root app directory.

## Practical Application of Intercepting Routes
In the next video, we'll explore a practical usage of intercepting routes, which will hopefully make it less confusing.

