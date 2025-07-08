import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.jpg";
import banner5 from "../assets/images/banner5.jpg";
import banner6 from "../assets/images/banner6.jpg";
import styles from "./styles/slider.module.scss"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function BannerSlider() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper banner-slider"
      >
        <SwiperSlide><div className={styles.img_container}><img src={banner1} alt='banner1'></img></div></SwiperSlide>
        <SwiperSlide><div className={styles.img_container}><img src={banner2} alt='banner2'></img></div></SwiperSlide>
        <SwiperSlide><div className={styles.img_container}><img src={banner3} alt='banner3'></img></div></SwiperSlide>
        <SwiperSlide><div className={styles.img_container}><img src={banner4} alt='banner4'></img></div></SwiperSlide>
        <SwiperSlide><div className={styles.img_container}><img src={banner5} alt='banner5'></img></div></SwiperSlide>
        <SwiperSlide><div className={styles.img_container}><img src={banner6} alt='banner6'></img></div></SwiperSlide>
      </Swiper>
    </>
  );
}
