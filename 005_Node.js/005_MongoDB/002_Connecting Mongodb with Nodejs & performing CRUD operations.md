To connect MongoDB with Node.js using Mongoose and perform CRUD operations based on your provided code, let's break down each part and explain how it works.

### Step 1: Setting Up MongoDB and Mongoose

1. **Install MongoDB:**
   - Download and install MongoDB from the official website if you haven't already.

2. **Install Mongoose:**
   - Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. Install it via npm:
     ```bash
     npm install mongoose
     ```

### Step 2: Connecting to MongoDB

```javascript
const express = require("express");
const mongoose = require('mongoose');

const app = express();
const PORT = 8000;

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/learning')
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error", err));
```

- **Explanation:**
  - `mongoose.connect()` establishes a connection to your MongoDB server (`127.0.0.1:27017` is the default localhost address).
  - `learning` is the name of the database you're connecting to. Adjust this to your actual database name.

### Step 3: Defining Mongoose Schema and Model

```javascript
// Schema definition
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    }
}, { timestamps: true });

// Model definition
const User = mongoose.model('user', userSchema);
```

- **Explanation:**
  - `mongoose.Schema` defines the structure of your documents in MongoDB.
  - `User` is the Mongoose model based on `userSchema`, which will be used to interact with the `users` collection in MongoDB.

### Step 4: Middleware and Routes Setup

```javascript
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

// Route to fetch all users as HTML
app.get('/users', async (req, res) => {
    const allDbUsers = await User.find({});
    const html = `
    <ul>
        ${allDbUsers.map(user => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

// API route to fetch all users as JSON
app.get('/api/users', async (req, res) => {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
});

// API route to fetch a user by ID
app.route('/api/users/:id')
  .get(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      return res.json(user);
  })
  .patch(async (req, res) => {
      await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
      return res.json({ status: "Success" });
  })
  .delete(async (req, res) => {
      await User.findByIdAndDelete(req.params.id);
      return res.json({ status: "Success" });
  });

// API route to create a new user
app.post('/api/users', async (req, res) => {
    const { firstName, lastName, email, jobTitle } = req.body;

    // Validate request body
    if (!firstName || !lastName || !email || !jobTitle) {
        return res.status(400).json({ msg: 'All fields are required' });
    }

    // Create new user
    const newUser = new User({
        firstName,
        lastName,
        email,
        jobTitle
    });

    try {
        const result = await newUser.save();
        console.log("User created:", result);
        return res.status(201).json({ msg: "Success" });
    } catch (err) {
        console.error("Error creating user:", err);
        return res.status(500).json({ msg: "Server error" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}`);
});
```

### Explanation of CRUD Operations:

- **GET `/users`:**
  - Fetches all users and renders them as an HTML list.

- **GET `/api/users`:**
  - Fetches all users and returns them as JSON.

- **GET `/api/users/:id`:**
  - Fetches a user by ID.

- **PATCH `/api/users/:id`:**
  - Updates a user's `lastName` based on ID.

- **DELETE `/api/users/:id`:**
  - Deletes a user by ID.

- **POST `/api/users`:**
  - Creates a new user based on JSON data sent in the request body. Validates required fields (`firstName`, `lastName`, `email`, `jobTitle`) and responds with success message or error.

### Summary

This setup allows you to connect MongoDB with Node.js using Mongoose, define schemas and models, implement middleware for parsing requests, and set up routes for performing CRUD operations. Adjust the schema and routes as per your application's specific requirements.
