

"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

/*const videos = [
  { url: "https://www.youtube.com/embed/DMjR3OEdoSI?controls=0&modestbranding=1&rel=0&showinfo=0", client: "Mr. Ramesh, Bangalore" },
  { url: "https://www.youtube.com/embed/LD-XMEdSq3g?controls=0&modestbranding=1&rel=0&showinfo=0", client: "Mrs. Priya, Mysore" },
  { url: "https://www.youtube.com/embed/6ljViCqwlHQ?controls=0&modestbranding=1&rel=0&showinfo=0", client: "Mr. Arjun, Chennai" },
  { url: "https://www.youtube.com/embed/DMjR3OEdoSI?controls=0&modestbranding=1&rel=0&showinfo=0", client: "Ms. Kavya, Hyderabad" },
  { url: "https://www.youtube.com/embed/LD-XMEdSq3g?controls=0&modestbranding=1&rel=0&showinfo=0", client: "Mr. Sanjay, Coimbatore" },
  { url: "https://www.youtube.com/embed/6ljViCqwlHQ?controls=0&modestbranding=1&rel=0&showinfo=0", client: "Mrs. Neha, Pune" },
];
*/

const videos = [
  {url:"https://www.youtube.com/embed/kb_r7lG5C4k?si=JDoWtf8GuXmFnPFG"},
  { url: "https://www.youtube.com/embed/tb0iKq2poWM?controls=0&modestbranding=1&rel=0&showinfo=0", client: "" },
  { url: "https://www.youtube.com/embed/aunK6z39Mmc?controls=0&modestbranding=1&rel=0&showinfo=0", client: "" },
  { url: "https://www.youtube.com/embed/L5F1OJxTHkw?controls=0&modestbranding=1&rel=0&showinfo=0", client: "" },
  { url: "https://www.youtube.com/embed/FEa3--bw4Jk?controls=0&modestbranding=1&rel=0&showinfo=0", client: "" },

];

export default function VideoTestimonials() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [page, setPage] = useState({ current: 1, total: 1 });

  return (
    <div className="w-full mx-auto my-4 mb-10 ">
      {/* Header with nav + page summary */}
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-xl md:text-2xl font-medium  text-app-green-1">Client Testimonials</h2>
        <div className="flex items-center gap-4">
          {/* Page summary */}
          <span className="block md:hidden text-gray-600 text-sm">
            {page.current} / {page.total}
          </span>
          {/* Nav buttons */}
          <div className="flex gap-2">
            <button
              ref={prevRef}
              className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5 text-app-green-1" />
            </button>
            <button
              ref={nextRef}
              className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5 text-app-green-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Swiper Container */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        grabCursor={true}
        touchRatio={1}
        touchAngle={45}
        threshold={10}
        touchStartPreventDefault={false}
        touchMoveStopPropagation={false}
        simulateTouch={true}
        allowTouchMove={true}
        resistance={true}
        resistanceRatio={0.85}
        breakpoints={{
          640: { slidesPerView: 1 },   // small
          768: { slidesPerView: 2 },   // medium - show only 1 for bigger size
          1024: { slidesPerView: 3 },  // large - show only 2 for bigger size
        }}
        onInit={(swiper) => {
          // Attach custom navigation
          if (prevRef.current && nextRef.current) {
            // @ts-expect-error - Swiper navigation API
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error - Swiper navigation API
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
          setPage({
            current: swiper.realIndex + 1,
            total: Math.ceil(videos.length / swiper.slidesPerViewDynamic()),
          });
        }}
        onSlideChange={(swiper) => {
          setPage({
            current: swiper.realIndex + 1,
            total: Math.ceil(videos.length / swiper.slidesPerViewDynamic()),
          });
        }}
      >
        {videos.map((video, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-lg transition w-full mx-auto">
              <div className="aspect-[4/3] w-full flex justify-center items-center relative">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.client}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-2 text-center text-gray-700 font-medium">
                {video.client}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
