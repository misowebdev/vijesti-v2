import { PodaciIn4s } from "../models/ubaciPodatke.js";
import checkForNewData from "./checkForNewData.js";

const scraperIn4s = async (page) => {
  let data = await page.evaluate(() => {
    let gNaslov1 = document
      .querySelector('div[class="td_module_mx5 td-animation-stack td-big-grid-post-0 td-big-grid-post td-big-thumb"] > div[class="td-module-thumb"] > a')
      .getAttribute("title");
    let gNaslov1Slika = document.querySelector(
      'div[class="td_module_mx5 td-animation-stack td-big-grid-post-0 td-big-grid-post td-big-thumb"] > div[class="td-module-thumb"] > a > img '
    ).src;
    let gNaslov1Link = document.querySelector(
      'div[class="td_module_mx5 td-animation-stack td-big-grid-post-0 td-big-grid-post td-big-thumb"] > div[class="td-module-thumb"] > a'
    ).href;

    let gNaslov2 = document
      .querySelector('div[class="td_module_mx6 td-animation-stack td-big-grid-post-1 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a')
      .getAttribute("title");
    let gNaslov2Slika = document.querySelector(
      'div[class="td_module_mx6 td-animation-stack td-big-grid-post-1 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a > img'
    ).src;
    let gNaslov2SlikaUrl = gNaslov2Slika.replace("-238x178", "");
    let gNaslov2Link = document.querySelector(
      'div[class="td_module_mx6 td-animation-stack td-big-grid-post-1 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a'
    ).href;

    let gNaslov3 = document
      .querySelector('div[class="td_module_mx6 td-animation-stack td-big-grid-post-2 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a')
      .getAttribute("title");
    let gNaslov3Slika = document.querySelector(
      'div[class="td_module_mx6 td-animation-stack td-big-grid-post-2 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a > img'
    ).src;
    let gNaslov3SlikaUrl = gNaslov3Slika.replace("-238x178", "");
    let gNaslov3Link = document.querySelector(
      'div[class="td_module_mx6 td-animation-stack td-big-grid-post-2 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a'
    ).href;

    let gNaslov4 = document
      .querySelector('div[class="td_module_mx6 td-animation-stack td-big-grid-post-3 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a')
      .getAttribute("title");
    let gNaslov4Slika = document.querySelector(
      'div[class="td_module_mx6 td-animation-stack td-big-grid-post-3 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a > img'
    ).src;
    let gNaslov4SlikaUrl = gNaslov4Slika.replace("-238x178", "");
    let gNaslov4Link = document.querySelector(
      'div[class="td_module_mx6 td-animation-stack td-big-grid-post-3 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a'
    ).href;

    let gNaslov5 = document
      .querySelector('div[class="td_module_mx6 td-animation-stack td-big-grid-post-4 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a')
      .getAttribute("title");
    let gNaslov5Slika = document.querySelector(
      'div[class="td_module_mx6 td-animation-stack td-big-grid-post-4 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a > img'
    ).src;
    let gNaslov5SlikaUrl = gNaslov5Slika.replace("-238x178", "");
    let gNaslov5Link = document.querySelector(
      'div[class="td_module_mx6 td-animation-stack td-big-grid-post-4 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a'
    ).href;

    let gNaslov6 = document.querySelectorAll('div[class="td_block_inner td-column-3"]')[0].children[0].children[0].children[0].children[2].children[0]
      .innerText;
    let gNaslov6Slika = document.querySelectorAll('div[class="td_block_inner td-column-3"]')[0].children[0].children[0].children[0].children[1].children[0]
      .children[0].currentSrc;
    let gNaslov6Link = document.querySelectorAll('div[class="td_block_inner td-column-3"]')[0].children[0].children[0].children[0].children[2].children[0]
      .children[0].href;

    let gNaslov7 = document.querySelectorAll('div[class="td_block_inner td-column-3"]')[0].children[0].children[1].children[0].children[2].children[0]
      .innerText;
    let gNaslov7Slika = document.querySelectorAll('div[class="td_block_inner td-column-3"]')[0].children[0].children[1].children[0].children[1].children[0]
      .children[0].currentSrc;
    let gNaslov7Link = document.querySelectorAll('div[class="td_block_inner td-column-3"]')[0].children[0].children[1].children[0].children[2].children[0]
      .children[0].href;

    let gNaslov8 = document.querySelectorAll('div[class="td_block_inner td-column-3"]')[0].children[0].children[2].children[0].children[2].children[0]
      .innerText;
    let gNaslov8Slika = document.querySelectorAll('div[class="td_block_inner td-column-3"]')[0].children[0].children[2].children[0].children[1].children[0]
      .children[0].currentSrc;
    let gNaslov8Link = document.querySelectorAll('div[class="td_block_inner td-column-3"]')[0].children[0].children[2].children[0].children[2].children[0]
      .children[0].href;

    const time = Date.now();
    const vrijeme = new Date().toLocaleTimeString([], { hourCycle: "h23", timeZone: "Europe/Belgrade" }).slice(0, -3);

    return [
      {
        naslov: gNaslov1,
        slika: gNaslov1Slika,
        vrijeme: vrijeme,
        izvor: "IN4S",
        link: gNaslov1Link,
        time: time,
      },
      {
        naslov: gNaslov2,
        slika: gNaslov2SlikaUrl,
        vrijeme: vrijeme,
        izvor: "IN4S",
        link: gNaslov2Link,
        time: time,
      },
      {
        naslov: gNaslov3,
        slika: gNaslov3SlikaUrl,
        vrijeme: vrijeme,
        izvor: "IN4S",
        link: gNaslov3Link,
        time: time,
      },
      {
        naslov: gNaslov4,
        slika: gNaslov4SlikaUrl,
        vrijeme: vrijeme,
        izvor: "IN4S",
        link: gNaslov4Link,
        time: time,
      },
      {
        naslov: gNaslov5,
        slika: gNaslov5SlikaUrl,
        vrijeme: vrijeme,
        izvor: "IN4S",
        link: gNaslov5Link,
        time: time,
      },
      {
        naslov: gNaslov6,
        slika: gNaslov6Slika,
        vrijeme: vrijeme,
        izvor: "IN4S",
        link: gNaslov6Link,
        time: time,
      },
      {
        naslov: gNaslov7,
        slika: gNaslov7Slika,
        vrijeme: vrijeme,
        izvor: "IN4S",
        link: gNaslov7Link,
        time: time,
      },
      {
        naslov: gNaslov8,
        slika: gNaslov8Slika,
        vrijeme: vrijeme,
        izvor: "IN4S",
        link: gNaslov8Link,
        time: time,
      },
    ];
  });

  await checkForNewData(PodaciIn4s, data, "In4s");

  // let rawdata = fs.readFileSync('podaci/podaciIn4s.json');
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
  //   fs.writeFileSync("podaci/podaciIn4s.json", JSON.stringify(stariPodaci), err => {
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
  //   console.log("IN4S - novi podaci ubaceni -------");
  // } else {
  //   console.log("IN4S - nema nista novo -------");
  // }
};

export default scraperIn4s;
