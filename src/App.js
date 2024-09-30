import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

import ThemeProvider from "./themes";
import { AuthProvider } from "./contexts/AuthContext";
import AlertMsg from "./components/AlertMsg";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider>
          <AlertMsg />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
