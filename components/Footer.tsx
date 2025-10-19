// app/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-app-green-1 to-app-green-3 text-white py-8 px-2 md:p-8 relative">
      <div className="container mx-auto">
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-8 lg:mb-6">
              <Link href="/" aria-label="Delight Eco Farms Home">
                <Image
                  src="/logo-white.svg"
                  alt="Delight Eco Farms Logo"
                  width={150}
                  height={48}
                  priority
                />
              </Link>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 mb-6">
              <div className="w-9 shrink-0">
                <Image
                  src="/icons/address-icon.svg"
                  alt="Address Icon"
                  width={36}
                  height={36}
                />
              </div>
              <address className="not-italic font-medium flex-1">
                #330, 2nd Floor, 27th Main Road, Sector 2, HSR Layout, Bengaluru,
                Karnataka, 560102.
              </address>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-10 md:mb-12">
            <h3 className="text-2xl mb-4 md:mb-6 lg:mt-4">Contact</h3>

            {/* Phone */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 shrink-0">
                <Image
                  src="/icons/mobile-icon.svg"
                  alt="Phone Icon"
                  width={36}
                  height={36}
                />
              </div>
              <div className="font-medium flex-1">
                <Link href="tel:+919743022220" className="block hover:underline" aria-label="Call us at +91 9743022220">
                  +91 9743022220
                </Link>
                <Link href="tel:+919901605566" className="block hover:underline" aria-label="Call us at +91 9901605566">
                  +91 9901605566
                </Link>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 shrink-0">
                <Image
                  src="/icons/mail-icon.svg"
                  alt="Email Icon"
                  width={36}
                  height={36}
                />
              </div>
              <div className="font-medium flex-1">
                <Link
                  href="mailto:info@delightecofarms.com"
                  className="block hover:underline"
                  aria-label="Email us at info@delightecofarms.com for general inquiries"
                >
                  info@delightecofarms.com
                </Link>
                <Link
                  href="mailto:sales@delightecofarms.com"
                  className="block hover:underline"
                  aria-label="Email us at sales@delightecofarms.com for sales inquiries"
                >
                  sales@delightecofarms.com
                </Link>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-20 md:mb-12">
            <h3 className="text-2xl mb-4 md:mb-6 lg:mt-4">Connect</h3>
            <div className="flex gap-2">
              {[
                {
                  href: "https://www.facebook.com/people/Delight-Eco-Farms/61555623857176/",
                  src: "/icons/facebook-icon.svg",
                  alt: "Follow Delight Eco Farms on Facebook",
                },
                {
                  href: "https://x.com/delightecofarms",
                  src: "/icons/x-icon.svg",
                  alt: "Follow Delight Eco Farms on X (Twitter)",
                },
                {
                  href: "https://www.instagram.com/delight_eco_farms/",
                  src: "/icons/instagram-icon.svg",
                  alt: "Follow Delight Eco Farms on Instagram",
                },
                {
                  href: "https://www.youtube.com/@DelightEcoFarms",
                  src: "/icons/youtube-icon.svg",
                  alt: "Subscribe to Delight Eco Farms YouTube channel",
                },
                {
                  href: "https://in.linkedin.com/in/delight-eco-farms-b5b3472b1",
                  src: "/icons/linkedin-icon.svg",
                  alt: "Connect with Delight Eco Farms on LinkedIn",
                },
              ].map(({ href, src, alt }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={alt}
                  className="rounded-full transition-transform hover:scale-110"
                >
                  <Image src={src} alt={alt} width={40} height={40} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-sm bg-app-green-3 text-center py-4 text-white absolute bottom-0 left-0 right-0 w-full">
        © {new Date().getFullYear()} Delight Eco Farms Private Limited. All
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
