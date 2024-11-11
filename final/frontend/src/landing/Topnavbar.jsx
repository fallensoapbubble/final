import React from "react";
import { Link } from "react-router-dom";
// import z from "../../public/vite.svg"

function Topnavbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-light p-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="../../../public/images/stk.jpg"
            style={{ width: "30%" }}
            alt=""
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {["signup", "about", "products", "pricing", "support", "info"].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link"
                  to={`/${item}`}
                  style={{
                    position: "relative",
                    padding: "10px 15px",
                    transition: "color 0.3s, background-color 0.3s, transform 0.3s",
                    color: "#333",
                    textDecoration: "none"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#007bff";
                    e.currentTarget.style.backgroundColor = "#f8f9fa";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#333";
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Topnavbar;
