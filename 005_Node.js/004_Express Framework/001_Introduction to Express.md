

**Express:**

1. **Problem with Building HTTP Servers from Scratch:**
   - Before diving into Express.js, let's understand the challenges of building HTTP servers from scratch using the Node.js HTTP module.
   - Manually defining routes and logic for each HTTP method (GET, POST, etc.) becomes cumbersome.
   - Extracting parameters from URLs and request bodies requires additional modules and manual parsing.
   - Error handling and managing status codes become tedious.

2. **Express.js to the Rescue:**
   - Express.js is a web application framework that simplifies the process of building HTTP servers by providing a structured and organized approach. It addresses the 
     challenges mentioned earlier:
   - Provides a structured approach for defining routes and handlers.
   - Automatically parses parameters from URLs and request bodies.
   - Offers built-in error handling middleware.

3. **Internal Workings of Express.js:**
   - Express.js is built on top of the Node.js HTTP module, providing a higher-level abstraction that streamlines server development.
   - Express's app is nothing but it is event handler callback function of http.createserver , it provides as abstraction on that whole code and give simple function to work
   -  Here's a simplified explanation of how Express.js works:
   - Creates an Express application instance using `const app = express()`.
   - Defines routes using methods like `app.get()`, specifying the path and a handler function.
   - Matches incoming requests with defined routes and executes the corresponding handler.
   - Provides `req` (request) and `res` (response) objects for handler functions.
   - Supports middleware functions for tasks like authentication and logging.
   - Starts the server using `app.listen()` on a specified port.

4. **Benefits of Using Express.js:**

   - Simplified routing and handler management.
   - Automated parameter parsing.
   - Built-in error handling.
   - Middleware support for various functionalities.

**Code Example:**

```javascript
const express = require("express"); // Import Express.js

const app = express(); // Create an Express application

// Define a route for the homepage (GET request)
app.get('/', (req, res) => {
  return res.send("Hello from Home Page"); // Send response for homepage
});

// Define a route for the about page with a query parameter (GET request)
app.get('/about', (req, res) => {
  const name = req.query.name || 'Guest'; // Access query parameter 'name'
  return res.send(`Hello ${name}`); // Send response with dynamic greeting
});

// Define the port number for the server
const PORT = 8000;

// Start the server and listen for requests on the specified port
app.listen(PORT, () => {
  console.log(`Server started at port no ${PORT}`);
});
```

**Explanation of the Code:**

1. **Import Express.js:** We import the Express library using `const express = require("express")`.

2. **Create an Express Application:** We create an instance of an Express application using `const app = express()`. This instance will be used to define routes, middleware, and start the server.

3. **Define Routes:**
   - We define a route for the homepage (`/`) using `app.get('/', (req, res) => { ... })`. This route handles GET requests for the root path (`/`).
   - Inside the handler function, we send the response "Hello from Home Page" using `res.send()`.
   - We define another route for the about page (`/about`) with a query parameter `name` using `app.get('/about', (req, res) => { ... })`. This route handles GET requests for the `/about` path.
   - Inside the handler function, we access the query parameter `name` using `req.query.name`. If the parameter is not provided, we use a default value of "Guest".
   - We then send the response with a dynamic greeting using template literals (`Hello ${name}`).

4. **Define Port Number:** We define the port number for the server using `const PORT = 8000;`.

5. **Start the Server:** We start the server using `app.listen(PORT, () => { ... })`. This method takes the port number and a callback function that executes when the server starts successfully.
   - Inside the callback function, we log a message to the console indicating that the server has started on the specified port.

**Running the Code:**

1. Save the code in a file (e.g., `server.js`).
2. Open a terminal and navigate to the directory where you saved the file.
3. Run the command `node server.js`.
4. The server will start listening on port 8000.
5. Open a web browser and visit `http://localhost:8000/`. You should see "Hello from Home Page".
6. Visit `http://localhost:8000/about?name=Piyush`. You should see "Hello Piyush".

This is a basic example of using Express.js to define routes and handle requests. Express.js offers many more features
