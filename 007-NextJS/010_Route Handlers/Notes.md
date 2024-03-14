
# Understanding Route Handlers in Next.js

Welcome back everyone! In this section on routing, we'll dive into understanding route handlers in Next.js. So far, we've learned how to route to pages, but with Next.js, we can do much more. 

## Introduction to Route Handlers

Next.js provides a feature called "route handlers" which allow us to create custom request handlers for our routes. Unlike page routes that respond with HTML content, route handlers enable us to create RESTful endpoints, giving us full control over the response. They are ideal for performing CRUD operations with a database or making external API requests. 

Route handlers execute on the server-side, ensuring sensitive information remains secure. They are akin to API routes for those familiar with page-based routing.

## Creating Your First Route Handler

Let's create our first route handler. We'll start by setting up a new Next.js project using the following command:

```bash
npx create-next-app route-handlers-demo
```

Once the project is set up, navigate to the source folder. We'll begin by creating a new folder named `hello` within the `app` folder. Inside this folder, create a new file named `route.ts`.

```typescript
// app/hello/route.ts

export default async function get(req: any, res: any) {
    res.status(200).send('Hello World');
}
```

Here, we've defined a function that corresponds to the HTTP `GET` verb. It responds with the plain text "Hello World". 

Now, run the development server and navigate to `localhost:3000/hello` in your browser. You should see the text "Hello World" displayed.

## Organizing Route Handlers

Similar to page routes, route handlers can be organized in folders and nested within subfolders for cleaner organization. For example, you can create a `dashboard` folder within the `app` folder and add route handlers inside it.

## Handling Conflicts

Be mindful of potential conflicts between page routes and route handlers. If you have both a page and a route handler with the same name, the route handler takes precedence. To avoid conflicts, consider organizing your route handlers in an `api` subdirectory.

## Summary

- Route handlers in Next.js allow you to create custom request handlers for routes.
- They are defined in a `route.ts` or `route.js` file inside the `app` directory.
- Be cautious of conflicts between page routes and route handlers.
- Route handlers are ideal for performing CRUD operations and making external API requests.

In the upcoming , we'll explore examples of handling different types of requests (GET, POST, PATCH, DELETE) using route handlers in Next.js. Stay tuned!

---


# Handling GET Requests with Route Handlers in Next.js

In the previous , we learned how to create a basic route handler. In this video and over the next few ones, let's delve deeper into working with route handlers in Next.js. Today, our focus will be on handling a GET request.

## Introduction to Thunder Client

Before we start, it's important to mention that for this topic on route handlers, we won't be focusing on the UI. Instead, we'll be using Thunder Client, a REST API client for VS Code, to make the necessary requests to test our route handlers. If you haven't installed it already, please pause the video and install this VS Code extension.

## Example Setup

For our examples, we won't be setting up a database as that would become a distraction. Instead, we'll keep it simple and maintain the data in memory. We'll store some sample comments in memory which implies the data is lost when we restart the application or refresh the page.

### Creating Sample Data

Within the `app` folder, let's create a new folder called `comments`. Inside this folder, create a new file called `data.ts`. 

```typescript
// app/comments/data.ts

export const comments = [
    { id: 1, text: "This is the first comment" },
    { id: 2, text: "Second comment" },
    { id: 3, text: "Third comment" }
];
```

These sample comments mimic user comments on a platform like YouTube.

### Creating the Route Handler

Now, within the `comments` folder, create a new file named `route.ts`.

```typescript
// app/comments/route.ts

import { comments } from './data';

export default async function get(req: any, res: any) {
    res.status(200).json(comments);
}
```

This function responds with the array of comments in JSON format.

### Testing the Handler

To test this handler, open Thunder Client and create a new request. Set the HTTP verb to `GET` and the URL to `http://localhost:3000/comments`. Click on send, and you should receive a response with the array of comments.

## Conclusion

