import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShipperSignup from "./ShipperSignup";
import RiderSignup from "./RiderSignup";
import RiderLogin from "./Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shipper-signup" element={<ShipperSignup />} />
        <Route path="/rider-signup" element={<RiderSignup />} />
        <Route path="/login" element={<RiderLogin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
