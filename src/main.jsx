import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import CountryProfile from "./pages/CountryProfile.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path=":slug" element={<CountryProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
