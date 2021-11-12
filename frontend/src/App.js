import React, { useEffect, useState } from "react";
import Portal from "./components/Portal";
import "./App.css";
import "./assets/styles/index.css";
import socket from "./Socket";
import Footer from "./components/Footer";

function App() {
  const [portali, setPortali] = useState([
    "Vijesti",
    "Cdm",
    "In4s",
    "Pobjeda",
    "Novosti",
    "Rtcg",
    "Standard",
    "Fos",
  ]);
  const [noviPortal, setnoviPortal] = useState();

  useEffect(() => {
    socket.on("novi podaci", (updatePortal) => {
      console.log("socket", updatePortal);
      setnoviPortal(updatePortal);
    });
  }, []);

  useEffect(() => {
    if (noviPortal) {
      let portaliCopy = [...portali].filter((el) => el !== noviPortal);
      setPortali([noviPortal, ...portaliCopy]);
    }
  }, [noviPortal]);

  return (
    <div className="svi-portali">
      {portali.slice(0, 6).map((portal) => (
        <div className="portal" key={portal}>
          <Portal portal={portal} noviPortal={noviPortal} />
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default App;
