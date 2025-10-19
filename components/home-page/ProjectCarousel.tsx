"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  subtitle: string;
  address: string;
  plotSizes: string;
  acres: number;
  plots: number;
  description: string;
  image: string;
  link: string;
}

const projectList: Project[] = [
    {
        title: "Whistling Woods",
        subtitle: "A Haven of Luxury and Wilderness",
        address:
          "Survey no 135, Hosagadde, Ballupet, sakleshpur, Hassan, Karnataka",
        plotSizes: "5,500-15,000 Sq.Ft",
        acres: 150,
        plots: 400,
        description:
          "Experience the ultimate fusion of nature and luxury at Whistling Woods, an exclusive managed farmland near Sakleshpur. Set amidst the fragrant coffee and pepper plantations of Karnataka, this exceptional development provides a rare opportunity to own a piece of agricultural paradise, surrounded by lush greenery and tranquil beauty.",
        image: "/projects/whistling-woods.jpg",
        link: "/farmlands/whistling-woods.html",
      },
      {
        title: "Bellevuee",
        subtitle: "Tranquillity Amidst Kanakapura's Natural Beauty",
        address: "Keralalusandra Village, Kanakapura, Karnataka",
        plotSizes: "5,551-18,692 Sq.Ft",
        acres: 22,
        plots: 95,
        description:
          "Escape to Bellevue – a 22-acre sustainable farmland community designed to nurture biodiversity and eco-friendly farming. With lush plots surrounded by mature coconut, silver, and teak trees, Bellevue offers the perfect blend of nature, serenity, and self-sufficient living.",
        image: "/projects/bellevuee.jpg",
        link: "/farmlands/bellevuee.html",
      },
      {
        title: "Arinaa Country Farms",
        subtitle: "Symphony of Nature and Comfort",
        address: "Sy.No. 69, Seegekote, Kanakapura, Bangalore",
        plotSizes: "6,000-21,000 Sq.Ft",
        acres: 15,
        plots: 50,
        description:
          "Rich in water, fertile soil, and ideal climate, this farmland is perfect for organic farming and sustainable living with cows, goats, and hens. Just a short drive from the city, it’s an ideal weekend escape to relax and reconnect with nature.",
        image: "/projects/arinaa.jpg",
        link: "/farmlands/arinaa-country-farms.html",
      },
      {
        title: "Rhythm of Soul",
        subtitle: "Experience Nature's Bliss in Sakleshpur",
        address: "Survey No 54/2, Hirivate, Bikkode, Belur, Hassan, Karnataka",
        plotSizes: "6,000-20,000 Sq.Ft",
        acres: 50,
        plots: 156,
        description:
          "This premium managed farmland near Sakleshpur blends sustainable farming, luxury, and smart investment. Nestled in the lush Western Ghats at Hirivate, it offers a rare opportunity to own a slice of paradise while benefiting from long-term agricultural returns.",
        image: "/projects/rhythm.jpg",
        link: "/farmlands/rhythm-of-soul.html",
      },
      {
        title: "Canvas",
        subtitle: "A Premium Managed Farmland Project",
        address:
          "Survey Number 88, Kallur, Lepakshi Mandal, Sathya Sai, Andhra Pradesh, 515331",
        plotSizes: "Starting at 5,500 Sq.ft",
        acres: 120,
        plots: 400,
        description:
          "Discover a thoughtfully curated lifestyle at CANVAS, nestled in the culturally rich and naturally vibrant landscape of Kallur Village, in the heart of Lepakshi, Sathya Sai District (Hindupura region). This 100-acre expanse reimagines countryside living, offering a seamless blend of agriculture, tranquillity, and community.",
        image: "/projects/canvas.jpg",
        link: "/farmlands/canvas.html",
      },
      {
        title: "Ayana",
        subtitle: "Tucked in the Heart of Nature",
        address: "Irakaravalli Village, Belur (Registration), Hassan, Karnataka,",
        plotSizes: "10,000-18,000 Sq.Ft",
        acres: 25,
        plots: 49,
        description:
          "Ayana is an exclusive estate farmland in Sakleshpur, nestled within the lush, mist-covered landscapes of the Western Ghats. Surrounded by silver oak trees, pepper vines, and robusta coffee plantations, Ayana offers a peaceful escape where nature, privacy, and tranquility come together effortlessly.",
        image: "/projects/ayana.jpg",
        link: "/farmlands/ayana.html",
      },
    
];

