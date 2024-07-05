### Node.js REST API Tutorial

#### Introduction
In this tutorial, we are going to create a simple REST API for managing user recipes. We'll follow best practices and understand how to work with JSON data.

#### Setting Up the Project
First, create an empty project directory named `project01`. Initialize a new Node.js project inside it:

```bash
npm init -y
```

This command creates a `package.json` file in your project directory.

Next, install Express:

```bash
npm install express
```

#### Basic Boilerplate Code
Create a file named `index.js` in your project directory. Add the following boilerplate code to set up an Express server:

```javascript
const express = require('express');
const app = express();
const port = 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

Run the server using:

```bash
node index.js
```

Open your browser and navigate to `http://localhost:8000`. You should see the message "Cannot GET /" which indicates that the server is running.

#### Creating Endpoints
We will create several endpoints to manage our user recipes. Let's start by creating a `users.json` file to store our mock data. You can generate mock data from [mockaroo.com](https://mockaroo.com/) or create a simple JSON file with user data:

```json
[
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "gender": "male",
    "jobTitle": "Developer"
  },
  {
    "id": 2,
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane.doe@example.com",
    "gender": "female",
    "jobTitle": "Designer"
  }
]
```

---

#### Implementing GET Endpoints
We will now implement the GET endpoints to fetch user data.

```javascript
const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;
```

### Explanation:
1. **Importing Modules**:
   - `express`: The Express.js framework to create a web server.
   - `users`: A JSON file containing mock user data.

2. **Initializing Express App**:
   - `app`: The Express application instance.
   - `PORT`: The port number where the server will listen for requests (8000).

### Routes:
#### 1. Serving HTML List of Users
```javascript
app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    <ul>
    `;
    res.send(html);
});
```
- **Route**: `/users`
- **Method**: GET
- **Functionality**: This route responds with an HTML list of user first names. It uses the `map` function to create list items for each user's first name and joins them into a single HTML string, which is then sent as the response.

#### 2. Serving Users as JSON
```javascript
app.get('/api/users', (req, res) => {
    return res.json(users);
});
```
- **Route**: `/api/users`
- **Method**: GET
- **Functionality**: This route responds with the entire `users` data in JSON format. This is useful for API consumers who need the data in a structured format.

### REST API Routes for User Operations
```javascript
app.route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        // TODO: edit the user with id
        return res.json({status: 'Pending'});
    })
    .delete((req, res) => {
        // TODO: delete the user with id
        res.json({status: 'Pending'});
    });
```

- **Route**: `/api/users/:id`
- **Methods**:
  - GET: Fetches a single user by `id`.
  - PATCH: Placeholder for editing a user by `id`.
  - DELETE: Placeholder for deleting a user by `id`.

#### Explanation:
1. **GET /api/users/:id**:
   - Extracts the `id` from the route parameters.
   - Finds the user with the matching `id` in the `users` array.
   - Responds with the user data in JSON format.

2. **PATCH /api/users/:id**:
   - Placeholder for editing a user. Responds with a pending status.

3. **DELETE /api/users/:id**:
   - Placeholder for deleting a user. Responds with a pending status.

### Server Initialization
```javascript
app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}`);
});
```
- **Functionality**: Starts the Express server and listens for connections on the specified `PORT`. Logs a message indicating that the server has started.

### Detailed Notes:
- **Express Routing**:
  - Use `app.get`, `app.post`, `app.patch`, `app.delete` for defining routes.
  - Route parameters (e.g., `:id`) allow dynamic values in the URL.

- **Sending Responses**:
  - `res.send`: Send HTML or plain text responses.
  - `res.json`: Send JSON responses, useful for APIs.

- **Middleware**:
  - Although not shown here, middleware functions can be used to handle tasks like parsing request bodies, authentication, logging, etc.

- **RESTful API**:
  - Follows REST principles by using appropriate HTTP methods for different operations (GET for reading, PATCH for updating, DELETE for deleting).

- **Data Handling**:
  - Data is typically fetched from a database. Here, mock data from a JSON file is used for simplicity.

This example sets up basic routes and placeholders for more complex functionalities like editing and deleting users. These placeholders can be filled with actual logic to handle data manipulation, often involving a database.

#### Testing the API
You can use tools like Postman or cURL to test your API endpoints. Here's how you can test each endpoint:

1. **Get All Users**: `GET http://localhost:8000/api/users`
2. **Get User by ID**: `GET http://localhost:8000/api/users/1`
3. **Create User**: `POST http://localhost:8000/api/users` with JSON body
4. **Update User**: `PATCH http://localhost:8000/api/users/1` with JSON body
5. **Delete User**: `DELETE http://localhost:8000/api/users/1`

This concludes our tutorial on creating a REST API with Node.js and Express.

---
