import React, { useState } from "react";

function Brokerage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (card) => setHoveredCard(card);
  const handleMouseLeave = () => setHoveredCard(null);

  return (
    <div className="container mt-3 fs-5">
      <div className="row">
        <div
          className="col-4 text-center"
          onMouseEnter={() => handleMouseEnter("equity")}
          onMouseLeave={handleMouseLeave}
          style={{
            padding: "1rem",
            backgroundColor: hoveredCard === "equity" ? "#f0f8ff" : "white",
            transition: "background-color 0.3s",
          }}
        >
          <img
            src="../../../public/images/pricingEquity.svg"
            alt=""
            style={{
              transform: hoveredCard === "equity" ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s",
            }}
          />
          <h3>Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free —
            ₹0 brokerage.
          </p>
        </div>

        <div
          className="col-4 text-center"
          onMouseEnter={() => handleMouseEnter("intraday")}
          onMouseLeave={handleMouseLeave}
          style={{
            padding: "1rem",
            backgroundColor: hoveredCard === "intraday" ? "#f0f8ff" : "white",
            transition: "background-color 0.3s",
          }}
        >
          <img
            src="../../../public/images/intradayTrades.svg"
            alt=""
            style={{
              transform: hoveredCard === "intraday" ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s",
            }}
          />
          <h3>Intraday and F&O trades</h3>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div
          className="col-4 text-center"
          onMouseEnter={() => handleMouseEnter("mf")}
          onMouseLeave={handleMouseLeave}
          style={{
            padding: "1rem",
            backgroundColor: hoveredCard === "mf" ? "#f0f8ff" : "white",
            transition: "background-color 0.3s",
          }}
        >
          <img
            src="../../../public/images/pricingEquity.svg"
            alt=""
            style={{
              transform: hoveredCard === "mf" ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s",
            }}
          />
          <h3>Free direct MF</h3>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
