import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Farmland Projects | Managed Plots Near Bangalore - Delight",
  description:
    "Premium farmland projects near Bangalore: Ayana, Bellevuee, Whistling Woods, Rhythm of Soul, Canvas, and Arinaa Country Farms. Managed farmlands with sustainable organic plantations.",
  alternates: {
    canonical: "https://www.delightecofarms.com/farmlands",
  },
  openGraph: {
    title: "Farmland Projects | Managed Plots Near Bangalore - Delight",
    description:
      "Premium farmland projects near Bangalore: Ayana, Bellevuee, Whistling Woods, Rhythm of Soul, Canvas, and Arinaa Country Farms. Managed farmlands with sustainable organic plantations.",
    url: "https://www.delightecofarms.com/farmlands",
    images: ["/projects/ayana.jpg"],
  },
};

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
    description:
      "Premium farmland project surrounded by lush greenery in Sakleshpur.",
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
    <>
      {/* Header Section */}
      <section
        className="relative projects-header bg-cover bg-center"
        aria-labelledby="projects-heading"
      >
        <div className="text-white text-center px-5 h-[500px] lg:h-[400px] flex flex-col justify-center items-center">
          <h1
            id="projects-heading"
            className="text-4xl z-12 lg:text-5xl lg:mx-auto header-text lg:mt-20"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <span className="block mb-2 lg:mt-2">Explore our</span>
            Farmland Projects
          </h1>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-black/10 z-10"></div>

      </section>

      <section className="py-8 pb-0 md:py-16 md:pb-6 bg-gray-50">
        <div className="new-container mx-auto text-center">
          <h2
            className="text-3xl  lg:text-4xl font-medium text-app-green-1 mb-4"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Featured Managed Farmland Projects
          </h2>
          <p
            className="text-lg lg:text-xl text-gray-600"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
Discover our signature communities spread across Karnataka.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="md:p-4 py-12 md:mt-10 mb-16 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 30}
                itemScope
                itemType="https://schema.org/Place"
              >
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    itemProp="image"
                  />
                </div>
                <div className="p-5 flex flex-col items-start justify-start flex-grow">
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
                    className="flex item-start  border border-app-green-1/20 justify-start bg-amber-50 text-gray-800 px-6 py-2 rounded-lg font-medium hover:bg-amber-100 transition-colors duration-200 mt-auto"
                    itemProp="url"
                  >
                    View Project
                  </Link>
                </div>
              </article>
            ))}

            {/* Static Vanam Project */}
            <article
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative">
                <Image
                  src="/projects/vanam.jpg"
                  alt="Vanam farmland project"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow items-start justify-start">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Vanam
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Farmland project
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Experience the beauty of nature with our Vanam farmland project.
                </p>
                {/* <Link
                  href="/vanam"
                  className="inline-block bg-amber-50 border border-app-green-1/20  text-gray-800 px-6 py-2 rounded-lg font-medium hover:bg-amber-100 transition-colors duration-200 mt-auto"
                >
                  View Project
                </Link> */}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data for SEO */}
      <Script id="projects-structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: projects.map((project, i) => ({
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
    </>
  );
}
