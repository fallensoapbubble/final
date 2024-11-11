import React from "react"; 
import { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders")
      .then((res) => {
        setAllOrders(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log("Error is ", err);
      });
  }, []);
  
  return (
    <>
    <h2 style={{ 
      textAlign: "center", 
      fontStyle: "italic", 
      color: "#333", 
      fontFamily: "'Georgia', serif",
      marginBottom: "2rem",
      letterSpacing: "0.05em"
    }}>
      <i>Your Current Orders</i>
    </h2>
    <div style={{ 
      display: "flex", 
      flexWrap: "wrap", 
      gap: "1.5rem", 
      justifyContent: "center",
      padding: "0 1rem"
    }}>
      {allOrders.map((stock, idx) => {
        return (
          <div key={idx}
            style={{
              border: "1px solid #ccc",
              borderRadius: "1rem",
              padding: "1.5rem",
              backgroundColor: "#fff",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              width: "250px",
              textAlign: "center",
              fontFamily: "'Arial', sans-serif"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h3 style={{ 
              color: "#444", 
              marginBottom: "0.5rem" 
            }}>
              {stock.name}
            </h3>
            <h6 style={{ 
              color: stock.mode === "BUY" ? "#007BFF" : "#FF6347", 
              marginBottom: "1rem" 
            }}>
              {stock.mode}
            </h6>
            <h4 style={{ 
              color: "#666", 
              fontWeight: "normal", 
              marginBottom: "0.5rem" 
            }}>
              Quantity: {stock.qty}
            </h4>
            <h4 style={{ 
              color: "#666", 
              fontWeight: "normal", 
              marginBottom: "0.5rem" 
            }}>
              Bid Price: ₹{stock.price.toFixed(2)}
            </h4>
            <h4 style={{ 
              color: "#333", 
              fontWeight: "bold", 
              marginBottom: "0.5rem" 
            }}>
              Total Cost: ₹{(stock.price * stock.qty).toFixed(2)}
            </h4>
          </div>
        );
      })}
    </div>
  </>
  
  );
};

export default Orders;
