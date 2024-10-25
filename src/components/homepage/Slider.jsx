"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { sliders } from "@/data/data";
import Image from "next/image";
import styles from "@/app/page.module.scss";

export const Slider = () => {
  return (
    <div className={styles.slider}>
      <h2 className={styles.h2}>Best Sellers</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className={styles.mySwiper}
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id}>
            <Image
              className={styles.sliderImage}
              src={slider.image}
              alt="Slider"
              width={1000}
              height={1000}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
