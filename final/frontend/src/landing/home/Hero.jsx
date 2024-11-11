import React from "react";

function Hero() {
  return (
    <div className="container text-center" style={{ marginBottom: "5rem" }}>
      <div
        className="row"
        style={{
          padding: "7rem",
          animation: "fadeInDown 2s ease-in-out",
        }}
      >
        <img
          src="../../../public/images/homeHero.png"
          style={{ marginBottom: "3rem", animation: "zoomIn 2s ease-in-out" }}
          alt=""
        />
        <h1 style={{ animation: "bounceIn 2s ease-in-out" }}>
          Invest in everything
        </h1>
        <p style={{ animation: "fadeIn 2.5s ease-in-out" }}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <p>
          <button
            type="button"
            className="btn btn-primary"
            style={{
              marginTop: "3rem",
              width: "40%",
              animation: "pulse 2s infinite",
            }}
          >
            Sign up now
          </button>
        </p>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-100%); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoomIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes bounceIn {
          0%, 20%, 40%, 60%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-30px); }
          60% { transform: translateY(-15px); }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default Hero;
