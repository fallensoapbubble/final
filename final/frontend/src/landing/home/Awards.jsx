import React from "react";

function Awards() {
  return (
    <div className="container text-center">
      <div className="row">
        <div
          className="col-6"
          style={{
            animation: "fadeInLeft 3s ease-in-out",
          }}
        >
          <img
            src="../../../public/images/largestBroker.svg"
            alt=""
            style={{
              width: "100%",
              height: "auto",
              animation: "scaleUp 3s ease-in-out",
            }}
          />
        </div>
        <div
          className="col-6"
          style={{
            padding: "7rem",
            animation: "fadeInRight 3s ease-in-out",
          }}
        >
          <h1 style={{ animation: "bounceIn 3s ease-in-out" }}>
            Largest stock broker in India
          </h1>
          <h4 style={{ animation: "fadeIn 2.5s ease-in-out" }}>
            2 mil. + users as of today
          </h4>
          <div className="row">
            <div
              className="col-6"
              style={{
                animation: "fadeInUp 2.5s ease-in-out",
              }}
            >
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency Derivatives</li>
              </ul>
            </div>
            <div
              className="col-6"
              style={{
                animation: "fadeInUp 2.5s ease-in-out",
              }}
            >
              <ul>
                <li>Stocks and IPOs</li>
                <li>Bonds</li>
                <li>Mutual Funds</li>
              </ul>
            </div>
            <img
              src="../../../public/images/pressLogos.png"
              style={{
                marginTop: "1rem",
                animation: "zoomIn 2.5s ease-in-out",
              }}
              alt=""
            />
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

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleUp {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes bounceIn {
          0%, 20%, 40%, 60%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-30px); }
          60% { transform: translateY(-15px); }
        }

        @keyframes zoomIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default Awards;
