import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Farmland Investment - Delight Eco Farms",
  description: "Contact Delight Eco Farms for farmland investment opportunities. Expert guidance on coffee estates, managed farmland, and sustainable agriculture projects near Bangalore.",
  alternates: {
    canonical: "https://www.delightecofarms.com/contact",
  },
  openGraph: {
    title: "Contact Us | Farmland Investment - Delight Eco Farms",
    description: "Contact Delight Eco Farms for farmland investment opportunities. Expert guidance on coffee estates, managed farmland, and sustainable agriculture projects near Bangalore.",
    url: "https://www.delightecofarms.com/contact",
    images: ["/contact-img.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
