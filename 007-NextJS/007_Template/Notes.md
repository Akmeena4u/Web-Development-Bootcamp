

# Understanding Template Files in Next.js

## Overview
In this video, we'll explore template files provided by Next.js as part of the app router. Template files offer behavior distinct from layouts, providing a solution for scenarios where layouts' behavior may not be suitable.

### Layouts Behavior
- Layouts in Next.js wrap each child layout or page, preserving state and effects across route changes.
- However, layouts don't remount shared components, which can be limiting in scenarios requiring per-page instance creation.

### Example Scenario
- Imagine adding an input element to the layout to gather user data. Despite navigation between routes, the input state remains preserved due to layout behavior.

### Introducing Template Files
- Template files act as replacements for layouts in scenarios requiring per-page instance creation.
- Templates wrap each child layout or page, ensuring that a new instance of the component is mounted on navigation.

### Usage
- To define a template, export a default React component from either `template.js` or `template.tsx` file.
- Templates should accept a `children` prop, rendering nested segments in the route.

### Conversion
- Simply rename the existing `layout.tsx` file to `template.tsx` to utilize the template file.
- Upon navigation, the state is no longer preserved, indicating the significance of template files in the Next.js app router.

## Conclusion
- Template files offer a solution for scenarios where layouts' behavior of preserving state and effects across route changes is not desired.
- While layouts are the preferred choice for shared UI, templates provide a way to achieve per-page instance creation when needed.


**Note**: Evaluate the requirements of your application to determine whether layouts or templates are more suitable for your use case.

---

# Implementing Loading States in Next.js

## Overview
In this video, we'll explore the `loading.tsx` file, which allows us to create loading states displayed to users while specific route segments' content is loading. This feature enhances user experience by providing immediate feedback upon navigation, ensuring the application feels responsive.

### Usage
- To create a loading state, add a `loading.tsx` file to the designated folder for the route segment you want to implement the loading state for.
- The `loading.tsx` file should export a component called `Loading`, which returns an `<h1>` element with the text "Loading".


### Example Implementation
Let's consider implementing a loading state for the blog route segment:
```tsx
// pages/blog/loading.tsx
const Loading: React.FC = () => {
  return <h1>Loading</h1>;
};

export default Loading;
```

### Behavior
- The `loading.tsx` file automatically wraps the `page.tsx` file and all its nested children within a React Suspense boundary.
- When navigating to the route, users briefly see the loading text before it is replaced by the actual content.

### Benefits
1. **Immediate Feedback**: Users see the loading state as soon as they navigate to a new route, reducing perceived loading times and enhancing responsiveness.
2. **Interactive Layouts**: Next.js allows the creation of shared layouts that remain interactive while new route segments are loading, ensuring a smooth user experience.

### Customization
- Loading states can be designed in various ways, such as using loading indicators like skeletons and spinners or displaying a small part of the upcoming content, such as an image or title.

## Conclusion
- By following the loading UI convention, you can provide users with a seamless and uninterrupted experience while ensuring loading states do not obstruct the functionality of shared layouts.
- Implementing loading states in Next.js enhances the overall user experience and responsiveness of the application.

---

**Note**: Ensure to place the `loading.tsx` file in the designated folder for instant loading states in the new app router.
```

