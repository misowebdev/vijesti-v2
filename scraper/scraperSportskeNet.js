import { PodaciSportske } from "../models/ubaciPodatke.js";
import checkForNewData from "./checkForNewData.js";

const scraperSportskeNet = async (page) => {
  let data = await page.evaluate(() => {
    let vijesti = [];

    const time = Date.now();
    const vrijeme = new Date().toLocaleTimeString([], { hourCycle: "h23", timeZone: "Europe/Belgrade" }).slice(0, -3);

    const vijestiDana = document.querySelector("section.section--50");

    let naslovi = [];
    let slike = [];
    let linkovi = [];

    let naslovidata = vijestiDana.querySelectorAll("h1") || vijestiDana.querySelectorAll("h4");
    let slikedata = vijestiDana.querySelectorAll("img");
    let linkovidata = vijestiDana.querySelectorAll("a");

    for (let i = 0; i < naslovidata.length; i++) {
      naslovi.push(naslovidata[i].innerText);
      slike.push(slikedata[i].src);
      linkovi.push(linkovidata[i].href);
    }

    naslovi = [...new Set(naslovi)];
    slike = [...new Set(slike)];
    linkovi = [...new Set(linkovi)];

    linkovi.shift();

    for (let i = 0; i < slike.length; i++) {
      slike[i] = slike[i].replace("_280x190", "");
    }

    for (let i = 0; i < naslovi.length; i++) {
      vijesti[i] = {
        naslov: naslovi[i],
        slika: slike[i],
        vrijeme: vrijeme,
        izvor: "SPORTSKE.NET",
        link: linkovi[i],
        time: time,
      };
    }

    return vijesti;
  });

  await checkForNewData(PodaciSportske, data, "Sportske");

  // let rawdata = fs.readFileSync('podaci/podaciSportske.json');
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
  //   fs.writeFileSync("podaci/podaciSportske.json", JSON.stringify(stariPodaci), err => {
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
  //   console.log("SPORTSKE.NET - novi podaci ubaceni -------");
  // } else {
  //   console.log("SPORTSKE.NET - nema nista novo -------");
  // }
};

export default scraperSportskeNet;
