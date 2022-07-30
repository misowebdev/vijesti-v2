const scraperSportskeNet = async (page) => {
  let data = await page.evaluate(() => {
    let vijesti = [];

    const vijestiDana = document.querySelector("section.section--50");

    let naslovi = [];
    let slike = [];
    let linkovi = [];

    let naslovidata =
      vijestiDana.querySelectorAll("h1") || vijestiDana.querySelectorAll("h4");
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
        title: naslovi[i],
        image: slike[i],
        website: "Sportske.net",
        link: linkovi[i],
      };
    }

    return vijesti;
  });

  return data;
};

export default scraperSportskeNet;
