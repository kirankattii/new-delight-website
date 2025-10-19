// app/arinaa/page.tsx
import Image from "next/image";
import SwiperWrapper from "@/components/SwiperWrapper";
import HeroIntroSection from "@/components/project-page/HeroIntroSection";
import { Metadata } from "next";
import ProjectContact from "@/components/project-page/ProjectContact";
import ConfigurationAndPricing from "@/components/project-page/ConfigurationAndPricing";
import FaqSection from "@/components/FaqSection";
import { arinaaCounterFarmFaq } from "@/lib/constants";
import BoxContent from "@/components/BoxContent";

// ✅ SEO metadata (Next.js 15 best practice)
export const metadata: Metadata = {
  title: "Arinaa Country Farms | Farmland - Delight Eco Farms",
  description:
    "Arinaa Country Farms managed farmland in Kanakapura, Karnataka. Features custom-built farm houses and sustainable agriculture. Buy farm plots near Kanakapura today.",
  alternates: {
    canonical:
      "https://www.delightecofarms.com/projects/arinaa-country-farms",
  },
  openGraph: {
    title: "Arinaa Country Farms | Farmland - Delight Eco Farms",
    description:
      "Arinaa Country Farms managed farmland in Kanakapura, Karnataka. Features custom-built farm houses and sustainable agriculture. Buy farm plots near Kanakapura today.",
    url: "https://www.delightecofarms.com/projects/arinaa-country-farms",
    images: ["/projects/arinaa/arinaa1.jpg"],
  },
};

// ✅ Farm images
const arinaaImages = [
  "/projects/arinaa/arinaa1.jpg",
  "/projects/arinaa/arinaa2.jpg",
  "/projects/arinaa/arinaa3.jpg",
  "/projects/arinaa/arinaa4.jpg",
  "/projects/arinaa/arinaa5.jpg",
  "/projects/arinaa/arinaa6.jpg",
];

