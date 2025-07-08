import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from "./styles/slider.module.scss";
import { ProductCard } from './ProductCard';
import dummyData from '../services/dummy.json'

export default function ProductSlider() {
    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <>
            <div className={styles.swiper_button_container}>
                <button className={styles.nav_btn} onClick={handlePrev}><FaArrowLeft /></button>
                <button className={styles.nav_btn} onClick={handleNext}><FaArrowRight /></button>
            </div>
            <Swiper
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                breakpoints={{
                    250: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper mb-4"
            >
                {dummyData?.products?.map((item, key) => (
                    <SwiperSlide key={key} className='d-flex justify-content-center'>
                        <ProductCard data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
