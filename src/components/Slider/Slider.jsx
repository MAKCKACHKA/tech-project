import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';

import { Pagination } from 'swiper/modules';

const parfums = fetch(
  'https://makckachka.github.io/parfume-project-layout/parfume.json'
)
  .then(response => {
    if (!response.ok) {
      throw new Error(
        `Network response was not ok, status: ${response.status}`
      );
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

export default function Slider() {
  const [data, setData] = useState([]);

  useEffect(() => {
    parfums.then(data => {
      setData(data);
    });
  }, []);

  return (
    <Swiper
      slidesPerView={4}
      breakpoints={{
        '@0.00': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '@1.50': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      // centeredSlides={true}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {data.map((product, index) => (
        <SwiperSlide id={product.code} key={index}>
          <div className="portfolio-list-item">
            <div className="portfolio-item-link">
              <div className="img-wrapper">
                <img
                  className="prod-img"
                  src={product.image}
                  alt={product.name}
                  max-width="356"
                  max-height="400"
                />
                <p className="overlay">{product.description}</p>
              </div>
              <div className="portfolio-text">
                <h3 className="portfolio-item-title">{product.name}</h3>
                <p className="portfolio-item-text">{product.description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
