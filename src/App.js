import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import ThemeProvider from "./themes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
