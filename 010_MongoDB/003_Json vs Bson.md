
### BSON MongoDB 

1. In MongoDB, we write in JSON format only but behind the scene data is stored in BSON (Binary JSON) format, a binary representation of JSON.
2. By utilizing BSON, MongoDB can achieve higher read and write speeds, reduced storage requirements, and improved data manipulation capabilities, making it well-suited for handling large and 
   complex datasets whilemaintaining performance efficiency.

### JSON vs BSON

#### JSON (JavaScript Object Notation)
- **Definition**: A lightweight data interchange format.
- **Characteristics**:
  - **Text-Based**: Human-readable and easy to write.
  - **Data Types**: Supports strings, numbers, booleans, arrays, objects, and null.
  - **Usage**: Commonly used for data exchange between web servers and clients due to its simplicity and ease of use.
  - **Readability**: Highly readable and easy to debug.

#### BSON (Binary JSON)
- **Definition**: A binary representation of JSON-like documents.
- **Characteristics**:
  - **Binary Format**: Efficient for storage and quick to parse.
  - **Data Types**: Supports more data types than JSON, including dates, embedded documents, and binary data.
  - **Usage**: Optimized for performance, commonly used in databases like MongoDB to efficiently store and retrieve data.
  - **Size**: Can be larger than JSON due to additional metadata for type information.

  ![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/c01ce05b-27a7-4537-8771-659107256624)

