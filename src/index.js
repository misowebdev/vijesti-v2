import mongoose from "mongoose";
import { createServer } from "http";
import { Server } from "socket.io";
import config from "../src/config/config.js";
import app from "./app.js";

import startPuppeteer from "./scraper/puppeteer.js";

const httpServer = createServer(app);

const options = { cors: { origin: config.CLIENT_URL } };
export const io = new Server(httpServer, options);


mongoose
  .connect(config.MONGO_URI)
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log("error connecting to DB", err));

startPuppeteer();

httpServer.listen(config.PORT, (error) => {
  if (error) return console.log(error);
  console.log(`Server running on port: ${config.PORT}`);
});