export default function ProjectCarousel() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const currentProject = projectList[currentProjectIndex];

  // Enable simple autoplay: advance every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projectList.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // Autoplay disabled - removed auto slide functionality
  // const startAutoplay = useCallback(() => {
  //   stopAutoplay();
  //   autoplayRef.current = setInterval(() => {
  //     setCurrentProjectIndex((prev) => (prev + 1) % projectList.length);
  //   }, 3000);
  // }, []);

  // Autoplay setup - disabled
  // useEffect(() => {
  //   startAutoplay();
  //   return () => stopAutoplay();
  // }, [startAutoplay]);


  const goToProject = (index: number) => {
    setCurrentProjectIndex((index + projectList.length) % projectList.length);
    // Auto slide disabled - no need to restart autoplay
  };

  return (
    <section className="my-10 lg:py-10  mx-auto relative">
     
      <div className="container mx-auto flex justify ">
        <div
          className="flex flex-col lg:grid fade-in mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl h-auto lg:h-[400px] relative"
          style={{ gridTemplateColumns: '60% 40%' }}
          id="project-container"
          aria-labelledby="project-title"
          itemScope
          itemType="https://schema.org/Place"
        >
         
          {/* Left content */}
          <div className="bg-slate-800 text-white flex flex-col justify-center">
            <div className="p-6 h-full flex flex-col justify-center">
              {/* Title */}
              <h2
                className="text-3xl md:text-4xl font-semibold mb-2 md:mb-4"
                id="project-title"
                itemProp="name"
              >
                {currentProject.title}
              </h2>

              {/* Address */}
              <p
                className="text-sm md:text-base mb-4 text-gray-300"
                id="project-address"
                itemProp="address"
              >
                {currentProject.address}
              </p>

              {/* Stats */}
              <div className="mb-2 md:mb-4">
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold">Plot Sizes -</span>
                    <span
                      className="text-base text-gray-300"
                      id="project-plot-sizes"
                    >
                      {currentProject.plotSizes}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold">Acres -</span>
                    <span
                      className="text-base text-gray-300"
                      id="project-acres"
                    >
                      {currentProject.acres}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold">Plots -</span>
                    <span
                      className="text-base text-gray-300"
                      id="project-plots"
                    >
                      {currentProject.plots}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2 md:space-y-3">
                <h3
                  className="text-xl md:text-2xl font-semibold"
                  id="project-description-title"
                >
                  {currentProject.subtitle}
                </h3>
                <p
                  className="text-gray-300 text-sm md:text-base leading-relaxed lg:h-28"
                  id="project-description-text"
                  itemProp="description"
                >
                  {currentProject.description}
                </p>

                {/* Navigation + CTA */}
                <div className="flex justify-between mt-4">
                  {/* Mobile Nav */}
                  <div className="flex justify-end lg:hidden">
                    <button
                      onClick={() => goToProject(currentProjectIndex - 1)}
                      id="prev-project-mobile"
                      aria-label="Previous project"
                    >
                      <Image
                        src="/icons/arrow-prev.svg"
                        alt="Previous"
                        width={40}
                        height={40}
                      />
                    </button>
                    <button
                      onClick={() => goToProject(currentProjectIndex + 1)}
                      id="next-project-mobile"
                      aria-label="Next project"
                      className="ms-4 me-24"
                    >
                      <Image
                        src="/icons/arrow-next.svg"
                        alt="Next"
                        width={40}
                        height={40}
                      />
                    </button>
                  </div>

                  {/* Project link */}
                  <Link
                    href={currentProject.link}
                    className="bg-transparent"
                    aria-label={`View ${currentProject.title} project details`}
                  >
                    <Image
                      src="/icons/arrow3.svg"
                      alt={`Explore ${currentProject.title} project`}
                      width={40}
                      height={40}
                      className="link-btn"
                      itemProp="url"
                    />
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Right image */}
          <div className="overflow-hidden h-64 lg:h-full">
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              id="project-image"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
              itemProp="image"
            />
          </div>
        </div>
      </div>
         
          {/* Desktop Nav - Top Right */}
      <div className="p-5 mt-0 flex justify-center flex gap-20 mb-4 mr-10 z-10 hidden lg:flex gap-2">
            <button
              onClick={() => goToProject(currentProjectIndex - 1)}
              id="prev-project-desktop"
              aria-label="Previous project"
              className="bg-app-green-1 hover:bg-white  cursor-pointer rounded-full p-2 shadow-lg transition-colors"
            >
              <Image
                src="/icons/arrow-prev.svg"
                alt="Previous"
                width={24}
                height={24}
              />
            </button>
            <button
              onClick={() => goToProject(currentProjectIndex + 1)}
              id="next-project-desktop"
              aria-label="Next project"
              className="bg-app-green-1 cursor-pointer hover:bg-white rounded-full p-2 shadow-lg transition-colors"
            >
              <Image
                src="/icons/arrow-next.svg"
                alt="Next"
                width={24}
                height={24}
              />
            </button>
          </div>
         
    </section>
  );
}

