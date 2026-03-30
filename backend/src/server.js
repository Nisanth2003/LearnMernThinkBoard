import dotenv from "dotenv";
dotenv.config(); // ALWAYS first

import express from "express";
import notesRoutes from "./routes/NotesRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();

console.log("MONGO_URL:", process.env.MONGO_URL);

await connectDB(); // ensure connection happens AFTER env

app.use("/api/notes", notesRoutes);


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});