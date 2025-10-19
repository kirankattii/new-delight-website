// app/rhythm-of-soul/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import SwiperWrapper from "@/components/SwiperWrapper";
import ProjectContact from "@/components/project-page/ProjectContact";
import HeroIntroSection from "@/components/project-page/HeroIntroSection";
import BoxContent from "@/components/BoxContent";
import ConfigurationAndPricing from "@/components/project-page/ConfigurationAndPricing";
import FaqSection from "@/components/FaqSection";
import { rhythmFaq } from "@/lib/constants";

// ✅ SEO Metadata
export const metadata: Metadata = {
	title: "Rhythm of Soul | Coffee Plantation - Delight Eco Farms",
	description:
		"Rhythm of Soul 50-acre premium farmland project in Sakleshpur, Karnataka. Features coffee and pepper plantations with luxury 4-acre resort. Buy farm houses in Sakleshpur today.",
	alternates: {
		canonical: "https://www.delightecofarms.com/projects/rhythm-of-soul",
	},
	openGraph: {
		title: "Rhythm of Soul | Coffee Plantation - Delight Eco Farms",
		description:
			"Rhythm of Soul 50-acre premium farmland project in Sakleshpur, Karnataka. Features coffee and pepper plantations with luxury 4-acre resort. Buy farm houses in Sakleshpur today.",
		url: "https://www.delightecofarms.com/projects/rhythm-of-soul",
		images: ["/projects/rhythm-of-soul/ros1.jpg"],
	},
};

// ✅ Swiper Images
const rosImages = [
	"/projects/rythamofsoul/ros1.jpg",
	"/projects/rythamofsoul/ros2.jpg",
	"/projects/rythamofsoul/ros3.jpg",
	"/projects/rythamofsoul/ros4.jpg",
	"/projects/rythamofsoul/ros5.jpg",
	"/projects/rythamofsoul/ros6.jpg",
];

// ✅ Amenities
const amenities = [
	{ icon: "/icons/amenties/1.svg", label: "Club Membership" },
	{ icon: "/icons/amenties/6.svg", label: "Rainwater Harvesting" },
	{ icon: "/icons/amenties/2.svg", label: "Fully Equipped Gym" },
	{ icon: "/icons/amenties/7.svg", label: "24/7 Security" },
	{ icon: "/icons/amenties/8.svg", label: "Children’s Play Area" },
	{ icon: "/icons/amenties/4.svg", label: "Club House" },
	{ icon: "/icons/amenties/5.svg", label: "CCTV Surveillance" },
	{ icon: "/icons/amenties/9.svg", label: "Landscaped Gardens" },
];

