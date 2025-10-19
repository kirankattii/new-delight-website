"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
  href?: string;
}

const stats: StatItem[] = [
  {
    label: "Projects Completed",
    value: 2,
    icon: "/icons/projects-completed.svg",
    href: "/farmlands",
  },
  {
    label: "Ongoing Projects",
    value: 4,
    icon: "/icons/ongoing-projects.svg",
  },
  {
    label: "Upcoming Projects",
    value: 3,
    icon: "/icons/upcoming-projects.svg",
  },
  {
    label: "Happy Clients",
    value: 500,
    suffix: "+",
    icon: "/icons/happy-client.svg",
  },
];

const AchivementNumbers = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const animateNumber = (
      element: HTMLElement,
      targetValue: number,
      duration: number,
      suffix: string = ""
    ) => {
      let startValue = 0;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Use easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        startValue = Math.floor(easeOutQuart * targetValue);
        
        element.textContent = startValue + suffix;
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll<HTMLElement>(
              ".number-animation"
            );
            elements.forEach((element) => {
              const value = parseInt(element.dataset.value || "0");
              const suffix = element.dataset.suffix || "";
              animateNumber(element, value, 2000, suffix);
            });
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats-section"
      ref={sectionRef}
      className="p-4 my-6 lg:my-0 lg:p-0 mx-auto "
      aria-label="Achievement Statistics"
    >
      <div className="bg-app-green-1 text-white rounded-lg  mx-auto lg:rounded-none py-4">
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mx-auto  mx-auto ">
            {stats.map(({ label, value, suffix, icon, href }) => {
              const content = (
                <div className="text-center lg:text-left py-8 mx-auto">
                  <div className="flex items-center  justify-center mx-auto gap-2">
                    <Image
                      src={icon}
                      alt={`${label} icon`}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <span
                      className="text-3xl font-bold number-animation"
                      data-value={value}
                      data-suffix={suffix || ""}
                      aria-label={`${label}: ${value}${suffix || ""}`}
                    >
                      0
                    </span>
                  </div>
                  <p className="text-base text-center font-semibold mt-2">{label}</p>
                </div>
              );

              return href ? (
                <Link key={label} href={href} aria-label={`View ${label}`}>
                  {content}
                </Link>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchivementNumbers;
