

# Enhancing Web Application Routing Metadata with Next.js

When it comes to building web applications, ensuring proper search engine optimization is crucial for increasing visibility and attracting users. In this guide, we'll introduce the metadata API, which allows you to define metadata for each page, ensuring accurate and relevant information is displayed when your pages are shared or indexed.

## Leveraging The Metadata API

With the new app router, there are two methods to configure metadata in a layout `.tsx` or page `.tsx` file:

1. **Static Metadata Object**: Export a static metadata object or export a dynamic generate metadata function.
2. **Dynamic Metadata**: Define a generate metadata function that returns a metadata object.

Here are some key points to remember when setting metadata related to routing:

- Both layout `.tsx` and page `.tsx` files can export metadata.
- If defined in layout, it applies to all pages in that layout. If defined in a page, it applies only to that page.
- Metadata is read in order from the root level down to the final page level.
- When there is metadata in multiple places for the same route, they get combined, but page metadata will replace layout metadata if they have the same properties.

### Static Metadata Object

Let's start with the first method, which is using a static metadata object. Leave the metadata object as it is in the root layout `.tsx` file and define a new one in a page file. For example, within `page.tsx` for the about route:

```typescript
// page.tsx
export const metadata = {
  title: "About Code Evolution"
};
```

Verify this behavior in the browser to observe how static metadata objects are merged.

### Dynamic Metadata

Dynamic metadata depends on dynamic information such as current route parameters or external data. To define dynamic metadata, export a `generateMetadata` function that returns a metadata object. Here's an example for a dynamic route like product ID:

```typescript
// product/[productID]/page.tsx
import { metadata } from 'next';

type Props = {
  productID: string;
};

export const generateMetadata = (params: Props) : Metadata => {
  return {
    title: `Product ${params.productID}`
  };
};
```
```typescript
// product/[productID]/page.tsx
import { metadata } from 'next';

type Props = {
  productID: string;
};

export const generateMetadata = async (params: Props) => {
  // You can fetch dynamic data here based on the productID
  // For simplicity, let's resolve after 100 milliseconds with a static title
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Product ${params.productID}`);
    }, 100);
  });

  return {
    title: title,
    // Add other metadata fields as needed
  };
};
```

Ensure to handle dynamic metadata appropriately based on your application requirements.

### Important Considerations

- Dynamic metadata function can be defined as an async function for fetching data dynamically.
- You cannot export both the metadata object and the `generateMetadata` function from the same route segment.

In the next video, we'll dive deeper into configuring just the title field as it is such an important field from a routing perspective. Thank you for watching!
```

