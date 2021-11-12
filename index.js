import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import config from "./config.js";
import podaci from "./routes/podaci.js";

import http from "http";
import { Server } from "socket.io";

import { startPuppeteer } from "./scraper/puppeteer.js";

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "frontend/build")));

app.use("/", podaci);

const server = http.createServer(app);
const options = { cors: { origin: "*" } };
export const io = new Server(server);

io.on("connection", (socket) => {
  console.log("socket connected", socket.id);
});

mongoose
  .connect(config.mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log("error connecting to DB", err));

startPuppeteer();

server.listen(config.port, (error) => {
  if (error) return console.log(error);
  console.log(`Server running on port: ${config.port}`);
});
