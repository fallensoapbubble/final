import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Leftimg from "./Leftimg";
import Rightimg from "./Rightimg";
import Universe from "./Universe";

function PrdpgWrapper() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      const sections = document.querySelectorAll('.animate-on-scroll');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollTop + windowHeight > sectionTop + sectionHeight * 0.1) {
          section.style.opacity = 1;
          section.style.transform = "translateY(0)";
        } else {
          section.style.opacity = 0;
          section.style.transform = "translateY(20px)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Hero />
      <br />
      <br />
      <br />
      <div
        className="animate-on-scroll"
        style={{
          opacity: 0,
          transform: "translateY(20px)",
          transition: "opacity 4s ease, transform 4s ease"
        }}
      >
        <Leftimg
          imgURL="../../../public/images/kite.png"
          productName="Noir"
          productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Noir experience seamlessly on your Android and iOS devices."
          tryDemo="/"
          learnMore="/"
          googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
          appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
          style={{
            transition: "transform 3s ease, box-shadow 3s ease",
            cursor: "pointer"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>
      <br />
      <br />
      <br />
      <div
        className="animate-on-scroll"
        style={{
          opacity: 0,
          transform: "translateY(20px)",
          transition: "opacity 4s ease, transform 4s ease"
        }}
      >
        <Rightimg
          productName="Console"
          productDesc="The central dashboard for your StockVerse account. Gain insights into your trades and investments with in-depth reports and visualisations."
          learnMore="/"
          imgURL="../../../public/images/console.png"
          style={{
            transition: "transform 3s ease, box-shadow 3s ease",
            cursor: "pointer"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>
      <br />
      <br />
      <br />
      <div
        className="animate-on-scroll"
        style={{
          opacity: 0,
          transform: "translateY(20px)",
          transition: "opacity 4s ease, transform 4s ease"
        }}
      >
        <Leftimg
          imgURL="../../../public/images/coin.png"
          productName="Coin"
          productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
          tryDemo="/"
          learnMore="/"
          googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
          appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
          style={{
            transition: "transform 3s ease, box-shadow 3s ease",
            cursor: "pointer"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>
      <br />
      <br />
      <br />
      <div
        className="animate-on-scroll"
        style={{
          opacity: 0,
          transform: "translateY(20px)",
          transition: "opacity 4s ease, transform 4s ease"
        }}
      >
        <Rightimg
          productName="Noir Connect API"
          productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
          learnMore="/"
          imgURL="../../../public/images/kiteconnect.png"
          style={{
            transition: "transform 3s ease, box-shadow 3s ease",
            cursor: "pointer"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>
      <br />
      <br />
      <br />
      <div
        className="animate-on-scroll"
        style={{
          opacity: 0,
          transform: "translateY(20px)",
          transition: "opacity 4s ease, transform 4s ease"
        }}
      >
        <Leftimg
          imgURL="../../../public/images/varsity-products.png"
          productName="Varsity mobile"
          productDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
          tryDemo="/"
          learnMore="/"
          googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
          appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
          style={{
            transition: "transform 3s ease, box-shadow 3s ease",
            cursor: "pointer"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>
      <br />
      <br />
      <br />
      <div className="text-center fs-4">
        <h1>The StockVerse Universe</h1>
        <p>
          Want to know about our technology stack? Check out the StockVerse tech
          blog
        </p>
      </div>
      <Universe />
    </>
  );
}

export default PrdpgWrapper;
