"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type ContentItem = string | ReactNode;

type Section = {
  eyebrow?: string;
  title: string;
  tone?: "neutral" | "accent";
  content: ContentItem[];
};

interface ConfigurationAndPricingProps {
  heading?: { eyebrow?: string; title?: string; subtitle?: string };
  sections?: Section[];
  className?: string;
}



export default function ConfigurationAndPricing({ heading, sections, className }: ConfigurationAndPricingProps) {
  const mergedSections: Section[] = sections ?? [
	{
	  eyebrow: "Configuration & Pricing",
	  title: "Agriculture Land for Sale - Plot Sizes & Pricing",
	  content: [
		"As long as you have been seeking agricultural land for sale in Karnataka, Ayana has strategically taken an area to offer you plots of various sizes matching various needs.",
		"Plots in Ayana are available in different sizes, where one can have small size plots befitting a small farm villa or a bigger one that can have a large plantation. The prices have been made in such a way that they are affordable without affecting the quality or sustainability.",
		"Each plot is developed with proper access, water supply, and plantation support, so buyers can focus on building their vision rather than starting from scratch.",
		"You can imagine yourself growing coffee, establishing a homestay, or just spending your weekends in the hills, Ayana has an arrangement that suits your plans. Clear pricing guarantees that all investments are safe and maintenance services are handled by professional personages so your land is still maintained when you are not there.",
	  ],
	},
	{
	  eyebrow: "Investment Growth",
	  title: "Luxury Estate Plots Near Bangalore with Long-Term Value",
	  content: [
		"Sakleshpur is not just a scenic escape; it is also a prospective investment centre. With more people seeking eco-friendly getaways and farm retreats, the demand for farm plots near Karnataka has grown steadily. Just a few hours from the Bangalore city, Ayana positions itself perfectly for those who want both convenience and privacy.",
		(
		  <>
			<p className="font-medium">Here’s why owning land here is a strong long-term move:</p>
			<ul className="list-disc pl-5 space-y-2">
			  <li>Demand for farmland in the South Karnataka corridor is consistently rising, spurred by urban buyers looking for organic and leisure-driven living.</li>
			  <li>The reason why Ayana is the perfect location to construct farm stays or homestays is due to eco-tourism potential which attracts travellers seeking authenticity, as opposed to using resorts.</li>
			  <li>The potential ROI is greater than the traditional residential real estate since the farmlands are a combination of both the lifestyle benefits and the actual agricultural returns.</li>
			</ul>
		  </>
		),
		(
		  <div key="roi-image" className="mt-4">
			<div className="relative w-full overflow-hidden rounded-xl ring-1 ring-gray-200 bg-white">
			  <div className="mx-auto w-full max-w-[680px] md:max-w-[720px] lg:max-w-[760px] p-3 md:p-4">
			  <Image
				src="/projects/treditional-real-estate-graph.png"
				alt="Sakleshpur Real Estate ROI comparison graph"
				width={1600}
				height={900}
				className="w-full h-auto object-contain"
				priority={false}
			  />
			  </div>
			</div>
		  </div>
		),
	  ],
	},
	{
	  tone: "accent",
	  title: "Sakleshpur Real Estate ROI: Farmland vs Traditional",
	  content: [
		"In other words, buying here is about weekends of peace, securing a smart investment that appreciates while giving you regular personal use.",
	  ],
	},
	{
	  eyebrow: "Connectivity & Nearby Attractions",
	  title: "Close to nature, perfectly connected",
	  content: [
		"To the urban population, the estate is an ideal Friday-Sunday drive, not too far but close enough to be convenient but very distant to a city noise.",
		(
		  <>
			<p className="font-medium">The investment is enhanced by nearby attractions:</p>
			<ul className="list-disc pl-5 space-y-2">
			  <li><b>Mallalli Falls</b>: It is an amazing waterfall that attracts nature lovers throughout the year.</li>
			  <li><b>Jenukallu Gudda</b>: It is one of the tallest mountains in Karnataka, a good trekking spot with an excellent view.</li>
			  <li><b>Plantation</b>: Coffee and spice plantations reflect the agricultural prosperity of the land.</li>
			</ul>
		  </>
		),
		"Ayana is also an ideal location to be considered by people exploring opportunities in farm stay in Sakleshpur or eco-tourism.",
		"If you are looking for Sakleshpur farmland for sale, a coffee estate for sale in Sakleshpur, or curated farm plots in Sakleshpur that bring together nature, comfort, and investment value, Ayana is your answer.",
	  ],
	},
  ];

  const headline = heading ?? {
	eyebrow: "Configuration & Pricing",
	title: "Curated estate plots in Sakleshpur",
	subtitle: "Thoughtfully sized plots, clear pricing, and professional maintenance",
  };

  return (
	<section className={`relative  py-12 md:py-18 px-4 ${className ?? ""}`}>
	  <div className="  mx-auto">
		{/* Heading */}
		<motion.div
		  initial={{ opacity: 0, y: 20 }}
		  whileInView={{ opacity: 1, y: 0 }}
		  viewport={{ once: true, amount: 0.4 }}
		  transition={{ duration: 0.6 }}
		  className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
		>
		  {headline.eyebrow && (
			<span className="inline-flex items-center gap-2 rounded-full bg-white text-app-green-1 px-4 py-1.5 text-lg md:text-xl font-semibold border border-app-green-1/30">
			  {headline.eyebrow}
			</span>
		  )}
		  {headline.title && (
			<h2 className="mt-4 text-3xl md:text-4xl font-semibold header-text">
			  {headline.title}
			</h2>
		  )}
		  {headline.subtitle && (
			<p className="mt-3 text-gray-600 leading-relaxed">
			  {headline.subtitle}
			</p>
		  )}
		</motion.div>

		{/* Cards */}
		<motion.div
		 
		  className="grid grid-cols-1 gap-6 md:gap-8 -mt-4"
		>
		  {mergedSections.map((s, idx) => {
			const isAccent = s.tone === "accent";
			return (
			  <motion.article
				key={idx}
				// whileHover={{ y: -4 }}
				className={
				  isAccent
					? "relative rounded-2xl bg-app-green-1 text-white p-6 md:p-8 shadow-sm border border-app-green-1"
					: "relative rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-gray-200"
				}
			  >
				

				{s.eyebrow && (
				  <div className={isAccent ? "text-white/90 text-lg md:text-xl font-semibold" : "text-app-green-1 text-lg md:text-xl font-semibold"}>
					{s.eyebrow}
				  </div>
				)}
				<h3 className={isAccent ? "mt-2 text-2xl md:text-3xl font-bold" : "mt-2 text-2xl md:text-3xl font-bold text-gray-900"}>
				  {s.title}
				</h3>
				<div className={isAccent ? "mt-4 space-y-5 leading-relaxed text-white/95" : "mt-4 space-y-5 leading-relaxed text-gray-700"}>
				  {s.content.map((c, i) => (
					typeof c === "string" ? (
					  <p key={i}>{c}</p>
					) : (
					  <div key={i}>{c}</div>
					)
				  ))}
				</div>

				{/* Subtle floating accent dot */}
				<motion.span
				  aria-hidden
				  className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-app-green-1"
					
				/>

				{/* Soft radial glow accent (decorative, non-blocking) */}
				<motion.div
				  aria-hidden
				  className="pointer-events-none absolute inset-0 rounded-2xl"
				 
				  style={{
					background:
					  isAccent
						? "radial-gradient(1200px 200px at 80% -20%, rgba(255,255,255,0.06), transparent)"
						: "radial-gradient(1200px 200px at 80% -20%, rgba(16,185,129,0.08), transparent)",
				  }}
				/>
			  </motion.article>
			);
		  })}
		</motion.div>
	  </div>
	</section>
  );
}


