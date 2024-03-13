

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

```

---


# Understanding Title Field in Metadata for Routing with Next.js

In this video, we're going to dive deeper into the title field in metadata, which is a crucial field from a routing perspective. The title field's primary purpose is to define the document title. It can be either a string or an object. Let's understand both types with an example.

## String Value

The most straightforward way to set the title attribute is by using a string value. We can define the title field in `layout.tsx` and `page.tsx` files as follows:

```typescript
// layout.tsx or page.tsx
export const metadata = {
  title: "About Code Evolution"
};
```

This will render the `<title>` tag with the same string value in the browser.

## Object Value

For more flexibility, we can define the title field using an object. Import and use the `metadata` type from Next.js for better intelligence:

```typescript
// layout.tsx or page.tsx
import { metadata } from 'next';

metadata.title = {
  default: "Next Shares Tutorial - Code Evolution",
  template: "%s | Code Evolution"
};
```

The object supports three keys: `absolute`, `default`, and `template`.

- The `default` property is useful when you want to provide a fallback title for child route segments that don't explicitly specify a title.
- The `template` key is used to create dynamic titles by adding a prefix or a suffix. This property applies to child route segments and not the segment in which it is defined.

For example:

```typescript
// blog/page.tsx
metadata.title = {
  template: "%s | Code Evolution",
  title: "Blog"
};
```

This will result in the title "Blog | Code Evolution" in the browser.

- Finally, we have the `absolute` title. If you want to provide a title that completely ignores the `title.template` set in the parent segments, you can use the `title.absolute` property.

```typescript
// blog/page.tsx
metadata.title = {
  absolute: "Blog"
};
```

This will ignore the template set in the parent segment and only display "Blog" as the title.




```
