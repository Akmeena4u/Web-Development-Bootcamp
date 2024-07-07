

### Detailed Notes on Authentication in Node.js with Express

<details>
<summary>Detailed guide on Statefull Authentication </summary>
# Comprehensive Guide to Stateful Authentication in Node.js with Express and MongoDB

## Overview
Stateful authentication involves maintaining a session on the server side to manage user authentication. This guide will walk you through creating a user authentication system using Node.js, Express, and MongoDB. We'll cover setting up the project, creating user models, handling user registration and login, managing sessions with cookies, and protecting routes using middleware.

## Steps

### Step 1: Initialize the Project

1. **Create a New Directory for the Project**:
   ```bash
   mkdir auth-demo
   cd auth-demo
   ```

2. **Initialize a New Node.js Project**:
   ```bash
   npm init -y
   ```

3. **Install Necessary Dependencies**:
   ```bash
   npm install express mongoose body-parser cookie-parser express-session
   ```

### Step 2: Set Up the User Model

Create a Mongoose model for the user to store user data in MongoDB.

**File: `models/user.js`**
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
```

### Step 3: Set Up Express and Middleware

Configure the Express server and include the necessary middleware for parsing request bodies and cookies.

**File: `app.js`**
```javascript
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Note: Set secure to true in production with HTTPS
}));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/authDemo', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

### Step 4: Create Routes for Signup and Login

Create routes for handling user registration and login.

**File: `routes/user.js`**
```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.handleUserSignup);
router.post('/login', userController.handleUserLogin);

module.exports = router;
```

**File: `controllers/userController.js`**
```javascript
const User = require('../models/user');

const handleUserSignup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.redirect('/login'); // Redirect to login page after signup
    } catch (error) {
        res.status(500).send('Error signing up user');
    }
};

const handleUserLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).send('Invalid email or password');
        }
        req.session.userId = user._id; // Save user ID in session
        res.redirect('/home');
    } catch (error) {
        res.status(500).send('Error logging in user');
    }
};

module.exports = {
    handleUserSignup,
    handleUserLogin
};
```

### Step 5: Create Signup and Login Forms

Create simple HTML forms for user registration and login.

**File: `views/signup.html`**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Signup</title>
</head>
<body>
    <h1>Signup</h1>
    <form action="/user/signup" method="POST">
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" required><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>
        <button type="submit">Signup</button>
    </form>
</body>
</html>
```

**File: `views/login.html`**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h1>Login</h1>
    <form action="/user/login" method="POST">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>
        <button type="submit">Login</button>
    </form>
</body>
</html>
```

### Step 6: Handle Sessions

Manage user sessions using the `express-session` middleware to store the session ID in cookies.

**File: `services/sessionService.js`**
```javascript
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');

const setSession = (req, user) => {
    req.session.userId = user._id;
    req.session.save();
};

const getSession = (req) => {
    return req.session.userId;
};

module.exports = {
    setSession,
    getSession
};
```

### Step 7: Protect Routes

Create middleware to ensure only authenticated users can access certain routes.

**File: `middleware/authMiddleware.js`**
```javascript
const User = require('../models/user');

const restrictToLoggedUsersOnly = async (req, res, next) => {
    const userId = req.session.userId;
    if (!userId) {
        return res.redirect('/login');
    }
    const user = await User.findById(userId);
    if (!user) {
        return res.redirect('/login');
    }
    req.user = user;
    next();
};

module.exports = restrictToLoggedUsersOnly;
```

**Update `app.js`**:
```javascript
const restrictToLoggedUsersOnly = require('./middleware/authMiddleware');

app.get('/home', restrictToLoggedUsersOnly, (req, res) => {
    res.send(`Welcome to the home page, ${req.user.name}!`);
});
```

### Step 8: Test the Application

1. **Start the Server**:
   ```bash
   node app.js
   ```

2. **Visit the Signup Page**: 
   - Go to `http://localhost:3000/signup`
   - Register a new user.

3. **Visit the Login Page**: 
   - Go to `http://localhost:3000/login`
   - Log in with the registered user's credentials.

4. **Access the Home Page**:
   - Go to `http://localhost:3000/home`
   - You should see a welcome message if logged in.

## Conclusion

You've created a basic stateful authentication system using Node.js, Express, and MongoDB. This system includes user registration, login, session management with cookies, and route protection using middleware. You can further enhance this system by adding features such as password hashing, validation, and security measures.

</details>


1. **Introduction to Authentication**:
   - Authentication is a critical topic for backend or service developers.
   - It ensures that only authorized users can access certain parts of an application.

