

# MongoDB Read Operations

## Finding Documents in MongoDB

### Using `find()` and `findOne()`

#### Syntax:
- `db.collection_name.find({ key: value });`
- `db.collection_name.findOne({ key: value });`

#### Explanation:
- `find()` retrieves all documents matching the query criteria.
- `findOne()` retrieves the first document matching the query criteria.

#### Example:
```javascript
// Find products with price equal to 699
db.products.find({ 'price': { $eq: 699 } });

// Find categories with prices in a specific range
db.category.find({ price: { $in: [249, 129, 39] } });
```

---

## Importing JSON Data

### Syntax for Import:
```bash
mongoimport jsonfile.json –d database_name –c collection_name
```

#### Explanation:
- `mongoimport` is used to import JSON data into MongoDB.
- `-d` specifies the database name, and `-c` specifies the collection name.
- `--jsonArray` allows importing data with multiple MongoDB documents in a single JSON array.

#### Example:
```bash
// Import products.json into the shop database's products collection
mongoimport products.json -d shop -c products
```

---

## Cursors in MongoDB

### Introduction to Cursors:
- Cursors are pointers to query results on the server.
- They allow efficient retrieval of large result sets by fetching data in batches.
- MongoDB automatically uses cursors for queries.

### Cursor Methods:

#### Example:
```javascript
// Count documents where price is greater than 250
db.products.find({ price: { $gt: 250 } }).count();

// Limit results to 5 documents with prices greater than 250
db.products.find({ price: { $gt: 250 } }).limit(5);

// Skip first 2 results and limit to 5 documents with prices greater than 250
db.products.find({ price: { $gt: 250 } }).limit(5).skip(2);

// Limit to 3 documents with prices greater than 1250, sorted in ascending order of price
db.products.find({ price: { $gt: 1250 } }).limit(3).sort({ price: 1 });
```

### Cursor Methods (Caveats):
- **Performance Implications:**
  - `skip()` can be inefficient for large offsets.
  - Using `sort()` on large result sets may impact performance.
- **Use with Caution:**
  - Be cautious with `limit()` and `skip()` on large collections.
  - Consider indexing for optimized performance.

---

## Logical and Comparison Operators

### Logical Operators:
- `$and`, `$or`, `$not`, `$nor` are used for logical operations.
  
```
{ $and: [ { condition1 }, { condition2 }, ... ]
{ field: { $not: { operator: value } } }
```
---

### Comparison Operators:
- `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `$nin` are used for comparisons.

---

## Special Operators and Features

### Complex Expressions:
- Use the `$expr` operator for complex comparisons within a query.
- The $expr operator allows using aggregation expressions within a query.
- Useful when you need to compare fields from the same document in a more complex manner.

```javascript
//syntax
{ $expr: { operator: [field, value] } }
// Find products with price greater than a dynamically provided value
db.products.find({ $expr: { $gt: ['$price', 1340] } });
```

---

### Elements Operator:
- Use `$exists`, `$type`, `$size` for element-based queries.
```javascript
//syntax
{ field: { $exists: <boolean>} }
{ field: { $type: "<bson-data-type>" } }
{ field: { $size: <array-length> } }

// Find documents where a field exists
db.collection.find({ field: { $exists: true } });
```

---

### Projection:
- Use projection to include or exclude specific fields in query results.
- db.collection.find({}, { field1: 1, field2: 1 })
- To include specific fields, use projection with a value of 1 for the fields you want.
- To exclude fields, use projection with a value of 0 for the fields you want to exclude.
- You cannot include and exclude fields simultaneously in the same query
- 

```javascript
// Include specific fields in the query results
db.collection.find({}, { field1: 1, field2: 1 });

// Exclude specific fields in the query results
db.collection.find({}, { field1: 0, field2: 0 });
```

---

### Embedded Documents:
- Query documents inside embedded documents using dot notation.

```javascript
//syntax
db.collection.find({ “parent.child”: value })

// Find documents with a specific value in a nested field
db.collection.find({ "parent.child": value });
```

### $all vs $elemMatch:
- Use `$all` to match documents with arrays containing all specified elements.
- Use `$elemMatch` to match documents with arrays containing at least one element that meets all specified criteria.
```
{ <field>: { $all: [ <value1> , <value2> ... ] } }
{ <field>: { $elemMatch: { <query1>, <query2>, ... } } }
```

---

These detailed notes cover a range of MongoDB read operations and concepts, providing clear explanations, syntax, and examples for each function or expression.
