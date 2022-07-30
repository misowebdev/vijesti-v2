import React, { useContext } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Box sx={{ position: "absolute", bottom: 0, width: "100%", pl: 2, pr: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" flex={1} alignItems="center">
          <Typography textAlign="start" variant="caption" fontWeight={800}>
            Dark Theme
          </Typography>
          <Switch value={darkMode} onChange={toggleTheme} checked={darkMode} />
        </Box>
        <Typography
          flex={1}
          textAlign="center"
          variant="caption"
          fontWeight={500}
        >
          Vijesti - Cdm - In4s - Pobjeda - Novosti - Rtcg - Standard
        </Typography>
        <Typography flex={1} textAlign="end" variant="caption" fontWeight={500}>
          React / NodeJS / MongoDB / SocketIO | © 2021 made by Miso
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
