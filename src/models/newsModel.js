import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true },
    image: String,
    website: String,
    link: String,
    expireAt: { type: Date, expires: "2d", default: Date.now },
  },
  { timestamps: true }
);

const News = mongoose.model("News", newsSchema);
export default News;
