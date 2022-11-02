const scraperCdm = async (page) => {
  try {
    let data = await page.evaluate(() => {
      let vijesti = [];

      const prviiDrugiRed = document.querySelectorAll(
        "#herald-module-0-0, #herald-section-1"
      );

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
          title: naslovi[i],
          image: slike[i],
          website: "Cdm",
          link: linkovi[i],
        };
      }

      return vijesti;
    });

    return data;
  } catch (err) {
    console.log("CDM - Greska u citanju  ---------------------");
    return null;
  }
};

export default scraperCdm;
