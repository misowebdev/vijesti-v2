import express from "express";
import path from "path";
import cors from "cors";

import newsRoutes from "./routes/newsRoutes.js";
import config from "./config/config.js";

const __dirname = path.resolve();
const corsOption = { origin: config.CLIENT_URL };

const app = express();

app.use(express.json());
app.use(cors(corsOption));

app.use("/", newsRoutes);

app.use(express.static(path.join(__dirname, "client/build")));

export default app;
