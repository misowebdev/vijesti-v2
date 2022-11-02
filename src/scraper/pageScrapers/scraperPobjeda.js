const scraperPobjeda = async (page) => {
  try {
    let data = await page.evaluate(() => {
      let gNaslov1 = document.querySelector(
        'div[data-slick-index="0"] > div > div > div > div[class="article-a--wrapper"] > h2 '
      ).innerText;
      let gNaslov1Slika = document.querySelector(
        'div[data-slick-index="0"] > div > div > div > div[class="article-a--img"] > div[data="resource"] > img'
      ).src;
      let gNaslov1Link = document.querySelector(
        'div[data-slick-index="0"] > div > div > div > a'
      ).href;

      let gNaslov2 = document.querySelector(
        'div[data-slick-index="1"] > div > div > div > div[class="article-a--wrapper"] > h2 '
      ).innerText;
      let gNaslov2Slika = document.querySelector(
        'div[data-slick-index="1"] > div > div > div > div[class="article-a--img"] > div[data="resource"] > img'
      ).src;
      let gNaslov2Link = document.querySelector(
        'div[data-slick-index="1"] > div > div > div > a'
      ).href;

      let gNaslov3 = document.querySelector(
        'div[data-slick-index="2"] > div > div > div > div[class="article-a--wrapper"] > h2 '
      ).innerText;
      let gNaslov3Slika = document.querySelector(
        'div[data-slick-index="2"] > div > div > div > div[class="article-a--img"] > div[data="resource"] > img'
      ).src;
      let gNaslov3Link = document.querySelector(
        'div[data-slick-index="2"] > div > div > div > a'
      ).href;

      let gNaslov4 = document.querySelector(
        'div[data-slick-index="3"] > div > div > div > div[class="article-a--wrapper"] > h2 '
      ).innerText;
      let gNaslov4Slika = document.querySelector(
        'div[data-slick-index="3"] > div > div > div > div[class="article-a--img"] > div[data="resource"] > img'
      ).src;
      let gNaslov4Link = document.querySelector(
        'div[data-slick-index="3"] > div > div > div > a'
      ).href;

      let gNaslov5 = document.querySelector(
        "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(1) > div > div > a"
      ).title;
      let gNaslov5Slika = document.querySelector(
        "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(1) > div > div > div > div:nth-child(3) > img"
      ).src;
      let gNaslov5Link = document.querySelector(
        "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(1) > div > div > a"
      ).href;

      let gNaslov6 = document.querySelector(
        "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(2) > div > div > a"
      ).title;
      let gNaslov6Slika = document.querySelector(
        "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(2) > div > div > div > div:nth-child(3) > img"
      ).src;
      let gNaslov6Link = document.querySelector(
        "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(2) > div > div > a"
      ).href;

      let gNaslov7 = document.querySelector(
        "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(3) > div > div > a"
      ).title;
      let gNaslov7Slika = document.querySelector(
        "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(3) > div > div > div > div:nth-child(3) > img"
      ).src;
      let gNaslov7Link = document.querySelector(
        "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(3) > div > div > a"
      ).href;

      let gNaslov8 = document.querySelector(
        "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(4) > div > div > a"
      ).title;
      let gNaslov8Slika = document.querySelector(
        "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(4) > div > div > div > div:nth-child(3) > img"
      ).src;
      let gNaslov8Link = document.querySelector(
        "body > div.root > main > div > div:nth-child(2) > div:nth-child(3) > module-loader > div > div > div > div.row.row-thirds > div:nth-child(4) > div > div > a"
      ).href;

      return [
        {
          title: gNaslov1,
          image: gNaslov1Slika,
          website: "Pobjeda",
          link: gNaslov1Link,
        },
        {
          title: gNaslov2,
          image: gNaslov2Slika,
          website: "Pobjeda",
          link: gNaslov2Link,
        },
        {
          title: gNaslov3,
          image: gNaslov3Slika,
          website: "Pobjeda",
          link: gNaslov3Link,
        },
        {
          title: gNaslov4,
          image: gNaslov4Slika,
          website: "Pobjeda",
          link: gNaslov4Link,
        },
        {
          title: gNaslov5,
          image: gNaslov5Slika,
          website: "Pobjeda",
          link: gNaslov5Link,
        },
        {
          title: gNaslov6,
          image: gNaslov6Slika,
          website: "Pobjeda",
          link: gNaslov6Link,
        },
        {
          title: gNaslov7,
          image: gNaslov7Slika,
          website: "Pobjeda",
          link: gNaslov7Link,
        },
        {
          title: gNaslov8,
          image: gNaslov8Slika,
          website: "Pobjeda",
          link: gNaslov8Link,
        },
      ];
    });
    return data;
  } catch (err) {
    console.log("POBJEDA - Greska u citanju  ---------------------");
    return null;
  }
};

export default scraperPobjeda;
