### Overview of Node.js and Modules

#### What is Node.js?
- **Node.js** is a **JavaScript runtime environment** that allows developers to run JavaScript code outside of a web browser, primarily on server-side applications.
- It was created by **Ryan Dahl**, who extracted the **Chrome V8 engine** and embedded it with C++ to enable interaction with the system hardware and file system, while excluding browser-specific features like the DOM.

#### Key Features of Node.js:
1. **Server-Side Development**:
   - Ideal for building web servers, API servers, and real-time applications such as chat and gaming platforms.
2. **JavaScript**:
   - Allows developers to use JavaScript for both client-side and server-side programming, providing a unified development language.
3. **Event-Driven, Non-Blocking I/O**:
   - Enhances scalability by efficiently managing concurrent connections with minimal resource usage.
4. **Node Package Manager (NPM)**:
   - Simplifies the installation and management of third-party libraries and modules, making it easier to manage project dependencies.

#### Working of Node.js:
- Node.js operates on a single-threaded event loop, using non-blocking I/O and asynchronous event-driven programming to handle concurrency efficiently.
Firstly all the execution statements come under the Event queue
- All task goes under the Event loop - Event loop has a Call stack, web API queue, a callback queue
- All synchronous tasks executed line by line using call stack
- the asynchronous task went into web API . this is a thread pool and by default no. of threads will be equal to cores and each async task will get one thread to complete the task and the remaining threads waits and if execution is completed they will go under the callback queue and if call stack is empty at that moment these will enter into the call stack

---

