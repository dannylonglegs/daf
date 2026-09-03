import React, { useState } from "react";
import { Swiper as SwiperRoot, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { GalleryImage } from "../lib/gallery";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type SwiperProps = {
  images: GalleryImage[];
  slidesPerView?: number;
  spaceBetween?: number;
  className?: string;
  onClose: () => void;
  initialSlide?: number;
  breakpoints?: Record<number, any>;
};

function SwiperImage({ img, alt }: { img: GalleryImage; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={img.placeholder}
        aria-hidden
        style={{ aspectRatio: img.aspectRatio }}
        className="absolute inset-0 w-full h-full object-contain "
      />
      <img
        srcSet={img.full}
        sizes="(min-width: 1024px) 80vw, 100vw"
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        onLoad={() => setLoaded(true)}
        style={{ aspectRatio: img.aspectRatio }}
        className={`absolute inset-0 w-full h-full object-contain select-none transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

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
      {images.map((img, i) => (
        <SwiperSlide key={img.src}>
          <SwiperImage img={img} alt={`Slide ${i + 1}`} />
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