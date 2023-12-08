import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import css from './hero-slider.module.css';

export default function Hero() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      grabCursor={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className={[css.heroSection, css.bgImg1].join(' ')}>
          <div className={css.heroContainer}>
            <h1 className={css.heroTitle}>
              FAVORITE AROMAA - це можливість пахнути краще
            </h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={[css.heroSection, css.bgImg2].join(' ')}>
          <div className={css.heroContainer}>
            <h1 className={css.heroTitle}>Знижка 10%</h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
