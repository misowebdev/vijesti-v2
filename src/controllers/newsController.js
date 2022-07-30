import News from "../models/newsModel.js";

const list = async (req, res) => {
  const { website } = req.params;
  try {
    const news = await News.find({ website }).sort({ createdAt: -1 }).limit(4);
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export { list };
