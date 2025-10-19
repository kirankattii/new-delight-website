

"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

interface Project {
  name: string;
  slug: string;
  location: string;
  description: string;
  image: string;
  alt: string;
}

const projects: Project[] = [
  {
    name: "Ayana",
    slug: "ayana",
    location: "Irakaravalli, Sakleshpur, Karnataka",
    description: "Premium farmland project surrounded by lush greenery in Sakleshpur.",
    image: "/projects/ayana.jpg",
    alt: "Ayana - Farmland project in Irakaravalli, Sakleshpur, Karnataka",
  },
  {
    name: "Canvas",
    slug: "canvas",
    location: "Kallur, Lepakshi",
    description: "Exclusive farmland project at Lepakshi, ideal for serene getaways.",
    image: "/projects/canvas.jpg",
    alt: "Canvas - Farm plots project in Kallur, Lepakshi",
  },
  {
    name: "Whistling Woods",
    slug: "whistling-woods",
    location: "Balupet, Sakleshpur, Karnataka",
    description: "Coffee, cardamom & pepper in a misty hillside estate.",
    image: "/projects/whistling-woods.jpg",
    alt: "Whistling Woods - Coffee and pepper plantation estate in Balupet, Sakleshpur",
  },
  {
    name: "Rhythm of Soul",
    slug: "rhythm-of-soul",
    location: "Hirivate, Sakleshpur, Karnataka",
    description: "Resort-style managed farmland amidst coffee & pepper plantations.",
    image: "/projects/rhythm.jpg",
    alt: "Rhythm of Soul - Resort-style managed farmland in Hirivate, Sakleshpur",
  },
  {
    name: "Bellevuee",
    slug: "bellevuee",
    location: "Keralalusandra Village, Kanakapura, Karnataka",
    description: "Coconut, silver oak and teak with landscaped lawns.",
    image: "/projects/bellevuee.jpg",
    alt: "Bellevuee - Farmland with teak, coconut and landscaped lawns in Kanakapura",
  },
  {
    name: "Arinaa Country Farms",
    slug: "arinaa-country-farms",
    location: "Seegekote, Kanakapura, Karnataka",
    description: "Farmland project with scenic beauty, ideal for a sustainable lifestyle.",
    image: "/projects/arinaa.jpg",
    alt: "Arinaa Country Farms - Farmland project in Seegekote, Kanakapura",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-14 " aria-labelledby="projects-heading">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <header className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
          <h2 id="projects-heading" className="text-2xl font-medium">
            Our Projects
          </h2>
          <h2 className="mb-4 text-3xl md:text-4xl/snug text-center text-app-green-1 header-text">
            Elevating Living, Enriching Lives
          </h2>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 70}
              itemScope
              itemType="https://schema.org/Place"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover"
                  priority={index < 3}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  itemProp="image"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2" itemProp="name">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2" itemProp="address">
                  {project.location}
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed" itemProp="description">
                  {project.description}
                </p>
                <Link
                  href={`/farmlands/${project.slug}.html`}
                  className="inline-block bg-app-green-1 items-center text-white px-6 py-2 rounded-lg font-medium hover:bg-app-green-2 transition-colors duration-200 mt-auto w-fit"
                  itemProp="url"
                >
                  View Project
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* JSON-LD Structured Data for SEO */}
      <Script id="projects-structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": projects.map((project, i) => ({
            "@type": "Place",
            position: i + 1,
            name: project.name,
            address: project.location,
            url: `/farmlands/${project.slug}.html`,
            image: project.image,
            description: project.description,
          })),
        })}
      </Script>
    </section>
  );
}