export default function RhythmOfSoulPage() {
	return (
		<main>
			{/* Hero Intro Section */}
			<HeroIntroSection
				backgroundImage="/projects/rythamofsoul/ros.jpg"
				title="Discover Rhythm of Soul"
				subtitle="A Premium Farmland Project in Sakleshpur"
				description={[
					"Rhythm of Soul is nestled within the **coffee plantation in Sakleshpur** on an awe-inspiring 50-acre plantation. With a perfect combination of rustic and luxury lifestyle, this exclusive farmland project is an **eco habitat** which takes pride in its sustainability and design which is friendly to the environment. Perfect for those who need a peaceful escape and remain in touch with the comforts of the modern world.",
					"The core of the project is a premium 4-acre resort, ideal for weekend getaways or long stays, in the midst of a beautiful green landscape within a **coffee plantation in Karnataka**.",
					"Out of farmlands, it is a live and sustainable community that combines the modern amenities with the naturalness and tranquillity of the environment, forming a real **eco habitat** for its residents."
				]}
				heroHeight="h-[400px] lg:h-[500px]"
				showTitle={true}
				highlightColor="bg-yellow-300"
			/>

			{/* Swiper Section */}
			<section className="px-4 lg:px-24 py-16">
				<div className="container mx-auto">
					<SwiperWrapper images={rosImages} />
				</div>
			</section>


			<section className="pt-6 md:py-16 md:pb-8 pb-8  bg-yellow-50 relative z-[10] lg:bg-transparent"	>
				<BoxContent
					title="About Rhythm of Soul"
					subtitle="Experience Coffee Plantations in Sakleshpur with a Modern Eco Habitat"
					description={[
						"Rhythm of Soul is a chance to enjoy the beauty of the **coffee plantation in Sakleshpur** and to stay in a modern environmentally friendly setting. Sakleshpur is already another name of scenic beauty and this project adds to the same experience by giving the opportunity of ownership of farmland and enjoying the benefits of a curated maintenance and sustainable practices.",
						"When you have a piece of land here, you are not investing in land, you are investing in the rhythms of the land, pepper vines climbing silver oaks, coffee blossoms trailing fragrance and community living in harmony with the biodiversity. In this case, owners of the farms gain long term value and professional management as Delight Eco Farms is supporting this project."
					]}
				/>
			</section>


			{/* Lifestyle + Video + Amenities */}
			<section className=" bg-slate-50 py-12 md:p-20 md:py-16">
				<div className="container mx-auto">
					<header className="text-center mb-8">
						<h2 className="text-2xl font-medium mb-2">
							Rhythm of Soul&apos;s Luxury Amenities & Features
						</h2>
						<p className="mb-8 text-4xl/snug text-app-green-1 header-text">
							For a lifestyle that is as comfortable, as it is serene
						</p>
					</header>

					{/* Embedded Video */}
					<div className="aspect-video mb-8">
						<iframe
							className="w-full h-full rounded-lg"
							src="https://www.youtube.com/embed/BA-y9Lw8UxE"
							title="Exploring the Serenity of Sakleshpur: A Journey Through Our 150 Acre Coffee Farmland Estate"
							loading="lazy"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						/>
					</div>

					{/* Why Choose Farm Plots in Ballupet? */}
					<h2 className="mb-4 text-3xl  text-center md:text-start">Why Choose Rhythm of Soul Coffee Estate in Karnataka?</h2>
					<p className="text-base/7 text-gray-600 text-center md:text-start mb-12  mx-auto">
						Rhythm of Soul Coffee Estate is a peaceful living with a balance of comfort, community and natural beauty. It caters to people who want to have a healthy living lifestyle.
					</p>

					{/* Amenities Grid */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
						{amenities.map((item, idx) => (
							<div key={idx} className="flex gap-4 items-center">
								<Image
									src={item.icon}
									alt={item.label}
									width={48}
									height={48}
									className="w-12 h-10 object-cover"
								/>
								<p className="flex-1">{item.label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="md:px-20 bg-gradient-to-b from-white to-[#F9FAFB]">

				{/* Configuration & Pricing */}
				<ConfigurationAndPricing
					sections={[
						{
							"eyebrow": "Configuration & Pricing",
							"title": "Coffee Plantation in Karnataka - Plot Sizes & Pricing",
							"content": [
								"Should you be seeking a land mid of coffee plantation in Karnataka, Rhythm of Soul will be presenting carefully proportioned plots that will accommodate various tastes. Starting with smaller plots that would suit a weekend villa, and up to large plots that would suit the working plantation, all the options are cost effective and offer quality.",
								"Clear pricing ensures transparency for buyers. All plots are well-equipped with access, irrigation services, and plantation services thus giving the owners the opportunity to concentrate on their vision without paying attention to fundamental needs. Whether your dream is a modern villa or simply a productive coffee estate, the project gives you a foundation that’s already prepared.",
							],
						},
						{
							"eyebrow": "Investment Growth",
							"title": "Eco Habitat with Long-Term Value & Returns",
							"content": [
								"The demand for coffee plantations in Karnataka has been steadily increasing, especially in regions like Sakleshpur. Purchasing a piece of land in Rhythm of Soul is not only a choice of lifestyle, but also a good financial step as follows.",
								(
									<>
										<ul className="list-disc pl-5 space-y-2">
											<li>Increased demand for plots near coffee plantations by people in cities.</li>
											<li>Good farm stay and ecotourism opportunities as tourists desire true experience.</li>
											<li>There are trends of constant land appreciation within the Sakleshpur corridor.</li>
										</ul>
									</>
								),
								"The mixture of lifestyle value and income generating potential is a distinction between farmland investments and conventional real estate. With professional management, even absentee owners can enjoy steady returns while their land value grows.",
								// (
								// 	<div key="roi-image" className="mt-4">
								// 		<p className="font-medium mb-2">Here’s a clearer bar chart comparing ROI metrics of Coffee Plantations vs Traditional Real Estate in Sakleshpur. If you invest in a coffee plantation in the Rhythm of Soul, it makes differences in returns, payback period, upside potential, and risk level much easier to see at a glance.</p>
								// 		<div className="relative w-full overflow-hidden rounded-xl ring-1 ring-gray-200 bg-white">
								// 			<div className="mx-auto w-full max-w-[680px] md:max-w-[720px] lg:max-w-[760px] p-3 md:p-4">
								// 				<Image
								// 					src="/projects/whistling-roi-graph.png"
								// 					alt="Sakleshpur Coffee Plantation ROI comparison graph"
								// 					width={1600}
								// 					height={900}
								// 					className="w-full h-auto object-contain"
								// 					priority={false}
								// 				/>
								// 			</div>
								// 		</div>
								// 	</div>
								// ),
							],
						},
						{
							"eyebrow": "Connectivity & Nearby Attractions",
							"title": "Coffee Plantations in Sakleshpur - Location & Accessibility",
							"content": [
								"Rhythm of Soul has the added attraction of accessibility. This project is easily accessible by road, and it is within the radius of Bengaluru, as well as provides convenience and privacy. The estate is close to:",
								(
									<>
										<ul className="list-disc pl-5 space-y-2">
											<li>Coffee and spice fields that demonstrate the wealth of the land.</li>
											<li>The Mallalli Falls, a beautiful natural attraction that attracts tourists all through the year.</li>
											<li>Jenukallu Gudda, one of the highest peaks in Karnataka and a heaven for trekkers.</li>
										</ul>
									</>
								),
								"Rhythm of Soul is the best blend between isolation and connectivity to those looking to visit coffee plantations in Sakleshpur.",
							],
						},
					]}
				/>
			</section>


			{/* Master Plan */}
			<section className="section-padding">
				<div className="new-container mx-auto flex flex-col lg:flex-row gap-8">
					<div className="lg:w-1/2 w-full">
						<Image
							src="/projects/rythamofsoul/plot.jpg"
							alt="Rhythm of Soul Master Plan"
							width={800}
							height={600}
							className="w-full h-auto rounded-lg"
						/>
					</div>
					<div className="flex-1 lg:mt-20">
						<h2 className="text-3xl mb-4 header-text">
							Discover Rhythm of Soul&apos;s Master Plan & Layout
						</h2>
						<p className="text-base/7 text-gray-500 mb-4">
							Here&apos;s what you&apos;ll be walking into
						</p>
						<a
							href="/pdfs/Rhythm-of-Soul.pdf"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Download Rhythm of Soul project brochure PDF"
							className="bg-app-green-1 text-white px-4 py-2 text-sm rounded hover:bg-app-green-2 transition-colors inline-flex items-center justify-center"
						>
							Download Brochure
						</a>
					</div>
				</div>
			</section>


			{/* Contact Section */}
			<ProjectContact />

			{/* Rhythm faq */}
			<FaqSection
				title="FAQs About Coffee Plantation Investments in Karnataka"
				items={rhythmFaq}
				columns={2}
				icon="plus"
				className="bg-gray-50"
			/>
		</main>
	);
}
