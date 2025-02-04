import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/products.route.js";
import userRoutes from "./routes/users.route.js";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";

dotenv.config();

// Initialize the app
const app = express();
app.use(express.json()); // Parse JSON data
app.use(cors());

// Connect to the database
connectDB();

// Define routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Export the app (do NOT use app.listen())
export default app;
