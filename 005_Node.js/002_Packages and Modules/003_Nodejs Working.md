

### Node.js Architecture and Execution Model

#### Overview

Welcome back everyone! In this , we will explore the architecture of Node.js. Understanding the internals and how Node.js operates is crucial for becoming an effective Node.js developer. This video is highly important, so make sure to watch it till the end.

#### Node.js Architecture

1. **Client Requests:**
   - The architecture begins with a client making a request to the server. The client could be any user interacting with the web application.
   - The request from the client is sent to the server running on Node.js.
   - ![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/6b3bf114-a74b-44a5-b286-b36dbaca83b8)


2. **Event Queue:**
   - All incoming requests are first placed in an Event Queue.
   - Example: User1 makes a request, it goes to the Event Queue. User2 makes another request, it also goes to the Event Queue.
   - The Event Queue manages these requests in a First In First Out (FIFO) manner.

3. **Event Loop:**
   - The Event Loop constantly monitors the Event Queue to see if there are any requests to be processed.
   - It picks up requests from the queue one by one.
   - This mechanism ensures that requests are handled efficiently.

4. **Handling Requests:**
   - When the Event Loop picks up a request, it checks if the request is a blocking or a non-blocking operation.
   - **Non-blocking Operations (Asynchronous):**
     - If the request is non-blocking, the Event Loop processes it immediately and sends a response back to the user.
     - Example: A simple data retrieval operation.
     - ![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/1f110e03-4d90-4baf-a870-da9fce916603)

   - **Blocking Operations (Synchronous):**
     - If the request is blocking, it is sent to the Thread Pool for processing.
     - Blocking operations could include complex computations or file I/O operations.
     - ![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/62eb9fdf-3302-4cab-b2b2-5d9849c6b997)
     - ![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/0f22375f-9e7c-403f-b799-bc812a37831a)

  **Summary**  
 ![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/299b9074-17b2-402b-b963-d69bc287aa85)
     


5. **Thread Pool:**
   - The Thread Pool is a pool of threads (workers) that handle blocking operations.
   - By default, Node.js uses a Thread Pool size of 4.
   - If all threads are busy, incoming blocking requests have to wait until a thread becomes available.

6. **Completion of Requests:**
   - Once the Thread Pool completes a blocking operation, it returns the result to the Event Loop.
   - The Event Loop then sends the response back to the user.

#### Example Code

To illustrate the difference between blocking and non-blocking operations, let's look at some code examples.

**Blocking Operation:**
```javascript
const fs = require('fs');

console.log(1);
const result = fs.readFileSync('contacts.txt', 'utf8');
console.log(result);
console.log(2);
```
- In the above code, `readFileSync` is a blocking operation. The execution waits for the file reading to complete before moving to the next line.

**Non-blocking Operation:**
```javascript
const fs = require('fs');

console.log(1);
fs.readFile('contacts.txt', 'utf8', (err, result) => {
  if (err) throw err;
  console.log(result);
});
console.log(2);
```
- Here, `readFile` is a non-blocking operation. The callback function handles the result once the file reading is complete, allowing the execution to continue immediately.

#### Thread Pool Size and CPU Cores

- The default Thread Pool size in Node.js is 4.
- You can adjust the Thread Pool size based on the number of CPU cores available on your server.
- Example: If you have an 8-core CPU, you can increase the Thread Pool size to 8.

```javascript
const os = require('os');
console.log(os.cpus().length); // Output: 8 (Number of CPU cores)
```

#### Key Takeaways

- Always aim to write non-blocking code to ensure your server can handle multiple requests efficiently.
- Understand the difference between blocking and non-blocking operations.
- Utilize the Event Loop and Thread Pool effectively to optimize server performance.

By understanding these concepts, you can write more efficient and scalable Node.js applications. Make sure to implement non-blocking code to avoid performance bottlenecks. Thank you for watching, and I hope you found this video helpful!
