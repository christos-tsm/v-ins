import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { SubHeader } from '../../../styles/typography'
import HotelCard from '../../Cards/HotelCard'

import { IEvent, IHotel } from '../../../types/main';

interface ISliderHotels {
    data?: IHotel[],
    sliderTitle?: string,
}

const SliderHotels: React.FC<ISliderHotels> = ({ data, sliderTitle }) => {
    return (
        <>
            {sliderTitle && <SubHeader capitalize black xl mb={40}>{sliderTitle}</SubHeader>}

            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                pagination={{ clickable: true }}
            >
                {data?.map((item) =>
                    <SwiperSlide key={item.id}>
                        <HotelCard
                            title={item.title}
                            ratings={item.ratings}
                            kmFromCityCenter={item.kmFromCityCenter}
                            averageDayPrice={item.averageDayPrice}
                            featuredImageURL={item.featuredImageURL}
                            hotelURL={item.hotelURL}
                        />
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}

export default SliderHotels