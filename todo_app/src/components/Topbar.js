import React from "react";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
        backgroundColor: "yellowgreen",
      }}
    >
      <h2>My logo</h2>
      <nav style={{ display: "flex", gap: 30 }}>
        <div onClick={() => navigate("/")}>Home</div>
        <div onClick={() => navigate("/contacts")}>Contacts</div>
      </nav>
    </div>
  );
};

export default Topbar;
