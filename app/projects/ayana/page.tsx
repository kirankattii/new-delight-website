// app/ayana/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import SwiperWrapper from "@/components/SwiperWrapper";
import ProjectContact from "@/components/project-page/ProjectContact";
import ConfigurationAndPricing from "@/components/project-page/ConfigurationAndPricing";
import HeroIntroSection from "@/components/project-page/HeroIntroSection";
import FaqSection from "@/components/FaqSection";
import { AccordionItem } from "@/components/ui/Accordion";
import { aryanFaq } from "@/lib/constants";
import BoxContent from "@/components/BoxContent";

// ✅ SEO Metadata
export const metadata: Metadata = {
	title: "Farm Land for Sale in Karnataka | Delight Eco Farms",
	description:
		"Explore Delight Eco Farms, Ayana Farmlands in Sakleshpur. Own sustainable agriculture land for sale in Karnataka amidst coffee estates and eco-living.",
	alternates: {
		canonical: "https://www.delightecofarms.com/farmlands/ayana.html",
	},
	openGraph: {
		title: "Farm Land for Sale in Karnataka | Delight Eco Farms",
		description:
			"Explore Delight Eco Farms, Ayana Farmlands in Sakleshpur. Own sustainable agriculture land for sale in Karnataka amidst coffee estates and eco-living.",
		url: "https://www.delightecofarms.com/farmlands/ayana.html",
		images: ["/projects/ayana/ayana1.jpg"],
	},
};

const ayanaFaq: AccordionItem[] = aryanFaq

// ✅ Farm images
const ayanaImages = [
	"/projects/ayana/ayana1.jpg",
	"/projects/ayana/ayana2.jpg",
	"/projects/ayana/ayana3.jpg",
	"/projects/ayana/ayana4.jpg",
	"/projects/ayana/ayana5.jpg",
	"/projects/ayana/ayana6.jpg",
];

