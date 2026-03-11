import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SuperHyre — Smarter Hiring for Modern Organizations",
  description: "SuperHyre helps organizations find, attract, and hire exceptional talent faster. AI-powered recruitment solutions tailored for growth.",
  keywords: "hiring, recruitment, talent acquisition, HR, staffing, jobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ background: '#0A0A0F', color: '#F0F0FF' }}>
        <Navbar />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
