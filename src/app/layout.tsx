import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  keywords: [
    "Dhruv Thakor",
    "IT Support Halifax",
    "Healthcare technology",
    "Nova Scotia Health",
    "Clinical Information System",
    "Oracle Health Cerner support",
    "Service desk",
    "Internetworking Dalhousie",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_CA",
    firstName: "Dhruv",
    lastName: "Thakor",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0f0e" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Support Consultant",
  worksFor: { "@type": "Organization", name: "Nova Scotia Health" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Halifax",
    addressRegion: "NS",
    addressCountry: "CA",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Dalhousie University" },
    { "@type": "CollegeOrUniversity", name: "Charusat University" },
  ],
  knowsAbout: [
    "IT support",
    "Service desk operations",
    "Clinical Information Systems",
    "Networking",
    "Microsoft 365",
    "Active Directory",
  ],
  sameAs: [site.linkedin, site.github].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
