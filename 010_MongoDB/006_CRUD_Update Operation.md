

# MongoDB Update Operations

## updateOne() and updateMany()

### Syntax for updateOne():
```javascript
db.collectionName.updateOne(
  { filter },
  { $set: { existingField: newValue, newField: "new value", ... } }
);
```

### Syntax for updateMany():
```javascript
db.collectionName.updateMany(
  { filter },
  { $set: { existingField: newValue, ... } }
);
```

### Explanation:
- `updateOne()` updates the first document that matches the filter.
- `updateMany()` updates all documents that match the filter.

### Example:
```javascript
// Update a single document in the collection
db.products.updateOne(
  { _id: ObjectId("612c89010b2a7d120fb7c9f9") },
  { $set: { price: 799, inStock: true } }
);

// Update multiple documents in the collection
db.products.updateMany(
  { category: "Electronics" },
  { $set: { discount: 10 } }
);
```

---

## Removing and Renaming Fields

### Removing Fields with `$unset`:
```javascript
db.collectionName.updateOne(
  { filter },
  { $unset: { fieldName: 1 } }
);
```

### Renaming Fields with `$rename`:
```javascript
db.collectionName.updateOne(
  { filter },
  { $rename: { oldFieldName: "newFieldName" } }
);
```

### Example:
```javascript
// Remove a field from a document
db.products.updateOne(
  { _id: ObjectId("612c89010b2a7d120fb7c9f9") },
  { $unset: { description: 1 } }
);

// Rename a field in a document
db.products.updateOne(
  { _id: ObjectId("612c89010b2a7d120fb7c9f9") },
  { $rename: { "category": "productCategory" } }
);
```

---

## Updating Arrays and Embedded Documents

### Adding Elements to Arrays with `$push`:
```javascript
db.collectionName.updateOne(
  { filter },
  { $push: { arrayField: "new element" } }
);
```

### Removing Elements from Arrays with `$pop`:
```javascript
db.collectionName.updateOne(
  { filter },
  { $pop: { arrayField: value } }
);
```

### Updating Specific Elements in Arrays with `$set`:
```javascript
db.collectionName.updateOne(
  { filter },
  { $set: { "arrayField.$.text": "Updated text" } }
);
```

### Example:
```javascript
// Add a new element to an array in a document
db.users.updateOne(
  { _id: ObjectId("612c89010b2a7d120fb7c9f9") },
  { $push: { interests: "Hiking" } }
);

// Remove the last element from an array in a document
db.users.updateOne(
  { _id: ObjectId("612c89010b2a7d120fb7c9f9") },
  { $pop: { interests: 1 } }
);

// Update a specific element in an array in a document
db.users.updateOne(
  { _id: ObjectId("612c89010b2a7d120fb7c9f9"), "tasks.taskId": 1 },
  { $set: { "tasks.$.status": "Completed" } }
);
```

---

