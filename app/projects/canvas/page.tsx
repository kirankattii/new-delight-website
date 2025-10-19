
// app/canvas/page.tsx
import Image from "next/image";
import SwiperWrapper from "@/components/SwiperWrapper";
import HeroIntroSection from "@/components/project-page/HeroIntroSection";
import ProjectContact from "@/components/project-page/ProjectContact";
import { Metadata } from "next";
import BoxContent from "@/components/BoxContent";
import { canvasFaq } from "@/lib/constants";
import FaqSection from "@/components/FaqSection";
import ConfigurationAndPricing from "@/components/project-page/ConfigurationAndPricing";

// ✅ SEO metadata
export const metadata: Metadata = {
  title: "Farmland in Kallur Village, Lepakshi | Delight Eco Farms",
  description:
    "Own premium farmland in Kallur Village with Delight Eco Farms. Explore farm plots near Lepakshi offering value and long-term investment growth.",
  alternates: {
    canonical: "https://www.delightecofarms.com/farmlands/canvas.html",
  },
  openGraph: {
    title: "Farmland in Kallur Village, Lepakshi | Delight Eco Farms",
    description:
      "Own premium farmland in Kallur Village with Delight Eco Farms. Explore farm plots near Lepakshi offering value and long-term investment growth.",
    url: "https://www.delightecofarms.com/farmlands/canvas.html",
    images: ["/projects/canvas/canvas1.jpg"],
  },
};

// ✅ Images for swiper
const canvasImages = [
  "/projects/canvas/canvas1.jpg",
  "/projects/canvas/canvas2.jpg",
  "/projects/canvas/canvas3.jpg",
  "/projects/canvas/canvas4.jpg",
  "/projects/canvas/canvas5.jpg",
  "/projects/canvas/canvas6.jpg",
  "/projects/canvas/canvas7.jpg",
  "/projects/canvas/canvas8.jpg",
];

// ✅ Visit Us data
const visitUsCards = [
  "Unlock Exclusive Pre-Launch Discounts",
  "Choose from the Best Plot Locations",
  "Customise Your Farmland Experience to Your Vision",
];

// ✅ Amenities data
const amenities = [
  { src: "/icons/amenties/gated-community.svg", label: "120-Acre Gated Community" },
  { src: "/icons/amenties/farmplots.svg", label: "400+ Farmplots from 5,500 Sq.ft" },
  { src: "/icons/amenties/amenities-zone.svg", label: "5-Acre Leisure & Amenities Zone" },
  { src: "/icons/amenties/cultivation.svg", label: "Fertile Red Soil for Cultivation" },
  { src: "/icons/amenties/water-security.svg", label: "3 Borewells for Water Security" },
  { src: "/icons/amenties/maintenance-support.svg", label: "Custom Plantation & Maintenance Support" },
];

