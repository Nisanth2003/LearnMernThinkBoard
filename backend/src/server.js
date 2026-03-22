//const express = require("express"); //if the type is commonjs in package.json which is a default.

import express from "express"; //if the type is module in package.json, then we can use this syntax.
const app = express();
import notesRoutes from "./routes/NotesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

app.use("/api/notes",notesRoutes)
console.log("MONGO_URL:", process.env.MONGO_URL);



connectDB();
// app.get('/', (req, res) => {
//     res.send("Hello World");
// });
const PORT = process.env.PORT || 5001;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`,PORT);
});
