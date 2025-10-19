"use client";

import dynamic from "next/dynamic";

// ✅ Dynamically import Swiper to avoid SSR issues
const SwiperContainer = dynamic(() => import("@/utils/swiper/SwiperComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] bg-gray-200 animate-pulse rounded-lg" />
  ),
});

interface SwiperWrapperProps {
  images: string[];
}

export default function SwiperWrapper({ images }: SwiperWrapperProps) {
  return <SwiperContainer images={images} />;
}
