// app/bellevuee/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import SwiperWrapper from "@/components/SwiperWrapper";
import ProjectContact from "@/components/project-page/ProjectContact";
import HeroIntroSection from "@/components/project-page/HeroIntroSection";
import ConfigurationAndPricing from "@/components/project-page/ConfigurationAndPricing";
import { bellevueeFaq } from "@/lib/constants";
import FaqSection from "@/components/FaqSection";
import BoxContent from "@/components/BoxContent";

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Bellevuee Farmland | Sustainable Plots - Delight Eco Farms",
  description:
    "Bellevuee 27-acre sustainable farmland community in Kanakapura, Karnataka. Features coconut trees, teak plantations, and landscaped gardens. Buy farm plots near Kanakapura today.",
  alternates: {
    canonical: "https://www.delightecofarms.com/projects/bellevuee",
  },
  openGraph: {
    title: "Bellevuee Farmland | Sustainable Plots - Delight Eco Farms",
    description:
      "Bellevuee 27-acre sustainable farmland community in Kanakapura, Karnataka. Features coconut trees, teak plantations, and landscaped gardens. Buy farm plots near Kanakapura today.",
    url: "https://www.delightecofarms.com/projects/bellevuee",
    images: ["/projects/bellevuee/bellevuee1.jpg"],
  },
};

// ✅ Swiper Images
const bellevueeImages = [
  "/projects/bellevuee/bellevuee1.jpg",
  "/projects/bellevuee/bellevuee2.jpg",
  "/projects/bellevuee/bellevuee3.jpg",
  "/projects/bellevuee/bellevuee4.jpg",
  "/projects/bellevuee/bellevuee5.jpg",
  "/projects/bellevuee/bellevuee6.jpg",
];

// ✅ Amenities
const amenities = [
  { icon: "/icons/amenties/Club-house.svg", label: "Club House" },
  { icon: "/icons/amenties/cricket.svg", label: "Cricket" },
  { icon: "/icons/amenties/badminton.svg", label: "Badminton" },
  { icon: "/icons/amenties/petting-zoo.svg", label: "Petting Zoo" },
  { icon: "/icons/amenties/cycling.svg", label: "Cycling Track" },
  { icon: "/icons/amenties/volleyball.svg", label: "Volley Ball" },
  { icon: "/icons/amenties/swimming.svg", label: "Swimming Pool" },
  { icon: "/icons/amenties/bonfire.svg", label: "Bon Fire" },
];

