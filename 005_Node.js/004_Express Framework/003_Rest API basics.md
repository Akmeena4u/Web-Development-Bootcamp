

### Understanding RESTful APIs

**Introduction to REST API:**
- REST stands for Representational State Transfer.
- It is an architectural style for designing networked applications.


**Client-Server Architecture:**
- In REST, there is a clear separation between the client and the server.
- The client initiates requests using HTTP methods, and the server processes them and returns responses.

**Basic Principles of REST:**

![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/c6016e58-2f3a-44e6-8625-c86ebcc6bed4)


1. **Client-Server:**  In REST, there should be a clear separation between the client and the server. means client and server should not depend on each other , this Separation allows for scalability and loose coupling.
2. **Respect all Http methods** means we should respect all http methods and use them as they made for that use like always use post for sending data not for updating and 
deleting etc.it will provide a standardized interface for interacting with resources
3. **Data format** REST APIs should accept JSON for request payload and also send responses to JSON. JSON is the standard for transferring data. Almost every networked technology can use it: JavaScript has built-in methods to encode and decode JSON but it could be violted if we know that our system will be use by browser pnly then we can send directly renderd html inplcae of row json.
4. **Use Nouns for Endpoints/route names** We shouldn't use verbs in our endpoint paths. Instead, we should use the nouns which represent the entity that the endpoint that we're retrieving . This is because our HTTP request method already has the verb. Having verbs in our API endpoint paths isn’t useful and it makes it unnecessarily long since it doesn’t convey any new information . example - app.GET(/getuserdata , ()=>{})
5. **Handle erros gracefully** To eliminate confusion for API users when an error occurs, we should handle errors gracefully and return HTTP response codes that indicate what kind of error occurred.
6. **Stateless:** Each request from the client to the server must contain all necessary information to understand the request. The server does not store client state between 
 requests.
7. **Cacheability:** Responses must define whether they can be cached or not. This improves efficiency and performance. We can add caching to return data from the local memory cache instead of querying the database to get the data every time we want to retrieve some data that users request. The good thing about caching is that users can get data faster . For instance, Express has the apicache middleware to add caching to our app without much configuration. We can add a simple in-memory cache into our server
8. **Layered System:** A client interacts with a layered architecture, where each layer has a specific role and only interacts with adjacent layers.
9. **Code on Demand (optional):** Servers can send executable code to clients, such as JavaScript, extending client functionality dynamically.This constraint is optional.


**Advantages of RESTful APIs:**
- **Scalability:** Allows distributed systems to handle increased demand.
- **Flexibility:** Supports various data formats and platforms (JSON, XML, etc.).
- **Simplicity:** Utilizes standard HTTP methods and status codes.
- **Performance:** Caching improves response times for recurring requests.

**Conclusion:**
RESTful APIs are fundamental to modern web development, providing a structured approach to building scalable and efficient web services. Understanding their principles and usage is crucial for developers aiming to create robust and interoperable applications.

---
