const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./routes/userRouter.js");
const { connectToSocket } = require("./controllers/socketManger.js");

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors({
   origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true
}));
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/users", userRouter);

const start = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    server.listen(app.get("port"), () => {
        console.log("Server is running on port " + app.get("port"));
    });
}

start();