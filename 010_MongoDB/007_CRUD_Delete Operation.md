

# MongoDB Delete Operations

## deleteOne() and deleteMany()

### deleteOne()

### Syntax:
```javascript
db.collectionName.deleteOne({ filter });
```

### Explanation:
- `deleteOne()` deletes the first document that matches the specified filter criteria.
- If multiple documents match the filter, only the first matching document is deleted.

### Example:
```javascript
// Delete the first document that matches the filter
db.products.deleteOne({ price: 699 });
```

In this example, the first document in the `products` collection with a price of 699 is deleted.

### deleteMany()

### Syntax:
```javascript
db.collectionName.deleteMany({ filter });
```

### Explanation:
- `deleteMany()` deletes all documents that match the specified filter criteria.
- This operation can potentially remove multiple documents from the collection.

### Example:
```javascript
// Delete all documents that match the filter
db.sales.deleteMany({ price: 55 });
```

In this example, all documents in the `sales` collection with a price of 55 are deleted.

## Detailed Explanations and Examples

### deleteOne() Detailed Explanation:
- The `deleteOne()` method is useful when you need to remove a single document based on specific criteria.
- It is efficient for operations where you know the filter will match only one document, or when you only want to delete the first match.

### More Examples:
```javascript
// Delete a user by username
db.users.deleteOne({ username: "john_doe" });

// Delete an order by order ID
db.orders.deleteOne({ orderId: "ORD12345" });
```

In these examples, a single user with the username "john_doe" and a single order with the order ID "ORD12345" are deleted.

### deleteMany() Detailed Explanation:
- The `deleteMany()` method is used when you need to remove multiple documents that match the filter criteria.
- It is ideal for cleanup operations where you want to remove a set of documents that meet certain conditions.

### More Examples:
```javascript
// Delete all users who are inactive
db.users.deleteMany({ status: "inactive" });

// Delete all products that are out of stock
db.products.deleteMany({ inStock: false });
```

In these examples, all inactive users and all out-of-stock products are deleted from their respective collections.

## Important Considerations
- **Filter Criteria**: Both `deleteOne()` and `deleteMany()` require a filter to specify which documents to delete. The filter uses the same query operators as `find()` operations.
- **Return Value**: Both methods return a result object that contains the `acknowledged` property, indicating if the operation was acknowledged by the server, and the `deletedCount` property, which shows the number of documents deleted.

### Example of Return Value:
```javascript
// Store the result of delete operation
let result = db.products.deleteMany({ price: { $lt: 100 } });

console.log(result.deletedCount); // Output the number of documents deleted
```

In this example, `result.deletedCount` will display the number of products deleted that have a price less than 100.

## Using Filters
- Filters are used to specify the criteria for which documents should be deleted. Filters can be simple or complex and can use various query operators.

### Examples with Filters:
```javascript
// Delete a single document based on an exact match
db.inventory.deleteOne({ item: "book", qty: 100 });

// Delete multiple documents using comparison operators
db.inventory.deleteMany({ qty: { $lt: 50 } });
```

In these examples, the first deletes an inventory item with an exact match of item and quantity, while the second deletes all inventory items with a quantity less than 50.

## Summary
- `deleteOne()` and `deleteMany()` are powerful methods for removing documents from a MongoDB collection.
- Understanding the proper use of filters and the implications of deleting documents is crucial for effective database management.