In this , we've learned how to handle a GET request using route handlers in Next.js. We used Thunder Client to test our handler. In the next , we'll understand how to handle a POST request.

---


# Handling POST Requests with Route Handlers in Next.js

In the previous , we learned how to handle a GET request. Now, let's dive into handling a POST request.

## Setting Up a New Request

We'll leave the GET request tab from the previous video untouched and create a new request. Set the HTTP verb as POST and the URL as `http://localhost:3000/comments`, similar to the GET request.

Next, we need to specify a new comment object to be added to the comments array. In the body tab, under JSON, specify an object with a `text` property. For example:

```json
{
  "text": "New Comment"
}
```

## Handling POST Request

Let's define a function to handle the POST request in the same `route.ts` file within the `comments` folder.

```typescript
// app/comments/route.ts

import { comments } from './data';

export default async function post(req: any, res: any) {
    const comment = await req.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text
    };
    comments.push(newComment);
    
    res.status(201).json(newComment);
}
```

This function extracts the JSON body from the request and creates a new comment object. It then adds the new comment to the comments array and responds with a status code of 201 indicating successful resource creation along with the newly added comment.

## Testing the POST Request

Restart the development server (`npm run dev`) and test the POST request using Thunder Client. Upon sending the request, you should receive a response with a status of 201 and the newly added comment.

## Conclusion

Handling POST requests with route handlers in Next.js involves defining a function to handle the POST request, extracting data from the request body, updating the data as necessary, and sending an appropriate response.

In the next , we'll explore dynamic route handlers. Stay tuned!

---


# Handling Dynamic Route Handlers in Next.js

In the previous , we learned how to create route handlers for GET and POST requests. Now, let's understand how to handle PATCH and DELETE requests.

## Dynamic Route Handlers

For a PATCH or DELETE request, we need to specify the ID of the comment we're updating or deleting. Our endpoint will be `/comments/[id]`, where `id` is the dynamic segment representing the comment ID.

### Creating a Dynamic Route Handler

Within the `comments` folder, create a new folder named `[id]` (wrapped in square brackets). Inside this folder, create a `route.ts` file.

```typescript
// app/comments/[id]/route.ts

import { comments } from '../data';

export default async function get(req: any, res: any) {
    const { id } = req.params;
    const comment = comments.find((c: any) => c.id === parseInt(id));
    
    res.status(200).json(comment);
}
```

This function returns a single comment whose ID matches the dynamic route parameter.

## Testing the Dynamic Route Handler

Test the dynamic route handler using Thunder Client by appending `/1`, `/2`, or `/3` to the `/comments` URL. Upon sending the request, you should receive the respective comment based on the ID provided.

## Conclusion

Dynamic route handlers in Next.js work similarly to dynamic page routes. They allow us to create endpoints with dynamic segments, enabling us to fetch individual resources based on the provided parameters.

In the next , we'll explore how to handle a PATCH request to update individual comments.

---


# Handling PATCH Requests with Route Handlers in Next.js

In this , let's learn how to handle PATCH requests. A PATCH request applies partial modifications to a resource. Since we have just one property (`text`), updating the comment is quite straightforward.

## Understanding PATCH Requests

A PATCH request in Thunder Client involves changing the HTTP verb to PATCH. The URL remains the same, as we'll be updating the comment with ID 3. In the body tab, under JSON, add an object with the `text` property set to a different string (e.g., "updated comment").

### Creating a PATCH Handler

Within the `comments/[id]` folder, let's add a function to handle the PATCH request in `route.ts`.

```typescript
// app/comments/[id]/route.ts

import { comments } from '../data';

export default async function patch(req: any, res: any) {
    const { id } = req.params;
    const body = await req.json();
    const { text } = body;

    const index = comments.findIndex((c: any) => c.id === parseInt(id));
    if (index === -1) {
        res.status(404).json({ message: "Comment not found" });
        return;
    }

    comments[index].text = text;
    
    res.status(200).json(comments[index]);
}
```

