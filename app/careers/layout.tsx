import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Delight Eco Farms | Join Our Sustainable Agriculture Team",
  description: "Join Delight Eco Farms team for careers in sustainable agriculture. Job opportunities in farmland development, marketing, sales, and video editing in Bangalore.",
  alternates: {
    canonical: "https://www.delightecofarms.com/careers",
  },
  openGraph: {
    title: "Careers at Delight Eco Farms | Join Our Sustainable Agriculture Team",
    description: "Join Delight Eco Farms team for careers in sustainable agriculture. Job opportunities in farmland development, marketing, sales, and video editing in Bangalore.",
    url: "https://www.delightecofarms.com/careers",
    images: ["/careers-img.jpg"],
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
