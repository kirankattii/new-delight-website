"use client";

import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import blogsData from "@/utils/blogsData.json";
import type { BlogPost } from "@/utils/types/blogTypes";
import BlogCard from "@/components/BlogCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RecentBlogs() {
  const blogs: BlogPost[] = useMemo(() => {
	const sorted = [...(blogsData as BlogPost[])].sort(
	  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);
	return sorted.slice(0, 10);
  }, []);

  if (!blogs || blogs.length === 0) return null;

  return (
	<section className="py-10 md:px-8  md:py-14 bg-white" aria-labelledby="recent-blogs-heading">
	  <div className="new-container mx-auto">
		<div className="text-center mb-8 md:mb-10">
		  <div className="text-app-green-1 font-medium tracking-wide uppercase text-sm" data-aos="fade-up" data-aos-duration="400">Recent Blogs</div>
		  <h2 id="recent-blogs-heading" className="header-text text-3xl md:text-4xl mt-2" data-aos="fade-up" data-aos-duration="600">
			The Farmlands Journal
		  </h2>
		</div>

		<div className="relative" data-aos="fade-up" data-aos-duration="700">
		  <Swiper
			modules={[Navigation, Pagination, Autoplay]}
			autoplay={{ delay: 3500, disableOnInteraction: false }}
			loop
			spaceBetween={16}
			slidesPerView={1}
			breakpoints={{
			  640: { slidesPerView: 1, spaceBetween: 16 },
			  768: { slidesPerView: 2, spaceBetween: 18 },
			  1024: { slidesPerView: 3, spaceBetween: 20 },
			  1280: { slidesPerView: 4, spaceBetween: 22 },
			}}
			navigation={{ nextEl: ".recent-blogs-next", prevEl: ".recent-blogs-prev" }}
			pagination={{ clickable: true, el: ".custom-pagination-recent-blogs" }}
			className="pb-10"
		  >
            {blogs.map((blog, i) => (
			  <SwiperSlide key={blog.id}>
                <BlogCard blog={blog} delay={i * 50} compact lgClamp3 readMoreText="Read More" />
			  </SwiperSlide>
			))}

			
		  </Swiper>

{/* Custom Navigation */}
<button
			  aria-label="Previous blogs"
              className="recent-blogs-prev hidden z-10 lg:flex items-center justify-center absolute -left-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-app-green-1 text-white shadow-md hover:bg-app-green-2 transition-colors"
			>
			  <ChevronLeft className="w-5 h-5" />
			</button>
			<button
			  aria-label="Next blogs"
              className="recent-blogs-next hidden lg:flex items-center justify-center absolute -right-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-app-green-1 text-white shadow-md hover:bg-app-green-2 transition-colors"
			>
			  <ChevronRight className="w-5 h-5" />
			</button>

		  {/* Custom Pagination Dots */}
		  <div className="custom-pagination custom-pagination-recent-blogs flex justify-center mt-2" />
		</div>
	  </div>
	</section>
  );
}


