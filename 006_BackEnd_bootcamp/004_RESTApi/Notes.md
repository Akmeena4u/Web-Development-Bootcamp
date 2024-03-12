
# REST API using Express JS

## Introduction

A REST API (Representational State Transfer) is an application programming interface that adheres to the principles of the REST architectural style. It allows for interaction with web services using standard HTTP methods and URL structures. REST APIs are widely used for building scalable and maintainable web applications.

## HTTP Methods

REST APIs are based on the following primary HTTP methods:

- **GET**: Retrieves a resource from the server. It performs a READ operation and is the default request method.
- **POST**: Creates a new resource on the server. It performs a CREATE operation.
- **PUT and PATCH**: Used to update a resource on the server. PUT generally replaces all content, while PATCH updates specific fields.
- **DELETE**: Removes a resource from the server. It performs a DELETE operation.

## REST API Structure

The structure of REST APIs is determined by a combination of HTTP methods and resource paths. For example, considering a resource named "task," here are common REST APIs for tasks:

**READ APIs:**
- `GET /tasks`: Read all tasks.
- `GET /task/:id`: Read a specific task identified by a unique id.

**CREATE APIs:**
- `POST /tasks`: Create a new task object (data in the request body).

**UPDATE APIs:**
- `PUT /task/:id`: Update a specific task identified by a unique id. Replaces all content with data from the request body.
- `PATCH /task/:id`: Update a specific task identified by a unique id. Only updates the fields specified in the request body.

**DELETE APIs:**
- `DELETE /task/:id`: Delete a specific task identified by a unique id.

## REST API Characteristics

REST APIs conform to the constraints of the REST architectural style. Key characteristics include:

- **Client-Server Architecture**: REST follows a client-server independent architecture.This separation allows for scalability and flexibility.
- **Stateless Communication**: Each request from a client to the server contains all the information needed to understand and fulfill the request. The server does not store any information about the client's state between requests.
- **Data Format**: Data is sent from the server to the client in JSON format.
- **HTTP Methods**: RESTful APIs primarily work with standard HTTP methods.

## CRUD Operations in REST API

REST APIs commonly involve CRUD (Create, Read, Update, Delete) operations:

**CREATE:**
- `POST /products`: Create a new resource (e.g., product).

**READ:**
- `GET /products`: Read many resources (e.g., products).
- `GET /products/:id`: Read one specific resource (e.g., product).

**UPDATE:**
- `PUT /products/:id`: Update by replacing all content of a specific resource (e.g., product).
- `PATCH /products/:id`: Update by only setting content from the request body, not replacing other parts.

**DELETE:**
- `DELETE /products/:id`: Delete a specific resource (e.g., product).

RESTful APIs provide a standardized and scalable approach to building web services, facilitating seamless communication between clients and servers. Understanding the principles of REST is essential for effective API design and development.
