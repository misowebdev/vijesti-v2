import express from "express";
import { list } from "../controllers/newsController.js";

const router = express.Router();

router.get("/api/news/:website/", list);

export default router;
