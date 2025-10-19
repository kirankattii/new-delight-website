import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sustainable Farmland - Delight Eco Farms",
  description: "Delight Eco Farms - Leading farmland development company with 10+ years experience in sustainable agriculture and eco-friendly real estate projects near Bangalore.",
  alternates: {
    canonical: "https://www.delightecofarms.com/about",
  },
  openGraph: {
    title: "About Us | Sustainable Farmland - Delight Eco Farms",
    description: "Delight Eco Farms - Leading farmland development company with 10+ years experience in sustainable agriculture and eco-friendly real estate projects near Bangalore.",
    url: "https://www.delightecofarms.com/about",
    images: ["/about-us.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