export default function CanvasPage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroIntroSection
        backgroundImage="/projects/canvas/canvas.jpg"
        title="Welcome to CANVAS - A Premium Managed Farmland Project"
        subtitle="Where Red Earth Meets Serene Living"
        description={[
          "CANVAS is a carefully edited lifestyle within the heart of **farmland in Kallur Village** in the Sathya Sai District (Hindupura region) that is rich in nature and cultural diversity. This 120-acre area is a reimagination of rural living and provides a unique integration of agriculture, peace, and community.",
          "CANVAS is spread across 400+ farm plots around Lepakshi, with a starting area of 5,500 sq.ft, aimed at individuals seeking more than a piece of land - a CANVAS to grow, relax, and reconnect with nature. Every plot is an individualised retreat with fertile red soil, prime for a wide variety of plantations, and the freedom to decide on the crops.",
          "For anyone looking for **farmland near Lepakshi**, CANVAS offers ownership, and a lifestyle rooted in nature and long-term value."
        ]}
        showTitle={true}
      />

      {/* Gallery / Swiper */}
      <section className="py-14 md:px-24 md:p-16">
        <div className="container mx-auto">
          <SwiperWrapper images={canvasImages} />
        </div>
      </section>

			<section className="pt-6 md:py-16 pb-8  bg-yellow-50 relative z-[10] lg:bg-transparent"	>
        <BoxContent
          title="About Canvas Farmland"
          subtitle=""
          description={[
            "Before making an investment, it’s important to know what sets CANVAS apart from other projects. And here is a closer examination of how these farmlands are planned to unite long-term value and lifestyle benefits.",
            "CANVAS Farmlands is a well-considered development that is a true essence of the countryside life. The project is located in **farmland in Kallur Village** which brings together fertile soil, sustainable practices and a communal sense of community together.",
            "The 120-acre prime agricultural land has a special opportunity of owning a piece of the natural world without sacrificing the comfort in every plot. Every detail, from the layout to the amenities, is planned to support farming as well as leisure living.",
            "Natural resources are abundant in this land and one can find it ideal to grow crops, construct a holiday home or just keep it as a maturing investment. CANVAS is all about building your own escape that reflects your idea of slow and purposeful living."
          ]}
        />
        </section>

      {/* Lifestyle + Video */}
      <section className=" bg-slate-50 px-5 py-12 md:p-20 md:py-16">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-2xl font-medium mb-2">Canvas&apos;s Comprehensive Lifestyle Features</h2>
          <p className="mb-8 text-4xl/snug text-app-green-1 header-text">
            For a lifestyle that is as comfortable, as it is serene
          </p>
        </div>

        {/* Embedded Video */}
        <div className="new-container mx-auto ">
          <div className="aspect-video mb-8">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/jhtoAoFU8CY"
              title="Canvas - Managed Farmland in Lepakshi | Delight Eco Farms"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Why Canvas */}
          <h2 className="mb-4 text-3xl  text-center md:text-start">Why Choose Farm Plots in Kallur Village?</h2>
          <p className="text-base/7 text-gray-600 text-center md:text-start mb-12  mx-auto">
          This project is a combination of big farmlands, quality water sources, and fertile soils, it is therefore favourable to farming. In combination with this, the proposed leisure and comfort areas bring about a mix between agriculture and contemporary life.
                    </p>

          {/* Visit Us Section */}
          <h2 className="mb-6 text-3xl  text-center md:text-start">Visit Us to:</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 mb-16">
            {visitUsCards.map((text, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium">{text}</h3>
              </div>
            ))}
          </div>

          {/* Amenities */}
          <h2 className="mb-6 text-3xl  text-center">Project Highlights:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {amenities.map(({ src, label }) => (
              <div key={label} className="flex gap-4 items-center">
                <Image src={src} alt={label} width={65} height={65} className="object-contain" />
                <span className="flex-1 line-clamp-2">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Configuration & Pricing */}
			<section className=" md:px-20 bg-gradient-to-b from-white to-[#F9FAFB]">

      <ConfigurationAndPricing
        heading={{
          eyebrow: "Configuration & Pricing",
          title: "Farm Plots in Kallur Village - Sizes & Pricing",
          subtitle: "Transparent pricing with essential facilities and long-term value",
        }}
        sections={[
          {
            eyebrow: "Configuration & Pricing",
            title: "Farm Plots in Kallur Village - Sizes & Pricing",
            content: [
              "Knowing the sizes and prices of farm plots will assist you to fit your investment into your lifestyle objectives. This is what CANVAS can offer to any type of buyer.",
              "The CANVAS Plot area has various options, depending on the needs. The project offers flexibility whether you want smaller farm plots near Lepakshi to do hobby farming or larger plots for plantation and farmhouse construction.",
              "The pricing model is open, and buyers are fully aware of what they are putting in without any unexpected expenses. Every plot is accompanied by necessary facilities, such as water connection, maintenance and others, and you can build your dream retreat. Land here is more about getting long term value of an appreciating asset.",
            ],
          },
          {
            eyebrow: "Investment Growth",
            title: "Land That Grows in Value & Income",
            content: [
              "Investing in farmland, especially in such locations as Lepakshi, is a combination of financial and lifestyle payoff. The following are highlights of the main points on investment growth:",
              (
                <>
                  <p className="font-medium">Appreciation and Returns:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Farmland around Bengaluru and beyond has been experiencing a large appreciation with some estimating the annual appreciation to be at 15-20 percent and ROI of 10-25 percent.
                    </li>
                    <li>
                      The Hindupur-Lepakshi area is experiencing an increase in the value of its land because of industrial development, tourism, and the closeness to major urban centres.
                    </li>
                    <li>
                      Managed farmland initiatives are also characterised by the fact that they usually offer value in terms of passive income on farming or eco-tourism activities, a two-fold advantage not always present with traditional real estate.
                    </li>
                  </ul>
                </>
              ),
              (
                <>
                  <p className="font-medium">Comparison to Traditional Real Estate:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Farmland is viewed as an asset, which is hard and less prone to the extreme market failures that may hit urban property.
                    </li>
                    <li>
                      It can be used as a cushion against inflation, when the price of commodities is rising the value of the land and its output is likely to go up.
                    </li>
                    <li>
                      The agricultural land also tends to appreciate in value and incur fewer maintenance expenses unlike apartments which deteriorate over time and need high maintenance.
                    </li>
                    <li>
                      Urban real estate provides fast liquidity, whereas with farmland, it is stable and long-term gains.
                    </li>
                  </ul>
                </>
              ),
              (
                <>
                  <p className="font-medium">Investment Considerations:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      One way of diversifying a portfolio is to invest in farmland, which is not closely correlated with other asset classes such as stocks and bonds.
                    </li>
                    <li>
                      In India, agricultural income is tax free under some conditions, and this is a great benefit.
                    </li>
                    <li>
                      Nevertheless, one should also pay attention to legal regulations, since not all Indian states allow anyone to buy agricultural land. Land titles, zoning and legal clearance due diligence is required.
                    </li>
                    <li>
                      Farmland near Lepakshi is on a rise due to the growing number of individuals opting to live and invest in ecologically friendly locations and tourism.
                    </li>
                  </ul>
                </>
              ),
            ],
          },
          {
            eyebrow: "Connectivity & Nearby Attractions",
            title: "Farmland Near Lepakshi - Location Advantages",
            content: [
              "The value of farmland is very much influenced by accessibility and surroundings. Here’s why CANVAS scores high on location.",
              "CANVAS Farmlands enjoy excellent connectivity, being located in farmland in Kallur Village within easy reach to Lepakshi and the Hindupura region. The location is better connected to the surrounding highways, making transportation easy between Bengaluru and other large towns.",
              "What adds to the beauty even more are the surrounding attractions, the historic Lepakshi Temple, a cultural treasure and an attraction that brings people together, local plantations to display the richness of the soil and the peaceful environment that is conducive to rest. This is an ideal place when buyers are interested in buying farm plots near Lepakshi, as it is not only convenient but also natural.",
            ],
          },
        ]}
      />
      </section>

      {/* Master Plan */}
      <section className="section-padding bg-white">
        <div className="new-container mx-auto flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
            <Image
              src="/projects/canvas/canvas-master-plan.jpg"
              alt="CANVAS farmland master plan"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex-1 lg:mt-20">
            <h2 className="text-3xl mb-4 header-text">
              Discover Canvas&apos;s Master Layout & Design
            </h2>
            <p className="text-base/7 text-gray-500 mb-4">
              Here&apos;s what you&apos;ll be walking into
            </p>
            <a
              href="/pdfs/canvas-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Canvas project brochure PDF"
              className="bg-app-green-1 text-white px-4 py-2 text-sm rounded hover:bg-app-green-2 transition-colors inline-flex items-center justify-center"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <ProjectContact />

{/* canvas FAQ */}
      <FaqSection
        title="FAQs About Farm Plots Near Lepakshi"
        items={canvasFaq}
        columns={2}
        icon="plus"
        className="bg-gray-50"
      />
    </main>
  );
}
