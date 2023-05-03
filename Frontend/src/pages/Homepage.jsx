import React from "react";
import css from "./Homepage.css";

const Homepage = () => {
  return (
    <div className="unit-copy-wrapper">

      <h2 className="headline">iPhone 14 Pro</h2>
      <h3 className="subhead" role="presentation">Pro. Beyond.</h3>


      <div className="cta-links">
        <span
          style={{
            color: "rgb(30, 110, 186)",
            fontWeight: "600",
          }}
        > Learn more&nbsp; › &nbsp;  </span>
        <span
          style={{
            color: "rgb(30, 110, 186)",
            fontWeight: "600",
          }}
        >&nbsp;Buy &nbsp;› </span>
      </div>
    </div>
  );
};
// https://www.apple.com/in/home/heroes/iphone-14/images/hero_iphone14_yellow__eun20sn4imi6_large.jpg
export default Homepage;
