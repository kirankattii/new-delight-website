// components/SwiperContainer.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SwiperContainerProps {
  images: string[];
}

export default function SwiperContainer({ images }: SwiperContainerProps) {
  if (!images || images.length === 0) return null;

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ 
          clickable: true,
          el: '.custom-pagination-swiper-component'
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        slidesPerView={3}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="rounded-lg overflow-hidden"
      >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-[500px]">
            <Image
              src={src}
              alt={`Farmland project gallery image ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0} // Improve LCP
            />
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
      
      {/* Custom Pagination Dots */}
      <div className="custom-pagination-swiper-component flex justify-center mt-6 space-x-2"></div>
    </div>
  );
}
