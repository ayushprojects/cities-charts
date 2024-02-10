import React from "react";
import { Link } from "react-router-dom";

export default function Bar() {
  return (
    <>
      <div
        style={{
          padding: "20px",
          background: "grey",
          display: "flex",
          justifyContent: "space-around",
        }}>
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/CityInfo" style={{ color: "black", textDecoration: "none" }}>
          CityInfo
        </Link>
      </div>
    </>
  );
}
