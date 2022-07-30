const scraperFos = async (page) => {
  let skrolovano = false;

  const skrol = async (page) => {
    await page.evaluate(() => {
      window.scrollTo(0, 1400);
      skrolovano = true;
    });
  };

  await page.waitForSelector(
    "ul.slider.animated > li:nth-child(4) > a > span > img"
  );
  await skrol(page);
  await page.waitForSelector(".infos-container");

  let data = await page.evaluate(() => {
    if (skrolovano) {
      const time = Date.now();
      let vijesti = [];
      const vrijeme = new Date()
        .toLocaleTimeString([], {
          hourCycle: "h23",
          timeZone: "Europe/Belgrade",
        })
        .slice(0, -3);

      const triReda = document.querySelectorAll(
        "div.breakingNews__left__topSection, div.breakingNews__left__bottomSection > div.two-big-three-small, div.infos-container"
      );

      let naslovi = [];
      let slike = [];
      let linkovi = [];

      for (let i = 0; i < triReda.length; i++) {
        let naslovidata = triReda[i].querySelectorAll(
          "li.slide div.naslov, div.sadrzaj > span, span.title, span.big-card__naslov"
        );
        let slikedata = triReda[i].querySelectorAll(
          "img.slika, span.slika-container > img, img.big-card__img, img.leaderboard-card__image"
        );
        let linkovidata = triReda[i].querySelectorAll(
          "li.slide a, a.smaller-item, a.big-card.tekst, a.leaderboard-card"
        );

        for (let e = 0; e < naslovidata.length; e++) {
          naslovi.push(naslovidata[e].innerText);
          linkovi.push(linkovidata[e].href);
        }
        for (let i = 0; i < slikedata.length; i++) {
          slike.push(slikedata[i].src);
        }
      }

      naslovi.shift();
      linkovi.shift();

      for (let i = 0; i < slike.length; i++) {
        slike[i] = slike[i].replace("?w=215&h=129", "");
        slike[i] = slike[i].replace("?w=430&h=200", "");
        slike[i] = slike[i].replace("?w=600&h=400", "");
      }

      naslovi = [...new Set(naslovi)];
      slike = [...new Set(slike)];
      linkovi = [...new Set(linkovi)];

      for (let i = 0; i < naslovi.length; i++) {
        vijesti[i] = {
          naslov: naslovi[i],
          slika: slike[i],
          vrijeme: vrijeme,
          izvor: "FOS",
          link: linkovi[i],
          time: time,
        };
      }

      return vijesti;
    }
  });

  await checkForNewData(PodaciFos, data, "Fos");

  // let rawdata = fs.readFileSync('podaci/podaciFos.json');
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
  //   fs.writeFileSync("podaci/podaciFos.json", JSON.stringify(stariPodaci), err => {
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
  //   console.log("FOS - novi podaci ubaceni -------");
  // } else {
  //   console.log("FOS - nema nista novo -------");
  // }
};

export default scraperFos;
