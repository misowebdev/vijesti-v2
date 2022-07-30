const scraperNovosti = async (page) => {
  let data = await page.evaluate(() => {
    window.scrollTo(0, 1000);

    let vijesti = [];

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
              title: naslovi[i].title,
              image: slike[i].src,
              link: linkovi[i].href,
              website: "Novosti",
            },
          ];
        }
      }
    }
    return vijesti;
  });
  return data;
};

export default scraperNovosti;
