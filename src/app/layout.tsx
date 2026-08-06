import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Cinzel } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { site } from "@/config/site";
import { themeStyle } from "@/lib/theme";

const display = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const ui = Barlow_Condensed({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.url),
  title: {
    default: site.seo.title,
    template: `%s | ${site.brand.fullName}`,
  },
  description: site.seo.description,
  keywords: [
    "barbershop Bellmawr NJ",
    "barber Bellmawr",
    "men's haircut Bellmawr",
    "kids haircut Bellmawr",
    "beard trim Bellmawr",
    "GrandmasterKutz",
  ],
  applicationName: site.brand.fullName,
  category: "Barbershop",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/brand-mark.png",
  },
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    siteName: site.brand.fullName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-card.png",
        width: 1200,
        height: 630,
        alt: `${site.brand.fullName} — Bellmawr, New Jersey`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: ["/og-card.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: site.brand.fullName,
  url: site.seo.url,
  description: site.seo.description,
  image: `${site.seo.url}/og-card.png`,
  telephone: site.contact.phone,
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "805 Creek Rd",
    addressLocality: "Bellmawr",
    addressRegion: "NJ",
    postalCode: "08031",
    addressCountry: "US",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "139",
    bestRating: "5",
  },
  sameAs: [
    "https://www.instagram.com/grandmasterkutz/",
    "https://www.facebook.com/GrandmasterKutz/",
    site.booking.url,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${ui.variable} ${body.variable}`}
      style={themeStyle(site.theme)}
    >
      <body suppressHydrationWarning className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
