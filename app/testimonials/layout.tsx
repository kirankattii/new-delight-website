import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Client Reviews - Delight Eco Farms",
  description: "Authentic customer testimonials and reviews from Delight Eco Farms clients. Discover why our farmland investment projects are trusted by hundreds of satisfied customers.",
  alternates: {
    canonical: "https://www.delightecofarms.com/testimonials",
  },
  openGraph: {
    title: "Testimonials | Client Reviews - Delight Eco Farms",
    description: "Authentic customer testimonials and reviews from Delight Eco Farms clients. Discover why our farmland investment projects are trusted by hundreds of satisfied customers.",
    url: "https://www.delightecofarms.com/testimonials",
    images: ["/testimonials-bg.png"],
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
