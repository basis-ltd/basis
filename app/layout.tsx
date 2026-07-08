import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Basis — Automated Trading Algorithms for Forex, Crypto & Meme Coins",
  description:
    "Basis builds and open-sources automated trading systems across forex, crypto, and meme coins — multi-timeframe technical analysis, real-time execution, and risk-managed automation. Explore the code on GitHub.",
  openGraph: {
    title: "Basis — Automated Trading Algorithms",
    description:
      "Forex, crypto, and meme-coin trading systems, engineered and open-sourced.",
    siteName: "Basis",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
