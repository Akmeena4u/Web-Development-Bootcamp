
### Enhanced HTTP Server with Logging

1. **Imports and Server Creation:**
   - You are importing `http` and `fs` modules. `http` for creating the server, and `fs` for file system operations (specifically, logging to `log.txt`).

   ```javascript
   const http = require("http");
   const fs = require("fs");
   ```

2. **Creating the HTTP Server:**
   - You create an HTTP server using `http.createServer()`. The server handles incoming requests (`req`) and sends responses (`res`).

   ```javascript
   const myServer = http.createServer((req, res) => {
       // Logging each incoming request to log.txt with timestamp
       const log = `${Date.now()} : ${req.url} : New Request Received \n`;
       fs.appendFile('log.txt', log, (err) => {
           if (err) {
               console.error('Error writing to log file:', err);
           }
       });

       // Handling different routes
       switch (req.url) {
           case '/':
               res.end("Home Page");
               break;
           case '/about':
               res.end("I am Ayush");
               break;
           default:
               res.end("404 Not Found");
       }
   });
   ```

   **Explanation:**
   - **Request Logging**: Each incoming request's URL and timestamp (`Date.now()`) are logged to `log.txt` using `fs.appendFile()`. This ensures you have a record of all requests received.
   - **Route Handling**: Based on the `req.url`, different responses are sent:
     - `/` responds with "Home Page".
     - `/about` responds with "I am Ayush".
     - Default (any other route) responds with "404 Not Found".

3. **Server Configuration and Start:**
   - You define the `PORT` and start the server with `myServer.listen()`.

   ```javascript
   const PORT = 8000;
   myServer.listen(PORT, () => {
       console.log(`Server started at port no ${PORT}`);
   });
   ```

   **Explanation:**
   - `myServer.listen(PORT, ...)` starts the HTTP server on port `8000`.
   - The callback function logs a message to indicate the server has started successfully.

### Summary:

- **Logging Requests**: Each request's URL and timestamp are logged to `log.txt` using `fs.appendFile()`.
- **Route Handling**: Different routes (`/`, `/about`) are handled with specific responses.
- **Server Start**: The server starts listening on port `8000`, and a message confirms the server's startup.

This enhanced code adds logging functionality to track incoming requests and expands route handling capabilities. It's a good foundation for building more complex server applications in Node.js.
