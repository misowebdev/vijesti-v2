import React from "react";
import { CssBaseline } from "@mui/material";

import Websites from "./components/Websites";
import Footer from "./components/Footer";

import CustomThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Websites />
      <Footer />
    </CustomThemeProvider>
  );
}

export default App;
