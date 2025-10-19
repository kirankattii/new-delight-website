// components/TestimonialsSwiper.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState, useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Testimonial {
  text: string;
  fullText?: string;
  name: string;
  role: string;
  image: string;
}

interface TestimonialsSwiperProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSwiper({ testimonials }: TestimonialsSwiperProps) {
  const swiperRef = useRef<{ autoplay?: { stop: () => void; start: () => void } } | null>(null);

  const handleShowMore = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      // Disable autoplay temporarily
      swiperRef.current.autoplay.stop();
      
      // Re-enable autoplay after 6 seconds
      setTimeout(() => {
        if (swiperRef.current && swiperRef.current.autoplay) {
          swiperRef.current.autoplay.start();
        }
      }, 6000);
    }
  };

  return (
    <section
      id="testimonials"
      className="relative py-6 md:py-10 bg-white new-container"
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading" className="sr-only">
        Client Testimonials
      </h2>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true,
          el: '.custom-pagination-testimonials'
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop
        className="pb-12"
      >
        {testimonials.map(({ text, fullText, name, role, image }, i) => {
          const TestimonialContent = () => {
            const [isExpanded, setIsExpanded] = useState(false);
            const hasFullText = fullText && fullText !== text;
            const displayText = isExpanded ? fullText : text;

            const handleToggle = () => {
              if (!isExpanded) {
                handleShowMore();
              }
              setIsExpanded(!isExpanded);
            };

            return (
              <figure className="text-center px-4">
                <blockquote className="text-lg leading-7 mb-4 lg:w-4/6 lg:mx-auto font-semibold">
                  &ldquo;{displayText}&rdquo;
                </blockquote>
                {hasFullText && (
                  <button
                    onClick={handleToggle}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-4 transition-colors duration-200"
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                )}
                <div className="flex justify-center mb-4">
                  <Image
                    src={image}
                    alt={`${name} - ${role}`}
                    width={64}
                    height={64}
                    className="rounded-full w-16 h-16 object-cover"
                    priority={i === 0} // only first image loads eagerly
                  />
                </div>
                <figcaption className="">
                  <div className="text-lg font-medium">{name}</div>
                  <div className="text-sm text-gray-500">{role}</div>
                </figcaption>
              </figure>
            );
          };

          return (
            <SwiperSlide key={i}>
              <TestimonialContent />
            </SwiperSlide>
          );
        })}

        {/* Custom Navigation */}
        <div className="custom-next !hidden lg:!flex absolute top-1/2 right-0 -translate-y-1/2 z-10 cursor-pointer">
          <Image src="/icons/arrow-next.svg" alt="Next testimonial" width={32} height={32} />
        </div>
        <div className="custom-prev !hidden lg:!flex absolute top-1/2 left-0 -translate-y-1/2 z-10 cursor-pointer">
          <Image src="/icons/arrow-prev.svg" alt="Previous testimonial" width={32} height={32} />
        </div>
      </Swiper>
      
      {/* Custom Pagination Dots */}
      <div className="custom-pagination-testimonials flex justify-center mt-6 space-x-2"></div>
    </section>
  );
}
