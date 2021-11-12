import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { headerLogo } from "../logoHeaderBoja";
import socket from "../Socket";

function Portal({ portal, noviPortal }) {
  // const locaHost = "http://localhost:9000";

  const [naslovi, setnaslovi] = useState([]);
  const [brvijesti, setbrvijesti] = useState(4);
  const [loading, setloading] = useState(true);
  const [crvena, setCrvena] = useState([]);
  const [blagoCrvena, setBlagoCrvena] = useState([]);

  const crvenaRef = useRef(crvena);
  const blagoCrvenaRef = useRef(blagoCrvena);

  useEffect(() => {
    socket.on("provjeri vrijeme", () => {
      const blagoCrv = crvenaRef.current.filter(jeLiBlagoCrvena);
      const bezBoje = blagoCrvenaRef.current.filter(
        (el) => jeLiBlagoCrvena(el) === false
      );
      if (blagoCrv.length > 0) {
        const zaCrveno = crvenaRef.current.filter(
          (el) => !blagoCrv.some((el2) => el.naslov === el2.naslov)
        );
        setCrvena(zaCrveno);
        crvenaRef.current = zaCrveno;
        setBlagoCrvena((prev) => {
          const zaBlagoCrvena = prev.filter(jeLiBlagoCrvena);
          blagoCrvenaRef.current = [...blagoCrv, ...zaBlagoCrvena];
          return [...blagoCrv, ...zaBlagoCrvena];
        });
      }
      if (bezBoje.length > 0) {
        setBlagoCrvena(blagoCrvenaRef.current.filter(jeLiBlagoCrvena));
        blagoCrvenaRef.current = blagoCrvenaRef.current.filter(jeLiBlagoCrvena);
      }
    });
  }, []);

  useEffect(() => {
    if (loading) {
      pokupiVijesti(portal);
      setloading(false);
    }
    return () => {
      setloading(true);
    };
  }, []);

  useEffect(() => {
    if (noviPortal === portal && !loading) {
      pokupiVijesti(noviPortal);
    }
  }, [noviPortal]);

  const pokupiVijesti = async (portall) => {
    const res = await axios.get(`/vijesti/Podaci${portall}/${brvijesti}`);
    console.log("portal data", portal, res.data);
    setnaslovi(res.data);
  };

  const jeLiCrvena = (naslov) => {
    let vrijemeSad = Date.now();
    let min = 1000 * 60;
    let petMin = min * 5;
    return vrijemeSad - naslov.time <= petMin ? true : false;
  };

  const jeLiBlagoCrvena = (naslov) => {
    let vrijemeSad = Date.now();
    let min = 1000 * 60;
    let petMin = min * 5;
    let desetMin = petMin * 2;
    return vrijemeSad - naslov.time > petMin &&
      vrijemeSad - naslov.time <= desetMin
      ? true
      : false;
  };

  useEffect(() => {
    let zaCrveno = [];
    let zaBlagoCrvena = [];
    if (naslovi.length > 0) {
      naslovi.forEach((el) => {
        if (jeLiCrvena(el)) {
          zaCrveno.push({ naslov: el.naslov, time: el.time });
        } else if (jeLiBlagoCrvena(el)) {
          zaBlagoCrvena.push({ naslov: el.naslov, time: el.time });
        }
      });

      setCrvena(zaCrveno);
      crvenaRef.current = zaCrveno;
      setBlagoCrvena(zaBlagoCrvena);
      blagoCrvenaRef.current = zaBlagoCrvena;
    }
  }, [naslovi]);

  // const josVijesti = () => {
  //   let brvijestiCopy = brvijesti;
  //   brvijestiCopy += 5;
  //   setbrvijesti(brvijestiCopy);
  // };

  const stil = (naslov) => {
    for (let i = 0; i < crvena.length; i++) {
      if (crvena[i].naslov === naslov.naslov) {
        return {
          backgroundColor: "red",
          color: "white",
        };
      }
    }

    for (let i = 0; i < blagoCrvena.length; i++) {
      if (blagoCrvena[i].naslov === naslov.naslov) {
        return {
          backgroundColor: "#fd4545d9",
          color: "white",
        };
      }
    }
  };

  return (
    <>
      <div className="header" style={headerLogo(portal).boja}>
        <img src={headerLogo(portal).logo} alt="" />
      </div>
      {!loading &&
        naslovi.map((naslov) => {
          return (
            <a
              href={naslov.link}
              target="_blank"
              rel="noreferrer"
              key={naslov._id}
            >
              <div style={stil(naslov)} className="vijest">
                <div className="slika">
                  <img src={naslov.slika} alt="" />
                </div>
                <div className="naslov">
                  <p>{naslov.naslov}</p>
                  <div className="info">{naslov.vrijeme}</div>
                </div>
              </div>
            </a>
          );
        })}
    </>
  );
}

export default Portal;
