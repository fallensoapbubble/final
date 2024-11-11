import React from "react";
import { Link } from "react-router-dom";

function Rightimg({productName,productDesc,learnMore,imgURL}) {
  return (
    <div className="container">
      <div className="row d-flex justify-content-around flex-wrap">
        <div className="col-4">
          <h1>{productName}</h1>
          <p>{productDesc}</p>

          <div className="row mb-3">
            <Link to={learnMore}>Learn More →</Link>
          </div>
        </div>
        <div className="col-8">
          <img src={imgURL} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Rightimg;
