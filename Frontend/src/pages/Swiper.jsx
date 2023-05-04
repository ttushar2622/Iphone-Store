import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function Swipershow() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div
    style={{
        width: "100%",
        height: "100%",
        backdropFilter: "blur(20px)",
        backgroundColor: "rgb(200, 196, 206)",
    }}
    >
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper">
        <SwiperSlide>
          <img src="swiper.png" alt=""  width={"50%"}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper6.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper7.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="swiper8.png" alt="" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
        <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
