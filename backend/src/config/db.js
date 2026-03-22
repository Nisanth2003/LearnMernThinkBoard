import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MONGO DB CONNECTED SUCCESSFULLY");
    } catch (error) {
        console.error("Error connecting to MONGO DB:", error);
        process.exit(1); // Exit the process with an error code
    }
} 