import axios from "axios";
import config from "../config/config";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const list = async (website) => {
  try {
    const res = await axios.get(`${config.SERVER_URL}/api/news/${website}`, {
      headers,
    });
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

export { list };
