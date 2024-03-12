# Chapter 7 - Mongoose and REST APIs

## Why Mongoose

Mongoose is a powerful object modeling tool designed for MongoDB, a widely-used NoSQL database. It offers a schema-based solution for data modeling, validation, and seamless interaction with MongoDB. Here are some key aspects of Mongoose:

### 1. Schema Definition:

Mongoose enables you to define a schema for your data models. Schemas establish a structure for MongoDB collection documents, specifying fields, types, and constraints.

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  age: Number
});

const User = mongoose.model('User', userSchema);
```

### 2. Model Creation:

Mongoose facilitates the creation of models based on defined schemas. Models act as constructors that allow interaction with MongoDB collections.

```javascript
const newUser = new User({ name: 'John Doe', email: 'john@example.com', age: 25 });

newUser.save((err, user) => {
  if (err) return console.error(err);
  console.log('User saved:', user);
});
```

### 3. Data Validation:

Mongoose provides built-in validation for data. Validation rules can be specified for each field in your schema.

```javascript
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true, validate: /\S+@\S+\.\S+/ },
  age: { type: Number, min: 0 }
});
```

### 4. Querying and CRUD Operations:

Mongoose simplifies database interactions by providing a high-level API for querying, creating, updating, and deleting documents.

```javascript
// Find users with age greater than 21
User.find({ age: { $gt: 21 } }, (err, users) => {
  if (err) return console.error(err);
  console.log('Users with age > 21:', users);
});
```

### 5. Middleware:

Mongoose supports middleware functions that can be executed before or after certain operations (e.g., save, validate, remove), allowing custom actions during the document lifecycle.

```javascript
userSchema.pre('save', function (next) {
  // Do something before saving
  console.log('About to save:', this);
  next();
});
```

### 6. Population:

Mongoose supports population, enabling the referencing of other documents in your models and automatic retrieval of the referenced data.

```javascript
const postSchema = new Schema({
  title: String,
  content: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' }
});
```

## Alternative Ways:

### 1. MongoDB Native Driver:

Interact with MongoDB using the official MongoDB Node.js driver, involving raw MongoDB queries without Mongoose's abstraction.

```javascript
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Example of inserting a document
client.connect(async err => {
  const collection = client.db('test').collection('users');
  await collection.insertOne({ name: 'John Doe', age: 25 });
  client.close();
});
```

### 2. ODM/ORM Libraries:

Explore other Object Document Mapping (ODM) or Object-Relational Mapping (ORM) libraries for different databases, like Sequelize for SQL databases or Mongoose-like libraries for other NoSQL databases.

### 3. Raw HTTP Requests:

For certain cases, interact with MongoDB using raw HTTP requests. MongoDB provides a RESTful API, allowing basic CRUD operations over HTTP.

```javascript
// Example using the fetch API
const url = 'http://localhost:27017/mydatabase/mycollection';
const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John Doe', age: 25 })
};

fetch(url, options)
  .then(response => response.json())
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));
```

When choosing between Mongoose and alternative methods, consider factors like ease of use, development speed, and project-specific requirements. Mongoose excels in MongoDB projects where a schema-based approach and data validation are crucial.

## Installation

You can install Mongoose using npm:

```bash
npm install mongoose
```

After installation, import Mongoose into your project:

```javascript
const mongoose = require("mongoose");
```

## Connection to Database

Connect Mongoose to your MongoDB database using the following commands:

```javascript
const mongoose = require('mongoose');
await mongoose.connect('mongodb://127.0.0.1:27017/test');
```

The connection can be stored in a variable for checking connection status and later disconnecting the database.

## Schema

A schema is a specification for creating data objects in the database. It defines the structure of documents within a MongoDB collection.

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title:  String,
  status: Boolean,
  date: { type: Date, default: Date.now }
});
```

Common SchemaTypes include String, Number, Date, Boolean, Mixed, ObjectId, and Array. You can apply various conditions inside the Schema object for more control over data.

## Model

Models act as classes, creating instances of documents based on the defined schema. They are used to interact with MongoDB collections.

```javascript
const mongoose = require('mongoose');
const { Schema } =  mongoose;

const taskSchema = new Schema({
  title:  String,
  status: Boolean,
  date: { type: Date, default: Date.now }
});

const Task = mongoose.model('Task', taskSchema);
```

## CRUD in Mongoose

### Create - New Objects

To create new objects in the database, use the new keyword and create an object from the model. Save the object using the save() function.

```javascript
server.post("/task", function(req, res) {
  let task = new Task();

  task.title = "shopping";
  task.status = true;
  task.date = new Date();

  task.save();
});
```

### Read Objects

Read objects from the database using find queries with optional conditions.

```javascript
server.get("/task/:name", function(req, res) {
  Task.findOne({ name: req.params.name }, function(err, doc) {
    console.log(doc);  // Contains the database object
  });
});

server.get("/tasks", function(req, res) {
  Task.find({}, function(err, docs) {
    console.log(docs);  // An array containing all task objects
  });
});
```

### Update - Existing Objects

Update existing objects by finding and then updating them. Two scenarios involve overwriting all values or updating specific values.

```javascript
// Overwriting all properties
server.put("/task/:name", function(req, res) {
  Task.findOneAndReplace({ name: req.params.name }, { name: 'YouStart' }, { new: true }, function(err, doc) {
    console.log(doc);  // Contains the new database object
  });
});

// Updating specific values
server
