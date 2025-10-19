// app/layout.tsx
import type { Metadata } from "next";
import {
  Nunito_Sans,
  Playfair_Display,
  Inter,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AOSProvider from "@/components/AOSProvider";
import { Phone, MessageCircle } from "lucide-react";
import { getNonce } from "@/lib/nonce";

// ✅ SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://www.delightecofarms.com'),
  title:
    "Farmland in Sakleshpur | Managed Eco Plots - Delight",
  description:
    "Delight Eco Farms offers managed farmland in Sakleshpur with coffee estates, organic farming, and gated plots near Bangalore. Sustainable agriculture investment opportunities.",
  keywords: [
    "Managed Farmland Sakleshpur",
    "Farmland Near Bangalore",
    "Eco-Friendly Farms",
    "Buy Farmland Karnataka",
    "Coffee Estate Sakleshpur",
    "Organic Farming Land Sakleshpur",
    "Farm Plots With Clubhouse",
    "Gated Community Farmland",
    "Sustainable Farming Karnataka",
    "Land For Sale Sakleshpur",
    "Sakleshpur Farm Investment",
    "Hasiru RoS Project",
    "Weekend Farmland",
    "Affordable Farmland Karnataka",
    "Nature-Based Living",
    "Eco Habitat Sakleshpur",
    "Prime Farmland Location",
    "Rainwater Harvesting Farmland",
    "Buy Agricultural Land Sakleshpur",
  ],
  authors: [{ name: "Delight Group" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.delightecofarms.com/",
  },
  openGraph: {
    title: "Farmland in Sakleshpur | Managed Eco Plots - Delight",
    description:
      "Live sustainably at Delight Eco Farms. Invest in eco-friendly managed farmland, coffee estates, and weekend getaways near Bangalore.",
    url: "https://www.delightecofarms.com/",
    type: "website",
    images: [
      {
        url: "https://delightecofarms.com/imgs/og.jpg",
        width: 1200,
        height: 630,
        alt: "Delight Eco Farms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delight Eco Farms - Sustainable Farmland in Sakleshpur",
    description:
      "Invest in nature with Delight Eco Farms. Managed farmland, organic estates, and gated eco-plots near Bangalore.",
    images: ["https://www.delightecofarms.com/assets/twitter-card.jpg"],
  },
  icons: {
    icon: "/imgs/browser.png",
  },
  verification: {
    google: "UcGBTvThraGxni9cf30-JjZwd61BNqzAAC8oShRI-1A",
  },
};

// ✅ Fonts
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Get nonce from headers (will be set by middleware)
  const nonce = await getNonce();

  return (
    <html lang="en">
      <head>
        {/* Nonce meta tag for client-side access */}
        <meta name="nonce" content={nonce} />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4MN5C6YGZV"
        />
        <Script id="ga-init" strategy="afterInteractive" nonce={nonce}>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4MN5C6YGZV');
            gtag('config', 'AW-17042618766');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive" nonce={nonce}>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N2BSD96B');
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M9QZ6KXS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>


        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive" nonce={nonce}>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1039017678108043');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Freshworks Chat */}
        <Script
          src="https://in.fw-cdn.com/32517250/1390315.js"
          strategy="afterInteractive"
          nonce={nonce}
        />

        {/* Service Worker Registration (production only) */}
        <Script id="sw-registration" strategy="afterInteractive" nonce={nonce}>
          {`
            if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
              var isProdHost = /delightecofarms\.com$/.test(window.location.hostname);
              if (isProdHost) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            }
          `}
        </Script>

        {/* Performance Monitoring */}
        <Script id="performance-monitoring" strategy="afterInteractive" nonce={nonce}>
          {`
            // Performance monitoring
            if (typeof window !== 'undefined') {
              // Measure page load performance
              window.addEventListener('load', function() {
                const navigation = performance.getEntriesByType('navigation')[0];
                if (navigation) {
                  const metrics = {
                    'dns-lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
                    'tcp-connection': navigation.connectEnd - navigation.connectStart,
                    'request-response': navigation.responseEnd - navigation.requestStart,
                    'dom-processing': navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                    'total-time': navigation.loadEventEnd - navigation.navigationStart,
                  };
                  
                  // Send to analytics
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'page_load_performance', {
                      custom_parameter: metrics,
                      event_category: 'Performance',
                    });
                  }
                }
              });

              // Measure Core Web Vitals
              if ('PerformanceObserver' in window) {
                // LCP
                new PerformanceObserver((list) => {
                  const entries = list.getEntries();
                  const lastEntry = entries[entries.length - 1];
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'lcp', {
                      value: Math.round(lastEntry.startTime),
                      event_category: 'Web Vitals',
                    });
                  }
                }).observe({ entryTypes: ['largest-contentful-paint'] });

                // FID
                new PerformanceObserver((list) => {
                  const entries = list.getEntries();
                  entries.forEach((entry) => {
                    if (typeof gtag !== 'undefined') {
                      gtag('event', 'fid', {
                        value: Math.round(entry.processingStart - entry.startTime),
                        event_category: 'Web Vitals',
                      });
                    }
                  });
                }).observe({ entryTypes: ['first-input'] });

                // CLS
                let clsValue = 0;
                new PerformanceObserver((list) => {
                  const entries = list.getEntries();
                  entries.forEach((entry) => {
                    if (!entry.hadRecentInput) {
                      clsValue += entry.value;
                    }
                  });
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'cls', {
                      value: Math.round(clsValue * 1000),
                      event_category: 'Web Vitals',
                    });
                  }
                }).observe({ entryTypes: ['layout-shift'] });
              }
            }
          `}
        </Script>
      </head>
      <body
        className={`${nunitoSans.variable} ${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N2BSD96B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <AOSProvider>
          <Navbar />
          {children}
          <Footer />

          {/* Floating WhatsApp & Call Buttons */}
          <div className="fixed bottom-3 right-3 flex flex-col gap-3 z-50">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919606949005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp for farmland inquiries"
              className="flex items-center gap-2 bg-app-green-1 text-white px-4 py-2 rounded-full shadow-lg hover:bg-app-green-2 transition"
            >
              <MessageCircle size={18} />
              {/* WhatsApp */}
            </a>

            {/* Call Button */}
            <a
              href="tel:+919606949005"
              aria-label="Call us for farmland consultation"
              className="flex items-center gap-2 bg-app-green-1 text-white px-4 py-2 rounded-full shadow-lg hover:bg-app-green-2 transition"
            >
              <Phone size={18} />
              {/* Call */}
            </a>
          </div>
        </AOSProvider>

        {/* Facebook Pixel noscript */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1039017678108043&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