2. **Types of Authentication**:
   - There are two primary patterns of authentication:
     1. **Stateful Authentication**:
        - Maintains a state or session on the server side.
     2. **Stateless Authentication**:
        - Does not maintain a state; each request is independent and contains all necessary information.

3. **Stateful Authentication Example**:
   - **Analogy**: A person wants to park their car in a mall's parking lot.
     - **Person**: Client
     - **Parking Boy**: Server
     - **Car**: User credentials (username and password)
     - **Parking Ticket**: Session ID
     - The parking boy keeps a record (state) of which car is assigned to which parking spot.
     - When the person returns with the parking ticket, the parking boy retrieves the car using the record.

4. **How Stateful Authentication Works**:
   - The client sends a request with their username and password to the server.
   - The server generates a unique session ID and stores it with the user's information (maintains state).
   - The client receives this session ID and uses it for subsequent requests.
   - The server validates the session ID against its stored records for each request.

5. **Data Transfer Mechanisms**:
   - The session ID can be transferred in various ways:
     1. **Cookies**: Common in browser-based applications.
     2. **Response**: Directly in the server response.
     3. **Headers**: Often used in RESTful APIs, especially for mobile applications.

6. **Express.js Middleware for Authentication**:
   - Middleware in Express can check for a valid session ID in cookies or headers.
   - If the session ID is valid, the middleware calls the next function.
   - If the session ID is invalid, the middleware rejects the request.


### Conclusion

By implementing stateful authentication in Node.js using Express, you can manage user sessions efficiently, ensuring secure access to protected resources. This method involves creating unique session IDs, storing them on the server, and validating them for each request, typically using cookies or headers for session management.

---
---

### Step-by-Step Guide to Implement User Authentication in Node.js with Express and MongoDB

In this guide, we'll go through the process of implementing user authentication in a Node.js application using Express and MongoDB. We'll cover creating user models, handling user signup and login, and managing sessions using cookies.

#### Step 1: Set Up the Project

1. **Initialize the Project**:
    ```bash
    npm init -y
    ```
2. **Install Dependencies**:
    ```bash
    npm install express mongoose body-parser cookie-parser uuid
    ```

#### Step 2: Create the User Model

First, we'll create a model for the user using Mongoose.

**File: `models/user.js`**
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
```

#### Step 3: Set Up Express and Middleware

Next, we'll set up our Express server and include the necessary middleware.

**File: `app.js`**
```javascript
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/authDemo', { useNewUrlParser: true, useUnifiedTopology: true });

const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

#### Step 4: Create Routes for Signup and Login

We'll create the routes and controllers for handling user signup and login.

**File: `routes/user.js`**
```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.handleUserSignup);
router.post('/login', userController.handleUserLogin);

module.exports = router;
```

**File: `controllers/userController.js`**
```javascript
const User = require('../models/user');
const { v4: uuidv4 } = require('uuid');

const handleUserSignup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.redirect('/home'); // Redirecting to home after signup
    } catch (error) {
        res.status(500).send('Error signing up user');
    }
};

const handleUserLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).send('Invalid email or password');
        }
        const sessionId = uuidv4();
        res.cookie('sessionId', sessionId, { httpOnly: true });
        res.redirect('/home');
    } catch (error) {
        res.status(500).send('Error logging in user');
    }
};

module.exports = {
    handleUserSignup,
    handleUserLogin
};
```

#### Step 5: Create Signup and Login Forms

We'll create simple HTML forms for user signup and login.

**File: `views/signup.html`**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Signup</title>
</head>
<body>
    <h1>Signup</h1>
    <form action="/user/signup" method="POST">
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" required><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>
        <button type="submit">Signup</button>
    </form>
</body>
</html>
```

**File: `views/login.html`**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h1>Login</h1>
    <form action="/user/login" method="POST">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>
        <button type="submit">Login</button>
    </form>
</body>
</html>
```

#### Step 6: Handling Sessions

To manage user sessions, we'll generate a unique session ID upon successful login and store it in a cookie.

**File: `services/sessionService.js`**
```javascript
const { v4: uuidv4 } = require('uuid');
const sessionMap = new Map();

const setSession = (user) => {
    const sessionId = uuidv4();
    sessionMap.set(sessionId, user);
    return sessionId;
};

const getSession = (sessionId) => {
    return sessionMap.get(sessionId);
};

module.exports = {
    setSession,
    getSession
};
```

**Update `controllers/userController.js`**:
```javascript
const sessionService = require('../services/sessionService');

const handleUserLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).send('Invalid email or password');
        }
        const sessionId = sessionService.setSession(user);
        res.cookie('sessionId', sessionId, { httpOnly: true });
        res.redirect('/home');
    } catch (error) {
        res.status(500).send('Error logging in user');
    }
};
```

