const scraperRtcg2 = async (page) => {
  try {
    let data = await page.evaluate(() => {
      let vijesti = [];

      // slider i 2 pored
      const dataGlavne = document.querySelector(".leftHome");

      // ispod slidera 11 vijesti
      const dataVijesti = document.querySelector(
        "#content > div > div.storyMainBox.fix.latestStories-11.new-block4.stories-11"
      );

      const sve = [dataGlavne, dataVijesti];

      const sveVijesti = [];
      sve.forEach((sekcija) => {
        const tekstoviArr = sekcija.querySelectorAll(".item");

        tekstoviArr.forEach((tekstDiv) => {
          const title = tekstDiv.querySelector("p").innerText;
          const image = tekstDiv.querySelector("img").src;
          const link = tekstDiv.querySelector("a").href;
          const website = "Rtcg";

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
    console.log("RTCG - Greska u citanju  ---------------------");
    return null;
  }
};

export default scraperRtcg2;
