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
  breakpoints
}) => {

  return (
    <SwiperRoot
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      initialSlide={initialSlide} 
      breakpoints={breakpoints}
        navigation={{
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
            disabledClass: "is-disabled",
        }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper: SwiperType) => console.log(swiper)}
      className={`${className}` + ` `}
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
        <button onClick={(e) => {
          e.stopPropagation();
          onClose();
        }} style={{ filter: "url(#glow)", color: "grey" }} className="h-12 w-12 flex flex-col justify-center absolute top-2 right-2 z-10 cursor-pointer text-[36px] bg-white border-1 hover:blur-[1px] transition-all duration-200">X</button>
        <div style={{ filter: "url(#glow)", color: "grey" }} className="h-12 w-12 flex flex-col justify-center custom-swiper-button-prev absolute bottom-2 left-2 z-10 cursor-pointer text-[48px] bg-white border-1 hover:blur-[1px] transition-all duration-200">
            ← 
       </div>
        <div style={{ filter: "url(#glow)", color: "grey" }} className="h-12 w-12 flex flex-col justify-center custom-swiper-button-next absolute bottom-2 right-2 z-10 cursor-pointer text-[48px] cursor-pointer text-[48px] bg-white border-1 hover:blur-[1px] transition-all duration-200">
            →
         </div>
    </SwiperRoot>
  );
};

export default Swiper;