export default function AyanaPage() {
	return (
		<main>
			<HeroIntroSection
				backgroundImage="/projects/ayana/ayana.jpg"
				title="Ayana - Tucked in the Heart of Nature"
				subtitle="Estate Farmland in Sakleshpur"
				description={[
					"Ayana is a unique estate **farmland for sale in Karnataka,** situated amidst the serene, mist-covered beauty of the Western Ghats. It is surrounded by silver oak trees, pepper vines, and thriving robusta coffee plantations, which naturally combine to create the perfect place to relax and enjoy nature, privacy, and tranquillity. For those seeking a **coffee estate for sale in Sakleshpur** or a serene **farm stay in Sakleshpur**, this is the ideal location.",
					"Thoughtfully designed to blend traditional Malnad architecture with modern comforts, Ayana features stone-paved driveways, rain-washed courtyards, and panoramic hill views. Every element is rooted in the natural rhythm of the land, giving you an immersive experience of eco-luxury living. If you want to buy a **farmhouse for sale in Sakleshpur**, a villa with heritage touch, or it is just to own **agricultural land for sale near Sakleshpur**, Ayana can make it happen.",
					"Ayana is the ideal compromise between accessibility and privacy for those who are interested in buying **farm plots near Bangalore or farmland near Karnataka.**",
					"This is not just a property-it is an experience. A soulful retreat where modern comforts meet the rhythm of the wild. A space to pause, breathe, and simply be."
				]}
				heroHeight="h-[500px] lg:h-[500px]"
				showTitle={false}
				highlightColor="bg-yellow-300"
			/>

			{/* Swiper Section */}
			<section className="py-14 md:px-24 md:p-16">
				<div className="container mx-auto">
					<SwiperWrapper images={ayanaImages} />
				</div>
			</section>


			<section className="pt-6 md:py-16 pb-8  bg-yellow-50 relative z-[10] lg:bg-transparent"	>
				<BoxContent
					title="About Ayana Farmlands"
					subtitle=""
						description={[
					"Ayana farmlands are planned with assurance of a harmonious blend of nature and individual pleasure. These lands are the epitome of sustainable estate living, situated in the area of Sakleshpur, which has long been widely regarded as a biodiversity area. All the acres are covered with the fragrance of coffee blossoms, coldness of oak and jackfruit tree. Investing here is enjoying a lifestyle based on genuine things and an appreciation of the environment.",
					"The estate provides plots that are ready to be built for those who have a dream of building their own retreat. You can either come up with a heritage-style villa, a rustic holiday home or you can have a farm-to-table arrangement where you can cultivate your own food. The estate has well-laid gravel roads, irrigation facilities and 24/7 security which means that the practical needs are addressed without interfering with the natural beauty of the land.",
					"What sets Ayana apart is its focus on long-term value. Sakleshpur is increasingly popular with those looking for **farmland for sale in Karnataka** because it combines excellent weather, natural beauty, and strong connectivity. Owning land here is about immediate enjoyment, securing an asset that grows in value while offering personal rewards every season."
					]}
				/>
			</section>



			{/* Lifestyle + Video + Highlights */}
			<section className=" bg-slate-50 py-12 md:p-20 md:py-16">
				<div className="container mx-auto">
					<header className="text-center mb-8">
						<h2 className="text-2xl font-medium mb-2">Ayana&apos;s Premium Amenities & Features</h2>
						<p className="mb-8 text-3xl md:text-4xl/snug text-app-green-1 header-text">
							For a lifestyle that is as comfortable, as it is serene
						</p>
					</header>

					{/* Embedded Video */}
					<div className="aspect-video mb-8">
						<iframe
							className="w-full h-full rounded-lg"
							src="https://www.youtube.com/embed/DMjR3OEdoSI"
							title="Exploring the Serenity of Sakleshpur: A Journey Through Our 150 Acre Coffee Farmland Estate"
							loading="lazy"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						/>
					</div>

					{/* Highlights */}
					<h2 className="mb-4 text-3xl font-bold">
						Project Highlights
					</h2>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">
						{/* Amenities */}
						<div>
							<h3 className="text-xl font-semibold mb-2">🌿 Amenities</h3>
							<ul className="list-disc pl-6 space-y-1 text-gray-700">
								<li>Children&apos;s Play Area</li>
								<li>Swimming Pool</li>
								<li>Yoga & Meditation Decks</li>
								<li>Open Air Gym</li>
								<li>Nature Trail Walking Tracks</li>
								<li>Indoor Games</li>
								<li>Fishing & Lakeside Decks</li>
							</ul>
						</div>

						{/* Maintenance */}
						<div>
							<h3 className="text-xl font-semibold mb-2">🛠️ Maintenance Overview</h3>
							<ul className="list-disc pl-6 space-y-1 text-gray-700">
								<li>24x7 Professional Security Services</li>
								<li>360° High-Definition Surveillance System</li>
								<li>Comprehensive Crop Care & Inputs</li>
								<li>Well-Maintained Gravel Roads & Pathways</li>
								<li>4 Borewells with Sprinkler Irrigation Network</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Configuration & Pricing */}
			<section className="md:px-20 bg-gradient-to-b from-white to-[#F9FAFB]">
			<ConfigurationAndPricing />
			</section>

			{/* Master Plan */}
			<section className="section-padding">
				<div className="new-container mx-auto flex flex-col lg:flex-row gap-8">
					<div className="lg:w-1/2 w-full">
						<Image
							src="/projects/ayana/ayana-master-plan.jpg"
							alt="Ayana farmland master plan"
							width={800}
							height={600}
							className="w-full h-auto rounded-lg"
						/>
					</div>
					<div className="flex-1 lg:mt-20">
						<h2 className="text-3xl mb-4 header-text">
							Explore Ayana&apos;s Master Plan & Layout
						</h2>
						<p className="text-base/7 text-gray-500 mb-4">
							Here&apos;s what you&apos;ll be walking into
						</p>
						<a
							href="/pdfs/ayana-brochure.pdf"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Download Ayana project brochure PDF"
							className="bg-app-green-1 text-white px-4 py-2 text-sm rounded hover:bg-app-green-2 transition-colors inline-flex items-center justify-center"
						>
							Download Brochure
						</a>
					</div>
				</div>
			</section>

			{/* Contact */}
			<ProjectContact />

			{/* Faq Section */}

			<FaqSection
			title="Frequently Asked Questions"
			items={ayanaFaq}
			columns={2} // single-column layout
			icon="plus"
			className="bg-gray-50"
		/>
			
		</main>
	);
}