This function updates the `text` property of the comment with the provided ID and responds with the updated comment.

## Testing the PATCH Request

Test the PATCH request using Thunder Client by sending the request with the updated `text` in the body. Upon sending the request, you should receive a response with the updated comment.

## Conclusion

Handling PATCH requests in route handlers involves extracting data from the request body, updating the resource, and sending an appropriate response.

In the next , we'll explore how to handle DELETE requests.

---



# Handling DELETE Requests with Route Handlers in Next.js

In this , let's learn how to handle DELETE requests. A DELETE request deletes a specified resource. In our case, we delete a comment by its ID.

## Understanding DELETE Requests

A DELETE request in Thunder Client involves changing the HTTP verb to DELETE. The URL remains the same, with the comment ID still part of the URL.

### Creating a DELETE Handler

Within the `comments/[id]` folder, let's add a function to handle the DELETE request in `route.ts`.

```typescript
// app/comments/[id]/route.ts

import { comments } from '../data';

export default async function del(req: any, res: any) {
    const { id } = req.params;

    const index = comments.findIndex((c: any) => c.id === parseInt(id));
    if (index === -1) {
        res.status(404).json({ message: "Comment not found" });
        return;
    }

    const deletedComment = comments.splice(index, 1)[0];

    res.status(200).json(deletedComment);
}
```

This function finds the index of the comment object that needs to be deleted, removes it from the array, and responds with the deleted comment.

## Testing the DELETE Request

Test the DELETE request using Thunder Client by sending the request with the appropriate comment ID in the URL. Upon sending the request, you should receive a response with the deleted comment.

## Conclusion

Handling DELETE requests in route handlers involves finding and removing the resource from the data array and sending an appropriate response.

Now that we understand how to handle GET, POST, PATCH, and DELETE requests, let's explore more related topics in the upcoming videos.

---


# Working with URL Query Parameters in Route Handlers

In this video, we'll learn how to work with URL query parameters in a route handler. Consider an example where we want to filter an array of comments based on a specific query parameter.

## Example

Let's say we have an array of comments in our `data.ts` file. We want to filter this array based on a query parameter. For instance, if we navigate to `localhost:3000/comments`, we see the full list of comments. But if we navigate to `/comments?query=First`, we expect to see only those comments containing the word "First". 

### Handling Query Parameters

To handle query parameters effectively, we need the `request` parameter added to our GET handler. However, in the context of Next.js, the type we are dealing with is `NextRequest`, which we can import from `next/server`.

Let's update our code to reflect that:

```typescript
// app/comments/[id]/route.ts

import { comments } from '../data';
import { NextRequest } from 'next/server';

export default async function get(req: NextRequest, res: any) {
    const searchParams = new URL(req.nextUrl).searchParams;
    const query = searchParams.get('query');

    const filteredComments = query ?
        comments.filter(comment => comment.text.includes(query)) :
        comments;

    res.status(200).json(filteredComments);
}
```

This function filters the comments array based on the provided query parameter. If no query parameter is present, it returns all comments.

## Query Results

Now, when we refresh the URL `localhost:3000/comments?query=First`, we see only the comments containing the word "First". Changing the query to "IR" will display the first and third comments containing the search text "IR". Removing the query parameter will give us back the full list of comments.

## Conclusion

Query parameters are often optional but incredibly useful for implementing search, sort, and pagination functionalities for your data.
---


# Handling Redirects in Route Handlers

In this video, we'll learn about handling redirects in route handlers. Previously, we implemented a dynamic route handler to return an individual comment by its ID. However, our current logic doesn't handle IDs that are not present in the comments array. Let's improve this by redirecting to the comments listing page if the requested ID is not found.

## Implementation

1. First, import the `redirect` function from `next/navigation` at the top of the `route.ts` file within the `[id]` folder:

    ```typescript
    import redirect from 'next/navigation';
    ```

