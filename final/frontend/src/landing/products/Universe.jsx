import React from "react";

function Universe() {
  return (
    <div className="d-flex justify-content-center flex-wrap" style={{ gap: "1rem" }}>
      {[
        {
          src: "../../../public/images/zerodhaFundhouse.png",
          alt: "Zerodha Fundhouse",
          text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
        },
        {
          src: "../../../public/images/sensibullLogo.svg",
          alt: "Sensibull",
          text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
        },
        {
          src: "../../../public/images/streakLogo.png",
          alt: "Streak",
          text: "Systematic trading platform that allows you to create and backtest strategies without coding."
        },
        {
          src: "../../../public/images/smallcaseLogo.png",
          alt: "Smallcase",
          text: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
        },
        {
          src: "../../../public/images/tijori.svg",
          alt: "Tijori",
          text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
        },
        {
          src: "../../../public/images/dittoLogo.png",
          alt: "Ditto",
          text: "Personalized advice on life and health insurance. No spam and no mis-selling."
        }
      ].map((item, index) => (
        <div
          key={index}
          className="p-2"
          style={{
            textAlign: "center",
            transition: "transform 0.5s, box-shadow 0.5s",
            cursor: "pointer",
            padding: "1rem",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
          }}
        >
          <img
            src={item.src}
            alt={item.alt}
            style={{
              height: "2.2rem",
              transition: "transform 0.5s",
              display: "block",
              margin: "0 auto"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "rotate(10deg)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "rotate(0deg)";
            }}
          />
          <p style={{ color: "grey", fontSize: "0.8rem", marginTop: "0.5rem" }}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Universe;
