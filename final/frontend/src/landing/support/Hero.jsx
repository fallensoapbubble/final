import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
<div className="container" style={{ backgroundColor: "#387ed1"}}>
      <div className="row">
        <div
          className="col-6 p-5"
          style={{ color: "white", lineHeight: "3.5" }}
        >
          <h4 className="mb-4"> Support Portal</h4>
          <h4 className="mb-4">
            Search for an answer or browse help topics to create a ticket
          </h4>
          <input
            style={{
              height: "3rem",
              width: "80%",
              border: "2px solid gray",
              borderRadius: "5px",
            }}
            type="search"
            placeholder=" Eg: how do i activate F&O, why is my order getting rejected ..."
            aria-label="Search"
          ></input>
          <p>
            <Link style={{ color: "white" }} className="m-1">
              Track account opening
            </Link>
            <Link style={{ color: "white" }} className="m-1">
            
              Track segment activation
            </Link>
            <Link style={{ color: "white" }} className="m-1">
            
              Intraday margins
            </Link>
            <Link style={{ color: "white" }} className="m-1">
            
              Kite user manual
            </Link>
          </p>
        </div>
        <div
          className="col-6 p-5"
          style={{ color: "white", lineHeight: "3.5" }}
        >
          <h5>
            <Link style={{ color: "white" }}>Track Tickets</Link>
          </h5>
          <div className="row mb-3"> </div>
          <div className="row mt-3">
            <h4>Featured</h4>
            <ul>
              <ol>
              1. <Link  style={{ color: "white" }}>Current Buybacks - August 2024</Link>
              </ol>
              <ol>
              2. <Link  style={{ color: "white" }}> Offer for sale (OFS) - August 2024</Link>
              </ol>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
