const scraperIn4s = async (page) => {
  try {
    let data = await page.evaluate(async () => {
      const slider = document.querySelector(
        "#page > section.aft-blocks.aft-main-banner-section.banner-carousel-1-wrap.bg-fixed.af-main-banner-image-active > div > div > div.col.col-66.float-l.pad.full-wid-resp > div > div.col-60.pad.float-l.full-wid-resp > div"
      );
      const sliderDesno = document.querySelector(
        "#page > section.aft-blocks.aft-main-banner-section.banner-carousel-1-wrap.bg-fixed.af-main-banner-image-active > div > div > div.aft-trending-latest-popular.col.col-3.float-l.pad.full-wid-resp > div > div > div"
      );
      const izdvojeno = document.querySelector(
        "#page > section:nth-child(6) > div > div > div > div"
      );
      const izabrano = document.querySelector(
        "#page > section:nth-child(7) > div > div > div > div"
      );

      const sve = [slider, sliderDesno, izdvojeno, izabrano];

      const sveVijesti = [];
      sve.forEach((sekcija) => {
        const tekstoviArr = sekcija.querySelectorAll(".read-single");

        tekstoviArr.forEach((tekstDiv) => {
          const title = tekstDiv.querySelector(
            ".read-title > h4 > a"
          ).innerHTML;
          const image = tekstDiv.querySelector(".read-img > a > img").src;
          const link = tekstDiv.querySelector(".read-title > h4 > a").href;
          const website = "In4s";

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
  } catch (error) {
    console.log("ИН4С - Greska u citanju  ---------------------");
    return null;
  }
};

export default scraperIn4s;
