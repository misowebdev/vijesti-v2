const scraperStandard = async (page) => {
  try {
    let data = await page.evaluate(() => {
      const prvih10 = document.querySelector(
        "body > div:nth-child(6) > div:nth-child(2) > div > div > div > div:nth-child(4) > div > div > div"
      );

      const politika = document.querySelector(
        "body > div:nth-child(6) > div:nth-child(2) > div > div > div > div:nth-child(6) > div > div > div > div > div:nth-child(5)"
      );

      const sve = [prvih10, politika];

      const sveVijesti = [];
      sve.forEach((sekcija) => {
        const tekstoviArr = sekcija.querySelectorAll(".td-module-container");

        tekstoviArr.forEach((tekstDiv) => {
          const title = tekstDiv.querySelector("h3 > a").title;
          const image = tekstDiv
            .querySelector(".td-module-thumb > a > span")
            .style.backgroundImage.slice(5, -2);
          const link = tekstDiv.querySelector("h3 > a").href;
          const website = "Standard";

          sveVijesti.push({ title, image, website, link });
        });
      });

      const unique = sveVijesti.filter((v, index, array) => {
        if (array.findIndex((el) => el.title === v.title) === index) {
          return v;
        }
      });

      return unique;
    });
    return data;
  } catch (err) {
    console.log("STANDARD - Greska u citanju  ---------------------");
    return null;
  }
};

export default scraperStandard;
