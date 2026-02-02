import React from "react";
import { Swiper as SwiperRoot, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type SwiperProps = {
  images: string[];
  slidesPerView?: number;
  spaceBetween?: number;
  className?: string;
};

const Swiper: React.FC<SwiperProps> = ({
  images,
  slidesPerView = 2,
  spaceBetween = 50,
  className = "",
}) => {

    console.log("images",images)
  return (
    <SwiperRoot
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper: SwiperType) => console.log(swiper)}
      className={className}
    >
      {images.map((src, i) => (
        <SwiperSlide key={src}>
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover select-none"
            draggable={false}
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </SwiperRoot>
  );
};

export default Swiper;
