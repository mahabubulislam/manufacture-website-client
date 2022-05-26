import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import Review from './Review';

const Reviews = () => {
    return (
        <div>
            <h3 className='text-3xl font-bold text-center '>Customers Reviews</h3>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Review/></SwiperSlide>
                <SwiperSlide><Review/></SwiperSlide>
                <SwiperSlide><Review/></SwiperSlide>
                <SwiperSlide><Review/></SwiperSlide>
                <SwiperSlide><Review/></SwiperSlide>
                <SwiperSlide><Review/></SwiperSlide>
                <SwiperSlide><Review/></SwiperSlide>
                <SwiperSlide><Review/></SwiperSlide>
                <SwiperSlide><Review/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Reviews;