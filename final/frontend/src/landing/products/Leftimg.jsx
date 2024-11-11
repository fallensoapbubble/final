import React from "react";
import { Link } from "react-router-dom";

function Leftimg({
  imgURL,
  productName,
  productDesc,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row d-flex justify-content-around flex-wrap">
        <div className="col-8 p-3">
          <img src={imgURL} alt="" />
        </div>
        <div className="col-4">
          <h1>{productName}</h1>
          <p>{productDesc}</p>

          <div className="row mb-3">
            <div className="col-6">
              <Link to={tryDemo}>Try demo →</Link>
            </div>
            <div className="col-6">
              <Link to={learnMore}>Learn More →</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Link to={googlePlay}>
                <img src="../../../public/images/googlePlayBadge.svg" alt="" />
              </Link>
            </div>
            <div className="col-6">
              <Link to={appStore}>
                <img src="../../../public/images/appstoreBadge.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftimg;
