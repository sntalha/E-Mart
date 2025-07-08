import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import c1 from "../assets/icons/c1.png";
import c2 from "../assets/icons/c2.png";
import c3 from "../assets/icons/c3.png";
import c4 from "../assets/icons/c4.png";
import c5 from "../assets/icons/c5.png";
import c6 from "../assets/icons/c6.png";
import { CategoryCard } from './CategoryCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from "./styles/slider.module.scss";
const categories = [
    { image: c1, title: "Phones" },
    { image: c2, title: "Computers" },
    { image: c3, title: "Watches" },
    { image: c4, title: "Cameras" },
    { image: c5, title: "Headphones" },
    { image: c6, title: "Gaming" }
];
export default function CategorySlider() {
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
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper mb-4"
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index}><CategoryCard image={category.image} title={category.title} /></SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
