const productionUrl = "https://vijesti-v2.herokuapp.com";
const developmentUrl = "http://localhost:5000";

const config = {
  SERVER_URL:
    process.env.NODE_ENV === "development" ? developmentUrl : productionUrl,
};

export default config;
