import React from "react";
import { Swiper as SwiperRoot, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type SwiperProps = {
  images: string[];
  slidesPerView?: number;
  spaceBetween?: number;
  className?: string;
  onClose: () => void;
  initialSlide?: number;
  breakpoints?: Record<number, any>;
};

const Swiper: React.FC<SwiperProps> = ({
  images,
  slidesPerView = 2,
  spaceBetween = 0,
  className = "",
  onClose,
  initialSlide = 0,
  breakpoints,
}) => {
  return (
    <>
    <SwiperRoot
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      initialSlide={initialSlide}
      breakpoints={breakpoints}
      navigation={{
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
        disabledClass: "is-disabled",
      }}
      className={`h-[80vh] ${className}`}
    >
      {images.map((src, i) => (
        <SwiperSlide key={src}>
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-contain select-none"
            draggable={false}
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </SwiperRoot>
       <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="h-8 w-8 md:h-12 md:w-12 flex flex-col justify-center text-center absolute top-2 right-2 z-10 cursor-pointer bg-white border-1 hover:bg-blue-500 hover:text-white hover:transition-all hover:duration-200"
      >
        X
      </button>
      <div className="h-8 w-8 md:h-12 md:w-12 flex flex-col justify-center text-center custom-swiper-button-prev absolute bottom-2 left-2 z-10 cursor-pointer bg-white border-1  hover:bg-blue-500 hover:text-white transition-all duration-200">
        ←
      </div>
      <div className="h-8 w-8 md:h-12 md:w-12 flex flex-col justify-center text-center custom-swiper-button-next absolute bottom-2 right-2 z-10 cursor-pointer bg-white border-1 hover:bg-blue-500 hover:text-white transition-all duration-200">
        →
      </div>
    </>
  );
};

export default Swiper;