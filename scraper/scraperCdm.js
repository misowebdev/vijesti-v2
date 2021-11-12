import { PodaciCdm } from "../models/ubaciPodatke.js";
import checkForNewData from "./checkForNewData.js";

const scraperCdm = async (page) => {
  // page.screenShot returns a buffer which
  // you can use to save the image to S3
  // const pupslika = await page.screenshot({
  //   type: 'jpeg',
  //   path: "./screenshot.jpg",
  // });

  // cuvanje slike -----------
  // fs.writeFile("skrnsot.jpeg", pupslika, (err) => {
  //   if (err){
  //     console.error(err);
  //   } else {
  //     console.log('Sacuvah sliku! -----------------');
  //   }
  // });

  // skidanje slike -----------
  // let broj = 1
  // data.map(async slikaLink => {
  //     const response = await fetch(slikaLink.slika)
  //     const buffer = await response.buffer();
  //     fs.writeFile("./slike/slika" + broj + ".jpg", buffer, () =>
  //       console.log('finished downloading!'));
  //       broj ++;
  // })

  let data = await page.evaluate(() => {
    let vijesti = [];
    const time = Date.now();
    const vrijeme = new Date().toLocaleTimeString([], { hourCycle: "h23", timeZone: "Europe/Belgrade" }).slice(0, -3);

    const prviiDrugiRed = document.querySelectorAll("#herald-module-0-0, #herald-section-1");

    let naslovi = [];
    let slike = [];
    let linkovi = [];

    for (let i = 0; i < prviiDrugiRed.length; i++) {
      let naslovidata = prviiDrugiRed[i].querySelectorAll("h2 > a");
      let slikedata = prviiDrugiRed[i].querySelectorAll("article a > img");
      let linkovidata = prviiDrugiRed[i].querySelectorAll("h2 a");

      for (let i = 0; i < naslovidata.length; i++) {
        naslovi.push(naslovidata[i].innerText);

        if (slikedata[i].getAttribute("data-src") === null) {
          slike.push(slikedata[i].src);
        } else {
          slike.push(slikedata[i].getAttribute("data-src"));
        }

        linkovi.push(linkovidata[i].href);
      }
    }

    naslovi = [...new Set(naslovi)];
    slike = [...new Set(slike)];
    linkovi = [...new Set(linkovi)];

    for (let i = 0; i < slike.length; i++) {
      slike[i] = slike[i].replace("-224x168", "");
      slike[i] = slike[i].replace("-110x73", "");
    }

    for (let i = 0; i < naslovi.length; i++) {
      vijesti[i] = {
        naslov: naslovi[i],
        slika: slike[i],
        vrijeme: vrijeme,
        izvor: "CDM",
        link: linkovi[i],
        time: time,
      };
    }

    return vijesti;
  });

  await checkForNewData(PodaciCdm, data, "Cdm");

  // try {
  //   const stariPodaci = await PodaciCdm.find();

  //   const noviPodaci = [...data];
  //   const noviNaslovi = noviPodaci.filter(
  //     (el1) => !stariPodaci.some((el2) => el1.naslov === el2.naslov)
  //   );

  //   if (noviNaslovi.length > 0) {
  //     await PodaciCdm.insertMany(noviNaslovi);
  //     await SviPodaci.insertMany(noviNaslovi);

  //     console.log("CDM - novi podaci ubaceni -------");
  //   } else {
  //     console.log("CDM - nema nista novo -------");
  //   }
  // } catch (error) {
  //   console.error("Greska u citanju podataka(scraperCDM) ", error);
  // }

  // let rawdata = fs.readFileSync('podaci/podaciCdm.json');
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
  //   fs.writeFileSync("podaci/podaciCdm.json", JSON.stringify(stariPodaci), err => {
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
  //   console.log("CDM - novi podaci ubaceni -------");
  // } else {
  //   console.log("CDM - nema nista novo -------");
  // }
};

export default scraperCdm;
