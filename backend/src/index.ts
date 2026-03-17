import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connection DB";
import taskRoutes from "./routes/task.routes";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/users", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