export default function BellevueePage() {
  return (
    <main>
      {/* Hero Intro Section */}
      <HeroIntroSection
        backgroundImage="/projects/bellevuee/bellevuee.jpg"
        title="A Sustainable Farmland Community"
        subtitle="An Exquisite Life in Nature at Kanakapura"
        description={[
          "Bellevuee is a special farmland project located on 27 acres of green cover at **Kanakapura road** that aims at establishing a self-sustaining and environmentally friendly farming community. Bordered by full grown Coconut, Silver and Teak plantations, Bellevuee provides **farm plots near Kanakapura** where people can cultivate their own fruits, vegetables and timber promoting a healthier and greener way of living.",
          "We have a vision of encouraging **sustainable farming in Kanakapura** by conserving the natural resources of the land and improving the biodiversity. The **farm plot on Kanakapura road** has a well-planned design, allowing the owners to design gardens, farms, and green areas according to their tastes. Under the guidance of seasoned agronomists, Bellevuee ensures that the best farming practices are used to increase sustainable farming and the most significant yields.",
          "In addition to agriculture, Bellevuee is comfortable and convenient with over 2,000 trees and plants, walkways, picket fencing, and 24/7 security. The community also has a shared facility consisting of cottages/rooms, gardens, a car park, a dining area, and a kitchenette - ideal for a person who wishes to relax in the midst of nature.",
          "The designs of our farmhouses are resourceful, affordable, and sustainable, thus making them appealing, economical, and simple to keep. The development of infrastructure is done in a friendly manner that does not harm the environment, as people continue living in the current modern world.",
          "Bellevuee is not just a **farmland near Kanakapura** but a chance to possess some part of nature, to see how people can practice **sustainable farming in Kanakapura**, and to create a more green future with the comfort of the modern world.",
        ]}
        heroHeight="h-[400px] lg:h-[500px]"
        showTitle={true}
        highlightColor="bg-yellow-300"
      />
      {/* Swiper Section */}
      <section className="px-4 lg:px-24 py-16">
        <div className="container mx-auto">
          <SwiperWrapper images={bellevueeImages} />
        </div>
      </section>


   <section className="pt-6 md:py-16 md:pb-8 pb-8  bg-yellow-50 relative z-[10] lg:bg-transparent"	>
			  <BoxContent
				title="About Bellevuee Farmlands"
				subtitle="Discover Farmland on Kanakapura Road Designed for Sustainable Farming"
				description={[
          "Located along the popular **farmland Kanakapura Road**, Bellevuee gives you land ownership. It’s an opportunity to be part of a thoughtful community rooted in environmental care. Being a lifestyle and an investment option, your land has access to fertile soil and ample water that can be used to produce different crops.",
          "Delight Eco Farms is reputed for developing farm land communities that combine ecological sustainability with modern lifestyle comforts. All the features of the farmland including security, and maintenance depict a combination of both functionality and sustainability."
         ]}
			  />
			  </section>
			


      {/* Lifestyle + Video + Amenities */}
      <section className="bg-slate-50 py-12 md:p-20 md:py-16">
        <div className="container mx-auto">
          <header className="text-center mb-8">
            <h2 className="text-2xl font-medium mb-2">
              Bellevuee&apos;s Complete Amenities & Services
            </h2>
            <p className="mb-8 text-3xl md:text-4xl/snug text-app-green-1 header-text">
              For a lifestyle that is as comfortable, as it is serene
            </p>
          </header>

          {/* Embedded Video */}
          <div className="aspect-video mb-8">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/fq6oLKAmbBs"
              title="Exploring the Serenity of Sakleshpur: A Journey Through Our 150 Acre Coffee Farmland Estate"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Intro before amenities */}
          <div className="mb-10  mx-auto">
            <h2 className="text-3xl font-medium mb-4">
              Enhancing Comfort & Well-Being at Bellevuee
            </h2>
            <p className="text-base/7 text-gray-500">
              Bellevuee offers a thoughtfully designed range of amenities to
              enhance comfort, convenience, and enjoyment for all, including the
              elderly. Features like seating areas, scenic spots, yoga &
              meditation decks, playgrounds, fitness zones, water bodies, and
              social gathering spaces promote relaxation, recreation, and
              community interaction. These amenities create an inclusive
              environment that fosters well-being and a fulfilling lifestyle for
              all age groups.
            </p>
          </div>


					   {/* Why Choose Farm Plots Near Kanakapura? */}
          <h2 className="mb-4 text-3xl  text-center md:text-start">Why Choose Farm Plots Near Kanakapura?</h2>
          <p className="text-base/7 text-gray-600 text-center md:text-start mb-12  mx-auto">
Bellevuee has planned an excellent set of services to provide comfort, convenience and pleasure to all including the elderly. Amenities such as sitting areas, scenic views, yoga and meditation platforms, playgrounds, fitness areas, water features, and socialisation areas encourage rest, leisure, and interaction with the community. These facilities provide an all-inclusive environment that supports healthy living and a satisfying way of life to the population of all ages.
 </p>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={56}
                  height={56}
                  className="w-14 h-12 object-cover"
                />
                <p className="flex-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configuration & Pricing (below Lifestyle + Video + Amenities) */}
      <section className=" md:px-20 bg-gradient-to-b from-white to-[#F9FAFB]">      <ConfigurationAndPricing
        className="md:px-20 bg-gradient-to-b from-white to-[#F9FAFB]"
        heading={{
          eyebrow: "Configuration & Pricing",
          title: "Farm Plots on Kanakapura Road - Sizes & Pricing",
          subtitle: "Bellevuee plots: configurations, ROI and connectivity",
        }}
        sections={[
          {
            title: "Farm Plots on Kanakapura Road - Sizes & Pricing",
            content: [
              "Whether you want a small retreat or a big plantation, plots can be provided in different sizes. Water supply, access road, and plantation support at each farm plot are ready such that one can commence cultivating at the farm plot or construct a farm stay immediately. Pricing is transparent, ensuring your investment is secure and future-proof.",
              "The buyers have options on a flexible plot layout which allows them to create their own unique space where they can do farming, leisure or weekend getaway. As the demand for farmland in Kanakapura increases, Bellevuee is a good place to appreciate in value. All plots are registered and legal clear which provides peace of mind as well as long term returns.",
            ],
          },
          {
            eyebrow: "Investment Growth",
            title: "Farmland in Kanakapura Road - An Investment That Appreciates",
            content: [
              "Demand for farm plots near Kanakapura has also been on a steady increase with more urban families seeking green areas and healthier living. Unlike conventional real estate, farmland offers dual benefits, such as appreciation of land value and returns from plantation yield.",
              "In the area of Kanakapura, the farm land also opens up the opportunities in the eco-tourism. You may build weekend accommodations or homestays that will appeal to the traveller who wants to experience a rural setting.",
              <>
                <p className="font-medium">The following is an example of ROI potential:</p>
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <div className="mx-auto w-full max-w-[560px]">
                    <ROIComparisonTableBellevuee />
                  </div>
                  <div className="relative w-full overflow-hidden rounded-xl ring-1 ring-gray-200 bg-white">
                    <div className="mx-auto w-full max-w-[760px] p-3 md:p-4">
                      <Image
                        src="/projects/Bellevuee-roi-conparision.png"
                        alt="Bellevuee ROI comparison graph"
                        width={1600}
                        height={900}
                        className="w-full h-auto object-contain"
                        priority={false}
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-gray-700">
                  This renders farmland a valuable, appreciating asset with some personal use.
                </p>
              </>,
            ],
          },
          {
            eyebrow: "Connectivity & Nearby Attractions",
            title: "Farmland Near Kanakapura - Location Advantages",
            content: [
              "Kanakapara road provides good connectivity to Bengaluru and still has green cover. The location of Bellevuee guarantees that you are near enough to drive on weekends but not too near the city.",
              <>
                <p className="font-medium">Nearby attractions include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><b>Chunchi Falls</b> - A spectacular water fall worth a day trip.</li>
                  <li><b>Kabbaladurga Hills</b> - A popular hiking destination with wide scenic views.</li>
                  <li><b>Ranganathittu Bird Sanctuary</b> - It is famous because of migrant birds and natural wetlands.</li>
                  <li><b>Expansive coffee and spice plantations</b> - Highlight the agricultural wealth of the area.</li>
                </ul>
              </>,
              "The combination of affordability and natural beauty features makes Bellevuee one of the most promising choices for people who pursue farm plots near Kanakapura Road.",
            ],
          },
        ]}
      />
      </section>


      {/* Master Plan */}
      <section className="section-padding">
        <div className="new-container mx-auto flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 w-full">
            <Image
              src="/projects/bellevuee/master-plan.jpg"
              alt="Bellevuee Master Plan"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex-1 lg:mt-20">
            <h2 className="text-3xl mb-4 header-text">
              Explore Bellevuee&apos;s Master Plan & Community Layout
            </h2>
            <p className="text-base/7 text-gray-500 mb-4">
              Here&apos;s what you&apos;ll be walking into
            </p>
            <a
              href="/pdfs/bellevuee-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Bellevuee project brochure PDF"
              className="bg-app-green-1 text-white px-4 py-2 text-sm rounded hover:bg-app-green-2 transition-colors inline-flex items-center justify-center"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ProjectContact />

      {/* bellevuee FAQ */}
      <FaqSection
        title="FAQs About Farm Plots in Kanakapura"
        items={bellevueeFaq}
        columns={2}
        icon="plus"
        className="bg-gray-50"
      />
    </main>
  );
}

