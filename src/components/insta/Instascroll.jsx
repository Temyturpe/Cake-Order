import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Cookies from "../../assets/images/menuCookies2.jpg";
import Bread from "../../assets/images/menuBread2.jpg";
import Parfait from "../../assets/images/menuparfait.PNG";
import Chops from "../../assets/images/menuChops2.jpg";
import Cake from "../../assets/images/menuCake2.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./insta.css";

// import required modules
import { Autoplay } from "swiper";

export default function Instagram() {
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                    },
                    430: {
                        slidesPerView: 3,
                    },
                    620: {
                        slidesPerView: 4,
                    },
                    840: {
                        slidesPerView: 5,
                    },
                    1200: {
                        slidesPerView: 6,
                    },
                }}

                navigation={false}
                modules={[Autoplay]}
                className="mySwiper mt-14"
            >
                <SwiperSlide><img src={Cake} alt="" className="insta-img" /></SwiperSlide>
                <SwiperSlide><img src={Cookies} alt="" className="insta-img" /></SwiperSlide>
                <SwiperSlide><img src={Bread} alt="" className="insta-img" /></SwiperSlide>
                <SwiperSlide><img src={Parfait} alt="" className="insta-img" /></SwiperSlide>
                <SwiperSlide><img src={Chops} alt="" className="insta-img" /></SwiperSlide>
                <SwiperSlide><img src={Cake} alt="" className="insta-img" /></SwiperSlide>
                <SwiperSlide><img src={Cookies} alt="" className="insta-img" /></SwiperSlide>
                <SwiperSlide><img src={Bread} alt="" className="insta-img" /></SwiperSlide>
                <SwiperSlide><img src={Parfait} alt="" className="insta-img" /></SwiperSlide>
                <SwiperSlide><img src={Chops} alt="" className="insta-img" /></SwiperSlide>
            </Swiper>
        </>
    );
}
