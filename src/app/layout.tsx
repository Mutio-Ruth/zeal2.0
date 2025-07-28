// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zealfabrication.com"), // Replace with your actual domain
  title: {
    default: "Zeal Fabrication – Precision & Excellence in Engineering",
    template: "%s | Zeal Fabrication",
  },
  description:
    "Zeal Fabrication is a premier provider of custom metalwork, fabrication, and structural solutions in Kenya. We deliver quality, innovation, and integrity in every project.",
  keywords: [
    "zeal fabrication",
    "metal fabrication kenya",
    "custom welding",
    "industrial fabrication",
    "engineering services kenya",
  ],
  authors: [{ name: "Zeal Fabrication" }],
  creator: "Zeal Fabrication",
  publisher: "Zeal Fabrication",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace if needed
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://zealfabrication.com",
    siteName: "Zeal Fabrication",
    title: "Zeal Fabrication – Precision & Excellence in Engineering",
    description:
      "Custom fabrication and engineering solutions designed for durability and performance. Based in Kenya, serving industrial, commercial, and residential clients.",
    images: [
      {
        url: "/og-image.jpg", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Zeal Fabrication workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeal Fabrication – Engineering Excellence",
    description:
      "Explore Zeal Fabrication’s expert welding and metalwork services – tailored for quality and built to last.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/82245a89d3.js"
          crossOrigin="anonymous"
          async
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-white`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
