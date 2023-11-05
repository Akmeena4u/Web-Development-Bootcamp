/*
The Node.js HTTP module is a core module that provides the necessary functionality to create HTTP (Hypertext Transfer Protocol) servers and make HTTP requests. With the HTTP module, you can build web servers, APIs, and interact with other web services.



*/



const { Console } = require('console');
const http = require('http');

const port = process.env.PORT || 3000;

//Creating an HTTP Server: You can use the HTTP module to create an HTTP server that listens for incoming HTTP requests.
const server  = http.createServer((req, res)=>{
    //You can use the URL and other properties of the req object to route requests to specific handlers or resources.
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    //Use the res.end() method to send the response body to the client.
    res.end('<h1> This is CodeWithHarry</h1> <p> Hey this is the way to rock the world!</p>');
})
//we create an HTTP server that listens on port 8080 and responds with "Hello, World!" when a request is made.
server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);

});
