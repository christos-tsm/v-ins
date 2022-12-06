import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import { SubHeader } from '../../../styles/typography'
import { IEvent } from '../../../types/main';
import EventCard from '../../Cards/EventCard';

interface ISliderEvents {
    data?: IEvent[],
    sliderTitle?: string,
    spaceBetween?: number,
    slidesPerView?: number | 'auto',
    centeredSlides?: boolean
}

const SliderEvents: React.FC<ISliderEvents> = ({ data, sliderTitle, spaceBetween, slidesPerView, centeredSlides }) => {
    return (
        <>
            {sliderTitle && <SubHeader capitalize black xl mb={40}>{sliderTitle}</SubHeader>}

            <Swiper
                modules={[Pagination]}
                spaceBetween={spaceBetween || 30}
                slidesPerView={slidesPerView || 3}
                pagination={{ clickable: true }}
                centeredSlides={centeredSlides || false}
                loop={true}
            >
                {data?.map((item) =>
                    <SwiperSlide key={item.id}>
                        <EventCard title={item.title} eventDate={item.eventDate} location={item.location} eventPageURL={item.eventPageURL} featuredImageURL={item.featuredImageURL} />
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}

export default SliderEvents