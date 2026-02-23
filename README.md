# 🚀 MERN Stack Overview

**MERN** stands for:

- **M** – MongoDB  
- **E** – Express.js  
- **R** – React.js  
- **N** – Node.js  

---

## 🟢 M — MongoDB

- A database where we store our data.

---

## 🟡 E — Express.js

- A web framework (a ready-to-use toolbox) for building web applications faster and more easily.

### ❓ Why use a web framework?

- Saves time  
- Makes code clean and organized  
- Handles common tasks (routing, error handling, etc.)  

---

## 🟣 N — Node.js  
(Also known as a JavaScript runtime)

- Allows you to run JavaScript on the server.  
- Normally, JavaScript runs on the client side (browser).  
- Node.js helps run JavaScript on the backend (server).

---

## 🔵 R — React.js

- Our frontend library used to build user interfaces.

---

# ⚙️ Backend Setup

## 📌 Commands to Run

### 1️⃣ Initialize Node.js Application

```bash
npm init -y

npm install ("will install all the necessary libraries.").

in the json package if you want anything else to be the command like 
npm start
npm run dev 

add that in scripts like :
devara : "node server.js" . so that it will start at that file when you run command as npm devara

start with server.js 

how does the flow work :
frontend     backend                database
react    ->    node.js      ->      mongo db
            express.js         

### what is api?(application program interface)
it allows 2 application to talk with each other.
think of it like a waiter user order in frontend(restaurant) and waiter goes to backend(kitchen) and gets the data(food).
![alt text](image.png)


Types of Api's
Rest Api:-it uses Http methods which are what we will generally use in any case.
Get -> Get some posts on instagram
POST -> Create a post 
PUT -> Update a post
DELETE -> Delete a post

SOAP Api:- it uses XML format and follows strict protocol rules. Mostly used in enterprise applications.
Example -> A banking system transferring money between accounts using a secure XML request.

GraphQL Api:- it allows clients to request only the data they need. Developed by Facebook.
Example -> Fetch only username and profile picture from Instagram instead of full user details.

gRPC Api:- it is a high-performance API that uses Protocol Buffers and HTTP/2. Created by Google.
Example -> Communication between microservices in a food delivery app.

WebSocket Api:- it provides real-time, two-way communication between client and server.
Example -> Live chat feature in WhatsApp.

OpenAPI Api:- it is a specification used to describe REST APIs so developers can understand and test them easily.
Example -> API documentation generated using Swagger tools.


HTTP STATUS CODES.
1XX - INFORMATIONAL


2xx — Success

200 0K — Everything worked as expected.
201 Created — New resource successfully created (e.g., after a POST request).



3xx — Redirection
The 300 status codes are for redirection meaning the server
is telling the client, "Hey, the thing you're looking for is somewhere else."
301 — Moved Permanently
Example: Your site changes from http://example.com to https://example.com .
You set up a 3M redirect so visitors and Google know to go to the new one.

4xx — Client Errors(user side bad request)
These happen when the problem is on the user's side
meaning your browser or app made a bad request.
Think of it like: "You (the client) messed up."

400 Bad Request — The request is malformed or invalid.
401 Unauthorized — You must log in (missing or invalid credentials).
403 Forbidden You're not allowed to access this.
404 Not Found The URL doesn't exist.
429 Too Many Requests

to check these kind of errors go to browser->(double tap)inspect->network->all,fetch/xhr(refresh).
with a api endpoint that you have not defined.

5xx — Server Errors
These happen when something goes wrong on the server side
even though the client made a valid request.
 Think of it like: "The server tried, but failed."

500 Internal Server Error — Something broke on the server.
503 Service Unavailable — Server is temporarily overloaded or down.

right now if you make changes in the code you have to kill the server and run it again to get the update.to solve this install the package nodemon .the command to do so 

npm install nodemon -D

where d means install it as a dev dependency.and change the package.json scripts as 

"dev":"nodemon server.js"

after this it will listen to js file so when you make changes and save them it will restart and show updated version.

make sure you keep it only for devolpement puspose when you deploy it to server use node only that why for dev you can use nodemon(dev) but in server use node(start).