const express = require("express");
const http = require("http");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { default: mongoose } = require("mongoose");
const { connectToSocket } = require("./controllers/socketManager.js");
const userRoutes = require("./routes/userRoute.js");

const app = express();

const server = http.createServer(app); //create raw http server from express

const io = connectToSocket(server); //attach socket.io to http server

app.set("port", process.env.PORT || 8000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/api/v1/user", userRoutes);

app.get("/home", (reqe, res) => {
  res.json({ message: "Hello world" });
});

const start = async () => {
  const connectionDb = await mongoose.connect(
    "mongodb+srv://farhansyed2045:K3woNc9fIisJ5v4d@cluster0.s5kba0i.mongodb.net/"
  );
  console.log(`connected to dbUser : ${connectionDb.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log("Server listening on port 8000");
  });
};

start();
