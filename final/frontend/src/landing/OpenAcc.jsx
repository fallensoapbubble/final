import React, { useState } from "react";

function OpenAcc() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div className="container text-center" style={{ marginBottom: "5rem" }}>
      <div
        className="row"
        style={{ padding: "5rem" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1
          style={{
            fontSize: hovered ? "3rem" : "2.5rem",
            color: hovered ? "#0056b3" : "black",
            transition: "font-size 0.3s ease-in-out, color 0.3s ease-in-out",
          }}
        >
          Open a StockVerse account
        </h1>
        <p
          style={{
            opacity: hovered ? 1 : 0.8,
            transform: hovered ? "translateY(-10px)" : "translateY(0px)",
            transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
          }}
        >
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <p>
          <button
            type="button"
            className="btn btn-primary"
            style={{
              marginTop: "3rem",
              width: "40%",
              transform: hovered ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease-in-out, background-color 0.3s",
              backgroundColor: hovered ? "#0056b3" : "#007bff",
            }}
          >
            Sign up now
          </button>
        </p>
      </div>
    </div>
  );
}

export default OpenAcc;
