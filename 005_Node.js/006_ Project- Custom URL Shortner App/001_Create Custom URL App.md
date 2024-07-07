### Introduction

Here we'll be creating a URL shortener project. A URL shortener takes a long URL and turns it into a short one. For instance, services like Bitly can take a long URL and generate a short version of it.

### What is a URL Shortener?

A URL shortener takes a long URL and converts it into a shorter version. When you visit the short URL, it redirects you to the original long URL. Additionally, it keeps track of the total visits to the short URL.

### Features to Implement

1. **Shorten URL**: Generate a short URL for a given long URL.
2. **Redirect URL**: Redirect to the original URL when the short URL is visited.
3. **Analytics**: Keep track of the number of clicks for each short URL.

### Setting Up the Project

1. **Create Project Folder**: Create an empty folder named `short-url`.
2. **Initialize NPM**: Run `npm init` to initialize the project.
3. **Install Dependencies**:
   - Express: `npm install express`
   - Mongoose: `npm install mongoose`
   - NanoID: `npm install nanoid`

### Project Structure

- `controllers/`
- `models/`
- `routes/`
- `index.js`
- `connect.js`

### Step-by-Step Implementation

#### 1. Set Up Express

```javascript
// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/short-url', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
```

#### 2. Create MongoDB Connection

```javascript
// connect.js
const mongoose = require('mongoose');

const connectToMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/short-url', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectToMongoDB;
```

#### 3. Define URL Model

```javascript
// models/url.js
const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true
  },
  originalUrl: {
    type: String,
    required: true
  },
  visitHistory: [
    {
      timestamp: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

const URL = mongoose.model('URL', urlSchema);
module.exports = URL;
```

#### 4. Create URL Controller

```javascript
// controllers/urlController.js
const { nanoid } = require('nanoid');
const URL = require('../models/url');

const generateNewShortUrl = async (req, res) => {
  const { originalUrl } = req.body;
  
  if (!originalUrl) {
    return res.status(400).json({ error: 'Original URL is required' });
  }

  const shortId = nanoid(8);
  const newUrl = new URL({ shortId, originalUrl });

  await newUrl.save();
  
  res.json({ shortId, originalUrl });
};

const handleRedirect = async (req, res) => {
  const { shortId } = req.params;

  const url = await URL.findOne({ shortId });
  
  if (!url) {
    return res.status(404).json({ error: 'Short URL not found' });
  }

  url.visitHistory.push({ timestamp: Date.now() });
  await url.save();

  res.redirect(url.originalUrl);
};

const getAnalytics = async (req, res) => {
  const { shortId } = req.params;
  
  const url = await URL.findOne({ shortId });

  if (!url) {
    return res.status(404).json({ error: 'Short URL not found' });
  }

  res.json({ totalClicks: url.visitHistory.length });
};

module.exports = {
  generateNewShortUrl,
  handleRedirect,
  getAnalytics
};
```

#### 5. Set Up Routes

```javascript
// routes/urlRoutes.js
const express = require('express');
const { generateNewShortUrl, handleRedirect, getAnalytics } = require('../controllers/urlController');
const router = express.Router();

router.post('/url', generateNewShortUrl);
router.get('/:shortId', handleRedirect);
router.get('/analytics/:shortId', getAnalytics);

module.exports = router;
```

#### 6. Integrate Routes in Express

```javascript
// index.js
const urlRoutes = require('./routes/urlRoutes');

app.use('/api', urlRoutes);
```

### Testing the Application

1. **Start the Server**: `npm start`
2. **Use Postman** to test the API endpoints:
   - POST `/api/url` with a JSON body containing `{ "originalUrl": "http://example.com" }`
   - GET `/api/{shortId}` to be redirected to the original URL
   - GET `/api/analytics/{shortId}` to view click analytics

### Conclusion

In this video, we've built a simple URL shortener service using Node.js, Express, and MongoDB. This service can generate short URLs, handle redirections, and keep track of click analytics.
