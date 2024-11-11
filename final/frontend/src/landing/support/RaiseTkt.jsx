import React from "react";
import { Link } from "react-router-dom";

function RaiseTkt() {
  return (
    <div className="container">
      <div className="row p-5">
        <h4>To create a ticket, select a relevant topic</h4>
        <div
          className="col-4 mt-4 p-5"
          style={{ fontSize: "0.5", lineHeight: "2" }}
        >
          <h4>
            <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <ul>
            <ol>
              <Link style={{ textDecoration: "None" }}>Getting started</Link>
            </ol>
            <ol>
              <Link style={{ textDecoration: "None" }}>Online</Link>
            </ol>
            <ol>
              <Link style={{ textDecoration: "None" }}>Offline</Link>
            </ol>
            <ol>
              <Link style={{ textDecoration: "None" }}>Charges</Link>
            </ol>
            <ol>
              <Link style={{ textDecoration: "None" }}>
                Company, Partnership and HUF
              </Link>
            </ol>
            <ol>
              <Link style={{ textDecoration: "None" }}>
                Non Resident Indian (NRI)
              </Link>
            </ol>
          </ul>
        </div>

        <div
          className="col-4 mt-4 p-5"
          style={{ fontSize: "0.5", lineHeight: "2" }}
        >
          <h4>
            <i class="fa fa-user-o" aria-hidden="true"></i> Your StockVerse Account
          </h4>

          <ol>
            <Link style={{ textDecoration: "None" }}>Login credentials</Link>
          </ol>
          <ol>
            <Link style={{ textDecoration: "None" }}>Your Profile</Link>
          </ol>
          <ol>
            <Link style={{ textDecoration: "None" }}>
              Account modification and segment addition
            </Link>
          </ol>
          <ol>
            <Link style={{ textDecoration: "None" }}>CMR & DP ID</Link>
          </ol>
          <ol>
            <Link style={{ textDecoration: "None" }}>Nomination</Link>
          </ol>
        </div>

        <div className="col-4 mt-4 p-5" style={{ fontSize: "0.5" ,lineHeight: "2" }}>
          <h4>
          <i class="fa fa-server" aria-hidden="true"></i>Console and Funds
          </h4>
          <ul>
            <ol >
              <Link  style={{textDecoration:"None"}}>Getting started</Link>
            </ol>
            <ol>
              <Link  style={{textDecoration:"None"}}>Online</Link>
            </ol>
            <ol>
              <Link  style={{textDecoration:"None"}}>Offline</Link>
            </ol>
            <ol>
              <Link  style={{textDecoration:"None"}}>Charges</Link>
            </ol>
            <ol>
              <Link  style={{textDecoration:"None"}}>Company, Partnership and HUF</Link>
            </ol>
            <ol>
              <Link  style={{textDecoration:"None"}}>Non Resident Indian (NRI)</Link>
            </ol>
          </ul>
        </div>

        <div
          className="col-4 mt-4 p-5"
          style={{ fontSize: "0.5", lineHeight: "2" }}
        >
          <h4>
          <i class="fa fa-connectdevelop" aria-hidden="true"></i>Coin
          </h4>
          <ul>
            <ol>
              <Link style={{ textDecoration: "None" }}>Getting started</Link>
            </ol>
            <ol>
              <Link style={{ textDecoration: "None" }}>Online</Link>
            </ol>
            <ol>
              <Link style={{ textDecoration: "None" }}>Offline</Link>
            </ol>
            <ol>
              <Link style={{ textDecoration: "None" }}>Charges</Link>
            </ol>
            <ol>
              <Link style={{ textDecoration: "None" }}>
                Company, Partnership and HUF
              </Link>
            </ol>
            <ol>
              <Link style={{ textDecoration: "None" }}>
                Non Resident Indian (NRI)
              </Link>
            </ol>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RaiseTkt;

