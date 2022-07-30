const scraperRtcg2 = async (page) => {
  let data = await page.evaluate(() => {
    let vijesti = [];

    // slider i 2 pored
    const dataGlavne = document.querySelector(".leftHome");

    // ispod slidera 2 x po 5 vijesti
    const dataVijesti = document.querySelector(".new-block-slider-wrapper");

    const dataSve = [dataGlavne, dataVijesti];

    dataSve.forEach((data) => {
      const naslovi = data.querySelectorAll(".slide_title, .title");
      const slike = data.querySelectorAll("img");
      const linkovi = data.querySelectorAll("a");

      for (let i = 0; i < naslovi.length; i++) {
        const naslov = naslovi[i].innerText;
        const slika = slike[i].src;
        const link = linkovi[i].href;

        const vijest = {
          title: naslov,
          image: slika,
          link,
          website: "Rtcg",
        };

        const isDuplicate = vijesti.some((v) => v.title === vijest.title);

        if (!isDuplicate) {
          vijesti.push(vijest);
        }
      }
    });

    return vijesti;
  });
  return data;
};

export default scraperRtcg2;
