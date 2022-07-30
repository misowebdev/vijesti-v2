const scraperStandard = async (page) => {
  let data = await page.evaluate(() => {
    let vijesti = [];

    const dataSve = document.querySelector(
      "body > div:nth-child(6) > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div:nth-child(2)  > div:nth-child(2)"
    );

    const naslovi = dataSve.querySelectorAll(".td-module-thumb a");
    const linkovi = dataSve.querySelectorAll(".td-module-thumb a");
    const slike = dataSve.querySelectorAll(".td-module-thumb a span");

    for (let i = 0; i < naslovi.length; i++) {
      const slikaLink = slike[i].style.backgroundImage.slice(
        5,
        slike[i].style.backgroundImage.length - 2
      );

      const copy = vijesti.filter((el) => el.naslov === naslovi[i].title);

      if (copy.length === 0) {
        vijesti = [
          ...vijesti,
          {
            title: naslovi[i].title,
            image: slikaLink,
            link: linkovi[i].href,
            website: "Standard",
          },
        ];
      }
    }
    return vijesti;
  });
  return data;
};

export default scraperStandard;
