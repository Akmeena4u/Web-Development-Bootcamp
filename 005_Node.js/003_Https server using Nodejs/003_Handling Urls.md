
### Understanding URL Components

#### 1. What is a URL?
- URL stands for Uniform Resource Locator.
- It is a user-friendly name for an IP address that computers use to identify each other on a network.
- In essence, a URL points to a resource on the web.

#### 2. Components of a URL:
A URL generally consists of several components:

- **Protocol**: Specifies how the browser should retrieve information. Example: `https`, `http`, `ftp`.
- **Domain**: Also known as the hostname, it indicates the server's location. Example: `google.com`.
- **Path**: Defines the specific location or file on the server. Example: `/search`.
- **Query Parameters**: Optional parameters that follow the path, used for passing extra information to the server. Example: `?q=example`.

#### 3. Understanding each component:

- **Protocol**: Determines how data should be transmitted. Examples:
  - `https://` (HyperText Transfer Protocol Secure) encrypts data for secure communication.
  - `http://` (HyperText Transfer Protocol) transmits data in plain text, less secure.
  - `ftp://` (File Transfer Protocol) is used for transferring files.

- **Domain**: The human-readable name that corresponds to an IP address. For instance, `google.com` translates to an IP address, allowing us to access Google's servers.

- **Path**: Specifies the location of a specific resource on the server. It begins with a forward slash (`/`). Examples:
  - `/search` points to the search page on a website.
  - `/images/logo.png` specifies the path to an image file.

- **Query Parameters**: Optional data that can be appended to a URL to pass information to the server:
  - `?q=searchterm` passes `searchterm` as a query parameter.
  - Multiple parameters are separated by `&`, such as `?category=tech&sort=asc`.

#### 4. Example breakdown:

Consider the URL `https://www.google.com/search?q=url+components`.

In this example:
- **Protocol** (`https://`) ensures secure communication.
- **Domain** (`www.google.com`) points to Google's servers.
- **Path** (`/search`) directs to the search functionality.
- **Query Parameters** (`?q=url+components`) pass the query `url components` to Google's search engine.

#### 5. Importance of URLs:
- URLs are essential for accessing specific resources on the internet.
- They provide a structured way to communicate with web servers.
- Understanding URL components helps in web development, SEO, and understanding how web browsers fetch and display content.

#### Conclusion:
URLs are fundamental in web browsing and server communication, providing a standardized way to access resources online. By understanding their components — protocol, domain, path, and query parameters — users can navigate the internet effectively and developers can create robust web applications.

---

#### Example - Handling URL
- This example sets up an HTTP server using Node.js that handles different URL paths and query parameters, logs requests to a file, and responds accordingly to different routes.

```javascript
const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end();

    const log = `${Date.now()} : ${req.url} : New Request Received \n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    fs.appendFile('log.txt', log, (err) => {
        if (err) console.error(err);

        switch (myUrl.pathname) {
            case '/':
                res.end("Home Page");
                break;

            case '/about':
                // Query parameter: ?myname=<username>
                const username = myUrl.query.myname;
                console.log(username);
                res.end(`Hi, ${username}`);
                break;

            case '/search':
                // Query parameter: ?search_query=<search-term>
                const search = myUrl.query.search_query;
                console.log(search);
                res.end(`Here are your results for ${search}`);
                break;

            default:
                res.end("404 Not Found");
        }
    });
});

const PORT = 8000;
myServer.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
```

### Explanation:

1. **Imports**: 
   - `http`: Core Node.js module for creating HTTP servers.
   - `fs`: Core Node.js module for file system operations.
   - `url`: Core Node.js module for URL parsing.

2. **Server Creation**:
   - `http.createServer()` sets up an HTTP server. It takes a callback function with `req` (request) and `res` (response) parameters.

3. **Request Handling**:
   - Checks for `'/favicon.ico'` request and ignores it to prevent unnecessary logging.
   - Constructs a log entry with the current timestamp, requested URL (`req.url`), and logs it to `log.txt`.

4. **URL Parsing**:
   - Uses `url.parse(req.url, true)` to parse the request URL (`req.url`). The `true` argument parses the query string into an object (`query` property in `myUrl`).

5. **Routing**:
   - Uses a `switch` statement on `myUrl.pathname` to handle different URL paths:
     - `/`: Responds with "Home Page".
     - `/about`: Extracts `myname` from query parameters and responds with a personalized greeting.
     - `/search`: Extracts `search_query` from query parameters and responds with a search result message.
     - Default case: Responds with "404 Not Found" for unrecognized paths.

6. **Server Start**:
   - Binds the server to listen on port `8000` (`const PORT = 8000`).
   - Logs a message when the server starts (`console.log()`).

### Usage:
- Save the combined script in a file (e.g., `server.js`).
- Run the script using Node.js: `node server.js`.
- Access different routes from a browser or using tools like cURL to see different responses and logging behavior.

This example demonstrates basic server setup, request handling, URL parsing, query parameter extraction, and logging using Node.js core modules.
