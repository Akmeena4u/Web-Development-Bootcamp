
# MongoDB Course Notes

## Managing Databases and Collections in MongoDB

### Creating / Deleting Databases
- **Show all databases:**
  ```javascript
  show dbs;
  ```
- **Use a specific database:**
  ```javascript
  use <database-name>;
  ```
- **Delete the current database:**
  ```javascript
  db.dropDatabase();
  ```

### Creating / Deleting Collections
- **Show all collections in the current database:**
  ```javascript
  show collections;
  ```
- **Create a new collection:**
  ```javascript
  db.createCollection('<collection-name>');
  ```
- **Delete a collection:**
  ```javascript
  db.<collection-name>.drop();
  ```

---

## Insert Operations in MongoDB

### Inserting Documents in MongoDB
- **Insert a single document:**
  ```javascript
  db.<collection-name>.insertOne({
    field1: value1,
    field2: value2,
    // other fields
  });
  ```
  **Example:**
  ```javascript
  db.Students.insertOne({
    name: "Binamra",
    age: 20
  });
  ```

- **Insert multiple documents:**
  ```javascript
  db.<collection-name>.insertMany([
    { field1: value1, field2: value2, /* other fields */ },
    { field1: value1, field2: value2, /* other fields */ }
    // other documents
  ]);
  ```
  **Example:**
  ```javascript
  db.Students.insertMany([
    { name: "Binamra", age: 20 },
    { name: "Thapa", age: 21 }
  ]);
  ```

---

### Quotes and Special Characters
- **When to use quotes:**
  - If a field name contains special characters, spaces, or starts with a numeric digit, use quotes.
  - If a field name is a reserved keyword in MongoDB, use quotes.

  **Example:**
  ```javascript
  db.collection.insertOne({ "1name": "John", "last-name": "Doe", "class": "Math" });
  ```

---

### Ordered and Unordered Inserts
- **Ordered Inserts (default):**
  - MongoDB stops on the first error encountered.
  ```javascript
  db.<collection-name>.insertMany([ doc1, doc2, /* other documents */ ]);
  ```

  **Example:**
  ```javascript
  db.Students.insertMany([
    { name: "Vinod", age: 29 },
    { name: "Binamra", age: 20 },
    { name: "InvalidDoc", invalidField: "error" },
    { name: "Thapa", age: 21 }
  ]);
  ```
  - In this example, `Vinod` and `Binamra` will be inserted, but the process stops at `InvalidDoc`.

- **Unordered Inserts:**
  - MongoDB continues processing after encountering an error.
  ```javascript
  db.<collection-name>.insertMany([ doc1, doc2, /* other documents */ ], { ordered: false });
  ```

  **Example:**
  ```javascript
  db.Students.insertMany([
    { name: "Vinod", age: 29 },
    { name: "Binamra", age: 20 },
    { name: "InvalidDoc", invalidField: "error" },
    { name: "Thapa", age: 21 }
  ], { ordered: false });
  ```
  - In this example, `Vinod`, `Binamra`, and `Thapa` will be inserted, but `InvalidDoc` will not be inserted.

---

### Case Sensitivity in MongoDB
- **Collection names are case-sensitive.**
  ```javascript
  db.Product.insertOne({ name: 'thapa', age: 30 });
  db.product.insertOne({ name: 'thapa', age: 30 }); // Different collection
  ```

- **Field names within documents are also case-sensitive.**
  ```javascript
  db.collection.insertOne({ Name: 'Thapa', name: 'Vinod' });
  ```
  - `Name` and `name` are considered different fields.

