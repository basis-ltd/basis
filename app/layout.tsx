import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
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
    icon: "https://res.cloudinary.com/nishimweprince/image/upload/v1783477324/basis/basis-logo_lqxfu0.png",
    apple: "https://res.cloudinary.com/nishimweprince/image/upload/v1783477324/basis/basis-logo_lqxfu0.png",
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
      className={`${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