#### Step 7: Protect Routes

To protect routes and ensure only authenticated users can access certain pages, we'll create a middleware.

**File: `middleware/authMiddleware.js`**
```javascript
const sessionService = require('../services/sessionService');

const requireAuth = (req, res, next) => {
    const sessionId = req.cookies.sessionId;
    if (!sessionId || !sessionService.getSession(sessionId)) {
        return res.redirect('/user/login');
    }
    next();
};

module.exports = requireAuth;
```

**Update `app.js`**:
```javascript
const requireAuth = require('./middleware/authMiddleware');

app.get('/home', requireAuth, (req, res) => {
    res.send('Welcome to the home page!');
});
```

#### Conclusion

You've now created a basic user authentication system with signup, login, and session management in Node.js using Express and MongoDB. This system includes creating user models, handling user signup and login, and managing sessions using cookies. You can further enhance this system by adding more validation, password hashing, and additional security measures.

---
Certainly! Let's create detailed notes based on the explanation provided. This continuation includes handling user authentication using cookies in a Node.js application.

### User Authentication with Cookies in Node.js

#### Overview
In this section, we will implement a middleware to restrict access to certain routes based on user authentication using cookies. The process includes setting up a function to validate user login status, checking cookies, and redirecting users accordingly.

#### Steps

1. **Function to Restrict Access to Logged-in Users**
   
   We will create a function named `restrictToLoggedUsersOnly` to restrict access to logged-in users. This function will check if a user ID (`uid`) is present in the cookies and validate it.

   ```javascript
   const restrictToLoggedUsersOnly = (req, res, next) => {
       const userID = req.cookies.uid;
       if (!userID) {
           return res.redirect('/login');
       }
       const user = getUser(userID);
       if (!user) {
           return res.redirect('/login');
       }
       req.user = user;
       next();
   };
   module.exports = restrictToLoggedUsersOnly;
   ```

2. **Using a Cookie Parser Middleware**

   Since we need to read cookies, we will use the `cookie-parser` package. First, install it:

   ```bash
   npm install cookie-parser
   ```

   Then, include it in our application:

   ```javascript
   const cookieParser = require('cookie-parser');
   app.use(cookieParser());
   ```

3. **Restricting Access to Routes**

   We will apply the `restrictToLoggedUsersOnly` middleware to routes that require user authentication. For example, the `/generate` route:

   ```javascript
   const restrictToLoggedUsersOnly = require('./restrictToLoggedUsersOnly');
   app.use('/generate', restrictToLoggedUsersOnly);
   ```

4. **Testing the Middleware**

   - If a user is not logged in (i.e., no `uid` cookie is present), they will be redirected to the login page.
   - If a user is logged in and a valid `uid` cookie is present, they will access the `/generate` route.
   - If the server restarts, the in-memory user map will be cleared, requiring users to log in again.

#### Detailed Implementation

1. **Login Handler**

   When a user logs in, their `uid` is set as a cookie. If the login is successful, they will be redirected to the desired page.

   ```javascript
   app.post('/login', (req, res) => {
       const { username, password } = req.body;
       const user = authenticateUser(username, password); // Custom function to authenticate user
       if (user) {
           res.cookie('uid', user.id);
           res.redirect('/generate');
       } else {
           res.redirect('/login');
       }
   });
   ```

2. **Middleware to Restrict Access**

   This middleware function checks for the presence of the `uid` cookie. If absent or invalid, it redirects the user to the login page.

   ```javascript
   const restrictToLoggedUsersOnly = (req, res, next) => {
       const userID = req.cookies.uid;
       if (!userID) {
           return res.redirect('/login');
       }
       const user = getUser(userID);
       if (!user) {
           return res.redirect('/login');
       }
       req.user = user;
       next();
   };
   module.exports = restrictToLoggedUsersOnly;
   ```

3. **Applying the Middleware**

   The middleware is applied to routes that need protection. Here, it is applied to the `/generate` route.

   ```javascript
   const restrictToLoggedUsersOnly = require('./restrictToLoggedUsersOnly');
   app.use('/generate', restrictToLoggedUsersOnly);
   ```

4. **Cookie Parser Setup**

   Ensure the `cookie-parser` middleware is set up correctly in the main server file (`index.js`).

   ```javascript
   const cookieParser = require('cookie-parser');
   app.use(cookieParser());
   ```

5. **Testing**

   - **Logged Out**: Accessing `/generate` without being logged in redirects to `/login`.
   - **Logged In**: After logging in, accessing `/generate` works as expected.
   - **Server Restart**: After server restart, the user map is cleared, requiring re-login.

#### Example Output

