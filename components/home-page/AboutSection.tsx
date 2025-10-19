
"use client";


import Link from "next/link";
import { motion } from "framer-motion";
const AboutSection = () => {
  return (
    <section className="p-1 md:p-4 py-5 lg:py-10 bg-green-50 relative">
      <motion.div className="container mx-auto"
         initial={{ opacity: 0, y: 80 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.4,delay:0.2 }}
       viewport={{once:true}}>
        <div className="lg:flex lg:flex-row lg:gap-10">

          {/* Left Content */}
          <div className="flex flex-col justify-center" >
            {/* Small heading */}
            <h2 className="mb-2 text-2xl md:text-center pt-6"
            >
              The Essence of Us
            </h2>

            {/* Main heading for SEO */}
            <h2 className="text-4xl text-app-green-1 mb-4 header-text md:text-center"   >
              Our Commitment to Sustainable Living
            </h2>

            {/* Paragraph text */}
            <p className="text-base/7 text-gray-500 md:text-center"          >
              As one of the leading developers in Bangalore, DELIGHT GROUP have
              over a decade of expertise in the Real Estate Industry, having
              successfully completed numerous RERA-approved plotted developments.
              Recently, we have ventured into the rapidly growing sector of
              large-scale farmland development with Delight Eco Farms Pvt Ltd,
              seizing the opportunity to capitalize on shifting market trends and
              increasing demand for sustainable and profitable farm land
              investments. Our expansion into this dynamic market not only broadens
              our portfolio but also allows us to offer our clients a diverse range
              of lucrative opportunities that go beyond traditional residential and
              commercial properties.
            </p>

            {/* Button CTA */}
            <div className="md:mx-auto"
            >
              <Link href="/about" aria-label="Learn more about Delight Eco Farms and our sustainable farming initiatives">
                <button className="cursor-pointer bg-app-green-1 text-white py-2 px-4 rounded-lg text-lg mb-4 mt-6">
                  Know More
                </button>
              </Link>
            </div>
          </div>



        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;