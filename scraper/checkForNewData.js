import { SviPodaci } from "../models/ubaciPodatke.js";
import { io } from "../index.js";

const checkForNewData = async (collection, data, portal) => {
  io.sockets.emit("provjeri vrijeme", portal);

  try {
    const stariPodaci = await collection.find();
    const noviPodaci = data;
    const noviNaslovi = noviPodaci.filter(
      (el1) => !stariPodaci.some((el2) => el1.naslov === el2.naslov)
    );

    if (noviNaslovi.length > 0) {
      await collection.insertMany(noviNaslovi);
      await SviPodaci.insertMany(noviNaslovi);
      io.sockets.emit("novi podaci", portal, noviNaslovi);

      console.log(portal, " - novi podaci ubaceni -------");
    } else {
      console.log(portal, " - nema nista novo -------");
    }
  } catch (error) {
    console.error(portal, " Greska u citanju podataka(scraper) ", error);
  }
};

export default checkForNewData;
