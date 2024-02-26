import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import connectToMongoDB from "./database/connectToMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// to parse the incoming requests with JSON payloads (from req.body)
app.use(express.json());

app.use(cookieParser());

// auth routes
app.use("/api/auth", authRoutes);

// message routes
app.use("/api/messages", messageRoutes);

// app.get("/", (req, res) => {
//   root route
//   res.send("Server is running!");
// });


app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
