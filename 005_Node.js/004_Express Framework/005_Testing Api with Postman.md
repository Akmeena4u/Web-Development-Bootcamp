
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
