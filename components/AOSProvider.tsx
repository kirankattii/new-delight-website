"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      AOS.init({
        duration: 600, // Reduced from 800ms for better performance
        easing: "ease-out", // More performant than ease-in-out
        once: true,
        mirror: false,
        offset: 50, // Start animation 50px before element is visible
        delay: 0,
        // Performance optimizations
        useClassNames: false,
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        debounceDelay: 50, // Debounce scroll events
        throttleDelay: 99, // Throttle scroll events
      });
    }
  }, []);

  return <>{children}</>;
}
