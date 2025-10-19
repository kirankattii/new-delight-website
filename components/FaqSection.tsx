// "use client";

// import React from "react";
// import Accordion, { type AccordionItem } from "./ui/Accordion";

// const faqItems: AccordionItem[] = [
//   {
//     title: "What is Passionfroot?",
//     content:
//       "Passionfroot helps brands work with creators efficiently — from discovery to brief, timelines, and deliverables — all in one workflow.",
//   },
//   {
//     title: "What is the cost of using Passionfroot?",
//     content:
//       "You can start for free. Paid plans unlock advanced workflow, collaboration and reporting features.",
//   },
//   {
//     title: "What types of businesses can use Passionfroot?",
//     content:
//       "D2C brands, SaaS companies, agencies and marketplaces use Passionfroot to manage creator activations.",
//   },
//   {
//     title: "How are payments managed?",
//     content:
//       "Track budgets per campaign and export summaries for finance. Payment automation is available on higher plans.",
//   },
//   {
//     title: "How does Passionfroot work?",
//     content:
//       "Create a brief, discover creators, align on deliverables and timelines, then track progress and results in one place.",
//   },
//   {
//     title: "Can I run multiple campaigns at once?",
//     content:
//       "Yes. Use separate projects to organize different campaigns, products, or markets and manage them in parallel.",
//   },
//   {
//     title: "What platforms can I use Passionfroot for?",
//     content:
//       "You can run collaborations across YouTube, Instagram, TikTok, X, podcasts, newsletters and more.",
//   },
//   {
//     title: "How do I get started with Passionfroot?",
//     content:
//       "Sign up, add your brand details and first campaign brief. Invite teammates and start shortlisting creators.",
//   },
//   {
//     title: "How do I discover the right creators for my brand?",
//     content:
//       "Use filters like topic, audience size and location. Shortlist creators and track conversations centrally.",
//   },
// ];

// export default function FaqSection() {
//   return (
//     <section className="py-8 md:py-14 bg-white" aria-labelledby="faq-heading">
//       <div className="container mx-auto">
//         <h2
//           id="faq-heading"
//           className="text-3xl md:text-4xl/snug text-gray-900 mb-8 md:mb-10 header-text"
//         >
//           Frequently Asked Questions
//         </h2>

//         <Accordion
//           items={faqItems}
//           columns={2}
//           icon="check"
//           className=""
//           itemClassName="border-b border-gray-200"
//         />
//       </div>
//     </section>
//   );
// }




"use client";

import React from "react";
import Accordion, { type AccordionItem } from "./ui/Accordion";

interface FaqSectionProps {
  title?: string; // optional heading (default: "Frequently Asked Questions")
  items?: AccordionItem[];
  columns?: number;
  icon?: string;
  className?: string;
  itemClassName?: string;
}

export default function FaqSection({
  title = "Frequently Asked Questions",
  items = [],
  columns = 2,
  icon = "arrow",
  className = "",
  itemClassName = "",
}: FaqSectionProps) {
  return (
	<section className={`py-8 md:py-14 bg-white ${className}`} aria-labelledby="faq-heading">
	  <div className="container mx-auto">
		<h2
		  id="faq-heading"
		  className="text-3xl mx-auto text-center md:text-4xl/snug text-gray-900 mb-8 md:mb-10 header-text"
		>
		  {title}
		</h2>

		<Accordion
		  items={items}
		  columns={columns}
		  icon={icon}
		  className=""
		  itemClassName={itemClassName}
		/>
	  </div>
	</section>
  );
}
