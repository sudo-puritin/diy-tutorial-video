import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

import ThemeProvider from "./themes";
import { AuthProvider } from "./contexts/AuthContext";
import ToastMsg from "./components/ToastMsg";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ToastMsg />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
