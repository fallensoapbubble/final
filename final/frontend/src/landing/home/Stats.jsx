import React from "react";

function Stats() {
  return (
    <div className="container mb-5">
      <div className="row" style={{ animation: "fadeInUp 5s ease-in-out" }}>
        <div className="col-6" style={{ padding: "1rem" }}>
          <h1 style={{ marginBottom: "2rem" }}>Trust with confidence</h1>
          <h2>Customer-first always</h2>
          <p>
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h2>No spam or gimmicks</h2>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2>The StockX universe</h2>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2>Do better with money</h2>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div
          className="col-6 text-center"
          style={{ animation: "zoomIn 5s ease-in-out" }}
        >
          <img
            src="../../../public/images/ecosystem.png"
            style={{ width: "100%" }}
            alt=""
          />
          <div></div>
          <a href="">
            Explore our products
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="">Try Kite</a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoomIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1); }
        }
      `}</style>
    </div>
  );
}

export default Stats;