2. Next, add a check in the route handler function to verify if the entered ID is greater than the number of comments we have. If it is, perform a redirect to the comments listing page.

    ```typescript
    export default async function get(req: any, res: any) {
        const { id } = req.params;

        // Check if ID is greater than the number of comments
        if (parseInt(id) > comments.length) {
            redirect('/comments');
            return;
        }

        // Continue with existing logic to fetch and return the comment
        // ...
    }
    ```

This approach assumes that the IDs in our comments array are sequential. You can adjust the logic as needed based on your project requirements.

## Testing the Redirect

Now, when navigating to `/comments/4`, instead of encountering an error, the user will be redirected to `/comments`, offering a much better user experience.

Additionally, when inspecting the request status, you'll notice a 307 status code, indicating a temporary redirect.

## Conclusion

Handling redirects in route handlers is crucial for providing a smooth user experience and handling edge cases effectively. Apply redirection as needed in your project to enhance user navigation.

---


# Dealing with Headers in Route Handlers

In this video, we'll learn about handling headers in route handlers. HTTP headers represent metadata associated with an API request and response, and they can be classified into two categories: request headers and response headers.

## Request Headers
Request headers are sent by the client (e.g., a web browser) to the server and contain information about the request. Examples include:
- `User-Agent`: Identifies the browser and operating system to the server.
- `Accept`: Indicates the content types (e.g., text, video, image formats) that the client can process.
- `Authorization`: Used for client authentication, carrying credentials for controlled access to resources.

## Response Headers
Response headers are sent back from the server to the client and provide information about the server and the data being sent in the response. Examples include:
- `Content-Type`: Indicates the media type of the response (e.g., text/html for HTML documents, application/json for JSON data).

When defining route handlers in Next.js, it's important to understand how to read request headers and send back response headers.

## Reading Request Headers
To read request headers, we can use the `request` parameter and the `Headers` Web API. Here's how we can do it:

```typescript
import { NextRequest } from 'next/server';

export default async function handler(req: NextRequest, res: any) {
    const requestHeaders = new Headers(req.headers);
    const authorizationHeader = requestHeaders.get('Authorization');
    console.log(authorizationHeader);
}
```

Alternatively, we can use the `headers` function provided by Next.js:

```typescript
import { headers } from 'next/headers';

export default async function handler(req: NextRequest, res: any) {
    const headerList = headers(req);
    const authorizationHeader = headerList.get('Authorization');
    console.log(authorizationHeader);
}
```

## Setting Outgoing Headers
Headers returned from the `headers` function are read-only. To set headers, we need to return a new response with the desired headers. For example, to set the `Content-Type` header to `text/html`, we can do:

```typescript
export default async function handler(req: NextRequest, res: any) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, world!</h1>');
}
```

## Conclusion
Understanding how to handle headers in route handlers is essential for building robust APIs. By reading and setting headers, we can control the behavior and format of our responses effectively.

---

## Working with Cookies in Route Handlers


**Cookies:**

* Small pieces of data sent by a server to a user's browser.
* Stored by the browser and sent back to the server with later requests.
* Used for:
    * Session management (logins, shopping carts)
    * Personalization (user preferences, themes)
    * Tracking (user behavior)

**Setting and Getting Cookies:**

**1. Using `set-cookie` Header and Request Object:**

**Setting:**

1. Return a new response with the `set-cookie` header.
   - Example:

   ```javascript
   return new Response('Hello, world!', {
       headers: {
           'Content-Type': 'text/plain',
           'Set-Cookie': 'theme=dark'
       }
   });
   ```

**Getting:**

1. Access cookies using the `request.cookies.get` method.
   - Example:

   ```javascript
   const theme = request.cookies.get('theme');
   console.log(theme); // Output: dark
   ```

**2. Using `cookies` Function from `next/headers`:**

**Setting:**

1. Import `cookies` from `next/headers`.
2. Use `cookies.set` to set a cookie.
   - Example:

   ```javascript
   import { cookies } from 'next/headers';

   cookies.set('results-per-page', 20);
   ```

