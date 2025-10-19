

"use client";

import Image from "next/image";

interface WhyInvestItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  alt: string;
  aos: string;
}

const whyInvestData: WhyInvestItem[] = [
  {
    id: 1,
    title: "Proven Expertise",
    description:
      "Our seasoned team excels in real estate, backed by years of successful market navigation, offering expert insights and delivering optimal results.",
    icon: "/icons/proven-expertise.svg",
    alt: "Proven Expertise Icon",
    aos: "zoom-in",
  },
  {
    id: 2,
    title: "Customized Solutions",
    description:
      "We take pride in crafting personalized strategies that align with your unique goals, ensuring a seamless real estate experience.",
    icon: "/icons/customized-solutions.svg",
    alt: "Customized Solutions Icon",
    aos: "zoom-in-up",
  },
  {
    id: 3,
    title: "Transparent Partnerships",
    description:
      "Transparency is the cornerstone of our client relationships. We prioritize clear communication and uphold ethical practices, fostering trust and reliability throughout.",
    icon: "/icons/transparent-partnerships.svg",
    alt: "Transparent Partnerships Icon",
    aos: "zoom-in-down",
  },
];

export default function WhyInvestSection() {
  return (
    <section
      id="why-invest-section"
      className="py-2 md:p-4 bg-gray-50"
      aria-labelledby="why-invest-heading"
    >
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2
          id="why-invest-heading"
          className="text-center text-3xl md:text-4xl/snug text-app-green-1 my-6 md:my-12 header-text"
        >
          What Makes Delight Projects a Smart Investment Choice?
        </h2>

        {/* Why Invest Grid */}
        <div className="lg:grid lg:grid-cols-3">
          {whyInvestData.map((item) => (
            <article
              key={item.id}
              className="p-4 mb-4 text-center"
              data-aos={item.aos}
            >
              <Image
                src={item.icon}
                alt={item.alt}
                width={80}
                height={80}
                className="w-20 mb-4 mx-auto"
              />
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-sm/7 text-gray-500">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
