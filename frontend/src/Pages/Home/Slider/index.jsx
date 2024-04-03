import React, { useEffect, useRef, useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

import "swiper/css/autoplay";
import fetchApi from "../../../Utils/fetchApi";
import "swiper/css";
import './style.css'
import { data } from "autoprefixer";
export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const [slide, setSlide] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetchApi("sliders?populate=*");
      setSlide(res.data);
      console.log(data)
    })();
  }, []);
  const slideItems = slide?.map((e, index) => (
    <SwiperSlide key={index}>
      <img src={import.meta.env.VITE_BASE_URL + e?.attributes?.image?.data?.attributes?.url} alt="slider-img" />
    </SwiperSlide>
  ));
  return (
    <Swiper
      className="mySwiper select-none mt-16 lg:mt-[120px]"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
    >
      {slideItems}
      {console.log(slide)}
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
}
