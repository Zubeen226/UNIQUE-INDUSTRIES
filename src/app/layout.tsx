import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Unique Industries | Precision CNC Machining & Mechanical Components",
    template: "%s | Unique Industries",
  },
  description:
    "Unique Industries manufactures high-precision CNC turned components, custom jigs & fixtures, tooling, and heavy mechanical component assemblies in Ghaziabad, India.",
  keywords: [
    "Precision CNC Machining",
    "CNC Turning Components",
    "Custom Jigs & Fixtures",
    "Mechanical Fabrication",
    "Industrial Machine Components",
    "Tooling & Fixtures",
    "Precision Engineering India",
    "Unique Industries",
  ],
  authors: [{ name: "Unique Industries" }],
  creator: "Unique Industries",
  publisher: "Unique Industries",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Unique Industries | Precision CNC Machining & Mechanical Components",
    description:
      "Unique Industries manufactures high-precision CNC turned components, custom jigs & fixtures, tooling, and heavy mechanical component assemblies.",
    url: "https://www.uniqueindustries.co.in",
    siteName: "Unique Industries",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Manufacturer",
    "name": "Unique Industries",
    "alternateName": "Unique Precision Engineering",
    "description":
      "Manufacturer of precision CNC turned components, custom jigs & fixtures, tooling, and mechanical assemblies.",
    "url": "https://www.uniqueindustries.co.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Khasra No.- 367/368, Near By Madhyamik Vidyalya, Surya Vihar, Mahiuddinpur, Hisali MuradNagar",
      "addressLocality": "Ghaziabad",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201206",
      "addressCountry": "IN",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9312745516",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": "en",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-full font-sans antialiased bg-white text-primary flex flex-col">
        {children}
      </body>
    </html>
  );
}
