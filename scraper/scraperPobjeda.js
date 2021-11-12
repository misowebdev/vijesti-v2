import { PodaciPobjeda } from "../models/ubaciPodatke.js";
import checkForNewData from "./checkForNewData.js";

const scraperPobjeda = async (page) => {
  let data = await page.evaluate(() => {
    let gNaslov1 = document.querySelector('div[data-slick-index="0"] > div > div > div > div[class="article-a--wrapper"] > h2 ').innerText;
    let gNaslov1Slika = document.querySelector('div[data-slick-index="0"] > div > div > div > div[class="article-a--img"] > div[data="resource"] > img').src;
    let gNaslov1Link = document.querySelector('div[data-slick-index="0"] > div > div > div > a').href;

    let gNaslov2 = document.querySelector('div[data-slick-index="1"] > div > div > div > div[class="article-a--wrapper"] > h2 ').innerText;
    let gNaslov2Slika = document.querySelector('div[data-slick-index="1"] > div > div > div > div[class="article-a--img"] > div[data="resource"] > img').src;
    let gNaslov2Link = document.querySelector('div[data-slick-index="1"] > div > div > div > a').href;

    let gNaslov3 = document.querySelector('div[data-slick-index="2"] > div > div > div > div[class="article-a--wrapper"] > h2 ').innerText;
    let gNaslov3Slika = document.querySelector('div[data-slick-index="2"] > div > div > div > div[class="article-a--img"] > div[data="resource"] > img').src;
    let gNaslov3Link = document.querySelector('div[data-slick-index="2"] > div > div > div > a').href;

    let gNaslov4 = document.querySelector('div[data-slick-index="3"] > div > div > div > div[class="article-a--wrapper"] > h2 ').innerText;
    let gNaslov4Slika = document.querySelector('div[data-slick-index="3"] > div > div > div > div[class="article-a--img"] > div[data="resource"] > img').src;
    let gNaslov4Link = document.querySelector('div[data-slick-index="3"] > div > div > div > a').href;

    let gNaslov5 = document.querySelector(
      "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(1) > div > div > a"
    ).title;
    let gNaslov5Slika = document.querySelector(
      "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(1) > div > div > div > div:nth-child(3) > img"
    ).src;
    let gNaslov5Link = document.querySelector(
      "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(1) > div > div > a"
    ).href;

    let gNaslov6 = document.querySelector(
      "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(2) > div > div > a"
    ).title;
    let gNaslov6Slika = document.querySelector(
      "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(2) > div > div > div > div:nth-child(3) > img"
    ).src;
    let gNaslov6Link = document.querySelector(
      "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(2) > div > div > a"
    ).href;

    let gNaslov7 = document.querySelector(
      "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(3) > div > div > a"
    ).title;
    let gNaslov7Slika = document.querySelector(
      "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(3) > div > div > div > div:nth-child(3) > img"
    ).src;
    let gNaslov7Link = document.querySelector(
      "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(3) > div > div > a"
    ).href;

    let gNaslov8 = document.querySelector(
      "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(4) > div > div > a"
    ).title;
    let gNaslov8Slika = document.querySelector(
      "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(4) > div > div > div > div:nth-child(3) > img"
    ).src;
    let gNaslov8Link = document.querySelector(
      "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(4) > div > div > a"
    ).href;

    const time = Date.now();
    const vrijeme = new Date().toLocaleTimeString([], { hourCycle: "h23", timeZone: "Europe/Belgrade" }).slice(0, -3);

    return [
      {
        naslov: gNaslov1,
        slika: gNaslov1Slika,
        vrijeme: vrijeme,
        izvor: "POBJEDA",
        link: gNaslov1Link,
        time: time,
      },
      {
        naslov: gNaslov2,
        slika: gNaslov2Slika,
        vrijeme: vrijeme,
        izvor: "POBJEDA",
        link: gNaslov2Link,
        time: time,
      },
      {
        naslov: gNaslov3,
        slika: gNaslov3Slika,
        vrijeme: vrijeme,
        izvor: "POBJEDA",
        link: gNaslov3Link,
        time: time,
      },
      {
        naslov: gNaslov4,
        slika: gNaslov4Slika,
        vrijeme: vrijeme,
        izvor: "POBJEDA",
        link: gNaslov4Link,
        time: time,
      },
      {
        naslov: gNaslov5,
        slika: gNaslov5Slika,
        vrijeme: vrijeme,
        izvor: "POBJEDA",
        link: gNaslov5Link,
        time: time,
      },
      {
        naslov: gNaslov6,
        slika: gNaslov6Slika,
        vrijeme: vrijeme,
        izvor: "POBJEDA",
        link: gNaslov6Link,
        time: time,
      },
      {
        naslov: gNaslov7,
        slika: gNaslov7Slika,
        vrijeme: vrijeme,
        izvor: "POBJEDA",
        link: gNaslov7Link,
        time: time,
      },
      {
        naslov: gNaslov8,
        slika: gNaslov8Slika,
        vrijeme: vrijeme,
        izvor: "POBJEDA",
        link: gNaslov8Link,
        time: time,
      },
    ];
  });

  await checkForNewData(PodaciPobjeda, data, "Pobjeda");

  // let rawdata = fs.readFileSync('podaci/podaciPobjeda.json');
  // let stariPodaci = await JSON.parse(rawdata);

  // let rawdata2 = fs.readFileSync('podaci/podaciSve.json');
  // let sviPodaci = await JSON.parse(rawdata2);

  // let noviPodaci = [...data];
  // let noviNaslovi = noviPodaci.filter(el1 => !stariPodaci.some(el2 => el1.naslov === el2.naslov));

  // if (noviNaslovi.length > 0) {
  //   for (let i = 0; i < noviNaslovi.length; i++) {
  //       // stariPodaci.pop();
  //       stariPodaci = [noviNaslovi[i], ...stariPodaci];
  //       sviPodaci = [noviNaslovi[i], ...sviPodaci];
  //   }
  //   fs.writeFileSync("podaci/podaciPobjeda.json", JSON.stringify(stariPodaci), err => {
  //     if (err){
  //       console.error(err);
  //     } else {
  //       console.log("podaci upisani");
  //     }
  //   });
  //   fs.writeFileSync("podaci/podaciSve.json", JSON.stringify(sviPodaci), err => {
  //     if (err){
  //       console.error(err);
  //     } else {
  //       console.log("podaci upisani");
  //     }
  //   });
  //   console.log("POBJEDA - novi podaci ubaceni -------");
  // } else {
  //   console.log("POBJEDA - nema nista novo -------");
  // }
};

export default scraperPobjeda;
