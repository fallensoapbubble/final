import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext";
import DoughnutChart from "./DoughnoutChart";

const labels = watchlist.map((subArray) => subArray["name"]);

function WatchList() {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, idx) => {
          return <WatchListItem key={idx} stockvar={stock}></WatchListItem>;
        })}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
}

export default WatchList;

const WatchListItem = ({ stockvar }) => {
  const [showWatchListActions, setWatchListActions] = useState(false);

  const showOption = (eve) => {
    setWatchListActions(true);
  };

  const vanishOptions = (eve) => {
    setWatchListActions(false);
  };

  return (
    <li onMouseEnter={showOption} onMouseLeave={vanishOptions}>
      <div className="item">
        <p className={stockvar.isDown ? "down" : "up"}>{stockvar.name}</p>
        {!showWatchListActions && (
          <div className="itemInfo">
            <span className="percent">{stockvar.percent}</span>
            &nbsp;
            {stockvar.isDown ? (
              <i className="fa fa-arrow-up up"></i>
            ) : (
              <i className="fa fa-arrow-down down"></i>
            )}
            &nbsp;
            <span className="price">{stockvar.price}</span>
          </div>
        )}
      </div>
      {showWatchListActions && (
        <WatchListActions uid={stockvar.name}></WatchListActions>
      )}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);
  const { setUID } = useContext(GeneralContext);
  const { openSellWindow } = useContext(GeneralContext);
  

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy(B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="buy"
            onDoubleClick={() => {
              openBuyWindow();
              setUID(uid);
            }}
          >
            Buy
          </button>
        </Tooltip>
        <Tooltip
          title="Sell(S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="sell"
            onDoubleClick={() => {
              openSellWindow(uid);
              setUID(uid);
            }}
          >
            Sell
          </button>
        </Tooltip>
        <Tooltip
          title="Analytics(A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <i className="fa fa-bar-chart" aria-hidden="true"></i>
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="icon">
            <i className="fa fa-info-circle" aria-hidden="true"></i>
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
