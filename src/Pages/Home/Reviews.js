import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import Review from './Review';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Reviews = () => {
    const { data: reviews,isLoading, refetch } = useQuery('reviews', () => fetch('http://localhost:5000/reviews').then(res => res.json()))
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>Customers Reviews</h3>
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
                {
                    reviews?.map(review => <SwiperSlide>
                        <Review key={review._id} reviews={review} refetch={refetch} />
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Reviews;