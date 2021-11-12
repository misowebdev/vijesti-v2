import express from "express";
import mongoose from "mongoose";
import path from "path";

const __dirname = path.resolve();
const router = express.Router();

router.get("/vijesti/:portal/:br", async (req, res) => {
  const portal = req.params.portal;
  const br = parseInt(req.params.br, 10);
  try {
    const podaci = await mongoose.model(portal).find().sort({ _id: -1 }).limit(br);
    res.status(200).json(podaci);
  } catch (error) {
    console.error(`Greska u citanju ${portal} `, error);
  }
});

router.get("/*", (req, res) => res.sendFile(__dirname + "/frontend/build/index.html"));

export default router;
