import React from "react";
import { Link } from "react-router-dom";


function Hero() {
  return (
    <div className="container text-center p-4">
      <h1 >Technology</h1>
      <h3 className="text-muted mt-3">Sleek, modern, and intuitive trading platforms</h3>
      <p>Check out our <Link to="/pricing" style={{textDecoration:"none"}}>investment offerings →</Link></p>
    </div>
  );
}

export default Hero;
