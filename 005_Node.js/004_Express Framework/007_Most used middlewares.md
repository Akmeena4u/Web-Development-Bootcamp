### Most Used Built-in Middlewares in Express

Express.js provides several built-in middleware functions that handle common tasks. Here are some of the most commonly used ones:

#### 1. `express.json()`
This middleware parses incoming requests with JSON payloads and is based on `body-parser`.

**Example:**
```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.post('/data', (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
In this example, the `express.json()` middleware parses the JSON payload of incoming requests.

#### 2. `express.urlencoded()`
This middleware parses incoming requests with URL-encoded payloads, typically from HTML forms, and is based on `body-parser`.

**Example:**
```javascript
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/form', (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
In this example, the `express.urlencoded()` middleware parses URL-encoded payloads.

#### 3. `express.static()`
This middleware serves static files such as HTML, CSS, JavaScript, images, etc., from a directory.

**Example:**
```javascript
const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
In this example, the `express.static()` middleware serves files from the `public` directory. For example, a request to `/index.html` will serve the `public/index.html` file.

#### 4. `express.Router`
This is not a middleware itself, but it is used to create modular, mountable route handlers. A `Router` instance is a complete middleware and routing system.

**Example:**
```javascript
const express = require('express');
const app = express();
const router = express.Router();

router.get('/users', (req, res) => {
  res.send('Users List');
});

router.post('/users', (req, res) => {
  res.send('Create User');
});

app.use('/api', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
In this example, `express.Router` is used to create a modular routing system.

#### 5. `express.raw()`
This middleware parses incoming requests with `Content-Type` header set to `application/octet-stream` and makes the raw data available in `req.body`.

**Example:**
```javascript
const express = require('express');
const app = express();

app.use(express.raw({ type: 'application/octet-stream' }));

app.post('/raw-data', (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
In this example, `express.raw()` middleware handles raw binary data.

#### 6. `express.text()`
This middleware parses incoming requests with `Content-Type` header set to `text/plain` and makes the text available in `req.body`.

**Example:**
```javascript
const express = require('express');
const app = express();

app.use(express.text());

app.post('/text-data', (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
In this example, `express.text()` middleware handles plain text data.

### Conclusion
Express provides several built-in middleware functions that simplify the process of handling different types of request payloads and serving static files. Using these built-in middlewares can help streamline the development process and ensure your application is handling requests efficiently.
