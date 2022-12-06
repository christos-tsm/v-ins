import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import { SubHeader } from '../../../styles/typography'
import { IPost } from '../../../types/main'
import EventCard from '../../Cards/EventCard'
import PostCard from '../../Cards/PostCard';

interface ISliderPost {
    data?: IPost[],
    sliderTitle?: string,
    spaceBetween?: number,
    slidesPerView?: number | 'auto',
    centeredSlides?: boolean
}

const SliderPosts: React.FC<ISliderPost> = ({ data, sliderTitle, slidesPerView, spaceBetween, centeredSlides }) => {
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
                        <PostCard title={item.title} content={item.content} created_at={item.created_at} postURL={item.postURL} featuredImageURL={item.featuredImageURL} />
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}

export default SliderPosts