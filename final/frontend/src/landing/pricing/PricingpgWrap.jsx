import React from "react";
import Brokerage from "./Brokerage";
import Hero from "../home/Hero";
import Calculator from "./Calculator";

function PricingpgWrap() {
  return (
    <>
      <div className="container text-center mt-4 mb-4">
        <div className="fs-4">
          <h1>Pricing</h1>
          <p>Free equity investments and flat ₹20 intraday and F&O trades</p>
        </div>
      </div>
      <hr />
      <Brokerage></Brokerage>
      <Hero></Hero>
      <Calculator></Calculator>
    </>
  );
}

export default PricingpgWrap;
