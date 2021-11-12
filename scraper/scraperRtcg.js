import { PodaciRtcg } from "../models/ubaciPodatke.js";
import checkForNewData from "./checkForNewData.js";

const scraperRtcg = async (page) => {
  let data = await page.evaluate(() => {
    let gNaslov1 = document.querySelector('div[id="textContainer10"] > a').getAttribute("title");
    let gNaslov1Slika = document.querySelector('div[id="textContainer10"] > a > div[class="storyMainBoxFotoHolder"] > img').src;
    let gNaslov1Link = document.querySelector('div[id="textContainer10"] > a').href;

    let gNaslov2 = document.querySelector('div[id="textContainer11"] > a').getAttribute("title");
    let gNaslov2Slika = document.querySelector('div[id="textContainer11"] > a > div[class="storyMainBoxFotoHolder"] > img').src;
    let gNaslov2Link = document.querySelector('div[id="textContainer11"] > a').href;

    let gNaslov3 = document.querySelector('div[id="textContainer12"] > a').getAttribute("title");
    let gNaslov3Slika = document.querySelector('div[id="textContainer12"] > a > div[class="storyMainBoxFotoHolder"] > img').src;
    let gNaslov3Link = document.querySelector('div[id="textContainer12"] > a').href;

    let gNaslov4 = document.querySelector(
      "#content > div > div.partBoxTwoThirds-wrapper > div.fix.topTwoStoriesVertical > div.item.first.item1 > a > p.title"
    ).innerText;
    let gNaslov4Slika = document.querySelector(
      "#content > div > div.partBoxTwoThirds-wrapper > div.fix.topTwoStoriesVertical > div.item.first.item1 > a > div > img"
    ).src;
    let gNaslov4Link = document.querySelector("#content > div > div.partBoxTwoThirds-wrapper > div.fix.topTwoStoriesVertical > div.item.first.item1 > a ").href;

    let gNaslov5 = document.querySelector(
      "#content > div > div.partBoxTwoThirds-wrapper > div.fix.topTwoStoriesVertical > div.item.item2 > a > p.title"
    ).innerText;
    let gNaslov5Slika = document.querySelector(
      "#content > div > div.partBoxTwoThirds-wrapper > div.fix.topTwoStoriesVertical > div.item.item2 > a > div > img"
    ).src;
    let gNaslov5Link = document.querySelector("#content > div > div.partBoxTwoThirds-wrapper > div.fix.topTwoStoriesVertical > div.item.item2 > a ").href;

    let gNaslov6 = document.querySelector('div[class="item first item1 slick-slide slick-current slick-active"] > a > p.title ').innerText;
    let gNaslov6Slika = document.querySelector(
      'div[class="item first item1 slick-slide slick-current slick-active"] > a > div[class="storyImgWrapper"] > img '
    ).src;
    let gNaslov6Link = document.querySelector('div[class="item first item1 slick-slide slick-current slick-active"] > a').href;

    let gNaslov7 = document.querySelector('div[class="item item2 slick-slide slick-active"] > a > p.title ').innerText;
    let gNaslov7Slika = document.querySelector('div[class="item item2 slick-slide slick-active"] > a > div[class="storyImgWrapper"] > img ').src;
    let gNaslov7Link = document.querySelector('div[class="item item2 slick-slide slick-active"] > a').href;

    let gNaslov8 = document.querySelector('div[class="item item3 slick-slide slick-active"] > a > p.title ').innerText;
    let gNaslov8Slika = document.querySelector('div[class="item item3 slick-slide slick-active"] > a > div[class="storyImgWrapper"] > img ').src;
    let gNaslov8Link = document.querySelector('div[class="item item3 slick-slide slick-active"] > a').href;

    let gNaslov9 = document.querySelector('div[class="item item4 slick-slide"] > a > p.title ').innerText;
    let gNaslov9Slika = document.querySelector('div[class="item item4 slick-slide"] > a > div[class="storyImgWrapper"] > img ').src;
    let gNaslov9Link = document.querySelector('div[class="item item4 slick-slide"] > a').href;

    let gNaslov10 = document.querySelector('div[class="item item5 slick-slide"] > a > p.title ').innerText;
    let gNaslov10Slika = document.querySelector('div[class="item item5 slick-slide"] > a > div[class="storyImgWrapper"] > img ').src;
    let gNaslov10Link = document.querySelector('div[class="item item5 slick-slide"] > a').href;

    let gNaslov11 = document.querySelector('div[class="item item6 slick-slide"] > a > p.title ').innerText;
    let gNaslov11Slika = document.querySelector('div[class="item item6 slick-slide"] > a > div[class="storyImgWrapper"] > img ').src;
    let gNaslov11Link = document.querySelector('div[class="item item6 slick-slide"] > a').href;

    const time = Date.now();
    const vrijeme = new Date().toLocaleTimeString([], { hourCycle: "h23", timeZone: "Europe/Belgrade" }).slice(0, -3);

    return [
      {
        naslov: gNaslov1,
        slika: gNaslov1Slika,
        vrijeme: vrijeme,
        izvor: "RTCG",
        link: gNaslov1Link,
        time: time,
      },
      {
        naslov: gNaslov2,
        slika: gNaslov2Slika,
        vrijeme: vrijeme,
        izvor: "RTCG",
        link: gNaslov2Link,
        time: time,
      },
      {
        naslov: gNaslov3,
        slika: gNaslov3Slika,
        vrijeme: vrijeme,
        izvor: "RTCG",
        link: gNaslov3Link,
        time: time,
      },
      {
        naslov: gNaslov4,
        slika: gNaslov4Slika,
        vrijeme: vrijeme,
        izvor: "RTCG",
        link: gNaslov4Link,
        time: time,
      },
      {
        naslov: gNaslov5,
        slika: gNaslov5Slika,
        vrijeme: vrijeme,
        izvor: "RTCG",
        link: gNaslov5Link,
        time: time,
      },
      {
        naslov: gNaslov6,
        slika: gNaslov6Slika,
        vrijeme: vrijeme,
        izvor: "RTCG",
        link: gNaslov6Link,
        time: time,
      },
      {
        naslov: gNaslov7,
        slika: gNaslov7Slika,
        vrijeme: vrijeme,
        izvor: "RTCG",
        link: gNaslov7Link,
        time: time,
      },
      {
        naslov: gNaslov8,
        slika: gNaslov8Slika,
        vrijeme: vrijeme,
        izvor: "RTCG",
        link: gNaslov8Link,
        time: time,
      },
      {
        naslov: gNaslov9,
        slika: gNaslov9Slika,
        vrijeme: vrijeme,
        izvor: "RTCG",
        link: gNaslov9Link,
        time: time,
      },
      {
        naslov: gNaslov10,
        slika: gNaslov10Slika,
        vrijeme: vrijeme,
        izvor: "RTCG",
        link: gNaslov10Link,
        time: time,
      },
      {
        naslov: gNaslov11,
        slika: gNaslov11Slika,
        vrijeme: vrijeme,
        izvor: "RTCG",
        link: gNaslov11Link,
        time: time,
      },
    ];
  });

  await checkForNewData(PodaciRtcg, data, "Rtcg");

  // let rawdata = fs.readFileSync('podaci/podaciRtcg.json');
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
  //   fs.writeFileSync("podaci/podaciRtcg.json", JSON.stringify(stariPodaci), err => {
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
  //   console.log("RTCG - novi podaci ubaceni -------");
  // } else {
  //   console.log("RTCG - nema nista novo -------");
  // }
};

export default scraperRtcg;
