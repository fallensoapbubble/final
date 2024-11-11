import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <h1
          className="fs-3 text-center mt-5"
          style={{
            animation: "fadeIn 2s ease-in-out",
          }}
        >
          We pioneered the discount broking model in India. <br /> Now, we are
          breaking ground with our technology.
        </h1>
      </div>
      <hr />
      <div className="row fs-5">
        <div
          className="col-6 p-3"
          style={{
            animation: "slideInLeft 2s ease-in-out",
          }}
        >
          <p>
            We kick-started operations with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Stock Verse.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India. Over 1+ Crore clients
            place millions of orders every day through our powerful ecosystem of
            investment platforms, contributing over 15% of all Indian retail
            trading volumes.
          </p>
        </div>
        <div
          className="col-6 p-3"
          style={{
            animation: "slideInRight 2s ease-in-out",
          }}
        >
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default Hero;
