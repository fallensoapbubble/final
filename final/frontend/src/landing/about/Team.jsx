import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row">
        <h1
          className="fs-1 text-center mt-5 border-top border-bottom p-3"
          style={{
            animation: "pulse 2s infinite",
          }}
        >
          People
        </h1>
      </div>

      <div className="row text-center">
        <div className="col-6">
          <img
            src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person-370x207.jpg"
            alt=""
            style={{
              borderRadius: "100%",
              animation: "zoomIn 1.5s ease-in-out",
              margin: "3rem"
            }}
          />
        </div>
        <div
          className="col-6"
          style={{
            animation: "slideInUp 2s ease-in-out",
          }}
        >
          Backend Developer
        </div>
      </div>

      <div className="row text-center">
        <div className="col-6">
          <img
            src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person-370x207.jpg"
            alt=""
            style={{
              borderRadius: "100%",
              animation: "zoomIn 1.5s ease-in-out",
              margin: "3rem"
            }}
          />
        </div>
        <div
          className="col-6"
          style={{
            animation: "slideInUp 2s ease-in-out",
          }}
        >
          Frontend Developer
        </div>
      </div>

      <div className="row text-center">
        <div className="col-6">
          <img
            src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person-370x207.jpg"
            alt=""
            style={{
              borderRadius: "100%",
              animation: "zoomIn 1.5s ease-in-out",
              margin: "3rem"
            }}
          />
        </div>
        <div
          className="col-6"
          style={{
            animation: "slideInUp 2s ease-in-out",
          }}
        >
          Dashboard Developer
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        @keyframes zoomIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes slideInUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default Team;
