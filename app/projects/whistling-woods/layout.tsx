import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whistling Woods | Farm Plots - Delight Eco Farms",
  description: "Whistling Woods 150-acre luxury farmland project in Ballupet, Sakleshpur. Features coffee, cardamom, and pepper plantations with forest trees. Buy farm plots near Sakleshpur today.",
  alternates: {
    canonical: "https://www.delightecofarms.com/farmlands/whistling-woods.html",
  },
  openGraph: {
    title: "Whistling Woods | Farm Plots - Delight Eco Farms",
    description: "Whistling Woods 150-acre luxury farmland project in Ballupet, Sakleshpur. Features coffee, cardamom, and pepper plantations with forest trees. Buy farm plots near Sakleshpur today.",
    url: "https://www.delightecofarms.com/farmlands/whistling-woods.html",
    images: ["/projects/whistlingwoods/ros1.jpg"],
  },
};

export default function WhistlingWoodsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
