

### Model-View-Controller (MVC) Pattern in Node.js

The MVC pattern is a widely used software design pattern that divides an application into three interconnected components: Model, View, and Controller. This separation helps in organizing code, making it more maintainable and scalable. Let's break down each component and see how they interact with each other:

1. **Model**: This represents the data or the business logic of the application. It directly manages the data, logic, and rules of the application.
2. **View**: This represents the UI or the presentation layer of the application. It displays the data from the model to the user and sends user commands to the controller.
3. **Controller**: This acts as an intermediary between the Model and the View. It listens to the input from the View, processes it (using the Model), and returns the output display to the View.

### How it Works- Controller manipulates the model and model updates the view 

**Controller manipulates the Model:**
- When the user interacts with the app (e.g., clicks a button), the Controller handles this input.
- The Controller then updates or retrieves data from the Model. This could involve creating a new item, updating an existing item, or fetching data from a database.

**Model updates the View:**
- After the Model is updated, it contains the new state of the data.
- The View then reflects these changes to the user. This means the user interface is updated to show the latest data.

  ![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/cf041608-4e51-4a05-af7e-98f24815f1b2)

**Summary ** -

  ![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/3e492dd5-1a16-4478-884a-081653eea754)


---

### Refactoring to MVC in Node.js with Express

To refactor an existing project to follow the MVC pattern, follow these steps:

1. **Create the Directory Structure**:
   - `models/`: This will contain all the data-related logic (e.g., database schemas).
   - `views/`: This will contain the templates or HTML files to render the UI (if applicable).
   - `controllers/`: This will contain the logic to handle requests and interact with models.
   - `routes/`: This will contain the route definitions and middleware.

2. **Move Model Logic**:
   - Create a file in the `models/` directory, e.g., `user.js` for the User model.
   - Define the schema and model logic here.

   ```javascript
   // models/user.js
   const mongoose = require('mongoose');
   const userSchema = new mongoose.Schema({
     name: String,
     email: String,
     // other fields
   });

   module.exports = mongoose.model('User', userSchema);
   ```

3. **Move Controller Logic**:
   - Create a file in the `controllers/` directory, e.g., `userController.js`.
   - Define functions to handle various actions (e.g., create, read, update, delete users).

   ```javascript
   // controllers/userController.js
   const User = require('../models/user');

   exports.getAllUsers = async (req, res) => {
     try {
       const users = await User.find();
       res.json(users);
     } catch (err) {
       res.status(500).json({ error: err.message });
     }
   };

   exports.getUserById = async (req, res) => {
     try {
       const user = await User.findById(req.params.id);
       res.json(user);
     } catch (err) {
       res.status(500).json({ error: err.message });
     }
   };

   // Other controller methods...
   ```

4. **Move Route Definitions**:
   - Create a file in the `routes/` directory, e.g., `userRoutes.js`.
   - Define the routes and link them to the corresponding controller methods.

   ```javascript
   // routes/userRoutes.js
   const express = require('express');
   const router = express.Router();
   const userController = require('../controllers/userController');

   router.get('/', userController.getAllUsers);
   router.get('/:id', userController.getUserById);
   // Other routes...

   module.exports = router;
   ```

5. **Update the Entry Point**:
   - Modify your main entry file (e.g., `index.js` or `app.js`) to use the routes and set up middleware.

   ```javascript
   // index.js
   const express = require('express');
   const mongoose = require('mongoose');
   const userRoutes = require('./routes/userRoutes');

   const app = express();

   mongoose.connect('mongodb://localhost:27017/your-db', { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log('MongoDB connected'))
     .catch(err => console.error(err));

   app.use(express.json());
   app.use('/users', userRoutes);

   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
   ```


---

### Example: Refactored User CRUD Operations

Let's assume you have a basic Express.js application to handle user CRUD operations. Here’s how you refactor it to use the MVC pattern.

1. **Model**: `models/user.js`
   ```javascript
   const mongoose = require('mongoose');

   const userSchema = new mongoose.Schema({
     name: {
       type: String,
       required: true
     },
     email: {
       type: String,
       required: true
     }
   });

   module.exports = mongoose.model('User', userSchema);
   ```

2. **Controller**: `controllers/userController.js`
   ```javascript
   const User = require('../models/user');

   exports.createUser = async (req, res) => {
     try {
       const user = new User(req.body);
       await user.save();
       res.status(201).send(user);
     } catch (error) {
       res.status(400).send(error);
     }
   };

   exports.getAllUsers = async (req, res) => {
     try {
       const users = await User.find();
       res.status(200).send(users);
     } catch (error) {
       res.status(500).send(error);
     }
   };

   exports.getUserById = async (req, res) => {
     try {
       const user = await User.findById(req.params.id);
       if (!user) {
         return res.status(404).send();
       }
       res.status(200).send(user);
     } catch (error) {
       res.status(500).send(error);
     }
   };

   exports.updateUser = async (req, res) => {
     try {
       const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
       if (!user) {
         return res.status(404).send();
       }
       res.status(200).send(user);
     } catch (error) {
       res.status(400).send(error);
     }
   };

   exports.deleteUser = async (req, res) => {
     try {
       const user = await User.findByIdAndDelete(req.params.id);
       if (!user) {
         return res.status(404).send();
       }
       res.status(200).send(user);
     } catch (error) {
       res.status(500).send(error);
     }
   };
   ```

3. **Routes**: `routes/userRoutes.js`
   ```javascript
   const express = require('express');
   const router = express.Router();
   const userController = require('../controllers/userController');

   router.post('/', userController.createUser);
   router.get('/', userController.getAllUsers);
   router.get('/:id', userController.getUserById);
   router.patch('/:id', userController.updateUser);
   router.delete('/:id', userController.deleteUser);

   module.exports = router;
   ```

4. **Main Application File**: `index.js`
   ```javascript
   const express = require('express');
   const mongoose = require('mongoose');
   const userRoutes = require('./routes/userRoutes');

   const app = express();

   mongoose.connect('mongodb://localhost:27017/your-db', { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log('MongoDB connected'))
     .catch(err => console.error(err));

   app.use(express.json());
   app.use('/users', userRoutes);

   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
   ```

### Conclusion

By refactoring your Node.js application to follow the MVC pattern, you achieve better separation of concerns, making your application more modular, easier to maintain, and scalable. This approach is particularly beneficial as your application grows in complexity.
