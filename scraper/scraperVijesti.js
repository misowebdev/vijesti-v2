import { PodaciVijesti } from "../models/ubaciPodatke.js";
import checkForNewData from "./checkForNewData.js";

const scraperVijesti = async (page) => {
  await page.evaluate(() => {
    window.scrollTo(0, 1800);
  });

  await page.waitForTimeout(1500);

  let data = await page.evaluate(async () => {
    let vijesti = [];
    const time = Date.now();
    const vrijeme = new Date().toLocaleTimeString([], { hourCycle: "h23", timeZone: "Europe/Belgrade" }).slice(0, -3);

    const petElemenata = [...document.querySelectorAll("div.catWrap > div:nth-child(-n+6)")];
    petElemenata.splice(3, 1);

    let naslovi = [];
    let slike = [];
    let linkovi = [];

    for (let i = 0; i < petElemenata.length; i++) {
      let naslovidata = petElemenata[i].querySelectorAll("a.newsImg > img");
      let slikedata = petElemenata[i].querySelectorAll("a.newsImg > img");
      let linkovidata = petElemenata[i].querySelectorAll("a.newsImg");

      for (let i = 0; i < naslovidata.length; i++) {
        naslovi.push(naslovidata[i].alt);
        slike.push(slikedata[i].src);
        linkovi.push(linkovidata[i].href);
      }
    }

    naslovi = [...new Set(naslovi)];
    slike = [...new Set(slike)];
    linkovi = [...new Set(linkovi)];

    for (let i = 0; i < naslovi.length; i++) {
      vijesti[i] = {
        naslov: naslovi[i],
        slika: slike[i],
        vrijeme: vrijeme,
        izvor: "VIJESTI",
        link: linkovi[i],
        time: time,
      };
    }

    return vijesti;
  });

  await checkForNewData(PodaciVijesti, data, "Vijesti");

  // let rawdata = fs.readFileSync('podaci/podaciVijesti.json');
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
  //   fs.writeFileSync("podaci/podaciVijesti.json", JSON.stringify(stariPodaci), err => {
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
  //   console.log("VIJESTI - novi podaci ubaceni -------");
  // } else {
  //   console.log("VIJESTI - nema nista novo -------");
  // }
};

export default scraperVijesti;
