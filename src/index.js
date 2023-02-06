import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShipperSignup from "./ShipperSignup";
import RiderSignup from "./RiderSignup";
import RiderLogin from "./Login";
import Home from "./Home";
import RiderDashboard from "./RiderDashboard";
import ShipperDashboard from "./ShipperDashboard";

// #02A9F7

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shipper-signup" element={<ShipperSignup />} />
        <Route path="/rider-signup" element={<RiderSignup />} />
        <Route path="/login" element={<RiderLogin />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/rider/dashboard" element={<RiderDashboard/>}/>
        <Route path="/shipper/dashboard" element={<ShipperDashboard/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
