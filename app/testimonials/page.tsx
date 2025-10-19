"use client";

import TestimonialsSwiper from "@/components/TestimonialSwiper";
import VideoTestimonials from "@/components/VideoTestimonials";
import Image from "next/image";




const testimonials = [
    {
        text: "I recently invested in this farmland and the process was smooth and hassle-free. The team was supportive, the property is well-maintained, and the rates are great value for money. Highly recommend!",
        name: "Murali H",
        role: "Happy Client",
        image: "/peoples/1.jpg",
    },
    {
        text: "From consultation to purchase, the process was seamless. The luxury farm plots here are some of the best near Bangalore!",
        name: "Prakash Kumar",
        role: "Happy Client",
        image: "/peoples/2.jpg",
    },
    {
        text: "If you're looking for countryside living with luxury, Delight Eco Farms is perfect. The plots are great for both relaxation and investment.",
        name: "Raghavendra Prakash Rao",
        role: "Happy Client",
        image: "/peoples/3.jpg",
    },
    {
        text: "I’m thrilled with my purchase at Bellevue Farms. The location is convenient, the views are stunning, and it’s the perfect weekend getaway for my family.",
        name: "Zeena Crasta",
        role: "Happy Client",
        image: "/peoples/4.jpg",
    },
    {
        text: "Owning farmland here has been a dream come true. The views are breathtaking, and the amenities make it feel like the perfect blend of nature and luxury.",
        name: "Krithika K",
        role: "Happy Client",
        image: "/peoples/5.jpg",
    },
    {
        text: "Buying farmland here has been wonderful. Beautiful views, peaceful environment, and a smooth purchase process—I’m glad I made this decision.",
        name: "Vasu Kiran",
        role: "Happy Client",
        image: "/peoples/6.jpg",
    },
    {
        text: "Delight Eco Farms exceeded my expectations. From the visit to the purchase and ongoing management, everything has been excellent. I’m very happy with my investment.",
        name: "Vishnu Jeethu",
        role: "Happy Client",
        image: "/peoples/7.jpg",
    },
    {
        text: "Purchasing farmland here was a blissful experience. The process was smooth, the team supportive, and the property is well-maintained with great facilities.",
        name: "Anu Robin",
        role: "Happy Client",
        image: "/peoples/8.jpg",
    },
    {
        text: "We bought this farmland last year and the experience has been smooth throughout. The property is well-managed, facilities are excellent, and the scenic drive makes it even better.",
        name: "Vivek Jayan",
        role: "Happy Client",
        image: "/peoples/9.jpg",
    },
    {
        text: "The perfect mix of modern amenities and rural charm! Delight Eco Farms gave me the peaceful getaway I always wanted, just a short drive from Bangalore.",
        name: "Rukmini Karanam",
        role: "Happy Client",
        image: "/peoples/10.jpg",
    },
    {
        text: "Extremely satisfied with the journey gone through till now, Delight staff and management are in general very humble and professional in communication, hope to have the best experience between the woods..",
        name: "Venkatesh Babu",
        role: "Happy Client",
        image: "/peoples/person.png",
    },
    {
        text: "Perfect place to invest for better returns.. Very genuine set of people.. Mr Avinash is so supportive and gives a clear picture for the doubts we have.. Overall I would give 10/10.. Cheers",
        name: "Joseph Winston",
        role: "Happy Client",
        image: "/peoples/12.jpeg",
    },
    {
        text: "Delight Eco Farms offers an exceptional project concept that caters perfectly to the needs of both investors and NRIs. The planning is thoughtful, sustainable, and future-ready, reflecting a deep understanding of modern aspirations.",
        fullText: "Delight Eco Farms offers an exceptional project concept that caters perfectly to the needs of both investors and NRIs. The planning is thoughtful, sustainable, and future-ready, reflecting a deep understanding of modern aspirations. The top management is courteous, approachable, and professional, ensuring that the entire process—from inquiry to plot registration—was seamless and efficient. My experience with them was smooth, transparent, and completed within a remarkably short time. A special thanks to Mr. Eashwar and Mr. Rajagopal, whose warmth, professionalism, and personal involvement left a lasting impression. Their values and commitment shine through every step of the journey. I would highly recommend Delight Eco Farms to anyone seeking a trustworthy, eco-friendly, and meaningful investment.",
        name: "Prof Sudhir C V",
        role: "Happy Client",
        image: "/peoples/11.jpeg",
    },
];

export default function TestimonialsIntro() {
    return (
        <div>
            <section className="bg-yellow-50 overflow-hidden">

                <div className="new-container mx-auto md:h-screen mt-10 lg:mt-0">
                    <div className="flex py-5 lg:py-12 lg:my-12 flex-col-reverse items-center lg:flex-row p-4">
                        {/* Left Content */}
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <h1 className="custom-font-1 text-4xl mb-4 mt-4 md:mt-10">
                                Hear It from Those Who&apos;ve <br className="hidden md:block" />
                                Experienced the Difference
                            </h1>

                            <p className="text-gray-600 text-sm">
                                We’ve had the privilege of serving nature-inspired buyers,
                                delivering tailored solutions that align with <br />
                                their unique visions. It’s been a joy to exceed expectations and
                                create memorable experiences for our delighted customers. Now,
                                we’re excited to share their stories with you.
                            </p>

                            <div className="border-t border-black my-4"></div>

                            <div>
                                <Image
                                    src="/testimonials-chat.png"
                                    alt="Customer testimonials illustration"
                                    width={400}
                                    height={120}
                                    className="lg:-ml-2 inline-block"
                                />
                            </div>
                        </div>

                        {/* Right Image */}
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <Image
                                src="/testimonials-bg.png"
                                alt="Testimonials background"
                                width={600}
                                height={400}
                                className="mb-4 lg:mb-0"
                            />
                        </div>
                    </div>
                </div>

            </section>

            <section className="new-container mt-12 overflow-hidden">
                <div
                    className="text-base text-center mb-4 text-gray-600 px-8"
                    data-aos="fade-up"
                >
                    INSIGHTED STRAIGHT FROM THE DECISION MAKERS
                </div>

                <div className="text-center " data-aos="fade-up">
                    <Image
                        src="/icons/quote.svg"
                        alt="Divider"
                        width={80}
                        height={80}
                        className="w-14 mx-auto"
                    />
                </div>

                <TestimonialsSwiper testimonials={testimonials} />

                <div className="section-padding overflow-hidden">
                    <VideoTestimonials />

                </div>
            </section>

        </div>
    );
}
