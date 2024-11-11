import React from "react";

function Education() {
  return (
    <div className="container" style={{ margin: "8rem" }}>
      <div className="row" style={{ animation: "fadeInUp 9s ease-in-out" }}>
        <div className="col">
          <img
            src="../../../public/images/education.svg"
            alt=""
            style={{ animation: "zoomIn 9s ease-in-out" }}
          />
        </div>
        <div className="col text-center">
          <h1 style={{ animation: "fadeInDown 9s ease-in-out" }}>
            Free and open market education
          </h1>
          <div className="row" style={{ animation: "fadeIn 9s ease-in-out" }}>
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="">
              Varsity<i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="">
              TradingQ&A{" "}
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-100%); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoomIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default Education;
