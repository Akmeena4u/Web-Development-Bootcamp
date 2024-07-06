### Essential Express Middleware Libraries (Including Body-Parser)

Express.js uses middleware to add functionality to web applications. Here are six essential middleware libraries:

#### 1. Helmet
**Purpose:** Secures HTTP headers.

**Features:**
- Protects against security vulnerabilities.
- Forces HTTPS.
- Configurable for different browsers.

**Installation:**
```bash
npm install helmet --save
```

**Usage:**
```javascript
const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());

app.listen(3000);
```

#### 2. Cookie-parser
**Purpose:** Parses cookies in requests.

**Features:**
- Handles signed and unsigned cookies.
- Supports JSON cookies.

**Installation:**
```bash
npm install --save cookie-parser
```

**Usage:**
```javascript
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
  res.cookie('name', 'express').send('cookie set');
});

app.listen(3000);
```

#### 3. Passport
**Purpose:** Manages authentication.

**Features:**
- Supports many authentication strategies.
- Easy to integrate.
- Supports sessions.

**Installation:**
```bash
npm install passport
```

**Usage:**
```javascript
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();

passport.use(new LocalStrategy((username, password, done) => {
  // User authentication logic here
}));

app.post('/login', passport.authenticate('local'), (req, res) => {
  res.redirect('/users/' + req.user.username);
});

app.listen(3000);
```

#### 4. Morgan
**Purpose:** Logs HTTP requests.

**Features:**
- Predefined and custom log formats.

**Installation:**
```bash
npm install morgan
```

**Usage:**
```javascript
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));

app.listen(3000);
```

#### 5. CORS
**Purpose:** Enables cross-origin requests.

**Features:**
- Configurable to allow specific HTTP methods.

**Installation:**
```bash
npm install --save cors
```

**Usage:**
```javascript
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', cors(), (req, res) => {
  res.json({ message: 'Happy Coding' });
});

app.listen(3000);
```

#### 6. Body-Parser
**Purpose:** Parses incoming request bodies in a middleware before your handlers.

**Features:**
- Parses JSON, URL-encoded, and raw request bodies.

**Installation:**
```bash
npm install body-parser
```

**Usage:**
```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.post('/data', (req, res) => {
  res.send(req.body);
});

app.listen(3000);
```

These middleware libraries help secure, parse, authenticate, log, and manage cross-origin requests in Express applications.
