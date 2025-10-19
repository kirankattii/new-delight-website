


"use client";

// app/whistling-woods/page.tsx
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import HeroIntroSection from "@/components/project-page/HeroIntroSection";
import ProjectContact from "@/components/project-page/ProjectContact";
import BoxContent from "@/components/BoxContent";
import { whistlingWoodsFaq } from "@/lib/constants";
import FaqSection from "@/components/FaqSection";
import ConfigurationAndPricing from "@/components/project-page/ConfigurationAndPricing";
// Import Swiper dynamically to avoid SSR issues
const SwiperContainer = dynamic(() => import("@/utils/swiper/SwiperComponent"), {
  loading: () => <div className="h-[500px] bg-gray-200 animate-pulse rounded-lg" />
});

const whistlingWoodsImages = [
  "/projects/whistlingwoods/ros1.jpg",
  "/projects/whistlingwoods/ros2.jpg",
  "/projects/whistlingwoods/ros3.jpg",
  "/projects/whistlingwoods/ros4.jpg",
  "/projects/whistlingwoods/ros5.jpg",
  "/projects/whistlingwoods/ros6.jpg",
  "/projects/whistlingwoods/ros7.jpg",
];

export default function WhistlingWoodsPage() {
  return (
    <main>
      <HeroIntroSection
        backgroundImage="/projects/whistlingwoods/whistling-woods-view.jpg"
        title="Discover Whistling Woods"
        subtitle="Embrace Luxury Living Amidst Nature"
        description={[
          "Whistling Woods, which is located on 150 acres of green and wooded heaven, is a rare opportunity to own a **farm plot near Ballupet**. It is among the great forest trees, coffee, cardamom and pepper plantations. The landscape changes with the daylight in terms of the light passing through the canopy and cool mist in the afternoons and evenings. It is a place where nature is the best and peace is the heart.",
          "This estate, in Ballupet, is only 10 kilometres off the bustling town of Sakleshpur, which makes it a blend of the unspoilt nature with carefully designed layouts. Lane ways weave through vegetation, providing an ideal walking environment, or even community meetings. The whole area is built and created keeping in mind the element of peace, with every side of the space being relaxed and welcoming.",
          "Whistling Woods is a chance to make your own retreat. With each plot, you have a chance to create your own retreat that would be in line with your own vision but in touch with nature. Whether it is a rustic farmhouse, a holiday villa, or an eco-friendly homestay, the setting supports every dream.",
          "This **farmland is near Mallalli Falls**, also you can trek up to **Jenukallu Gudda**, walk through history at **Manjarabad Fort**, or admire the beauty of **Bisle Ghat**. For cultural and spiritual seekers, nearby temples such as Belur’s Chennakeshava, Halebidu’s Hoysaleswara, Dharmasthala, and Kukke Subramanya are within reach. This farmland is a gateway to adventure.",
          "With Delight Eco Farms bringing Whistling Woods to life, you gain access to both a retreat and an investment with long-term promise."
        ]}
        showTitle={false}
      />

      {/* Swiper Section */}
      <section className="py-14 md:px-24 md:p-16">
        <div className="container mx-auto">
          <SwiperContainer images={whistlingWoodsImages} />
        </div>
      </section>

      


        <section className="pt-6 md:py-16 pb-8  bg-yellow-50 relative z-[10] lg:bg-transparent"	>
              <BoxContent
                title="About Whistling Woods"
                subtitle="Discover Farmland in Ballupet - A Gateway to South Karnataka"
                description={[
"Whistling Woods is carefully planned for those who want to own **farmland in Ballupet** while enjoying easy access to South Karnataka’s natural and cultural richness. Ballupet is a biodiversity area, with rolling hills and a cool climate rendering it an ideal location to practice eco-living and sustainable farming in estates.",
"Whether you are searching for **agriculture land in Ballupet** or want an escape just a few hours from Bengaluru, this project brings both possibilities together."
                  ]}
              />
              </section>

      {/* Amenities + Video */}
      <section className=" bg-slate-50 py-12 md:p-20 md:py-16">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-2xl font-medium mb-2">
            Whistling Woods&apos; Premium Amenities & Lifestyle Features
          </h2>
          <p className="mb-8 text-4xl/snug text-app-green-1 header-text">
            For a lifestyle that is as comfortable as it is serene
          </p>
        </div>

        {/* Video */}
        <div className="container mx-auto ">
          <div className="aspect-video mb-8">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/0bYN_SBEb88"
              title="Exploring the Serenity of Sakleshpur"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

            {/* Why Choose Farm Plots in Ballupet? */}
          <h2 className="mb-4 text-3xl  text-center md:text-start">Why Choose Farm Plots in Ballupet?</h2>
          <p className="text-base/7 text-gray-600 text-center md:text-start mb-12  mx-auto">
         In this project, nature is combined with the contemporary lifestyle and provides the areas to be relaxed, communal, and long-term valuable. It brings harmony between living and the possibility of investment.
 </p>


          {/* Amenities */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
            {amenities.map(({ src, alt, label }) => (
              <div key={label} className="flex gap-4 items-center">
                <Image
                  src={src}
                  alt={alt}
                  width={48}
                  height={40}
                  className="object-contain"
                />
                <span className="flex-1 line-clamp-2">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


			<section className=" md:px-20 bg-gradient-to-b from-white to-[#F9FAFB]">

      <ConfigurationAndPricing
        heading={{
          eyebrow: "Configuration & Pricing",
          title: "Ballupet Agriculture Land for Sale - Plot Sizes & Pricing",
          subtitle: "Whistling Woods plots: configurations, ROI and connectivity",
        }}
        sections={[
          {
            title: "Whistling Woods Plot Sizes & Pricing",
            content: [
              "Whistling Woods plots come in various configurations to suit the needs of many users. The buyers can choose small parcels of land which can be utilised to build a weekend villa or bigger ones which can be used for plantation or eco-tourism projects. All plots are prepared with water supply and plantation facilities so that you may begin your vision construction immediately.",
              "The pricing has been set in a manner that it would be affordable without undermining sustainability and quality. It has become a simple and rewarding option to own a Ballupet agricultural land for sale with clear documentation and transparent processes.",
            ],
          },
          {
            eyebrow: "Investment Growth",
            title: "Luxury Estate Plots Near Bengaluru with Long-Term Value",
            content: [
              "Sakleshpur is gaining traction as a hub for farm living and eco-tourism. The farmland near South Karnataka region is experiencing ever increasing demands due to lifestyle advantages and investment potential among the urban buyers. Here is why Whistling Woods is unique:",
              <>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Demand on sustainable retreats in South Karnataka.</li>
                  <li>Ideal weekend home with tourist prospects.</li>
                  <li>The appreciation of ROI is greater than the traditional residential real estate.</li>
                </ul>
              </>,
              <>
                <h4 className="mt-4 font-semibold">ROI Comparison: Farmland vs Traditional Real Estate</h4>
                <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div className="mx-auto w-full max-w-[520px]">
                    <ROIComparisonTable />
                  </div>
                  <div className="relative w-full overflow-hidden rounded-xl ring-1 ring-gray-200 bg-white">
                    <div className="mx-auto w-full max-w-[760px] p-3 md:p-4">
                      <Image
                        src="/projects/whistling-roi-graph.png"
                        alt="Whistling Woods ROI comparison chart"
                        width={1600}
                        height={900}
                        className="w-full h-auto object-contain"
                        priority={false}
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-gray-700">
                  According to this chart, owning Whistling Woods farmland — luxury estate plots near Bengaluru — offers compelling financial outcomes alongside a nature-forward lifestyle.
                </p>
              </>,
            ],
          },
          {
            eyebrow: "Connectivity & Nearby Attractions",
            title: "Connected yet secluded: perfect weekend reachability",
            content: [
              "One of the greatest benefits of Whistling Woods is connectivity. By road, Ballupet is closely linked and therefore requires a drive of 4.5 hours to reach Bengaluru. It is convenient to have weekend getaways, yet, privacy is not compromised.",
              <>
                <p className="font-medium">Nearby attractions include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><b>Farmland near Mallalli Falls</b> - A stunning waterfall, bordered by greenery</li>
                  <li><b>Farmland near Jenukallu Gudda</b> - Trekker Paradise with a panoramic view.</li>
                  <li><b>Farmland near Manjarabad Fort</b> - A look back into the history of the 18th century.</li>
                  <li><b>Farmland near Bisle Ghat</b> - One of the most beautiful sceneries in Karnataka.</li>
                </ul>
              </>,
              "The combination of natural attractions and cultural sites make Whistling Woods the perfect location for both personal and rental purposes.",
            ],
          },
        ]}
      />
      </section>

      {/* Brochure Section */}
      <section className="section-padding">
        <div className="new-container mx-auto flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/2">
            <Image
              src="/projects/whistlingwoods/ww-plot.jpg"
              alt="Whistling Woods Farmland Map"
              width={600}
              height={400}
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex-1 lg:mt-20">
            <h2 className="text-3xl mb-4 header-text">
              Explore Whistling Woods&apos; Master Plan & Estate Layout
            </h2>
            <p className="text-base/7 text-gray-500 max-w-md">
              Here’s what you’ll be walking into
            </p>
            <a
              href="/pdfs/wistling-woods.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Whistling Woods project brochure PDF"
              className="bg-app-green-1 text-white px-4 py-2 rounded hover:bg-app-green-2 transition-colors inline-flex items-center justify-center mt-4"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
     <ProjectContact/>


    {/* whistling Woods FAQ */}
    <FaqSection
      title="FAQs About Farmland in Ballupet & South Karnataka"
      items={whistlingWoodsFaq}
      columns={2}
      icon="plus"
      className="bg-gray-50"
    />
     
    </main>
  );
}

function ROIComparisonTable() {
  const [hovered, setHovered] = useState<string | null>(null);
  const rows = [
    {
      key: "traditional",
      type: "Traditional Residential Plot",
      roi: "6–8%",
      lifestyle: "Limited",
      color: "bg-blue-50 ring-blue-200",
    },
    {
      key: "whistling",
      type: "Whistling Woods Farmland",
      roi: "12–15%",
      lifestyle: "High",
      color: "bg-green-50 ring-green-200",
    },
  ];

  return (
    <div className="rounded-xl ring-1 ring-gray-200 overflow-hidden shadow-sm bg-white">
      <div className="grid grid-cols-3 text-sm font-semibold bg-gray-50">
        <div className="p-3 border-b border-gray-200">Investment Type</div>
        <div className="p-3 border-b border-gray-200 text-center">Average ROI (10 Years)</div>
        <div className="p-3 border-b border-gray-200 text-center">Lifestyle Benefits</div>
      </div>
      <div>
        {rows.map((r) => (
          <button
            key={r.key}
            type="button"
            onMouseEnter={() => setHovered(r.key)}
            onMouseLeave={() => setHovered(null)}
            className={`w-full grid grid-cols-3 items-center text-sm transition-all duration-200 ${
              hovered === r.key ? `${r.color}` : "bg-white"
            }`}
            aria-label={`Row for ${r.type}`}
          >
            <div className="p-3 border-b border-gray-100 text-left">
              <span className="font-medium">{r.type}</span>
            </div>
            <div className="p-3 border-b border-gray-100 text-center">
              <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-gray-900 text-white text-xs">
                {r.roi}
              </span>
            </div>
            <div className="p-3 border-b border-gray-100 text-center">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700">
                <svg
                  className="h-4 w-4 text-app-green-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {r.lifestyle}
              </span>
            </div>
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between p-3 text-xs text-gray-500 bg-gray-50">
        <span>Hover rows to highlight. Figures indicative.</span>
        <span className="inline-flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-app-green-1" /> Better lifestyle
        </span>
      </div>
    </div>
  );
}

const amenities = [
  { src: "/icons/amenties/1.svg", alt: "Club Membership", label: "Club Membership" },
  { src: "/icons/amenties/6.svg", alt: "Rainwater Harvesting", label: "Rainwater Harvesting" },
  { src: "/icons/amenties/2.svg", alt: "Fully Equipped Gym", label: "Fully Equipped Gym" },
  { src: "/icons/amenties/7.svg", alt: "24/7 Security", label: "24/7 Security" },
  { src: "/icons/amenties/8.svg", alt: "Children's Play Area", label: "Children's Play Area" },
  { src: "/icons/amenties/4.svg", alt: "Club House", label: "Club House" },
  { src: "/icons/amenties/5.svg", alt: "CCTV Surveillance", label: "CCTV Surveillance" },
  { src: "/icons/amenties/9.svg", alt: "Landscaped Gardens", label: "Landscaped Gardens" },
];

