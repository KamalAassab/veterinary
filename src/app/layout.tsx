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
  title: "Dr. Salma Kandil | Meilleur Vétérinaire El Jadida | Urgences & Soins",
  description: "Cabinet vétérinaire de référence à El Jadida dirigé par Dr. Salma Kandil. Consultation, urgence vétérinaire, chirurgie, et médecine préventive pour vos animaux.",
  keywords: [
    "veterinaire el jadida",
    "meilleur veterinaire el jadida",
    "clinique veterinaire el jadida",
    "cabinet veterinaire el jadida",
    "urgence veterinaire el jadida",
    "veterinaire de garde el jadida",
    "vaccination chat el jadida",
    "vaccination chien el jadida",
    "chirurgie veterinaire",
    "toilettage animaux el jadida",
    "Dr Kandil",
    "Dr Salma",
    "animaux de compagnie maroc"
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
    title: "Dr. Salma Kandil | Meilleur Vétérinaire El Jadida",
    description: "Cabinet vétérinaire d'excellence à El Jadida. Soins avancés pour vos compagnons.",
    url: "https://www.drsalmakandil.com",
    siteName: "Cabinet Vétérinaire Dr. Salma Kandil El Jadida",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clinique Vétérinaire Dr. Salma Kandil à El Jadida",
      },
    ],
    locale: "fr_MA",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Salma Kandil | Vétérinaire El Jadida",
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: 'Cabinet Vétérinaire Dr. Salma Kandil',
    image: 'https://www.drsalmakandil.com/og-image.jpg',
    '@id': 'https://www.drsalmakandil.com',
    url: 'https://www.drsalmakandil.com',
    telephone: '+212689018305',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Villa N°45, Avenue Ibn Badis, À côté de Marjane Market (Acima)',
      addressLocality: 'El Jadida',
      postalCode: '24000',
      addressCountry: 'MA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.2427,
      longitude: -8.5135
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '09:00',
        closes: '19:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/drsalmakandil'
    ]
  };

  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
