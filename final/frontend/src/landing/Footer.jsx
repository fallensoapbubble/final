import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          >
            <img
              src="../../../public/images/stk.jpg"
              style={{ width: "50%" }}
              alt=""
            />
          </Link>
          <p className="text-body-secondary">© 2024</p>
        </div>
        <div className="col mb-3"></div>
        <div className="col mb-3">
          <h5>Company</h5>

          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/products">Products</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/">Referral programme</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/">Careers</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/">Zerodha.tech</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/">Press & media</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/">Zerodha Cares (CSR)</Link>
            </li>

            <li className="nav-item mb-2">
              <Link to="/"></Link>
            </li>
            <li className="nav-item mb-2"></li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>Support</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/">Support portal</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/">Contact us</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/">Z-Connect blog</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/">List of charges</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/">Downloads & resources</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/">Videos</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/">Market overview</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/">How to file a complaint?</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/">Status of your complaints</Link>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>Account</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/signup">Open an account</Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/"> Fund transfer </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
