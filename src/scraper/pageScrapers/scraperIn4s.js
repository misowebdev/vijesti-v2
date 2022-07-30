const scraperIn4s = async (page) => {
  let data = await page.evaluate(() => {
    let gNaslov1 = document
      .querySelector(
        'div[class="td_module_mx5 td-animation-stack td-big-grid-post-0 td-big-grid-post td-big-thumb"] > div[class="td-module-thumb"] > a'
      )
      .getAttribute("title");
    let gNaslov1Slika = document.querySelector(
      'div[class="td_module_mx5 td-animation-stack td-big-grid-post-0 td-big-grid-post td-big-thumb"] > div[class="td-module-thumb"] > a > img '
    ).src;
    let gNaslov1Link = document.querySelector(
      'div[class="td_module_mx5 td-animation-stack td-big-grid-post-0 td-big-grid-post td-big-thumb"] > div[class="td-module-thumb"] > a'
    ).href;

    let gNaslov2 = document
      .querySelector(
        'div[class="td_module_mx6 td-animation-stack td-big-grid-post-1 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a'
      )
      .getAttribute("title");
    let gNaslov2Slika = document.querySelector(
      'div[class="td_module_mx6 td-animation-stack td-big-grid-post-1 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a > img'
    ).src;
    let gNaslov2SlikaUrl = gNaslov2Slika.replace("-238x178", "");
    let gNaslov2Link = document.querySelector(
      'div[class="td_module_mx6 td-animation-stack td-big-grid-post-1 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a'
    ).href;

    let gNaslov3 = document
      .querySelector(
        'div[class="td_module_mx6 td-animation-stack td-big-grid-post-2 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a'
      )
      .getAttribute("title");
    let gNaslov3Slika = document.querySelector(
      'div[class="td_module_mx6 td-animation-stack td-big-grid-post-2 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a > img'
    ).src;
    let gNaslov3SlikaUrl = gNaslov3Slika.replace("-238x178", "");
    let gNaslov3Link = document.querySelector(
      'div[class="td_module_mx6 td-animation-stack td-big-grid-post-2 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a'
    ).href;

    let gNaslov4 = document
      .querySelector(
        'div[class="td_module_mx6 td-animation-stack td-big-grid-post-3 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a'
      )
      .getAttribute("title");
    let gNaslov4Slika = document.querySelector(
      'div[class="td_module_mx6 td-animation-stack td-big-grid-post-3 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a > img'
    ).src;
    let gNaslov4SlikaUrl = gNaslov4Slika.replace("-238x178", "");
    let gNaslov4Link = document.querySelector(
      'div[class="td_module_mx6 td-animation-stack td-big-grid-post-3 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a'
    ).href;

    let gNaslov5 = document
      .querySelector(
        'div[class="td_module_mx6 td-animation-stack td-big-grid-post-4 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a'
      )
      .getAttribute("title");
    let gNaslov5Slika = document.querySelector(
      'div[class="td_module_mx6 td-animation-stack td-big-grid-post-4 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a > img'
    ).src;
    let gNaslov5SlikaUrl = gNaslov5Slika.replace("-238x178", "");
    let gNaslov5Link = document.querySelector(
      'div[class="td_module_mx6 td-animation-stack td-big-grid-post-4 td-big-grid-post td-tiny-thumb"] > div[class="td-module-thumb"] > a'
    ).href;

    let gNaslov6 = document.querySelectorAll(
      'div[class="td_block_inner td-column-3"]'
    )[0].children[0].children[0].children[0].children[2].children[0].innerText;
    let gNaslov6Slika = document.querySelectorAll(
      'div[class="td_block_inner td-column-3"]'
    )[0].children[0].children[0].children[0].children[1].children[0].children[0]
      .currentSrc;
    let gNaslov6Link = document.querySelectorAll(
      'div[class="td_block_inner td-column-3"]'
    )[0].children[0].children[0].children[0].children[2].children[0].children[0]
      .href;

    let gNaslov7 = document.querySelectorAll(
      'div[class="td_block_inner td-column-3"]'
    )[0].children[0].children[1].children[0].children[2].children[0].innerText;
    let gNaslov7Slika = document.querySelectorAll(
      'div[class="td_block_inner td-column-3"]'
    )[0].children[0].children[1].children[0].children[1].children[0].children[0]
      .currentSrc;
    let gNaslov7Link = document.querySelectorAll(
      'div[class="td_block_inner td-column-3"]'
    )[0].children[0].children[1].children[0].children[2].children[0].children[0]
      .href;

    let gNaslov8 = document.querySelectorAll(
      'div[class="td_block_inner td-column-3"]'
    )[0].children[0].children[2].children[0].children[2].children[0].innerText;
    let gNaslov8Slika = document.querySelectorAll(
      'div[class="td_block_inner td-column-3"]'
    )[0].children[0].children[2].children[0].children[1].children[0].children[0]
      .currentSrc;
    let gNaslov8Link = document.querySelectorAll(
      'div[class="td_block_inner td-column-3"]'
    )[0].children[0].children[2].children[0].children[2].children[0].children[0]
      .href;

    return [
      {
        title: gNaslov1,
        image: gNaslov1Slika,
        website: "In4s",
        link: gNaslov1Link,
      },
      {
        title: gNaslov2,
        image: gNaslov2SlikaUrl,
        website: "In4s",
        link: gNaslov2Link,
      },
      {
        title: gNaslov3,
        image: gNaslov3SlikaUrl,
        website: "In4s",
        link: gNaslov3Link,
      },
      {
        title: gNaslov4,
        image: gNaslov4SlikaUrl,
        website: "In4s",
        link: gNaslov4Link,
      },
      {
        title: gNaslov5,
        image: gNaslov5SlikaUrl,
        website: "In4s",
        link: gNaslov5Link,
      },
      {
        title: gNaslov6,
        image: gNaslov6Slika,
        website: "In4s",
        link: gNaslov6Link,
      },
      {
        title: gNaslov7,
        image: gNaslov7Slika,
        website: "In4s",
        link: gNaslov7Link,
      },
      {
        title: gNaslov8,
        image: gNaslov8Slika,
        website: "In4s",
        link: gNaslov8Link,
      },
    ];
  });

  return data;
};

export default scraperIn4s;
