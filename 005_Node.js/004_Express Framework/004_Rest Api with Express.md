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

### Detailed Notes on Implementing POST, PATCH, and DELETE Requests

#### Introduction
In this tutorial, we will complete our project by implementing the POST, PATCH, and DELETE requests. These requests allow us to create, update, and delete resources, respectively.

#### Setting Up Postman
1. **Download and Install Postman**:
    - Visit [Postman](https://www.postman.com/) and download it for your platform.
    - Install Postman, which is a tool for testing APIs, making requests, and documenting them.

2. **Starting Your Server**:
    - Ensure your server is running by executing `npm start` in your project directory.
    - Your server should be running on `localhost:8000`.

3. **Testing with Postman**:
    - Open Postman and create a new request by clicking the '+' icon.
    - Use `GET` request to `http://localhost:8000/users` to retrieve the list of users.
    - You should see a response with the list of users in JSON format.

#### Implementing POST Request
1. **Setting Up the Route**:
    - In your Express application, set up the route for handling `POST` requests to create new users:
    ```javascript
    app.post('/api/users', (req, res) => {
        const newUser = req.body;  // The new user data sent in the request body
        newUser.id = users.length + 1;  // Assign a new ID based on the length of the users array
        users.push(newUser);  // Add the new user to the users array
        fs.writeFileSync('mock-data.json', JSON.stringify(users));  // Write the updated users array to the JSON file
        res.status(201).json(newUser);  // Respond with the newly created user
    });
    ```

2. **Testing POST Request with Postman**:
    - In Postman, create a new `POST` request to `http://localhost:8000/api/users`.
    - In the 'Body' tab, select 'raw' and choose 'JSON' format.
    - Enter the new user data in JSON format, for example:
    ```json
    {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "gender": "Male",
        "jobTitle": "Software Engineer"
    }
    ```
    - Send the request and you should receive a response with the new user data, including the assigned ID.

#### Implementing PATCH Request
1. **Setting Up the Route**:
    - Set up the route for handling `PATCH` requests to update existing users:
    ```javascript
    app.patch('/api/users/:id', (req, res) => {
        const userId = parseInt(req.params.id, 10);  // Get the user ID from the URL parameter
        const updatedData = req.body;  // The updated user data sent in the request body
        const userIndex = users.findIndex(user => user.id === userId);  // Find the index of the user to be updated

        if (userIndex === -1) {
            return res.status(404).json({ error: "User not found" });  // If user not found, respond with 404
        }

        users[userIndex] = { ...users[userIndex], ...updatedData };  // Update the user data
        fs.writeFileSync('mock-data.json', JSON.stringify(users));  // Write the updated users array to the JSON file
        res.json(users[userIndex]);  // Respond with the updated user data
    });
    ```

2. **Testing PATCH Request with Postman**:
    - In Postman, create a new `PATCH` request to `http://localhost:8000/api/users/1` (replace `1` with the ID of the user you want to update).
    - In the 'Body' tab, select 'raw' and choose 'JSON' format.
    - Enter the updated user data in JSON format, for example:
    ```json
    {
        "firstName": "Jane",
        "jobTitle": "Senior Software Engineer"
    }
    ```
    - Send the request and you should receive a response with the updated user data.

#### Implementing DELETE Request
1. **Setting Up the Route**:
    - Set up the route for handling `DELETE` requests to remove users:
    ```javascript
    app.delete('/api/users/:id', (req, res) => {
        const userId = parseInt(req.params.id, 10);  // Get the user ID from the URL parameter
        const userIndex = users.findIndex(user => user.id === userId);  // Find the index of the user to be deleted

        if (userIndex === -1) {
            return res.status(404).json({ error: "User not found" });  // If user not found, respond with 404
        }

        users.splice(userIndex, 1);  // Remove the user from the array
        fs.writeFileSync('mock-data.json', JSON.stringify(users));  // Write the updated users array to the JSON file
        res.status(204).send();  // Respond with 204 No Content
    });
    ```

2. **Testing DELETE Request with Postman**:
    - In Postman, create a new `DELETE` request to `http://localhost:8000/api/users/1` (replace `1` with the ID of the user you want to delete).
    - Send the request and you should receive a `204 No Content` response, indicating the user was successfully deleted.

#### Conclusion
- **Postman** is a powerful tool for testing APIs, allowing you to easily make `GET`, `POST`, `PATCH`, and `DELETE` requests and see the responses.
- By implementing these routes, you can create, update, and delete resources on your server, allowing for full CRUD (Create, Read, Update, Delete) operations.
- Always ensure to handle errors properly and provide meaningful responses to the client.
