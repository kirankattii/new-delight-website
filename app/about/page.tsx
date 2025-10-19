"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
};

const zoomUp = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
    },
};




export default function AboutSections() {
    return (
        <>
            {/* banner section */}
            <section
                className="bg-cover bg-center relative z-[5]"
                style={{ backgroundImage: "url('/about-bg.jpg')" }}
            >
                <div className="text-white text-center px-5 h-[500px] lg:h-[400px] flex flex-col justify-center items-center">
                    <h1
                        className="text-4xl z-12 lg:text-5xl mt-6 md:mt-0 lg:mx-auto header-text"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Your Journey to <br />
                        Eco-Friendly Living Begins Here
                    </h1>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/5 to-black/10 z-10"></div>

                </div>
            </section>

            {/* Our Story */}
            <section className="p-1 md:p-4 py-12 md:-mt-20 bg-yellow-50 lg:bg-transparent relative z-10">
                <div className="container mx-auto text-center">
                    <motion.div
                        className="lg:max-w-5xl lg:mx-auto lg:bg-yellow-50 bg-transparent lg:p-8 lg:rounded-lg lg:shadow"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        variants={fadeUp}
                    >
                        <h2 className="mb-4 text-2xl ">Our Story</h2>
                        <h2 className="text-3xl mb-4 header-text">
                            Growing Together with Nature &amp; Community
                        </h2>
                        <p className="text-base/7 text-gray-500 text-start">
                            As one of the leading developers in Bangalore, DELIGHT ECO FARMS
                            PVT. LTD. boasts over a decade of expertise in the real estate
                            industry, having successfully completed numerous RERA-approved
                            plotted developments. Recently, we have ventured into the rapidly
                            growing sector of large-scale farmland development, seizing the
                            opportunity to capitalize on shifting market trends and increasing
                            demand for sustainable and profitable land investments. Our
                            expansion into this dynamic market not only broadens our portfolio
                            but also allows us to offer our clients a diverse range of
                            lucrative opportunities that go beyond traditional residential and
                            commercial properties.
                        </p>
                        <p className="text-base/7 text-gray-500 pt-3.5 text-start">
                            We recognize that purchasing a home or investing in land is often
                            the most significant financial commitment of a lifetime. We deeply
                            value the emotions and aspirations tied to this momentous decision
                            and are dedicated to ensuring that we deliver nothing short of the
                            best in the real estate industry to fulfil your expectations - our
                            results speak for themselves.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="section-padding mb-8">
                <div className="new-container mx-auto">
                    <div className="text-center lg:flex lg:gap-10">
                        <motion.div
                            className="mb-8"
                        >
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                variants={zoomUp}
                            >
                                <Image
                                    src="/our-mission.svg"
                                    alt="Our Mission"
                                    width={160}
                                    height={160}
                                    className="w-32 h-32 lg:w-40 lg:h-40 inline-block"
                                />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="flex-1 lg:text-left"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            variants={fadeUp}
                        >
                            <h2 className="text-3xl mb-4 header-text">Our Mission</h2>
                            <p className="text-base/7 text-gray-500">
                                Our vision is to serve as a guiding light in the world of real
                                estate development, inspiring excellence at every turn. We
                                envision a future where each home we create stands as a
                                masterpiece of timeless craftsmanship, cutting-edge design, and
                                sustainable living. With a commitment to shaping not just living
                                spaces, but thriving communities, we strive to leave behind a
                                legacy defined by unparalleled quality, unwavering integrity,
                                and exceptional craftsmanship.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Vision */}
            <section className="section-padding bg-slate-50 mb-8">
                <div className="new-container mx-auto ">
                    <div className="text-center lg:flex lg:flex-row-reverse lg:gap-10 md:px-5">
                        <motion.div
                            className="mb-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            variants={zoomUp}
                        >
                            <Image
                                src="/our-vision.svg"
                                alt="Our Vision"
                                width={160}
                                height={160}
                                className="w-32 h-32 lg:w-40 lg:h-40 inline-block"
                            />
                        </motion.div>
                        <motion.div
                            className="flex-1 lg:text-left "
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            variants={fadeUp}
                        >
                            <h2 className="text-3xl mb-4 header-text">Our Vision</h2>
                            <p className="text-base/7 text-gray-500">
                                Our values serve as the cornerstone of everything we do.
                                Integrity guides actions, Innovation fuels spirit,
                                Customer-centricity is our ethos, Collaboration defines our
                                approach, Excellence is our standard. These values not only
                                shape our projects but also define the relationship we build
                                with our clients, partners, communities and cultivate a life of
                                fulfillment for farmland owners.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding">
                <div className="new-container mx-auto">
                    <motion.h2
                        className="text-center text-3xl mb-8 header-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        variants={fadeUp}
                    >
                        Our Values
                    </motion.h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 ">
                        {[
                            {
                                title: "Sustainability",
                                text: "We are dedicated to crafting sustainable, energy-efficient spaces that foster long-term environmental stewardship and well-being.",
                                img: "/sustainability.svg",
                            },
                            {
                                title: "Integrity",
                                text: "We maintain the highest standards of transparency, trust, and ethical conduct throughout our operations, ensuring equitable treatment for all our stakeholders.",
                                img: "/integrity.svg",
                            },
                            {
                                title: "Community Focus",
                                text: "We work towards cultivating robust, thriving communities by promoting inclusivity, collaboration, and collective growth.",
                                img: "/community.svg",
                            },
                            {
                                title: "Excellence",
                                text: "We take immense pride in creating high-quality spaces that seamlessly blend functionality with aesthetic appeal, ensuring the enduring value of every project.",
                                img: "/excellence.svg",
                            },
                            {
                                title: "Collaboration",
                                text: "We collaborate closely with industry experts and local partners to develop meaningful and impactful solutions.",
                                img: "/collaboration.svg",
                            },
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white p-4 rounded-lg shadow-md"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                variants={fadeUp}
                            >
                                <h3 className="text-xl  mb-3 flex items-center">
                                    <Image
                                        src={value.img}
                                        alt={value.title}
                                        width={40}
                                        height={40}
                                        className="w-10 me-3"
                                    />{" "}
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">{value.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="section-padding bg-green-50">
                <div className="p-1 md:p-0 md:new-container mx-auto">
                    <div className="max-w-6xl mx-auto py-8">
                        <h2 className="text-4xl font-light text-center mb-2">
                            Our Leadership Team
                        </h2>
                        <p className="text-gray-600 text-center italic mb-16">
                            &ldquo;For unparalleled expertise in addressing your nature home needs,
                            our certified professionals are dedicated to providing the best
                            care and support.&rdquo;
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                            {[
                                {
                                    name: "Debasish Deb",
                                    role: "Founder & Chairman",
                                    img: "/peoples/debasish.jpg",
                                    text: "The Founder and Chairman of Delight Eco Farms Pvt. Ltd., Mr. Debasish Deb has spearheaded the completion of six plotted development projects across Bangalore and Hyderabad through his unwavering dedication and vision. Specializing in land banking and plotted developments, he brings over 20 years of extensive experience in the dynamic real estate industry. A highly regarded leader and philanthropist, he is recognized for his innovative approach and steadfast commitment to excellence.",
                                },
                                {
                                    name: "Rajesh Sardana",
                                    role: "Founder & MD",
                                    img: "/peoples/rajesh.jpg",
                                    text: "Mr. Rajesh Sardana possesses over 30 years of distinguished business acumen and leadership experience. As the founder of two IT companies, his core strengths lie in global outreach, financial planning, and strategic insight, enabling us to identify and capitalize on emerging real estate trends.",
                                },
                                {
                                    name: "Eshwar Raju",
                                    role: "Founder & MD",
                                    img: "/peoples/eshwar.jpg",
                                    text: "Mr. Eshwar Raju is a dynamic and accomplished young Director, holding a Bachelor's degree in Engineering from BIT Bangalore, graduating in 2006. With 20 years of experience in Marketing and Business Development, his core strength lies in his exceptional execution skills and strategic vision for identifying prime real estate opportunities, driving business growth, and scaling our operations to new heights.",
                                },
                                {
                                    name: "Raja Subramanyam",
                                    role: "Chief Financial Officer (CFO)",
                                    img: "/peoples/raja.jpg",
                                    text: "Mr. Raju Subramaniam holds a Master's degree in Finance and brings 15 years of experience in the real estate industry. With expertise in finance and legal matters, he is a valuable leader in the organization. Additionally, he has had successful tenures as the Head of Finance in Hyderabad, further showcasing his leadership and strategic acumen.",
                                },
                            ].map((leader, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex flex-col"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    variants={fadeUp}
                                >
                                    <div className="flex gap-8 mb-4">
                                        <Image
                                            src={leader.img}
                                            alt={leader.name}
                                            width={96}
                                            height={96}
                                            className="w-24 h-24 rounded-full object-cover"
                                        />
                                        <div>
                                            <h3 className="text-2xl text-app-green-1 font-medium">
                                                {leader.name}
                                            </h3>
                                            <p className="text-gray-600">{leader.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {leader.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
