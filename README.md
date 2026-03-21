# 🚀 MERN Stack — Learning Notes

**MERN** stands for:

| Letter | Technology | Role |
|--------|-----------|------|
| **M** | MongoDB | Database |
| **E** | Express.js | Backend Framework |
| **R** | React.js | Frontend Library |
| **N** | Node.js | JavaScript Runtime |

---

## 🟢 M — MongoDB

- A **NoSQL database** where we store our application data.
- Stores data as flexible JSON-like documents instead of rigid tables.

---

## 🟡 E — Express.js

- A **web framework** (a ready-to-use toolbox) for building web applications faster and more easily.

### ❓ Why use a web framework?

- Saves development time
- Makes code clean and organized
- Handles common tasks (routing, error handling, middleware, etc.)

---

## 🟣 N — Node.js

- A **JavaScript runtime** that allows you to run JavaScript on the server.
- Normally, JavaScript runs on the client side (browser).
- Node.js enables JavaScript execution on the **backend (server)**.

---

## 🔵 R — React.js

- A **frontend library** used to build interactive user interfaces.

---

## 🔄 How the Flow Works

```
Frontend        Backend                  Database
React    →   Node.js + Express    →    MongoDB
```

---

# ⚙️ Backend Setup

## 📌 Commands to Run

### 1️⃣ Initialize Node.js Application

```bash
npm init -y
```

### 2️⃣ Install Dependencies

```bash
npm install
```

> This will install all the necessary libraries defined in `package.json`.

---

### 3️⃣ Custom Scripts in `package.json`

Add custom commands in the `scripts` section:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js",
  "devara": "node server.js"
}
```

Now you can run:

```bash
npm start        # for production
npm run dev      # for development with auto-reload
npm run devara   # to start with your custom command
```

---

## 📡 What is an API?

**API (Application Program Interface)** allows two applications to communicate with each other.

Think of it like a waiter in a restaurant:

| Role | Maps To |
|------|---------|
| 🧑 Customer placing order | Frontend (React) |
| 🧾 Waiter taking the order | API |
| 👨‍🍳 Kitchen preparing food | Backend (Node.js / Express) |
| 🍽️ Food being served | Response / Data |
| 📦 Storage room | Database (MongoDB) |

---

# 🔌 Types of APIs

## REST API
Uses HTTP methods — most commonly used approach.

```
GET    → Fetch posts on Instagram
POST   → Create a new post
PUT    → Update an existing post
DELETE → Delete a post
```

## SOAP API
Uses XML format with strict protocol rules. Mostly used in enterprise applications.

> **Example:** Banking system transferring money between accounts using secure XML requests.

## GraphQL API
Allows clients to request **only the data they need**. Developed by Facebook.

> **Example:** Fetch only `username` and `profilePicture` instead of the full user object.

## gRPC API
High-performance API using Protocol Buffers and HTTP/2. Created by Google.

> **Example:** Communication between microservices in a food delivery app.

## WebSocket API
Provides **real-time, two-way** communication between client and server.

> **Example:** Live chat feature in WhatsApp.

## OpenAPI
A specification to describe REST APIs for easy understanding and testing.

> **Example:** API documentation generated using Swagger tools.

---

# 📊 HTTP Status Codes

| Range | Category | Common Codes |
|-------|----------|-------------|
| **1xx** | Informational | Request received, continuing process |
| **2xx** | ✅ Success | `200 OK`, `201 Created` |
| **3xx** | 🔀 Redirection | `301 Moved Permanently` |
| **4xx** | ❌ Client Errors | `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `429 Too Many Requests` |
| **5xx** | 💥 Server Errors | `500 Internal Server Error`, `503 Service Unavailable` |

---

# 🛠️ Debugging Tips

To check HTTP errors in the browser:

1. Press `F12` or right-click → **Inspect**
2. Go to the **Network** tab
3. Select **All** or **Fetch/XHR**
4. Refresh the page to see API calls and their status codes

---

## 🔄 Development vs Production

### Using Nodemon for Development

Without `nodemon`, you have to **manually restart** the server after every code change.

Install nodemon as a dev dependency:

```bash
npm install nodemon -D
```

> The `-D` flag installs it as a dev dependency (only needed during development).

Update `package.json` scripts:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

Now when you run `npm run dev`, Nodemon will **watch your files** and automatically restart the server when changes are saved.

> ⚠️ **Important:**
> - **Development** → Use `nodemon` (`npm run dev`) for auto-reload
> - **Production** → Use `node` (`npm start`) for better performance and stability
> - ❌ **Never use nodemon in production!**

---

## 🔗 What is an Endpoint?

An **endpoint** is a combination of a **URL + HTTP method** that lets the client interact with a specific resource.

> 💡 An endpoint is essentially what we also call a **route**.

```js
// Example endpoints
GET    /api/notes        → fetch all notes
POST   /api/notes        → create a new note
DELETE /api/notes/:id    → delete a note by ID
```

---

## 🗂️ Project Structure — Keeping It Scalable

As projects grow, dumping everything in one file becomes a nightmare to maintain.
The solution? **Follow good practices (GP)** and split your code into dedicated folders.

### 📁 Recommended Folder Structure

```
backend/
└── src/
    ├── routes/          → defines URL paths
    ├── controllers/     → holds the actual business logic
    └── server.js
```

---

### 🚦 Routes

Instead of writing every route directly in `server.js`, group related routes into separate files.

```js
// server.js — clean and minimal
app.use("/api/notes", NotesRouter);
```

> The `NotesRouter` file handles all `/api/notes` endpoints cleanly in one place.

---

### 🧠 Controllers

Controllers exist to keep route files **small and readable** by moving the backend logic out.

| File | Responsibility |
|------|---------------|
| `routes/notes.js` | Defines the URL paths |
| `controllers/notesController.js` | Contains the actual logic |

```js
// routes/notes.js ← stays small
router.get("/", notesController.getAllNotes);
router.post("/", notesController.createNote);

// controllers/notesController.js ← business logic lives here
exports.getAllNotes = async (req, res) => { ... };
exports.createNote = async (req, res) => { ... };
```

---

### ❓ Do We Even Need This Structure?

**Yes** — especially when building apps with multiple pages/features.
Keeping routes and controllers separate means:

- Each page/feature has its own **isolated** API logic
- Files stay **small and focused**
- Onboarding new devs (or future-you 😄) is painless

---

> **🟡 GP — Good Practice**
>
> Move everything into a `src/` folder inside your backend.
> If you do, make sure to update your `package.json` scripts accordingly:
>
> ```json
> "scripts": {
>   "start": "node src/server.js",
>   "dev": "nodemon src/server.js"
> }
> ```

---

## 🔌 Integration of DB

> *(Coming soon...)*