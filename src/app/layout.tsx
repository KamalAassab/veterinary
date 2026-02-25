import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import Providers from "./providers";
import "./globals.css";
import { Analytics, SpeedInsights } from "@/components/PerformanceMetrics";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drsalmakandil.com'),
  title: "Dr. Salma Kandil | Santé & Nature | Vétérinaire El Jadida",
  description: "Cabinet vétérinaire de référence à El Jadida par Dr. Salma Kandil. Soins avancés, chirurgie, et médecine préventive pour vos animaux de compagnie.",
  keywords: [
    "veterinaire",
    "cabinet veterinaire",
    "clinique veterinaire",
    "El Jadida",
    "Dr Kandil",
    "Dr Salma",
    "urgence veterinaire",
    "vaccination chat",
    "vaccination chien",
    "chirurgie veterinaire",
    "toilettage"
  ],
  authors: [{ name: "Dr. Salma Kandil" }],
  creator: "Dr. Salma Kandil",
  publisher: "Dr. Salma Kandil",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Dr. Salma Kandil | Santé & Nature | Vétérinaire El Jadida",
    description: "Cabinet vétérinaire d'excellence à El Jadida. Soins avancés pour vos compagnons.",
    url: "https://www.drsalmakandil.com",
    siteName: "Dr. Salma Kandil Veterinary Clinic",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Salma Kandil Veterinary Clinic El Jadida",
      },
    ],
    locale: "fr_MA",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Salma Kandil | Santé & Nature",
    description: "Cabinet vétérinaire d'excellence à El Jadida.",
    images: ["/og-image.jpg"],
  },
};

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} ${playfairDisplay.variable} bg-cream font-body text-deep-brown overflow-x-hidden selection:bg-primary/10`}
      >
        <div className="fixed inset-0 grainy-bg z-50"></div>
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