export default function ArinaaPage() {
  return (
    <main>
      <HeroIntroSection
        backgroundImage="/projects/arinaa/arinaa.jpg"
        title="Own A Managed Farm Land"
        subtitle="An Exquisite Life In Nature At Kanakapura"
        description={[
          "Welcome to Arinaa Country Farms! Our farmland and farmhouses are of the highest quality providing the best blend of nature and modernity. ",
          "Have you always been dreaming of having a **farmhouse in Kanakapura** or along the beautiful **Kanakapura Road**, then our team is going to make this dream come true.",
          "Our experience in eco-friendly building over the years means that we are experts in building dream farm houses, but each building is designed to fit your needs in life. It could be developing fertile farmland or building a personal farmhouse getaway, we make sure it is exactly what you want.",
          "We are not just selling land at Arinaa Country Farms, we are building communities where you relax, grow and flourish in harmony with nature.",
        ]}
        showTitle={false}
      />

      {/* Swiper Section */}
      <section className="px-4 lg:px-24 py-16">
        <div className="container mx-auto">
          <SwiperWrapper images={arinaaImages} />
        </div>
      </section>

      <section className="pt-6 md:py-16 md:pb-8 pb-8  bg-yellow-50 relative z-[10] lg:bg-transparent">
        <BoxContent
          title="About Arinaa Country Farms"
          subtitle="Farmland in Kanakapura Where You Can Build Your Farmhouse"
          description={[
            "Arinaa Country Farms is more than farmland. It’s a sanctuary tucked into the lush expanse of Kanakapura road, where the Western Ghats begin to show their charm. Every plot here has been designed to give you the freedom to create the farmhouse in Kanakapura that matches your lifestyle.",
            "Under our professional management and sustainable practices, the land is taken care of throughout the year, even when you are out.",
            "The concept is straightforward: own a farmland, but don’t worry about maintenance and upkeep every day, and have all the advantages of country living right in the vicinity of Bengaluru, an easy-to-reach place.",
          ]}
        />
      </section>

      {/* Lifestyle Section with Video + Steps + Amenities */}
      <section className="bg-slate-50 py-12 md:p-20 md:py-16">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-2xl font-medium mb-2">
            Arinaa Country Farms&apos; Complete Features & Services
          </h2>
          <p className="mb-8 text-4xl/snug text-app-green-1 header-text">
            For a lifestyle that is as comfortable, as it is serene
          </p>
        </div>

        {/* Embedded Video */}
        <div className="container mx-auto ">
          <div className="aspect-video mb-8">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/6ljViCqwlHQ"
              title="Exploring the Serenity of Sakleshpur: A Journey Through Our 150 Acre Coffee Farmland Estate"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Why Choose Farm Plots in Ballupet? */}
          <h2 className="mb-4 text-3xl  text-center md:text-start">
            Why Choose Farmland on Kanakapura Road?
          </h2>
          <p className="text-base/7 text-gray-600 text-center md:text-start mb-12  mx-auto">
            Get the best mix of nature, adventure and relaxation with our
            carefully planned farmland. This project is ideal for those who are
            family oriented, hobby farmers, and those who enjoy nature and have
            a unique lifestyle with greenery. These are some of our project
            highlights.
          </p>

          {/* Steps Section */}
          <h2 className="text-center text-3xl mb-2 header-text">
            How Arinaa Country Farms Works for You?
          </h2>
          <p className="mb-8 text-center text-4xl/snug text-app-green-1 header-text">
            Owning a Farm Land
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:px-4 mb-12">
            {steps.map(({ title, desc }, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay={100 * (i + 1)}
              >
                <h4 className="text-xl  mb-3">{title}</h4>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          {/* Amenities */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
            {amenities.map(({ src, alt, label }) => (
              <div key={label} className="flex gap-4 items-center">
                <Image
                  src={src}
                  alt={alt}
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <span className="flex-1 line-clamp-2">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

			<section className="md:px-20 bg-gradient-to-b from-white to-[#F9FAFB]"	>
        {/* Configuration & Pricing - Arinaa */}
        <ConfigurationAndPricing
          heading={{
            eyebrow: "Configuration & Pricing",
            title: "Farmland on Kanakapura Road",
            subtitle: "Sized for weekend retreats or full-scale farmhouses",
          }}
          sections={[
            {
              eyebrow: "Lifestyle",
              title: "Why Build a Farmhouse on Farmland in Kanakapura?",
              content: [
                "Imagine waking up to the sounds of birdsong instead of alarms, surrounded by trees instead of concrete. That’s the everyday reality at Arinaa Country Farms. A farmhouse here will afford you more than a home; it will provide you with a retreat.",
                <>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <b>Weekend escape</b>: It is just a short ride from the
                      city, and it is the best place to relax after a hectic
                      week.
                    </li>
                    <li>
                      <b>Closer to nature</b>: Farmhouses here are enclosed with
                      green plants that make a healthier environment for you and
                      your family.
                    </li>
                    <li>
                      <b>Wellness living</b>: It is a lifestyle change with
                      clear skies, fresh air, and the opportunity to do your
                      yoga, garden, or even grow your own food.
                    </li>
                  </ul>
                </>,
                "The possession of a farmhouse in Kanakapura road is not merely property. It is all about regaining a slower and more purposeful way of living.",
              ],
            },
            {
              eyebrow: "Configuration & Pricing",
              title:
                "Farmland with Farmhouse Potential on Kanakapura Road - Sizes & Pricing",
              content: [
                "Arinaa Country Farms offers farmlands in different sizes and prices depending on the needs. You may wish a small piece of land to build a little weekend stay, or you may wish a large piece of land to transform it into a full-scale farmhouse, we have one that will fit you.",
                "The plots are planned with appropriate access, irrigation and support of the plantations. Pricing model is also transparent, meaning what you pay correctly reflects what you get with no hidden cost. The idea is to make farmland ownership simple, secure, and value-driven.",
              ],
            },
            {
              eyebrow: "Investment Growth",
              title: "Land That Grows in Value on Kanakapura Road",
              content: [
                "It has never been better to invest in farmlands around Bengaluru. Kanakapura Road has emerged as a rapidly developing hub, combining natural beauty with excellent connectivity. The reason why the investment will be worth it is as follows:",
                <>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Rising demand for managed farmland close to Bengaluru.
                    </li>
                    <li>
                      Strong appreciation along Kanakapura road, now a
                      high-growth zone.
                    </li>
                    <li>
                      Opportunities to create weekend retreats, eco-tourism
                      ventures, or farm stays.
                    </li>
                    <li>
                      Long-term security of land ownership compared to other
                      volatile asset classes.
                    </li>
                  </ul>
                </>,
                <div key="roi-table" className="mt-4">
                  <div className="relative w-full overflow-hidden rounded-xl ring-1 ring-gray-200 bg-white">
                    <div className="w-full overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                            >
                              Investment Type
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                            >
                              5-Year ROI Growth (Approx.)
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                            >
                              Lifestyle Benefits
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-4 font-medium text-gray-900">
                              Managed Farmland - Arinaa (Kanakapura)
                            </td>
                            <td className="px-4 py-4 text-gray-700">
                              12-15% per year
                            </td>
                            <td className="px-4 py-4 text-gray-700">
                              Personal retreat + Eco-tourism potential
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-4 font-medium text-gray-900">
                              Traditional Real Estate (Bangalore City)
                            </td>
                            <td className="px-4 py-4 text-gray-700">
                              7-9% per year
                            </td>
                            <td className="px-4 py-4 text-gray-700">
                              Purely financial returns
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-4 font-medium text-gray-900">
                              Fixed Deposits/Other Assets
                            </td>
                            <td className="px-4 py-4 text-gray-700">
                              5-6% per year
                            </td>
                            <td className="px-4 py-4 text-gray-700">
                              No lifestyle value
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>,
              ],
            },
            {
              tone: "accent",
              title:
                "Arinaa stands out because your land doesn’t just grow in value; it also offers personal joy, wellness, and a legacy for your family.",
              content: [""],
            },
            {
              eyebrow: "Connectivity & Nearby Attractions",
              title: "Farmland Near Kanakapura - Location Advantages",
              content: [
                "Kanakapura road strikes the right balance between connectivity and tranquillity. Close enough to Bengaluru for weekend visits, yet far enough to escape city chaos.",
                <>
                  <p className="font-medium">Nearby attractions include:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <b>Mekedatu and Sangama</b> - Scenic riverside spots
                      perfect for family outings.
                    </li>
                    <li>
                      <b>Bilikal Rangaswamy Betta</b> - A trekking point where
                      the view is panoramic.
                    </li>
                    <li>
                      <b>Chunchi Falls</b> - A refreshing getaway in nature.
                    </li>
                    <li>
                      <b>Plantations</b> - Coffee and spice plantations flourish
                      and contribute to the beauty of the region.
                    </li>
                  </ul>
                </>,
                "This combination of accessibility and natural beauty endears a farmhouse in Kanakapura road as one of the most desirable investments in the Bengaluru area.",
              ],
            },
          ]}
        />
      </section>

      {/* Contact Section */}
      <ProjectContact />

      {/* arinaa FAQ */}
      <FaqSection
        title="FAQs About Farmhouses in Kanakapura"
        items={arinaaCounterFarmFaq}
        columns={2}
        icon="plus"
        className="bg-gray-50"
      />
    </main>
  );
}

// ✅ Steps data
const steps = [
  {
    title: "Step 1 - Choose Your Land",
    desc: "Select a scenic and spacious piece of land to build your dream farmhouse with ample outdoor space.",
  },
  {
    title: "Step 2 - Build Your Dream Farmhouse",
    desc: "Design and construct your ideal home surrounded by natural beauty in a serene setting.",
  },
  {
    title: "Step 3 - We Manage It For You",
    desc: "We take care of upkeep, security, and management, giving you peace of mind even when away.",
  },
];

// ✅ Amenities data
const amenities = [
  {
    src: "/icons/amenties/Adventure-Sport.png",
    alt: "Adventure Sports",
    label: "Adventure Sports",
  },
  {
    src: "/icons/amenties/Camping.png",
    alt: "Camping",
    label: "Camping",
  },
  {
    src: "/icons/amenties/Farm-Animals.png",
    alt: "Farm Animals",
    label: "Farm Animals",
  },
  {
    src: "/icons/amenties/Farm-House-Stay-2.png",
    alt: "Farm House Stay",
    label: "Farm House Stay",
  },
];
