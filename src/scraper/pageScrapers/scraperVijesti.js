const scraperVijesti = async (page) => {
  await page.evaluate(() => {
    window.scrollTo(0, 1800);
  });

  await page.waitForTimeout(1500);

  let data = await page.evaluate(async () => {
    let vijesti = [];

    const petElemenata = [
      ...document.querySelectorAll("div.catWrap > div:nth-child(-n+6)"),
    ];
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
        title: naslovi[i],
        image: slike[i],
        website: "Vijesti",
        link: linkovi[i],
      };
    }
    return vijesti;
  });
  return data;
};

export default scraperVijesti;
