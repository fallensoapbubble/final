import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row" style={{ animation: "fadeInLeft 7s ease-in-out" }}>
        <div className="col-4">
          <h1>Unbeatable pricing </h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="">
            See Pricing<i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div
          className="col-6"
          style={{ animation: "fadeInRight 7s ease-in-out" }}
        >
          <div className="row">
            <div className="col p-3" style={{ border: "2px solid grey" }}>
              <h1>$0</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col p-3" style={{ border: "2px solid grey" }}>
              <h1>$2</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-100%); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default Pricing;
