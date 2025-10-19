"use client";

import { useState, useRef, FormEvent } from "react";
import Image from "next/image";

const ContactPage = () => {
    const [loading, setLoading] = useState(false);
    const contactFormRef = useRef<HTMLFormElement | null>(null);
    const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

    // Validation patterns
    const patterns = {
        fullName: /^[a-zA-Z\s]{2,50}$/,
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        mobileNumber: /^[0-9]{10}$/,
    };

    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        mobileNumber: "",
        message: "",
    });

    const validateField = (name: string, value: string) => {
        switch (name) {
            case "fullName":
            case "email":
            case "mobileNumber":
                if (!patterns[name].test(value.trim())) {
                    setErrors((prev) => ({
                        ...prev,
                        [name]:
                            name === "fullName"
                                ? "Please enter a valid name (2-50 characters, letters only)"
                                : name === "email"
                                    ? "Please enter a valid email address"
                                    : "Please enter a valid 10-digit phone number",
                    }));
                    return false;
                } else {
                    setErrors((prev) => ({ ...prev, [name]: "" }));
                    return true;
                }
            case "message":
                if (!value.trim()) {
                    setErrors((prev) => ({ ...prev, message: "Message is required" }));
                    return false;
                } else {
                    setErrors((prev) => ({ ...prev, message: "" }));
                    return true;
                }
            default:
                return true;
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!contactFormRef.current) return;

        const formData = new FormData(contactFormRef.current);

        // Validate fields
        let valid = true;
        for (const [key, value] of formData.entries()) {
            if (!validateField(key as string, value as string)) valid = false;
        }

        if (!valid) return;

        try {
            setLoading(true);
            setAlert(null);

            const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                setAlert({
                    type: "error",
                    message: result.message || "Form submission failed. Please try again.",
                });
            } else {
                setAlert({
                    type: "success",
                    message: result.message || "Your message has been sent successfully.",
                });
                contactFormRef.current.reset();
                setErrors({
                    fullName: "",
                    email: "",
                    mobileNumber: "",
                    message: "",
                });
            }
        } catch (error: unknown) {
            setAlert({
                type: "error",
                message: (error as Error).message || "Something went wrong. Please try again later.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            {/* Header Section */}
            <section className="bg-cover bg-center contact-header overflow-hidden">
                <div
                    className="text-white px-5 pt-26 md:pt-0 h-[520px] lg:h-[400px] flex flex-col lg:items-center"
                    data-aos="fade-up"
                    data-aos-duration="600"
                >
                    <h1 className="text-4xl lg:text-center lg:text-5xl lg:mx-auto header-text mb-2 pt-6 lg:mt-40">
                        Get in Touch: <br className="lg:hidden" /> We’re Here to Assist You
                    </h1>
                    <p className="lg:text-xl">
                        Kindly fill out the form, and we will reach out to you shortly.
                    </p>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-black/10 z-10"></div>
                </div>

            </section>

            {/* Contact Info & Form Section */}
            <section className="section-padding bg-slate-100 overflow-hidden">
                <div className="new-container mx-auto">
                    <h2
                        className="text-center  text-3xl text-app-green-1  mb-10"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-offset="-0"
                    >
                        Contact Information
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left: Contact Details */}
                        <div className="lg:order-1">
                            {/* Phone */}
                            <div
                                className="flex items-center gap-4 bg-white p-4 rounded mb-8"
                                data-aos="fade-right"
                                data-aos-delay="100"
                            >
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <Image src="/icons/phone.svg" alt="Phone" width={48} height={48} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-600 text-sm mb-1">Phone Number</p>
                                    <div className="font-medium">
                                        <a href="tel:+919743022220" className="me-2">
                                            +91 9743022220
                                        </a>
                                        <br />
                                        <a href="tel:+919901605566">+91 9901605566</a>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div
                                className="flex items-center gap-4 bg-white p-4 rounded mb-8"
                                data-aos="fade-right"
                                data-aos-delay="200"
                            >
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <Image src="/icons/mail.svg" alt="Email" width={48} height={48} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-600 text-sm mb-1">Email Address</p>
                                    <div className="font-medium">
                                        <a href="mailto:info@delightecofarms.com" aria-label="Email us at info@delightecofarms.com for general inquiries">
                                            info@delightecofarms.com
                                        </a>
                                        <br />
                                        <a href="mailto:sales@delightecofarms.com" aria-label="Email us at sales@delightecofarms.com for sales inquiries">
                                            sales@delightecofarms.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Location */}
                            <div
                                className="flex items-center gap-4 bg-white p-4 rounded mb-8"
                                data-aos="fade-right"
                                data-aos-delay="300"
                            >
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <Image src="/icons/address.svg" alt="Location" width={48} height={48} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-600 text-sm mb-1">Location</p>
                                    <div className="font-medium">
                                        #330, 2nd Floor, 27th Main Road, Sector 2, HSR Layout, Bengaluru,
                                        Karnataka, 560102.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="lg:order-2">
                            <div className="bg-white p-8 rounded-lg" data-aos="fade-left" data-aos-delay="400">
                                <h2 className="text-2xl mb-4">Send us a Message</h2>
                                <p className="text-gray-600 mb-6">
                                    Have questions about our projects or want to learn more? Our
                                    team is here to assist you every step of the way. Drop us a
                                    message, and we&apos;ll get back to you shortly.
                                </p>

                                {alert && (
                                    <div
                                        className={`${alert.type === "success"
                                                ? "bg-green-100 border border-green-400 text-green-700"
                                                : "bg-red-100 border border-red-400 text-red-700"
                                            } px-4 py-3 rounded relative mb-4`}
                                    >
                                        <strong className="font-bold">
                                            {alert.type === "success" ? "Success!" : "Error!"}
                                        </strong>
                                        <span className="block sm:inline"> {alert.message}</span>
                                    </div>
                                )}

                                <form ref={contactFormRef} className="space-y-4" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                placeholder="Full Name*"
                                                required
                                                className={`w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-app-green-1 ${errors.fullName ? "border-red-500" : ""
                                                    }`}
                                            />
                                            {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}
                                        </div>

                                        <div>
                                            <input
                                                type="tel"
                                                id="mobileNumber"
                                                name="mobileNumber"
                                                placeholder="Phone Number*"
                                                required
                                                className={`w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-app-green-1 ${errors.mobileNumber ? "border-red-500" : ""
                                                    }`}
                                            />
                                            {errors.mobileNumber && <span className="text-red-500 text-sm">{errors.mobileNumber}</span>}
                                        </div>

                                        <div>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Email*"
                                                required
                                                className={`w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-app-green-1 ${errors.email ? "border-red-500" : ""
                                                    }`}
                                            />
                                            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                                        </div>

                                        <div>
                                            <input
                                                type="text"
                                                id="projectName"
                                                name="project"
                                                placeholder="Project Name"
                                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-app-green-1"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Message*"
                                            rows={4}
                                            required
                                            className={`w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-app-green-1 ${errors.message ? "border-red-500" : ""
                                                }`}
                                        ></textarea>
                                        {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="bg-app-green-1 text-white px-8 py-3 rounded hover:bg-app-green-2 transition-colors"
                                    >
                                        {loading ? (
                                            <span className="flex items-center justify-center">
                                                <svg
                                                    className="animate-spin h-5 w-5 mr-3 inline"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                        fill="none"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding overflow-hidden">
                <div className="new-container mx-auto">
                    <h2 className="text-center text-2xl md:text-3xl text-app-green-1  mb-4">
                        Find Us on Google Maps
                    </h2>
                    <p className="text-center text-gray-600 text-sm mb-8">
                        Google Maps will guide you straight to us. Click on the map to get
                        started!
                    </p>

                    <div className="w-full h-[400px] rounded-lg overflow-hidden">
                        <iframe
                            title="Delight Eco Farms Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.982310007408!2d77.64960757460292!3d12.908858416251672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15007716446d%3A0x3224ed1d5bfa026f!2sDelight%20Eco%20Farms%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1734530654458!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>


        </main>
    );
};

export default ContactPage;
