"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  videoLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Whistling Woods",
    subtitle: "Your Serene Retreat in Sakleshpur",
    image: "/p-whistling-woods.jpg",
    alt: "Whistling Woods Project",
    videoLink: "https://www.youtube.com/embed/AsLcL0stlc4",
  },
  {
    id: 2,
    title: "Arinaa Country Farms",
    subtitle: "Peaceful Living, Rooted in Nature",
    image: "/p-arinaa.jpg",
    alt: "Arinaa Country Farms Project",
    videoLink: "https://www.youtube.com/embed/6ljViCqwlHQ",
  },
  {
    id: 3,
    title: "Bellevuee",
    subtitle: "An Exquisite Life Awaits you in Nature",
    image: "/p-bellevuee.jpg",
    alt: "Bellevuee Project",
    videoLink: "https://www.youtube.com/embed/fq6oLKAmbBs",
  },
  {
    id: 4,
    title: "Rhythm of Soul",
    subtitle: "Embrace Luxury Living Amidst Nature",
    image: "/p-rhythm.jpg",
    alt: "Rhythm of Soul Project",
    videoLink: "https://www.youtube.com/embed/BA-y9Lw8UxE",
  },
  {
    id: 5,
    title: "Ayana",
    subtitle: "Where Nature Meets Elegance",
    image: "/project-ayana.jpg",
    alt: "Ayana Project",
    videoLink: "https://www.youtube.com/embed/DMjR3OEdoSI",
  },
  {
    id: 6,
    title: "Canvas",
    subtitle: "A Balinese Themed Farmland Project",
    image: "/project-canvas.jpg",
    alt: "Canvas Project",
    videoLink: "https://www.youtube.com/embed/jhtoAoFU8CY",
  },
];

export default function OurDevelopmentSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="my-16">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center my-6" data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-2xl font-medium mb-2">Our Developments</h2>
          <h2 className="mb-8 text-3xl md:text-4xl/snug text-center text-app-green-1 header-text">
            Build Your Dreams, Nurture Your Life
          </h2>
        </div>

        {/* Swiper Section */}
        <div id="projects-section" className=" py-3 lg:px-0 overflow-x-hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            pagination={{ 
              clickable: true,
              el: '.custom-pagination'
            }}
            autoplay={{ delay: 5000 }}
            loop
            className="swiper-container h-auto w-full"
          >
            {projects.map((project) => (
              <SwiperSlide
                key={project.id}
                className="swiper-slide rounded-lg overflow-hidden relative cursor-pointer"
              >
                <div
                  onClick={() => setSelectedVideo(project.videoLink)}
                  className="relative group"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={1200}
                    height={480}
                    className="h-[480px] w-full object-cover"
                    priority={project.id === 1}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-play-fill w-8 h-8 text-app-green-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.596 8.697l-6.363 3.692A.5.5 0 0 1 4.5 12V4a.5.5 0 0 1 .733-.441l6.363 3.692a.5.5 0 0 1 0 .874z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 px-4 py-2 hover:bg-app-green-1 text-white rounded">
                    <div className="text-lg font-bold">{project.title}</div>
                    <div className="text-base font-medium">{project.subtitle}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Pagination Dots */}
          <div className="custom-pagination flex justify-center mt-6 space-x-2"></div>
        </div>
      </div>

      {/* Video Modal */}
{/* Video Modal */}
<AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 bg-red-500 w-10 h-10 rounded-full flex items-center justify-center text-white text-2xl font-bold hover:bg-red-600 transition"
              >
                &times;
              </button>

              {/* Video iframe */}
              <iframe
                width="100%"
                height="500"
                src={selectedVideo}
                title="Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-b-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
