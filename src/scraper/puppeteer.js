import puppeteer from "puppeteer";
import News from "../models/newsModel.js";
import { io } from "../index.js";
import {
  scraperStandard,
  scraperPobjeda,
  scraperCdm,
  scraperVijesti,
  scraperIn4s,
  scraperRtcg,
  scraperNovosti,
} from "./pageScrapers/index.js";

const webPages = [
  { name: "Vijesti", link: "https://www.vijesti.me/", scra: scraperVijesti },
  { name: "Cdm", link: "https://www.cdm.me/", scra: scraperCdm },
  { name: "In4s", link: "https://www.in4s.net/", scra: scraperIn4s },
  { name: "Pobjeda", link: "https://www.pobjeda.me/", scra: scraperPobjeda },
  { name: "Rtcg", link: "https://www.rtcg.me/", scra: scraperRtcg },
  { name: "Novosti", link: "https://www.novosti.rs/", scra: scraperNovosti },
  {
    name: "Standard",
    link: "https://www.standard.co.me/",
    scra: scraperStandard,
  },
];

const userAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36";

const startPuppeteer = async () => {
  const browser = await puppeteer.launch({
    args: ["--single-process", "--no-zygote", "--no-sandbox"],
    timeout: 0,
    ignoreHTTPSErrors: true,
    // headless: false,
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1200,
    height: 1080,
    isMobile: false,
    isLandscape: false,
    deviceScaleFactor: 1,
  });

  await page.setUserAgent(userAgent);

  const scrapPages = async () => {
    for (const webPage of webPages) {
      try {
        await page.goto(webPage.link, {
          waitUntil: ["networkidle0", "domcontentloaded"],
          timeout: 30000,
        });
        const news = await webPage.scra(page);
        if (news) {
          console.log(webPage.name, "- Uspjesno");
          await News.insertMany(news, { ordered: false });
        }
      } catch (error) {
        if (error.code !== 11000) {
          return console.log(webPage.name, error);
        }
        const { insertedDocs } = error;
        if (insertedDocs.length) {
          io.emit("new news", webPage.name);
        }
      }
    }
  };

  const autoScraper = async () => {
    await scrapPages();
    await autoScraper();
  };
  await autoScraper(page);
};

export default startPuppeteer;
