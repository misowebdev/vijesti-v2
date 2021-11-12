import { PodaciNovosti } from "../models/ubaciPodatke.js";
import checkForNewData from "./checkForNewData.js";

const scraperNovosti = async (page) => {
  let data = await page.evaluate(() => {
    window.scrollTo(0, 1000);

    let vijesti = [];
    const time = Date.now();
    const vrijeme = new Date()
      .toLocaleTimeString([], { hourCycle: "h23", timeZone: "Europe/Belgrade" })
      .slice(0, -3);

    const dataRowPrvi = document.querySelector(
      "body > main > div.page-content-wrapper > div > div > div > section:nth-child(1)"
    );
    const dataRowDrugi = document.querySelector(
      "body > main > div.page-content-wrapper > div > div > div > section:nth-child(2)"
    );

    const dataRowSve = [dataRowPrvi, dataRowDrugi];

    for (const row of dataRowSve) {
      const naslovi = row.querySelectorAll("h3 > a");
      const slike = row.querySelectorAll("a img");
      const linkovi = row.querySelectorAll("h3 a");

      for (let i = 0; i < naslovi.length; i++) {
        const copy = vijesti.filter((el) => el.slika === slike[i].src);

        if (copy.length === 0) {
          vijesti = [
            ...vijesti,
            {
              naslov: naslovi[i].title,
              slika: slike[i].src,
              link: linkovi[i].href,
              izvor: "НОВОСТИ",
              vrijeme: vrijeme,
              time: time,
            },
          ];
        }
      }
    }

    return vijesti;
  });

  await checkForNewData(PodaciNovosti, data, "Novosti");
};

export default scraperNovosti;
