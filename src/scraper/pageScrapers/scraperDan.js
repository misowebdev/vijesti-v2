const scraperDan = async (page) => {
  let data = await page.evaluate(() => {
    let vijesti = [];

    // row prvi ----------------
    const dataRowPrvi = document.querySelector("div.row.prvi");

    const dataRowPrviNaslovi = dataRowPrvi.querySelectorAll(
      "h3 span.card__title"
    );
    const dataRowPrviSlike = dataRowPrvi.querySelectorAll("img.card__image");
    const dataRowPrviLinkovi = dataRowPrvi.querySelectorAll("a");

    let rowPrviNaslovi = [];
    let rowPrviSlike = [];
    let rowPrviSlikeLink = [];
    let rowPrviLinkovi = [];

    for (let i = 0; i < dataRowPrviNaslovi.length; i++) {
      rowPrviNaslovi[i] = dataRowPrviNaslovi[i].innerText;
      rowPrviSlike[i] = dataRowPrviSlike[i].src;
      rowPrviLinkovi[i] = dataRowPrviLinkovi[i].href;
    }

    rowPrviNaslovi = [...new Set(rowPrviNaslovi)];
    rowPrviSlike = [...new Set(rowPrviSlike)];
    rowPrviLinkovi = [...new Set(rowPrviLinkovi)];

    for (let i = 0; i < rowPrviSlike.length; i++) {
      rowPrviSlikeLink[i] = rowPrviSlike[i].replace("_220", "_1024");
    }

    for (let i = 0; i < rowPrviNaslovi.length; i++) {
      vijesti[i] = {
        title: rowPrviNaslovi[i],
        image: rowPrviSlikeLink[i],
        website: "Dan",
        link: rowPrviLinkovi[i],
      };
    }

    // row drugi ----------------
    const dataRowDrugi = document.querySelector("div.row.drugi");

    const dataRowDrugiNaslovi = dataRowDrugi.querySelectorAll(
      "h3 span.card__title"
    );
    const dataRowDrugiSlike = dataRowDrugi.querySelectorAll("img.card__image");
    const dataRowDrugiLinkovi = dataRowDrugi.querySelectorAll("a");

    let rowDrugiNaslovi = [];
    let rowDrugiSlike = [];
    let rowDrugiSlikeLink = [];
    let rowDrugiLinkovi = [];

    for (let i = 0; i < dataRowDrugiNaslovi.length; i++) {
      rowDrugiNaslovi[i] = dataRowDrugiNaslovi[i].innerText;
      rowDrugiSlike[i] = dataRowDrugiSlike[i].src;
      rowDrugiLinkovi[i] = dataRowDrugiLinkovi[i].href;
    }

    rowDrugiNaslovi = [...new Set(rowDrugiNaslovi)];
    rowDrugiSlike = [...new Set(rowDrugiSlike)];
    rowDrugiLinkovi = [...new Set(rowDrugiLinkovi)];

    for (let i = 0; i < rowDrugiSlike.length; i++) {
      rowDrugiSlikeLink[i] = rowDrugiSlike[i].replace("220", "1024");
    }

    for (let i = 0; i < rowDrugiNaslovi.length; i++) {
      vijesti.push({
        title: rowDrugiNaslovi[i],
        image: rowDrugiSlikeLink[i],
        website: "Dan",
        link: rowDrugiLinkovi[i],
      });
    }

    return vijesti;
  });
  return data;
};

export default scraperDan;