function ROIComparisonTableBellevuee() {
  const rows = [
    {
      key: "traditional",
      type: "Traditional Real Estate",
      roi: "5–7%",
      lifestyle: "Limited",
      growth: "Moderate",
      color: "bg-blue-50 ring-blue-200",
    },
    {
      key: "farmland",
      type: "Farmland near Kanakapura",
      roi: "12–15%",
      lifestyle: "High (farm produce + retreats)",
      growth: "Strong",
      color: "bg-green-50 ring-green-200",
    },
  ];

  return (
    <div className="rounded-xl ring-1 ring-gray-200 overflow-hidden shadow-sm bg-white">
      {/* Desktop/Table layout */}
      <div className="hidden md:grid grid-cols-4 text-sm font-semibold bg-gray-50">
        <div className="p-3 border-b border-gray-200">Investment Type</div>
        <div className="p-3 border-b border-gray-200 text-center">Annual ROI (%)</div>
        <div className="p-3 border-b border-gray-200 text-center">Lifestyle Benefits</div>
        <div className="p-3 border-b border-gray-200 text-center">Long-Term Growth</div>
      </div>
      <div className="hidden md:block">
        {rows.map((r) => (
          <div
            key={r.key}
            className={`w-full grid grid-cols-4 items-center text-sm transition-colors duration-200 hover:${r.color} bg-white`}
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
                {r.lifestyle}
              </span>
            </div>
            <div className="p-3 border-b border-gray-100 text-center">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700">
                {r.growth}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/card layout */}
      <div className="md:hidden divide-y divide-gray-100">
        {rows.map((r) => (
          <div key={r.key} className="p-3">
            <div className="font-semibold mb-2">{r.type}</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-500">Annual ROI (%)</div>
              <div>
                <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-gray-900 text-white text-xs">
                  {r.roi}
                </span>
              </div>
              <div className="text-gray-500">Lifestyle Benefits</div>
              <div>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700">
                  {r.lifestyle}
                </span>
              </div>
              <div className="text-gray-500">Long-Term Growth</div>
              <div>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700">
                  {r.growth}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between p-3 text-xs text-gray-500 bg-gray-50">
        <span>Hover (desktop) to highlight. Figures indicative.</span>
        <span className="inline-flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-app-green-1" /> Better lifestyle & growth
        </span>
      </div>
    </div>
  );
}
