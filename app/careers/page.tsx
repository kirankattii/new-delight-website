"use client";

import CareersModal from "@/components/CareersModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const jobs = [
  {
    "title": "Digital Marketing Manager",
    "description": "Manage online campaigns, SEO, social media, and ads to drive leads and brand growth. Minimum 2 years of experience required.",
    "location": "Bengaluru, Karnataka",
    "positionKey": "marketing-manager"
  },
  {
    "title": "Telecaller",
    "description": "Make outbound calls, handle queries, and generate leads. 6 months BPO/call center experience required. Minimum 6 month experience required.",
    "location": "Bengaluru, Karnataka",
    "positionKey": "tele-caller"
  },
  {
    "title": "Sales Executive",
    "description": "Handle site visits, client meetings, and close real estate sales. Prior real estate experience needed. Minimum 6 month experience required.",
    "location": "Bengaluru, Karnataka",
    "positionKey": "sales-executive"
  },
  {
    "title": "Video Editor",
    "description": "Edit and create engaging videos using tools like Premiere Pro or After Effects. Minimum 6 month experience required.",
    "location": "Bengaluru, Karnataka",
    "positionKey": "video-editor"
  },
  {
    "title": "Sales Manager",
    "description": "Minimum 2+ years in sales with real estate experience; handle site visits, client meetings & close deals.",
    "location": "Bengaluru, Karnataka",
    "positionKey": "sales-manager"
  }
]

const headerData = {
  title: "See our current job openings",
  description:
    "Don't find what you're looking for? Drop us an email anyway on",
  email: "info@delightecofarms.com",
};


export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const handleApply = (jobKey: string) => {
    setSelectedJob(jobKey);
    setIsModalOpen(true);
  };
  return (
    <>
      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url('/careers-img.jpg')" }}
        className="bg-cover bg-center"
      >
        <div className="text-white px-5 h-[550px] lg:h-[400px] pt-30  md:pt-0 flex flex-col justify-center lg:items-center">
          <h1 className="text-4xl lg:text-center lg:text-5xl lg:mx-auto header-text mb-2">
            Build Your Future While Shaping <br /> Dreams with Us
          </h1>
          <p className="text-xl lg:text-center">
            At Delight Eco Farms, we innovate and nurture talent to create a sustainable future. <br />
            Join us and be part of the change!
          </p>
        </div>
      </section>

      {/* Why Work with Us Section */}
      <section className="section-padding py-20">
        <div className="new-container mx-auto my-5">
          <div className="text-center">
            <h2
              className="text-app-green-1 text-4xl font-medium mb-10"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Why Work with Us?
            </h2>
          </div>

          {/* First Row */}
          <div
            className="grid grid-col-1 md:grid-cols-3 mb-10 gap-10"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-offset="80"
          >
            <div className="text-center">
              <div>
                <Image
                  src="/icons/Iterate-everything.svg"
                  alt="Meaningful work impact illustration"
                  width={96}
                  height={96}
                  className="w-24 mx-auto mb-4"
                />
              </div>
              <h3 className="text-base font-semibold mb-2">
                Meaningful Work for a Lasting Impact
              </h3>
              <p className="text-sm text-gray-600">
                Join a company that believes farming and leisure should coexist in harmony with nature. We prioritize
                sustainability and innovative farmland solutions to promote high-end living.
              </p>
            </div>

            <div className="text-center">
              <div>
                <Image
                  src="/icons/be-humble.svg"
                  alt="Learning and growth illustration"
                  width={96}
                  height={96}
                  className="w-24 mx-auto mb-4"
                />
              </div>
              <h3 className="text-base font-semibold mb-2">
                Grow Through Learning
              </h3>
              <p className="text-sm text-gray-600">
                Expose yourself to practical learning and stay ahead with insights into cutting-edge innovations, effective
                land management practices, and sustainable development trends.
              </p>
            </div>

            <div className="text-center">
              <div>
                <Image
                  src="/icons/be-the-change.svg"
                  alt="Team growth inspiration illustration"
                  width={96}
                  height={96}
                  className="w-24 mx-auto mb-4"
                />
              </div>
              <h3 className="text-base font-semibold mb-2">
                A Team that Inspires Growth
              </h3>
              <p className="text-sm text-gray-600">
                Work alongside industry leaders and driven professionals who share a passion for agriculture and innovation.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div
            className="grid md:grid-cols-2 gap-10 md:max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="text-center">
              <div>
                <Image
                  src="/icons/cultivate-inclusion.svg"
                  alt="Career growth illustration"
                  width={96}
                  height={96}
                  className="w-24 mx-auto mb-4"
                />
              </div>
              <h3 className="text-base font-semibold mb-2">Career Growth</h3>
              <p className="text-sm text-gray-600">
                We always have a clear focus on skill development and leadership just to ensure you grow along with us.
              </p>
            </div>

            <div className="text-center">
              <div>
                <Image
                  src="/icons/customer-success.svg"
                  alt="Sustainability commitment illustration"
                  width={96}
                  height={96}
                  className="w-24 mx-auto mb-4"
                />
              </div>
              <h3 className="text-base font-semibold mb-2">
                Commitment to Sustainability
              </h3>
              <p className="text-sm text-gray-600">
                Join an organization committed to environmental stewardship and fostering community well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
      <div className="new-container mx-auto pb-10">

      <div className="text-center mb-10">
      {/* SEO friendly heading */}
      <h2
        className="header-text-2 text-app-green-1 mb-4 text-3xl"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {headerData.title}
      </h2>

      <p
        className="text-base text-gray-600"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        {headerData.description}{" "}
        <Link
          href={`mailto:${headerData.email}`}
          className="font-medium text-cyan-700"
          aria-label={`Send email to ${headerData.email}`}
        >
          {headerData.email}
        </Link>
      </p>
    </div>
        
        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <article
              key={job.positionKey}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{job.description}</p>
              <p className="text-gray-600 text-sm mb-4">{job.location}</p>
              <button
                onClick={() => handleApply(job.positionKey)}
                className="bg-app-green-1 text-white px-4 py-1.5 text-sm rounded-full hover:bg-app-green-2 transition-colors apply-btn"
                data-position={job.positionKey}
              >
                Apply Now
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <CareersModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedJob={selectedJob}
      />
    </section>
 

    </>
  );
}
