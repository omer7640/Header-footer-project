import React from "react";
import pic1 from "../assets/pic1.jpg";
export default function DashBoard() {
  return (
    <div className="dashboard">
      <div className="heading-section">
        <h2 className="ride-h2">Ride To Destinations With Maximum Comfort</h2>
        <p className="fine-para">FINEST TRANSPORT</p>
      </div>
      <img src={pic1} className="pic1" />
    </div>
  );
}
