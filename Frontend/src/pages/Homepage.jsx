import React from "react";
import css from "./Homepage.css";
import Swipershow from "./Swiper";

const Homepage = () => {
  return (
    <div
    style={{
      cursor: "pointer",
    }}
    >
      <div className="unit-copy-wrapper">
        <h2 className="headline">iPhone 14 Pro</h2>
        <h3 className="subhead" role="presentation">
          Pro. Beyond.
        </h3>
        <div className="cta-links">
          <span
            style={{
              color: "rgb(30, 110, 186)",
              fontWeight: "600",
            }}>
            {" "}
            Learn more&nbsp; › &nbsp;{" "}
          </span>
          <span
            style={{
              color: "rgb(30, 110, 186)",
              fontWeight: "600",
            }}>
            &nbsp;Buy &nbsp;›{" "}
          </span>
        </div>
      </div>
      {/* second img */}
      <div
        style={{
         
          backgroundImage:
            "url(https://www.apple.com/in/home/heroes/iphone-14/images/hero_iphone14_yellow__eun20sn4imi6_large.jpg)",
        }}
        className="unit-copy-wrapper">
        <h2
          style={{
            color: "black",
          }}
          className="headline">
          iPhone 14
        </h2>
        <h3
          style={{
            color: "black",
          }}
          className="subhead"
          role="presentation">
          Two great sizes.
          <br />
          Now with a splash of yellow.
        </h3>
        <div className="cta-links">
          <span
            style={{
              color: "rgb(30, 110, 186)",
              fontWeight: "600",
            }}>
            {" "}
            Learn more&nbsp; › &nbsp;{" "}
          </span>
          <span
            style={{
              color: "rgb(30, 110, 186)",
              fontWeight: "600",
            }}>
            &nbsp;Buy &nbsp;›{" "}
          </span>
        </div>
      </div>
      {/* third img */}
      <div
        className="unit-copy-wrapper"
        style={{
          marginTop: "1rem",
          backgroundImage:
            "url(https://www.apple.com/in/home/images/heroes/apple-watch-series-8/hero_apple_watch_series_8_spring__b1y8wb7xjc9y_large.jpg)",
        }}>
        <h4 className="headline">
          WATCH <br />
          <span
            style={{
              paddingTop: "-1.5rem",
              color: "rgb(192, 31, 36)",
              fontWeight: "600",
              fontSize: "1.5rem",
            }}>
            SERIES 8
          </span>
        </h4>
        <h3 className="subhead" role="presentation">
          A healthy leap ahead.
        </h3>
        <div className="cta-links">
          <span
            style={{
              color: "rgb(30, 110, 186)",
              fontWeight: "600",
            }}>
            {" "}
            Learn more&nbsp;› &nbsp;{" "}
          </span>
          <span
            style={{
              color: "rgb(30, 110, 186)",
              fontWeight: "600",
            }}>
            &nbsp;Buy &nbsp;›{" "}
          </span>
        </div>
      </div>

      {/* fourth img */}
      <img
        style={{
          cursor: "pointer",
        }}
        src="img1.png"
        alt="iphone"
      />
      <img
        style={{
          cursor: "pointer",
        }}
        src="img2.png"
        alt="iphone"
      />
       <img
        style={{
          paddingLeft: "1rem",
          cursor: "pointer",
        }}
        src="img3.png"
        alt="iphone"
      />
      <Swipershow/>
     
    </div>
  );
};

export default Homepage;
