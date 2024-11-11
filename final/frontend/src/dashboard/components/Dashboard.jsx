import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import TopBar from "./Topbar";

const Dashboard = () => {
  return (
    <>
          <TopBar />

    
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
        
      
      <div className="content">
        < Routes>
      <Route exact path="z" element={<Summary />} />
          <Route path="orderz" element={<Orders />} />
          <Route path="holdingz" element={<Holdings />} />
          <Route path="positionz" element={<Positions />} />
          <Route path="fundz" element={<Funds />} />
          <Route path="appz" element={<Apps />} />
        </Routes>

      </div>
    </div>
    </>
  );
};

export default Dashboard;