import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useTransition, animated } from "react-spring";

import config from "../config/config";
import Website from "./Website";

import Grid from "@mui/material/Grid";

const allWebsites = [
  "Vijesti",
  "Cdm",
  "In4s",
  "Pobjeda",
  "Novosti",
  "Rtcg",
  "Standard",
];

function Websites() {
  const [updatedWebsite, setUpdatedWebsite] = useState("");
  const [websites, setWebsites] = useState(allWebsites);

  const transitions = useTransition([...websites].slice(0, 6), {
    key: (website) => website,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { duration: 500 },
    trail: 150,
  });

  useEffect(() => {
    const socket = io(config.SERVER_URL);
    socket.on("new news", (websiteName) => {
      setWebsites((prevWebsites) => {
        const websitesCopy = [...prevWebsites].filter(
          (el) => el !== websiteName
        );
        return [websiteName, ...websitesCopy];
      });
      setUpdatedWebsite(websiteName);
    });
    return () => socket.disconnect();
  }, []);

  return (
    <Grid container spacing={2} sx={{ height: "98vh" }}>
      {transitions((styles, website) => (
        <Grid item xs={4} sx={{ height: "50%" }}>
          <animated.div
            style={{
              ...styles,
              height: "100%",
            }}
          >
            <Website website={website} updatedWebsite={updatedWebsite} />
          </animated.div>
        </Grid>
      ))}
    </Grid>
  );
}

export default Websites;
