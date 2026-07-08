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
  title: "Basis | Systematic Trading Algorithms",
  description:
    "Basis develops systematic trading algorithms with explicit signal logic, risk controls, and observable execution infrastructure.",
  openGraph: {
    title: "Basis | Systematic Trading Algorithms",
    description:
      "Research-driven execution systems with inspectable logic and risk controls.",
    siteName: "Basis",
    type: "website",
  },
  icons: {
    icon: "/basis-logo.png",
    apple: "/basis-logo.png",
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
