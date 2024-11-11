import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Calculator() {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnterLink = (link) => setHoveredLink(link);
    const handleMouseLeaveLink = () => setHoveredLink(null);

    const handleMouseEnterItem = (index) => setHoveredItem(index);
    const handleMouseLeaveItem = () => setHoveredItem(null);

    return ( 
       <div className="container">
        <div className="row">
            <div className="col-6">
                <h4>
                    <Link 
                        style={{
                            textDecoration: "none",
                            color: hoveredLink === 'brokerage' ? "#0056b3" : "black",
                            transform: hoveredLink === 'brokerage' ? "scale(1.1)" : "scale(1)",
                            transition: "transform 0.3s, color 0.3s"
                        }}
                        onMouseEnter={() => handleMouseEnterLink('brokerage')}
                        onMouseLeave={handleMouseLeaveLink}
                    >
                        Brokerage Calculator
                    </Link>
                </h4>
                <ul style={{fontSize:"15px"}}>
                    {[
                        "Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.",
                        "Digital contract notes will be sent via e-mail.",
                        "Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.",
                        "For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).",
                        "If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order."
                    ].map((item, index) => (
                        <li
                            key={index}
                            style={{
                                transform: hoveredItem === index ? "translateX(10px)" : "translateX(0)",
                                color: hoveredItem === index ? "#007bff" : "black",
                                transition: "transform 0.3s ease, color 0.3s ease",
                                cursor: "pointer"
                            }}
                            onMouseEnter={() => handleMouseEnterItem(index)}
                            onMouseLeave={handleMouseLeaveItem}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="col-6">
                <h4>
                    <Link 
                        style={{
                            textDecoration: "none",
                            color: hoveredLink === 'charges' ? "#0056b3" : "black",
                            transform: hoveredLink === 'charges' ? "scale(1.1)" : "scale(1)",
                            transition: "transform 0.3s, color 0.3s"
                        }}
                        onMouseEnter={() => handleMouseEnterLink('charges')}
                        onMouseLeave={handleMouseLeaveLink}
                    >
                        List of charges
                    </Link>
                </h4>
            </div>
        </div>
       </div>
    );
}

export default Calculator;
