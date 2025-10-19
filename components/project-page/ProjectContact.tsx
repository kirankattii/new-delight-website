import Image from 'next/image'
import React from 'react'

const ProjectContact = () => {
  return (
    <section className="section-padding lg:py-10 bg-slate-100">
    <div className="new-container mx-auto flex flex-col lg:flex-row gap-10">
      <div
        className="flex-1 pt-10"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 className="text-4xl text-app-green-1 mb-4 header-text">
          How can we help you?
        </h2>
        <p className="text-xl font-semibold mb-6">
          We&apos;re here to help and answer any questions you might have.
          <br />
          We look forward to hearing from you!
        </p>
        <a
          href="/contact"
          className="bg-app-green-1 text-white py-2 px-6 rounded-lg text-lg hover:bg-app-green-2 transition-colors"
        >
          Contact Us
        </a>
      </div>
      <div className="lg:w-1/3">
        <Image
          src="/icons/introduction.svg"
          alt="Contact Information"
          width={400}
          height={400}
          className="w-full"
        />
      </div>
    </div>
  </section>
  )
}

export default ProjectContact