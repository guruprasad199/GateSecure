import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON

// Routes
app.get("/", (req, res) => {
  console.log("Root route hit ✅");
  res.send("API is running... 🚀");
});

app.use("/api/users", userRoutes);

export default app;