1. **Login Attempt**:

   ```plaintext
   User attempts to log in with username and password.
   On successful login, uid cookie is set, and user is redirected to /generate.
   ```

2. **Access Restricted Route**:

   ```plaintext
   Accessing /generate without being logged in redirects to /login.
   ```

3. **After Server Restart**:

   ```plaintext
   User must log in again after server restart as the in-memory map is cleared.
   ```

By following these steps, you can effectively manage user authentication and restrict access to specific routes using cookies in a Node.js application. This approach ensures that users must log in to access protected resources, enhancing the security of your application.

---

## Detailed Notes on User Authentication and URL Generation

### Middleware for User Authentication
1. **Creating a Middleware Function:**
   - A middleware function is defined to restrict access to logged-in users only. This middleware checks if a user ID (`uid`) exists in the cookies.
   - If no `uid` is found, it redirects the user to the login page. Otherwise, it fetches the user data using the `getUser` function and attaches it to the request object.

2. **Middleware Implementation:**
   ```javascript
   function restrictToLoggedInUsers(req, res, next) {
     const userId = req.cookies?.uid;
     if (!userId) {
       return res.redirect('/login');
     }

     const user = getUser(userId);
     if (!user) {
       return res.redirect('/login');
     }

     req.user = user;
     next();
   }
   module.exports = restrictToLoggedInUsers;
   ```

### Using the `cookie-parser` Package
1. **Installing and Using `cookie-parser`:**
   - Install the `cookie-parser` package to parse cookies from incoming requests.
   - Add `cookie-parser` middleware to the application to access cookies.

   ```javascript
   const cookieParser = require('cookie-parser');
   app.use(cookieParser());
   ```

### Restricting Access to Certain Routes
1. **Applying Middleware to Routes:**
   - Apply the `restrictToLoggedInUsers` middleware to routes that require authentication.
   - Import and use the middleware for specific routes.

   ```javascript
   const restrictToLoggedInUsers = require('./restrictToLoggedInUsers');
   app.use('/urls', restrictToLoggedInUsers);
   ```

### Adding User Reference to URL Model
1. **Modifying URL Schema:**
   - Add a `createdBy` field to the URL schema to store the ID of the user who created the URL.
   - The `createdBy` field references the `User` model.

   ```javascript
   const urlSchema = new mongoose.Schema({
     // other fields
     createdBy: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User',
       required: true
     }
   });
   ```

### Handling User-Specific URL Display
1. **Filtering URLs by User:**
   - Modify the route handler to fetch only the URLs created by the logged-in user.

   ```javascript
   app.get('/urls', async (req, res) => {
     const urls = await URL.find({ createdBy: req.user._id });
     res.render('urls', { urls });
   });
   ```

### Check Authentication without Forcing Redirect
1. **Creating a Non-Forcing Middleware:**
   - Create a middleware that checks for authentication but does not force a redirect if the user is not logged in.
   - This middleware allows optional authentication.

   ```javascript
   function checkAuth(req, res, next) {
     const userId = req.cookies?.uid;
     if (userId) {
       const user = getUser(userId);
       if (user) {
         req.user = user;
       }
     }
     next();
   }
   ```

### Home Page Route with Optional Authentication
1. **Using the Non-Forcing Middleware:**
   - Apply the `checkAuth` middleware to the home page route.
   - If the user is authenticated, filter and display URLs created by the user.

   ```javascript
   app.get('/', checkAuth, async (req, res) => {
     if (!req.user) {
       return res.redirect('/login');
     }

     const urls = await URL.find({ createdBy: req.user._id });
     res.render('home', { urls });
   });
   ```

### Ensuring Session Persistence Across Server Restarts
1. **Session Persistence Issue:**
   - The current implementation clears the in-memory map on server restarts, causing the loss of user sessions.
   - Users need to log in again after each server restart.

2. **Possible Solutions:**
   - Implement session storage using a database or an in-memory store like Redis to persist sessions across server restarts.
   - Modify the authentication middleware to work with persistent sessions.

### Testing the Implementation
1. **Testing User Authentication:**
   - Open multiple browser instances to test the login and URL generation functionalities.
   - Ensure that only authenticated users can access their URLs and see their analytics.

2. **Example Workflow:**
   - User A logs in and generates a URL.
   - User B signs up, logs in, and generates a different URL.
   - Each user should only see the URLs they created on their home page.

### Summary
- Implementing user authentication involves creating middleware to check for logged-in users, modifying the URL schema to reference the user who created the URL, and ensuring only the URLs created by the logged-in user are displayed.
- Handling sessions and cookies properly ensures a smooth user experience.
- Testing with multiple users and browsers helps verify the implementation's correctness.
