import puppeteer from "puppeteer";

import {
  scraperStandard,
  scraperPobjeda,
  scraperSportskeNet,
  scraperDan,
  scraperCdm,
  scraperVijesti,
  scraperFos,
  scraperIn4s,
  scraperRtcg,
  scraperNovosti,
} from "./index.js";

const portali = [
  { ime: "Vijesti", link: "https://www.vijesti.me/", scra: scraperVijesti },
  { ime: "Cdm", link: "https://www.cdm.me/", scra: scraperCdm },
  { ime: "Fos", link: "https://fosmedia.me/", scra: scraperFos },
  { ime: "In4s", link: "https://www.in4s.net/", scra: scraperIn4s },
  { ime: "Pobjeda", link: "https://www.pobjeda.me/", scra: scraperPobjeda },
  { ime: "Rtcg", link: "http://www.rtcg.me/", scra: scraperRtcg },
  { ime: "Novosti", link: "https://www.novosti.rs/", scra: scraperNovosti },
  { ime: "Standard", link: "https://www.standard.co.me/", scra: scraperStandard },
  // { ime: "Dan", link: "https://www.dan.co.me/", scra: scraperDan },
  // { ime: "Sportske", link: "https://sportske.net/", scra: scraperSportskeNet },
];

const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36";

// startuj browser
const startBrowser = async () => {
  let page;
  try {
    const browser = await puppeteer.launch({
      args: ["--single-process", "--no-zygote", "--no-sandbox"],
      timeout: 0,
      ignoreHTTPSErrors: true,
      // headless: false,
    });

    page = await browser.newPage();

    await page.setViewport({
      width: 1200,
      height: 1080,
      isMobile: false,
      isLandscape: false,
      deviceScaleFactor: 1,
    });

    await page.setUserAgent(userAgent);
  } catch (error) {
    console.log("Greska u startovanju browsera", error);
    return false;
  }
  return page;
};

// scrapuj sve portale
const scrapPages = async (page) => {
  for (const portal of portali) {
    if (page) {
      try {
        await page.goto(portal.link, {
          // waitUntil: ["networkidle0", "domcontentloaded", "load"],
          waitUntil: ["networkidle0", "domcontentloaded"],
          timeout: 30000,
        });

        await portal.scra(page);
      } catch (error) {
        console.log(`Greska sa portalom ${portal.ime}`, error);
      }
    }
  }
  return true;
};

// skrapuj opet cim zavrsis
export const startPuppeteer = async () => {
  const page = await startBrowser();

  const autoScraper = async (page) => {
    if (page) {
      await scrapPages(page);
      await autoScraper(page);
    }
  };
  await autoScraper(page);
};
