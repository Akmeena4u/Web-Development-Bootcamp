# Chapter 2 - Server Concepts with Node - HTTP Module

## 1. HTTP Requests
The Request object in Node comprises several properties, with the important ones being:
- **Type of Request:** GET, POST, PUT, DELETE, etc.
- **Headers:** Metadata sent by the browser, including browser name, cookies, authentication information, etc.
- **Query Parameters (url?name=john):** Used in GET requests to send data to the server.
- **Route Params (url/john):**
- **Body Data:** Used in POST and other requests to send data to the server.

## 2. HTTP Responses
The Response object comprises important properties:
- **Headers:** Metadata sent by the server back to the client, such as server name, content size, last updated time, etc.
- **Response Status Code (200, 404, 403, 502):**
- **Response Body:** Actual data to be sent to the client, such as HTML, JS, JSON, CSS, Image, etc.

## 3. Additional Information
- HTTP requests and responses can be tracked from Dev Tools > Network Tab.
- In Node, the core http module is used to create a server that listens to requests, modifies data in-between, and provides responses.
- A server needs a PORT to be bound to, and it should use only port numbers greater than 1024.
- A server can be conceptualized as a function that receives a request and returns a response.
- There are many headers that exist in requests and responses. A link with a list of existing headers is provided.

## 4. Server Functions
A server can be used for:
- **Static File Hosting:** Sending normal files without formatting or modifying.
- **Server-Side Rendering:** Mixing data with templates and rendering dynamic views (dynamic web pages).
- **Web APIs:** Sending data via some APIs/endpoints.

## 5. Important Rule
Every request has one and only one response. If there is more than one response intended to be sent, an error like "Headers already sent" will be encountered.

## Tools
### POSTMAN
Postman is a popular collaboration platform for API development. It simplifies the process of developing, testing, and managing APIs (Application Programming Interfaces).
- **API Testing:** Postman allows users to create and execute various types of HTTP requests, such as GET, POST, PUT, DELETE, etc., to interact with APIs.
- **Request Organization:** Collections help in grouping related requests, making it easier to manage and execute them as a unit.
- **Automation and Scripting:** Postman supports scripting using JavaScript, allowing users to add pre-request scripts, test scripts, and other automation logic to their requests.
- **Collaboration:** Postman provides collaboration features that allow team members to share collections, workspaces, and environments.
- **Monitoring:** Postman offers API monitoring capabilities, allowing users to set up monitors to periodically test APIs and ensure they are functioning as expected.
- **API Documentation:** Postman can automatically generate API documentation based on the requests and responses defined within a collection to share with stakeholders.

### Alternatives to Postman
- Insomnia
- Paw
- Swagger (OpenAPI)
 

