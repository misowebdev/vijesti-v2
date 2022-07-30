const productionUrl = "https://vijesti-v2.herokuapp.com";
const developmentUrl = "http://localhost:3000";

const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  CLIENT_URL:
    process.env.NODE_ENV !== "production" ? developmentUrl : productionUrl,
};

export default config;
