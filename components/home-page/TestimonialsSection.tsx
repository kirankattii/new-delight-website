


"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// YouTube API type definitions
interface YTPlayer {
  new (elementId: string, config: YTPlayerConfig): YTPlayerInstance;
}

interface YTPlayerConfig {
  events?: {
    onStateChange?: (event: YTStateChangeEvent) => void;
  };
}

interface YTPlayerInstance {
  playVideo?: () => void;
  pauseVideo?: () => void;
  stopVideo?: () => void;
}

interface YTStateChangeEvent {
  data: number;
}

interface YouTubeAPI {
  Player: YTPlayer;
  PlayerState: {
    PLAYING: number;
    PAUSED: number;
    ENDED: number;
  };
}

declare global {
  interface Window {
    YT?: YouTubeAPI;
    onYouTubeIframeAPIReady?: () => void;
  }
}

type Testimonial = {
  rating: number;
  text: string;
  name: string;
  position: string;
};

type VideoSlide = {
  url: string;
};

type SlideItem =
  | { type: "testimonial"; data: Testimonial }
  | { type: "video"; data: VideoSlide };

const testimonials: Testimonial[] = [
  {
    rating: 4,
    text: "I recently invested in this farmland. The process was hassle-free, and the team was approachable and supportive. The property is peaceful yet well-connected, excellently maintained, and offered at competitive rates—great value for money. Highly recommend!",
    name: "Murali H",
    position: "Happy Client",
  },
  {
    rating: 5,
    text: "From the initial consultation to purchase, the entire process was seamless. The luxury farm plots here are some of the best near Bangalore!",
    name: "Prakash Kumar",
    position: "Happy Client",
  },
  {
    rating: 4,
    text: "If you're looking for a blend of countryside living and luxury, Delight Eco Farms is the place. The plots are perfect for relaxation and future growth.",
    name: "Raghavendra Prakash Rao",
    position: "Happy Client",
  },
  {
    rating: 5,
    text: "I am thrilled with my purchase at Bellevue Farms. The location is convenient with a scenic drive from the city. The property offers stunning views and is the perfect getaway for my family.",
    name: "Zeena Crasta",
    position: "Happy Client - Entrepreneur",
  },
];

const videos: VideoSlide[] = [
  {
    url: "https://www.youtube.com/embed/tb0iKq2poWM?controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1",
  },
  {
    url: "https://www.youtube.com/embed/aunK6z39Mmc?controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1",
  },
  {
    url: "https://www.youtube.com/embed/L5F1OJxTHkw?controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1",
  },
  {
    url: "https://www.youtube.com/embed/FEa3--bw4Jk?controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1",
  },
];

// ✅ Combine testimonials and videos alternatively
const combinedSlides: SlideItem[] = [];
for (let i = 0; i < Math.max(testimonials.length, videos.length); i++) {
  if (testimonials[i]) combinedSlides.push({ type: "testimonial", data: testimonials[i] });
  if (videos[i]) combinedSlides.push({ type: "video", data: videos[i] });
}

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const initializedPlayers = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initYouTubePlayers = () => {
      const container = containerRef.current;
      if (!container) return;
      const frames = Array.from(
        container.querySelectorAll('iframe[data-yt="true"]')
      ) as HTMLIFrameElement[];

      const YT = window.YT;
      if (!YT || !YT.Player) return;

      frames.forEach((frame) => {
        const id = frame.id;
        if (!id || initializedPlayers.current.has(id)) return;

        // 🎬 Create player to manage play/pause events
        const player = new YT.Player(id, {
          events: {
            onStateChange: (event: YTStateChangeEvent) => {
              if (!swiperRef.current) return;

              switch (event?.data) {
                case YT.PlayerState.PLAYING:
                  swiperRef.current.autoplay?.stop();
                  break;
                case YT.PlayerState.PAUSED:
                case YT.PlayerState.ENDED:
                  swiperRef.current.autoplay?.start();
                  break;
                default:
                  break;
              }
            },
          },
        });

        if (player) {
          initializedPlayers.current.add(id);
        }
      });
    };

    // Load YT Iframe API if not already available
    if (!window.YT || !window.YT.Player) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);

      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof prev === "function") prev();
        initYouTubePlayers();
      };
    } else {
      initYouTubePlayers();
    }
  }, []);

  return (
    <section className="py-20" id="testimonials-section">
      <div className="container mx-auto">
        {/* Headings */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-2xl mb-4">Our Client&apos;s Testimonial</h2>
          <h2 className="mb-8 text-3xl md:text-4xl text-app-green-1 header-text">
            Voices of Satisfaction &amp; Delight
          </h2>
        </div>

        {/* Swiper */}
        <div className="relative" ref={containerRef}>
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation={{
              nextEl: "#next-testimonial",
              prevEl: "#prev-testimonial",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination-testimonials-section",
            }}
            className="max-w-4xl mx-auto"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={() => swiperRef.current?.autoplay?.start()} // ✅ Ensures autoplay resumes after slide change
          >
            {combinedSlides.map((item, index) => (
              <SwiperSlide key={index}>
                {item.type === "testimonial" ? (
                  <article className="space-y-6 text-center md:mt-16 flex flex-col items-center">
                    {/* Rating */}
                    <div className="flex justify-center mb-3">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span
                          key={i}
                          className={`${
                            i < item.data.rating ? "text-yellow-400" : "text-gray-300"
                          } text-xl`}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-600 text-base leading-relaxed font-light max-w-2xl mx-auto">
                      “{item.data.text}”
                    </p>

                    {/* Author */}
                    <div className="mt-4">
                      <h3 className="text-gray-800 font-medium text-lg">
                        {item.data.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{item.data.position}</p>
                    </div>
                  </article>
                ) : (
                  // 🎥 Video Slide
                  <div className="flex justify-center items-center">
                  <div className="w-[95%] sm:w-[420px] md:w-[600px] lg:w-[720px] aspect-square sm:aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                      id={`ytplayer-${index}`}
                      data-yt="true"
                      src={item.data.url}
                      title={`Client video ${index}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full scale-105 sm:scale-100 origin-center"
                    ></iframe>
                  </div>
                </div>
                
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            id="prev-testimonial"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border border-gray-300 hover:bg-white transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            id="next-testimonial"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full border border-gray-300 hover:bg-white transition-colors z-10"
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Pagination */}
        <div className="custom-pagination-testimonials-section flex justify-center mt-6 space-x-2"></div>
      </div>
    </section>
  );
}
