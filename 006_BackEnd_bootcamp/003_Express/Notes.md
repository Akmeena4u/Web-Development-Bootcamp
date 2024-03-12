# ExpressJS Overview

## Introduction
ExpressJS is a widely used Node.js framework for building web applications. To get started with Express, install it using:

```bash
npm install express
```

### Why use Express?
- Ultra-fast I/O
- Asynchronous and single-threaded
- MVC-like structure
- Robust API for easy routing

## Key Express Methods

### Application Methods (app)
- `app.use()`: Application-level middleware for modifying requests before reaching the next middleware or endpoints.

### Request Methods (req)
- HTTP Request Types:
  - GET
  - POST
  - PUT
  - DELETE
  - PATCH

### Response Methods (res)
- `res.send()`: Sends HTML content.
- `res.sendFile()`: Sends a file.
- `res.json()`: Sends JSON data.
- `res.sendStatus(404)`: Sends an HTTP status code only.

### Request Properties (req)
- `req.ip`: IP address of the client.
- `req.method`: HTTP method of the request.
- `req.hostname`: Hostname, e.g., google.com or localhost.
- `req.query`: Captures query parameters from the URL.
- `req.body`: Captures request body data.
- `req.params`: Captures URL parameters for route paths like `/products/:id`.

## HTTP Request Types
HTTP requests are categorized as GET, POST, PUT, DELETE, and PATCH.

## Terminology
- **API/Endpoints/Routes**: Used interchangeably, referring to server paths.

## Creating Your First Express App
Create a file (e.g., `app.js`) and set up a basic Express application:

```javascript
// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```

### Running Your Express App
In the terminal, run your Express app:

```bash
node app.js
```

Visit http://localhost:3000 in your browser to see "Hello, Express!"

## Middleware
Middleware in Express modifies requests before reaching the next middleware or endpoints. Middleware functions have access to request, response, and the next middleware function in the application's request-response cycle.

### Types of Middleware
1. **Application-level Middleware**: `app.use(middleware);`
2. **Router-level Middleware**: `app.get('/', middleware, (req, res) => {});`
3. **Built-in Middleware**:
   - `express.json()`: Parses body data.
   - `express.static()`: For static hosting.
4. **External Middleware** (Example: `morgan`)

Example Middleware:

```javascript
// Middleware function
const myMiddleware = (req, res, next) => {
  console.log('Middleware executed!');
  next(); // Call next to pass control to the next middleware function
};

// Use middleware
app.use(myMiddleware);

// Route-specific middleware
app.get('/protected', myMiddleware, (req, res) => {
  res.send('This is a protected route.');
});
```

## Static Hosting
Make folders static using `express.static` middleware:

```javascript
app.use(express.static(<directory>));
```

By default, `index.html` is read if no file name is specified.

## Ways to Send Data from Client to Server

### 1. Send Data via URL in Query String
Example:

```javascript
app.get("/demo", (req, res) => {
    console.log(req.query);
    res.send(req.query);
});
```

### 2. Send Data via Request Params
Example:

```javascript
app.get("/demo/:name/:subject", (req, res) => {
    console.log(req.params);
    res.send(req.query);
});
```

### 3. Send Data via Request Body
Example:

```javascript
app.post("/demo", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
```

## Conclusion
ExpressJS is a powerful framework with a rich set of methods and features for building web applications in Node.js. Understanding routing, middleware, and data handling methods is essential for effective development.
