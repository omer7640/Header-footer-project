import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import DashBoard from "../Pages/DashBoard";
export default function AllRoutes() {
  return (
    <div className="routes container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}