**Getting:**

1. Use `cookies.get` to get a cookie.
   - Example:

   ```javascript
   const resultsPerPage = cookies.get('results-per-page');
   console.log(resultsPerPage); // Output: 20
   ```

**Additional Methods:**

* The `cookies` function also supports:
    * `has` - Check if a cookie exists.
    * `delete` - Delete a cookie.
* Refer to Next.js documentation for more details.

**Remember:**

* This approach works for route handlers in Next.js.
* Consider security implications when using cookies, especially for sensitive data.
---

## Caching Behavior in Route Handlers

This document explores the caching behavior of route handlers in Next.js.

### Default Caching Behavior

By default, Next.js caches route handlers that utilize the GET method and return a Response object. This behavior optimizes performance by serving pre-rendered responses, reducing server load.

### Example: Time Display Route Handler

Let's create a route handler (`time.ts`) that displays the current time:

```typescript
// time.ts
export default function get() {
  const time = new Date().toLocaleTimeString();
  return new Response.json({ time });
}
```

Visiting this route (`localhost:3000/time`) in development mode will display the current time. However, reloading the page won't update the time due to caching.

### Opting Out of Caching

There are four ways to disable caching for a route handler:

1. **Segment Config Option with Dynamic Mode:**

   - Add `export const config = { dynamic: 'force' };` at the top of your route file.
   - `dynamic: 'force'` ensures the handler is executed for each request.

   ```typescript
   // time.ts
   export const config = { dynamic: 'force' };

   export default function get() {
     const time = new Date().toLocaleTimeString();
     return new Response.json({ time });
   }
   ```

2. **Using the Request Object with GET Method:**

   This is the method used in the example (`get()` function parameter).

3. **Employing Dynamic Functions (e.g., Headers, Cookies):**

   If your handler utilizes dynamic functions like `headers` or `cookies`, caching is automatically disabled.

4. **Using HTTP Methods Other Than GET:**

   Any HTTP method besides GET (e.g., POST, PUT, DELETE) disables caching.

**Rebuilding and Rerunning the Application:**

After implementing any of these methods, rebuild your application using `npm run build` and restart the development server (`npm run start`). Reload the route to verify that caching is disabled (time updates on refresh).

**Conclusion**

Understanding caching behavior in route handlers is crucial for Next.js development. This knowledge empowers you to control when responses are cached and ensure your application displays up-to-date information.

---

## Next.js Routing - Middleware

**Middleware** is a powerful feature in Next.js that allows you to intercept and control the flow of requests and responses within your application. It works at a global level and enhances functionalities like:

* Redirection
* URL rewrites
* Authentication
* Header and cookie management

**Creating Middleware:**

1. Add a file named `middleware.js` or `middleware.ts` in your source folder.
2. **Specifying where middleware is active:**
    * **Custom matcher config:** Define a `config` object to specify URL patterns using a matcher.
    * **Conditional statements:** Use conditional statements within the middleware function to control its behavior based on request properties.

**Example: Redirection**

* Redirect `/profile` to the homepage:

```javascript
// Using custom matcher config
export const config = {
  matcher: '/profile',
};

export function middleware(request) {
  return NextResponse.redirect(new URL('/', request.url));
}

// Using conditional statements
export function middleware(request) {
  if (request.nextUrl.pathname === '/profile') {
    return NextResponse.redirect(new URL('/', request.url));
  }
}
```

**Other functionalities:**

* **URL rewrites:** Modify URLs for legacy support or SEO. (Replace `redirect` with `rewrite` in `NextResponse`)
* **Cookies:** Access and manipulate user preferences stored in cookies.
* **Headers:** Set custom headers in the response for client-side scripts or debugging.

**Summary:**

Middleware empowers you to effectively manage the request-response cycle in Next.js. You can leverage it for redirects, URL rewrites, and manipulating headers and cookies.
---
